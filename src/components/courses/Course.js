import React, { useEffect, useRef, useState } from 'react';
import Navbaar from '../navbar/Navbaar';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform
} from 'framer-motion';
import { FiMousePointer } from 'react-icons/fi';
import axios from 'axios';
import DevelopmentData from '../data/Development';
import './courseStyle.css'
import { useNavigate } from "react-router-dom";
import UdacityDevelopmentData from '../data/DevelopmentUdacity';

function Course() {

  // useEffect(() => {
  //   axios.get('https://www.udemy.com/api-2.0/courses/?category=Business',
  //   {
  //     auth: {
  //       username: "uclPrCbXWfaAxPneidKaZNalPBLm7pA1up0JrVWX",
  //       password: "vl1GW8gX0QOW5KtLMQsRigwInD39khdh3zIxKDR3NAMBwmTCX5EBpmLDtADtc1tyn29vMWgcPAlxmnJIxub0DCxsN9B3UrfTR8UyKUhAYfacwF6MWpXObbIXTEN8SNuc"
  //     },
  //     headers: {"Access-Control-Allow-Origin": "*"}
  //   })
  //   .then((res) => {
  //     console.log(res)
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //     console.log(DevelopmentData)
  //   })
  // })

  return (
    <div>
      <Navbaar />
      <section>
        <div className="relative overflow-hidden">
          <ExampleContent />
          <FuzzyOverlay />
        </div>
      </section>

      <section>
        <div className="grid w-full place-content-center bg-gradient-to-br from-indigo-500 to-violet-500 px-4 py-12 text-slate-900">
          <TiltCard />
          <div style={{marginTop: '120px'}}>
          <TiltCardU />
          </div>
        </div>
      </section>
    </div>
  );
}

const FuzzyOverlay = () => {
  return (
    <motion.div
      id="motionDiv"
      initial={{ transform: 'translateX(-10%) translateY(-10%)' }}
      animate={{
        transform: 'translateX(10%) translateY(10%)',
      }}
      transition={{
        repeat: Infinity,
        duration: 0.2,
        ease: 'linear',
        repeatType: 'mirror',
      }}
      className="pointer-events-none absolute -inset-[100%] opacity-[15%]"
    />
  );
};

