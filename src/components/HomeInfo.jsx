import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='px-8 py-4 mx-5 text-center text-white sm:text-xl sm:leading-snug neo-brutalism-blue'>
        Hi, I'm
        <span className='mx-2 font-semibold text-white'>Ishank</span>
        👋
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          A Web Developer & AIML Engineer
          <br /> I have worked on many projects  <br /> and am curious to work on more.
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
        Visit my portfolio
          <img src={arrow} alt='arrow' className='object-contain w-4 h-4' />
        </Link>
      </div>
    );
  }

  

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium text-center sm:text-xl'>
        Need a project done or looking for a dev? <br/> I'm just a few keystrokes away
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Let's talk
        <img src={arrow} alt='arrow' className='object-contain w-4 h-4' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;