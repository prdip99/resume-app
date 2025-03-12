import mongoose, { Document, Model, Schema } from 'mongoose'
import { IUser } from './User'
import { CheckIcon } from '@heroicons/react/20/solid'

// Define interfaces for resume sections
interface IEducation {
  institution: string;
  degree: string;
  fieldOfStudy?: string;
  startDate?: Date;
  endDate?: Date;
  current?: boolean;
  description?: string;
  location?: string;
  gpa?: string;
  achievements?: string[];
}

interface IExperience {
  company: string;
  position: string;
  location?: string;
  startDate?: Date;
  endDate?: Date;
  current?: boolean;
  description?: string;
  achievements?: string[];
  technologies?: string[];
}

interface ISkill {
  name: string;
  level?: number;
  category?: string;
}

interface IProject {
  title: string;
  description?: string;
  link?: string;
  technologies?: string[];
  startDate?: Date;
  endDate?: Date;
  current?: boolean;
  achievements?: string[];
}

interface ICertification {
  name: string;
  issuer?: string;
  date?: Date;
  expiryDate?: Date;
  credentialID?: string;
  credentialURL?: string;
}

interface ILanguage {
  name: string;
  proficiency?: 'Elementary' | 'Limited Working' | 'Professional Working' | 'Full Professional' | 'Native/Bilingual';
}

interface ICustomSection {
  title: string;
  content: any;
}

interface ICollaborator {
  user: mongoose.Types.ObjectId | IUser;
  permission: 'view' | 'edit' | 'admin';
  addedAt?: Date;
}

interface IAISuggestion {
  section?: string;
  suggestion?: string;
  applied?: boolean;
}

interface IViewHistory {
  date?: Date;
  count?: number;
}

// Main Resume interface
export interface IResume extends Document {
  user: mongoose.Types.ObjectId | IUser;
  name: string;
  personalInfo: {
    fullName: string;
    email: string;
    phone?: string;
    address?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    country?: string;
    title?: string;
    summary?: string;
    website?: string;
    linkedin?: string;
    github?: string;
    portfolioURL?: string;
    photo?: string;
    socialLinks?: Map<string, string>;
  };
  education: IEducation[];
  experience: IExperience[];
  skills: ISkill[];
  projects: IProject[];
  certifications: ICertification[];
  languages: ILanguage[];
  customSections: ICustomSection[];
  template: {
    id: string;
    name?: string;
    category?: 'Classic' | 'Modern' | 'Minimalist' | 'Creative' | 'Tech' | 'Academic';
  };
  customization: {
    primaryColor?: string;
    secondaryColor?: string;
    fontSize?: string;
    fontFamily?: string;
    spacing?: string;
    layout?: string;
    showPhoto?: boolean;
    customCSS?: string;
  };
  analytics: {
    views?: number;
    downloads?: number;
    shares?: number;
    lastViewed?: Date;
    viewHistory?: IViewHistory[];
  };
  sharingSettings: {
    isPublic?: boolean;
    publicURL?: string;
    qrCode?: string;
    password?: string;
    expiryDate?: Date;
  };
  collaborators: ICollaborator[];
  aiMetrics: {
    score?: number;
    suggestions?: IAISuggestion[];
    keywords?: string[];
    currentScore?: number;
  };
  sectionOrder?: string[];
  active?: boolean;
}

// Define sub-schemas for resume sections
const educationSchema = new Schema<IEducation>(
  {
    institution: {
      type: String,
      required: [true, 'Institution name is required'],
    },
    degree: {
      type: String,
      required: [true, 'Degree is required'],
    },
    fieldOfStudy: {
      type: String,
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
    current: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
    },
    location: {
      type: String,
    },
    gpa: {
      type: String,
    },
    achievements: {
      type: [String],
    },
  },
  { _id: true, timestamps: false }
)

const experienceSchema = new Schema<IExperience>(
  {
    company: {
      type: String,
      required: [true, 'Company name is required'],
    },
    position: {
      type: String,
      required: [true, 'Position is required'],
    },
    location: {
      type: String,
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
    current: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
    },
    achievements: {
      type: [String],
    },
    technologies: {
      type: [String],
    },
  },
  { _id: true, timestamps: false }
)

const skillSchema = new Schema<ISkill>(
  {
    name: {
      type: String,
      required: [true, 'Skill name is required'],
    },
    level: {
      type: Number,
      min: 0,
      max: 100,
      default: 0,
    },
    category: {
      type: String,
    },
  },
  { _id: true, timestamps: false }
)

