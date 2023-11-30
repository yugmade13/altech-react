import Section from '../components/Section.tsx';

function Contact() {
  return (
    <Section id="contact">
      <div className="max-w-[1024px] mx-auto grid gap-4 lg:grid-cols-2 lg:gap-x-16">
        <div>
          <h2 className="title mb-6 md:text-center lg:text-start">
            Contact Me
          </h2>
          <p className="mb-6 paragraph md:text-center lg:text-start">
            Reach out to our dedicated team for inquiries, collaborations, or to explore how our tailored ERP solutions can elevate your business performance and drive growth in today's competitive market.
          </p>
        </div>
        <div className="text-sm lg:text-base">
          <form>
            <div className="flex flex-col gap-y-2 mb-4">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Type here"
                className="input input-bordered input-primary w-full"
              />
            </div>
            <div className="flex flex-col gap-y-2 mb-4">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Type here"
                className="input input-bordered input-primary w-full"
              />
            </div>
            <div className="flex flex-col gap-y-2 mb-4">
              <label htmlFor="name">Message</label>
              <textarea
                className="textarea textarea-primary"
                placeholder="Bio">
              </textarea>
            </div>
            <button className="btn btn-md btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}

export default Contact;