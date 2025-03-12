import { CheckIcon } from '@heroicons/react/20/solid'

export function Pricing() {
  const tiers = [
    {
      name: 'Free',
      id: 'tier-free',
      price: '$0',
      frequency: 'forever',
      description: 'Perfect for exploring and creating basic resumes.',
      features: [
        '3 resume templates',
        'Basic customization options',
        'PDF export with watermark',
        'Limited AI suggestions',
        'Resume score analysis',
      ],
      cta: 'Get Started',
      mostPopular: false,
    },
    {
      name: 'Premium',
      id: 'tier-premium',
      price: '$19',
      frequency: 'per month',
      description: 'Everything you need to create professional resumes.',
      features: [
        'Access to 50+ premium templates',
        'Advanced customization options',
        'Unlimited exports (PDF, DOCX, TXT)',
        'Advanced AI writing assistant',
        'Resume tracking and analytics',
        'ATS keyword optimization',
        'Custom QR code for your resume',
        'Priority email support',
      ],
      cta: 'Start Free Trial',
      mostPopular: true,
    },
    {
      name: 'Pro',
      id: 'tier-pro',
      price: '$49',
      frequency: 'per month',
      description: 'Advanced features for career professionals.',
      features: [
        'All Premium features',
        'Access to 100+ exclusive templates',
        'LinkedIn profile optimization',
        'Cover letter builder',
        'Real-time collaboration features',
        'Personal branding tools',
        'Video introduction hosting',
        'Direct publishing to job platforms',
        '24/7 priority support',
      ],
      cta: 'Start Free Trial',
      mostPopular: false,
    },
  ]

  return (
    <section id="pricing" className="bg-white dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose the plan that works best for your career needs
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-2xl shadow-soft p-8 bg-white dark:bg-gray-900 relative flex flex-col ${
                tier.mostPopular
                  ? 'border-2 border-primary-500 dark:border-primary-400 shadow-card'
                  : 'border border-gray-200 dark:border-gray-700'
              }`}
            >
              {tier.mostPopular && (
                <div className="absolute top-0 right-6 -translate-y-1/2 rounded-full bg-primary-500 px-3 py-1 text-xs font-semibold text-white">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {tier.name}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{tier.description}</p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-end">
                  <p className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {tier.price}
                  </p>
                  <p className="ml-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                    /{tier.frequency}
                  </p>
                </div>
              </div>
              
              <ul className="mb-8 space-y-4 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <CheckIcon className="h-5 w-5 flex-shrink-0 text-primary-500" aria-hidden="true" />
                    <span className="ml-3 text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href={tier.mostPopular ? '/auth/register?plan=premium' : '/auth/register'}
                className={`
                  btn w-full justify-center 
                  ${tier.mostPopular 
                    ? 'btn-primary' 
                    : 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700'}
                `}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Need a custom solution for your organization?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            We offer custom enterprise plans for businesses, universities, and organizations. Get volume discounts, custom branding, and dedicated support.
          </p>
          <a href="/contact" className="btn btn-outline">
            Contact Sales
          </a>
        </div>
      </div>
    </section>
  )
} 