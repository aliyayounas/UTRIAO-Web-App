import React from 'react';
import { useSpring, animated } from 'react-spring';
import EducationItem from './EducationItem';
import AddEducation from './AddEducation';
import './Education.css';

const Education = () => {
  const fade = useSpring({
    from: {
      opacity: 0
    },
    opacity: 1,
    config: {
      duration: 500
    }
  });

  return (
    <React.Fragment>
      <animated.div style={fade}>
        <h6 className="font-weight-bold ">Education</h6>
        <hr />
        <EducationItem />

        <AddEducation />
        <hr />
      </animated.div>
    </React.Fragment>
  );
};

export default Education;
