import mongoose, { Document, Model, Schema } from 'mongoose'
import bcrypt from 'bcryptjs'

// Define the User interface
export interface IUser extends Document {
  name: string;
  email: string;
  password?: string;
  phone?: string;
  profilePicture?: string;
  role: 'user' | 'admin';
  subscription: {
    plan: 'free' | 'premium' | 'pro';
    startDate?: Date;
    endDate?: Date;
    status: 'active' | 'inactive' | 'cancelled' | 'trial';
  };
  provider: 'credentials' | 'google' | 'mobile';
  providerId?: string;
  emailVerified: boolean;
  phoneVerified: boolean;
  lastLogin?: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

// Define the User schema
const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, 'Please provide your name'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Please provide your email'],
      unique: true,
      lowercase: true,
      trim: true,
      validate: {
        validator: function (v: string) {
          return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v)
        },
        message: 'Please enter a valid email',
      },
    },
    password: {
      type: String,
      minlength: [8, 'Password must be at least 8 characters long'],
      select: false, // Don't include password in query results by default
    },
    phone: {
      type: String,
      trim: true,
    },
    profilePicture: {
      type: String,
      default: '',
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    subscription: {
      plan: {
        type: String,
        enum: ['free', 'premium', 'pro'],
        default: 'free',
      },
      startDate: {
        type: Date,
      },
      endDate: {
        type: Date,
      },
      status: {
        type: String,
        enum: ['active', 'inactive', 'cancelled', 'trial'],
        default: 'active',
      },
    },
    provider: {
      type: String,
      enum: ['credentials', 'google', 'mobile'],
      default: 'credentials',
    },
    providerId: {
      type: String,
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    phoneVerified: {
      type: Boolean,
      default: false,
    },
    lastLogin: {
      type: Date,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt timestamps
  }
)

// Hash password before saving
userSchema.pre('save', async function (this: IUser, next: any) {
  // Only hash the password if it has been modified (or is new)
  if (!this.isModified('password') || !this.password) return next()

  try {
    // Generate a salt
    const salt = await bcrypt.genSalt(10)
    // Hash the password along with our new salt
    this.password = await bcrypt.hash(this.password, salt)
    next()
  } catch (error: any) {
    next(error)
  }
})

// Method to compare password for login
userSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  if (!this.password) return false
  return await bcrypt.compare(candidatePassword, this.password)
}

// Create the User model if it doesn't exist, otherwise use the existing one
const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', userSchema)

export default User 