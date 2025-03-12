import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/authOptions'
import connectToDatabase from '@/lib/mongodb'
import Resume from '@/models/Resume'

export async function GET() {
  try {
    // Get the session
    const session = await getServerSession(authOptions)

    // Check if user is authenticated
    if (!session || !session.user) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Connect to database
    await connectToDatabase()

    // Get user ID from session
    const userId = session.user.id

    // Fetch user's resumes
    const resumes = await Resume.find({ user: userId })
      .sort({ updatedAt: -1 })
      .select('name personalInfo.fullName template customization analytics updatedAt')
      .lean()

    // Return resumes
    return NextResponse.json({
      message: 'Resumes fetched successfully',
      resumes,
    })
  } catch (error) {
    console.error('Error fetching resumes:', error)
    return NextResponse.json(
      { message: 'An error occurred while fetching resumes' },
      { status: 500 }
    )
  }
} 