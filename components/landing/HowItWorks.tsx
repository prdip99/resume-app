export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Choose a Template',
      description: 'Browse our collection of over 100 professionally designed resume templates and select the one that best matches your style and career goals.',
    },
    {
      number: '02',
      title: 'Fill in Your Details',
      description: 'Enter your information in our easy-to-use editor. Our AI assistant will help you write compelling content that showcases your skills and experience.',
    },
    {
      number: '03',
      title: 'Customize Your Design',
      description: 'Personalize your resume with custom colors, fonts, and layouts. Make it uniquely yours while maintaining professional standards.',
    },
    {
      number: '04',
      title: 'Download & Apply',
      description: 'Export your finished resume in various formats and start applying for jobs with confidence. Track your applications and make updates anytime.',
    },
  ]

  return (
    <section id="how-it-works" className="bg-white dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Create a professional resume in just four simple steps
          </p>
        </div>

        <div className="grid gap-12 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Number */}
              <div className="flex flex-col items-center">
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xl font-bold mb-6">
                  {step.number}
                  
                  {/* Connector line (except for last item) */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-full h-0.5 w-full -translate-y-1/2 bg-primary-200 dark:bg-primary-800 hidden lg:block"></div>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="/auth/register" 
            className="btn btn-primary btn-lg"
          >
            Get Started Now
          </a>
        </div>
      </div>
    </section>
  )
} 