import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import connectToDatabase from '@/lib/mongodb'
import User from '@/models/User'

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json()

    // Validate input
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Connect to database
    await connectToDatabase()

    // Check if user already exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return NextResponse.json(
        { message: 'User with this email already exists' },
        { status: 409 }
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role: 'user',
      createdAt: new Date(),
      lastLogin: new Date(),
    })

    await newUser.save()

    // Return success response without sensitive data
    return NextResponse.json(
      {
        message: 'User registered successfully',
        user: {
          id: (newUser._id as { toString(): string }).toString(),
          name: newUser.name,
          email: newUser.email,
          role: newUser.role,
        },
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { message: 'An error occurred during registration' },
      { status: 500 }
    )
  }
} 