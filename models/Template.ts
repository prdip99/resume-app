import mongoose, { Document, Model, Schema } from 'mongoose'

// Define interfaces for template sections
interface ITemplateSection {
  id: string;
  name: string;
  type: 'header' | 'summary' | 'experience' | 'education' | 'skills' | 'projects' | 'certifications' | 'languages' | 'custom';
  isRequired: boolean;
  defaultVisible: boolean;
  order: number;
  customProperties?: Record<string, any>;
}

interface ILayoutOption {
  id: string;
  name: string;
  description?: string;
  previewImage?: string;
}

interface IColorScheme {
  id: string;
  name: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor?: string;
  backgroundColor?: string;
  textColor?: string;
}

interface IFontOption {
  id: string;
  name: string;
  fontFamily: string;
  category: 'serif' | 'sans-serif' | 'monospace' | 'display' | 'handwriting';
}

// Main Template interface
export interface ITemplate extends Document {
  name: string;
  description: string;
  category: 'Classic' | 'Modern' | 'Minimalist' | 'Creative' | 'Tech' | 'Academic';
  previewImage: string;
  thumbnailImage: string;
  sections: ITemplateSection[];
  layouts: ILayoutOption[];
  colorSchemes: IColorScheme[];
  fontOptions: IFontOption[];
  defaultLayout: string;
  defaultColorScheme: string;
  defaultFont: string;
  cssTemplate: string;
  htmlTemplate: string;
  isActive: boolean;
  isPremium: boolean;
  createdBy?: mongoose.Types.ObjectId;
  popularity: number;
  tags: string[];
  metadata?: Record<string, any>;
}

// Template schema
const templateSchema = new Schema<ITemplate>(
  {
    name: {
      type: String,
      required: [true, 'Template name is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Template description is required'],
    },
    category: {
      type: String,
      enum: ['Classic', 'Modern', 'Minimalist', 'Creative', 'Tech', 'Academic'],
      required: [true, 'Template category is required'],
    },
    previewImage: {
      type: String,
      required: [true, 'Preview image URL is required'],
    },
    thumbnailImage: {
      type: String,
      required: [true, 'Thumbnail image URL is required'],
    },
    sections: [
      {
        id: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        type: {
          type: String,
          enum: ['header', 'summary', 'experience', 'education', 'skills', 'projects', 'certifications', 'languages', 'custom'],
          required: true,
        },
        isRequired: {
          type: Boolean,
          default: false,
        },
        defaultVisible: {
          type: Boolean,
          default: true,
        },
        order: {
          type: Number,
          required: true,
        },
        customProperties: {
          type: Schema.Types.Mixed,
        },
      },
    ],
    layouts: [
      {
        id: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        description: {
          type: String,
        },
        previewImage: {
          type: String,
        },
      },
    ],
    colorSchemes: [
      {
        id: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        primaryColor: {
          type: String,
          required: true,
        },
        secondaryColor: {
          type: String,
          required: true,
        },
        accentColor: {
          type: String,
        },
        backgroundColor: {
          type: String,
        },
        textColor: {
          type: String,
        },
      },
    ],
    fontOptions: [
      {
        id: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        fontFamily: {
          type: String,
          required: true,
        },
        category: {
          type: String,
          enum: ['serif', 'sans-serif', 'monospace', 'display', 'handwriting'],
          required: true,
        },
      },
    ],
    defaultLayout: {
      type: String,
      required: [true, 'Default layout ID is required'],
    },
    defaultColorScheme: {
      type: String,
      required: [true, 'Default color scheme ID is required'],
    },
    defaultFont: {
      type: String,
      required: [true, 'Default font ID is required'],
    },
    cssTemplate: {
      type: String,
      required: [true, 'CSS template is required'],
    },
    htmlTemplate: {
      type: String,
      required: [true, 'HTML template is required'],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isPremium: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    popularity: {
      type: Number,
      default: 0,
    },
    tags: {
      type: [String],
      default: [],
    },
    metadata: {
      type: Schema.Types.Mixed,
    },
  },
  {
    timestamps: true,
  }
)

// Create and export the Template model
const Template: Model<ITemplate> = mongoose.models.Template || mongoose.model<ITemplate>('Template', templateSchema)

export default Template 