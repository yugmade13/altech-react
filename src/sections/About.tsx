import Section from '../components/Section.tsx';

function About() {
  return (
    <Section style="bg-slate-800 text-white" id="about">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-center title mb-8 text-white">
          About Our Company
        </h2>
        <p className="paragraph text-gray-400 text-center mb-6 md:max-w-[725px] lg:max-w-[1024px]">
          Our company is dedicated to providing cutting-edge ERP (Enterprise Resource Planning) solutions that cater to the diverse needs of modern businesses. With a wealth of experience and a team of skilled professionals, we strive to deliver comprehensive ERP systems that streamline operations, boost efficiency, and drive growth for our clients.
        </p>
      </div>
    </Section>
  );
}

export default About;