const projectSchema = new Schema<IProject>(
  {
    title: {
      type: String,
      required: [true, 'Project title is required'],
    },
    description: {
      type: String,
    },
    link: {
      type: String,
    },
    technologies: {
      type: [String],
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
    current: {
      type: Boolean,
      default: false,
    },
    achievements: {
      type: [String],
    },
  },
  { _id: true, timestamps: false }
)

const certificationSchema = new Schema<ICertification>(
  {
    name: {
      type: String,
      required: [true, 'Certification name is required'],
    },
    issuer: {
      type: String,
    },
    date: {
      type: Date,
    },
    expiryDate: {
      type: Date,
    },
    credentialID: {
      type: String,
    },
    credentialURL: {
      type: String,
    },
  },
  { _id: true, timestamps: false }
)

const languageSchema = new Schema<ILanguage>(
  {
    name: {
      type: String,
      required: [true, 'Language name is required'],
    },
    proficiency: {
      type: String,
      enum: ['Elementary', 'Limited Working', 'Professional Working', 'Full Professional', 'Native/Bilingual'],
      default: 'Professional Working',
    },
  },
  { _id: true, timestamps: false }
)

// Main Resume schema
const resumeSchema = new Schema<IResume>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User ID is required'],
    },
    name: {
      type: String,
      required: [true, 'Resume name is required'],
      trim: true,
    },
    personalInfo: {
      fullName: {
        type: String,
        required: [true, 'Full name is required'],
      },
      email: {
        type: String,
        required: [true, 'Email is required'],
      },
      phone: {
        type: String,
      },
      address: {
        type: String,
      },
      city: {
        type: String,
      },
      state: {
        type: String,
      },
      zipCode: {
        type: String,
      },
      country: {
        type: String,
      },
      title: {
        type: String,
      },
      summary: {
        type: String,
      },
      website: {
        type: String,
      },
      linkedin: {
        type: String,
      },
      github: {
        type: String,
      },
      portfolioURL: {
        type: String,
      },
      photo: {
        type: String,
      },
      socialLinks: {
        type: Map,
        of: String,
      },
    },
    education: [educationSchema],
    experience: [experienceSchema],
    skills: [skillSchema],
    projects: [projectSchema],
    certifications: [certificationSchema],
    languages: [languageSchema],
    customSections: [
      {
        title: {
          type: String,
          required: [true, 'Section title is required'],
        },
        content: {
          type: Schema.Types.Mixed,
        },
      },
    ],
    template: {
      id: {
        type: String,
        required: [true, 'Template ID is required'],
      },
      name: {
        type: String,
      },
      category: {
        type: String,
        enum: ['Classic', 'Modern', 'Minimalist', 'Creative', 'Tech', 'Academic'],
        default: 'Modern',
      },
    },
    customization: {
      primaryColor: {
        type: String,
        default: '#0073ff',
      },
      secondaryColor: {
        type: String,
        default: '#0ea5e9',
      },
      fontSize: {
        type: String,
        default: 'medium',
      },
      fontFamily: {
        type: String,
        default: 'Inter',
      },
      spacing: {
        type: String,
        default: 'normal',
      },
      layout: {
        type: String,
        default: 'standard',
      },
      showPhoto: {
        type: Boolean,
        default: true,
      },
      customCSS: {
        type: String,
      },
    },
    analytics: {
      views: {
        type: Number,
        default: 0,
      },
      downloads: {
        type: Number,
        default: 0,
      },
      shares: {
        type: Number,
        default: 0,
      },
      lastViewed: {
        type: Date,
      },
      viewHistory: [
        {
          date: {
            type: Date,
          },
          count: {
            type: Number,
          },
        },
      ],
    },
    sharingSettings: {
      isPublic: {
        type: Boolean,
        default: false,
      },
      publicURL: {
        type: String,
      },
      qrCode: {
        type: String,
      },
      password: {
        type: String,
      },
      expiryDate: {
        type: Date,
      },
    },
    collaborators: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
        permission: {
          type: String,
          enum: ['view', 'edit', 'admin'],
          default: 'view',
        },
        addedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    aiMetrics: {
      score: {
        type: Number,
        min: 0,
        max: 100,
      },
      suggestions: [
        {
          section: {
            type: String,
          },
          suggestion: {
            type: String,
          },
          applied: {
            type: Boolean,
            default: false,
          },
        },
      ],
      keywords: [String],
      currentScore: {
        type: Number,
        min: 0,
        max: 100,
      },
    },
    sectionOrder: {
      type: [String],
      default: [
        'summary',
        'experience',
        'education',
        'skills',
        'projects',
        'certifications',
        'languages',
      ],
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
)

// Create and export the Resume model
const Resume: Model<IResume> = mongoose.models.Resume || mongoose.model<IResume>('Resume', resumeSchema)

export default Resume 