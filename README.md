# ProResume - Advanced Resume Builder

ProResume is a modern, feature-rich resume builder application that helps users create professional, visually appealing resumes with ease. This application combines the power of Next.js, React, and AI to provide a seamless resume creation experience.

## 🌟 Key Features

- **User Authentication:** Mobile OTP verification, Gmail login, email authentication, and two-factor authentication
- **Resume Builder:** 100+ professional templates, real-time preview, and ATS optimization
- **AI-Powered Enhancements:** Smart content suggestions, keyword optimization, and resume scoring
- **Customization:** Custom fonts, colors, layouts, sections, and more
- **Export Options:** Download in PDF, DOCX, and other formats or share as a web link with custom QR code
- **Collaboration:** Real-time collaboration with mentors or colleagues
- **Analytics:** Track resume views, downloads, and recruiter engagement
- **Subscription Model:** Free tier with basic features and premium tiers with advanced options

## 🚀 Technology Stack

- **Frontend:** Next.js, React, TypeScript, Tailwind CSS, Framer Motion
- **Backend:** Node.js (through Next.js API routes), Firebase Authentication
- **Database:** MongoDB
- **Storage:** AWS S3 (or similar cloud storage)
- **Authentication:** NextAuth.js with Firebase integration
- **Payment Processing:** Stripe
- **Real-time Features:** Socket.io
- **AI Features:** OpenAI integration (optional)

## 📋 Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn
- MongoDB connection
- Firebase project setup (for authentication)
- (Optional) Stripe account for payments

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/proresume.git
   cd proresume
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   ```bash
   cp .env.local.example .env.local
   ```
   Then fill in the environment variables in the `.env.local` file.

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🧩 Project Structure

```
/
├── app/                    # Next.js app router components and routes
├── components/             # Reusable React components
│   ├── common/             # Common components (header, footer, etc.)
│   ├── landing/            # Landing page components
│   ├── auth/               # Authentication components
│   ├── dashboard/          # Dashboard components
│   └── resume/             # Resume builder components
├── lib/                    # Utility functions and shared code
├── models/                 # MongoDB models
├── public/                 # Static assets
└── styles/                 # Global styles
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support, email support@proresume.com or create an issue in this repository.

---

Built with ❤️ by [Your Name or Company] 