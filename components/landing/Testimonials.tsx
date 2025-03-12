export function Testimonials() {
  const testimonials = [
    {
      content:
        "ProResume helped me land my dream job at a top tech company! The AI suggestions made my experience sound much more impressive, and the design of my resume really stood out.",
      author: "Sarah Johnson",
      position: "Software Engineer",
      company: "Google",
      image: "/images/testimonials/user1.jpg", // This would be a real image path in a production app
    },
    {
      content:
        "I was struggling to create a resume that would get past ATS systems. With ProResume, not only did I create a beautiful resume, but I started getting callbacks for interviews immediately!",
      author: "Michael Chen",
      position: "Marketing Director",
      company: "Adobe",
      image: "/images/testimonials/user2.jpg",
    },
    {
      content:
        "As someone changing careers, I needed a resume that would highlight my transferable skills. The templates and AI suggestions were exactly what I needed. Landed a new job within 2 weeks!",
      author: "Emily Rodriguez",
      position: "Data Analyst",
      company: "JP Morgan Chase",
      image: "/images/testimonials/user3.jpg",
    },
  ]

  return (
    <section id="testimonials" className="bg-gray-50 dark:bg-gray-800 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            What Our Users Say
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join thousands of professionals who have successfully used ProResume to advance their careers
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-900 rounded-xl shadow-soft p-6 transition-all duration-300 hover:shadow-card"
            >
              <div className="flex items-center">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 mr-4">
                  {/* In a real app, this would be an actual image */}
                  <div className="h-full w-full rounded-full flex items-center justify-center text-gray-400">
                    {testimonial.author.charAt(0)}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.position} at {testimonial.company}
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <svg className="h-6 w-6 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {testimonial.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 