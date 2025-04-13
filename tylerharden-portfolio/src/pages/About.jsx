import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';


const skillsList = [
  'Python',
  'Swift',
  'JavaScript',
  'React',
  'GraphQL',
  'Kafka',
  'AWS',
  'C#',
  'Unity',
  'SQL',
  'Data Science',
  '3D Modelling',
  'Audio Production',
];

const About = () => {
  const [skillCount, setSkillCount] = useState(0);

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      if (count < skillsList.length) {
        setSkillCount((prev) => prev + 1);
        count++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Adjust speed of counting up
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-12">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 md:mb-0"
        >
          <img
            src="/public/IMG_4146 _ white blue background.jpg"  // replace with your real image path
            alt="Tyler Harden"
            className="w-48 h-48 object-cover rounded-full mx-auto md:mx-0 shadow-lg"
          />
        </motion.div>

        {/* Bio and Skills */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="mb-6 text-lg leading-relaxed">
            Innovative and technically proficient Developer and Product Specialist with experience managing and developing technology products. Strong background in application development, AI, cloud computing, and data science. Passionate about the intersection of creativity and logical thinking.
          </p>

          {/* Skills Count */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            
            <div className="flex items-center flex-wrap justify-center md:justify-start gap-6">
              {/* Number */}
              {/* <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-6xl font-bold text-blue-600"
              >
                {skillCount}
              </motion.div> */}

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {skillsList.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-gray-600 mt-2">Skills and tools mastered</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;