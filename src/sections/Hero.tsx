import Section from '../components/Section.tsx';
import hero from '../../public/hero.svg';

function Hero() {
  return (
    <Section id="hero">
      <div className="flex flex-col items-center justify-center gap-x-16 lg:flex-row-reverse">
        <div className="flex-1 md:scale-75 lg:scale-100">
          <img
            src={hero}
            alt="Hero"
          />
        </div>
        <div className="flex-1 mt-16 lg:mt-0">
          <h2 className="title mb-6 md:text-center lg:text-start">Empowering Businesses with Cutting-Edge ERP Solutions</h2>
          <p className="paragraph mb-6 md:text-center lg:text-start">
            With years of expertise, we offer advanced ERP solutions tailored to meet diverse business needs, enabling seamless integration, data-driven insights, and operational efficiency for sustained success in an ever-evolving market landscape.
          </p>
          <div className="flex justify-center items-center gap-x-6 lg:justify-start">
            <button className="flex-1 btn btn-md md:flex-none">
              Explore
            </button>
            <button className="flex-1 btn btn-md btn-primary text-white md:flex-none">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Hero;