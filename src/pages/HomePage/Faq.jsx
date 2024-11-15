const Faq = () => {
  return (
    <section className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
          How it works
        </p>
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col divide-y divide-gray-300 dark:divide-gray-700 sm:px-8 lg:px-12 xl:px-32">
          <details className="group">
            <summary className="py-2 outline-none cursor-pointer focus:underline group-hover:text-gray-500 dark:group-hover:text-gray-400">
              What is the purpose of this volunteer service project?
            </summary>
            <div className="px-4 pb-4">
              <p>
                This project aims to connect volunteers with community service
                opportunities, allowing them to contribute their time and skills
                to various causes and organizations.
              </p>
            </div>
          </details>
          <details className="group">
            <summary className="py-2 outline-none cursor-pointer focus:underline group-hover:text-gray-500 dark:group-hover:text-gray-400">
              How can I sign up to be a volunteer?
            </summary>
            <div className="px-4 pb-4">
              <p>
                You can sign up to be a volunteer by visiting our registration
                page and filling out the necessary information. Once registered,
                you will receive updates on upcoming volunteer opportunities.
              </p>
            </div>
          </details>
          <details className="group">
            <summary className="py-2 outline-none cursor-pointer focus:underline group-hover:text-gray-500 dark:group-hover:text-gray-400">
              What types of volunteer opportunities are available?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                We offer a variety of volunteer opportunities including
                environmental cleanups, community outreach programs, tutoring
                and mentoring, event organization, and much more.
              </p>
              <p>
                Each opportunity is designed to match volunteers with activities
                that align with their interests and skills, ensuring a
                fulfilling and impactful experience.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Faq;