const ExampleContent = () => {
  return (
    <div className="relative grid h-screen place-content-center space-y-6 bg-neutral-950 p-8">
      <p className="text-center text-6xl font-black text-neutral-50">
        Computer Science
      </p>
      <p className="text-center text-neutral-400">
        World's best curated list of Development Courses 📺
      </p>
      <div className="flex items-center justify-center gap-3">
        <button className="text-neutral-20 w-fit px-4 py-2 font-semibold text-neutral-200 transition-colors hover:bg-neutral-800">
          Pricing
        </button>
        <button className="w-fit bg-neutral-200 px-4 py-2 font-semibold text-neutral-700 transition-colors hover:bg-neutral-50">
          Try it free
        </button>
      </div>
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = () => {
  const [hoverStates, setHoverStates] = useState(Array(DevelopmentData.length).fill(false));

  const handleMouseMove = (index, e) => {
    const rect = cardRefs.current[index].getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    const newHoverStates = [...hoverStates];
    newHoverStates[index] = { x: rX, y: rY };
    setHoverStates(newHoverStates);
  };

  const handleMouseLeave = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = false;
    setHoverStates(newHoverStates);
  };

  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current = Array(DevelopmentData.length)
      .fill()
      .map((_, i) => cardRefs.current[i]);
  }, [DevelopmentData.length]);

  return (
    <div className="grid gap-32 grid-cols-3">
      {DevelopmentData.map((item, index) => (
        <motion.div
          key={index}
          ref={(ref) => (cardRefs.current[index] = ref)}
          onMouseMove={(e) => handleMouseMove(index, e)}
          onMouseLeave={() => handleMouseLeave(index)}
          className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
          style={{
            transformStyle: 'preserve-3d',
            transform: hoverStates[index] && `rotateX(${hoverStates[index].x}deg) rotateY(${hoverStates[index].y}deg)`,
            transition: 'transform 0.3s ease',
          }}
        >
          <div
            style={{
              transform: 'translateZ(75px)',
              transformStyle: 'preserve-3d',
            }}
            className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg cardBackground"
          >
            <Card item={item} />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const TiltCardU = () => {
  const [hoverStatesU, setHoverStatesU] = useState(Array(DevelopmentData.length).fill(false));

  const handleMouseMove = (index, e) => {
    const rect = cardRefs.current[index].getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    const newHoverStates = [...hoverStatesU];
    newHoverStates[index] = { x: rX, y: rY };
    setHoverStatesU(newHoverStates);
  };

  const handleMouseLeave = (index) => {
    const newHoverStates = [...hoverStatesU];
    newHoverStates[index] = false;
    setHoverStatesU(newHoverStates);
  };

  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current = Array(DevelopmentData.length)
      .fill()
      .map((_, i) => cardRefs.current[i]);
  }, [DevelopmentData.length]);

  return (
    <div className="grid gap-32 grid-cols-3">

      {UdacityDevelopmentData.map((item, index) => (
              <motion.div
                key={index}
                ref={(ref) => (cardRefs.current[index] = ref)}
                onMouseMove={(e) => handleMouseMove(index, e)}
                onMouseLeave={() => handleMouseLeave(index)}
                className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: hoverStatesU[index] && `rotateX(${hoverStatesU[index].x}deg) rotateY(${hoverStatesU[index].y}deg)`,
                  transition: 'transform 0.3s ease',
                }}
              >
                <div
                  style={{
                    transform: 'translateZ(75px)',
                    transformStyle: 'preserve-3d',
                  }}
                  className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg cardBackground"
                >
                  <CardU item={item} />
                </div>
              </motion.div>
            ))}
    </div>
  );
};


const Card = ({item}) => {

  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to another page with item object as state
    navigate('/courseDetail', { state: { item } });
  };

  return (
    <motion.div
      whileHover="hover"
      transition={{
        duration: 1,
        ease: 'backInOut',
      }}
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
      className="relative h-90 w-65 shrink-0 overflow-hidden rounded-xl bg-indigo-500 p-8 cardBackground"
    >
      <div className="relative z-10 text-white">
        <span className="mb-3 block w-fit rounded-full bg-white/30 px-3 py-0.5 text-sm font-light text-white">
          Udemy
        </span>
        <span className="my-2 block origin-top-left font-mono text-xl font-black leading-[1.2] titleText">
          {/* ₹299/
          <br />
          Month */}
          {item.title}
        </span>
        <p style={{
          width: "230px",
          marginLeft: "-20px"
        }}>{item.headline}</p>
      </div>
      <button onClick={handleClick} className="absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-green">
        Get it now
      </button>
      {/* <Background /> */}
    </motion.div>
  );
};

const CardU = ({item}) => {

  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to another page with item object as state
    navigate('/courseDetail', { state: { item } });
  };

  const handleClickU = () => {
    // Navigate to another page with item object as state
    navigate('/udacitySelected', { state: { item } });
  };

  return (
    <motion.div
      whileHover="hover"
      transition={{
        duration: 1,
        ease: 'backInOut',
      }}
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
      className="relative h-90 w-65 shrink-0 overflow-hidden rounded-xl bg-indigo-500 p-8 cardBackground"
    >
      <div className="relative z-10 text-white">
        <span className="mb-3 block w-fit rounded-full bg-white/30 px-3 py-0.5 text-sm font-light text-white">
          Udacity
        </span>
        <span className="my-2 block origin-top-left font-mono text-xl font-black leading-[1.2] titleText">
          {/* ₹299/
          <br />
          Month */}
          {item.title}
        </span>
        <p style={{
          width: "230px",
          marginLeft: "-20px"
        }}>{item.description}</p>
      </div>
      <button onClick={handleClickU} className="absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-green">
        Get it now
      </button>
      {/* <Background /> */}
    </motion.div>
  );
};
export default Course;
