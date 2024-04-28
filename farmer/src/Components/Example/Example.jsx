import { TypeAnimation } from 'react-type-animation';

const Example = () => {
  const sequence = [
    "Direct Link to Quality Produce",
    1000,
    "Empowering Farmers",
    1000,
    "Nourishing Communities",
    1000
  ];

  return (
    <TypeAnimation
      sequence={sequence}
      className="large size"
      wrapper="span"
      speed={50}
      style={{ fontSize: '3rem', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};

export default Example;
