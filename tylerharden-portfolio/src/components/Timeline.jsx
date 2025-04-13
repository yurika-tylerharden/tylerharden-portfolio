import { useState } from 'react';
import { motion } from 'framer-motion';
import dayjs from 'dayjs';  // npm install dayjs

const start = dayjs('2022-02-01'); // Timeline start
const end = dayjs();               // Timeline end

const experience = [
  {
    startDate: "2024-12",
    endDate: null,
    title: "Product Specialist / Developer",
    description: "InfoDynamics Renew project, SaaS transition."
  },
  {
    startDate: "2024-03",
    endDate: "2024-11",
    title: "Product Data Scientist",
    description: "GeoAlarms concept, Python + Kafka backend."
  },
  {
    startDate: "2023-08",
    endDate: "2024-02",
    title: "Product Specialist / Developer",
    description: "Load control interfaces, FCAS tool."
  },
  {
    startDate: "2023-02",
    endDate: "2023-08",
    title: "3D Modelling Artist/Sound Designer",
    description: "Unity game, Blender, C# scripting."
  },
  {
    startDate: "2022-08",
    endDate: "2023-02",
    title: "Junior App Developer",
    description: "iOS HazChat app update, Swift + AWS."
  },
  {
    startDate: "2022-02",
    endDate: "2022-08",
    title: "Data Science Specialist",
    description: "Meter Data Analytics solution in Databricks."
  }
];

// Helper: generate all months between start and end
const monthsBetween = [];
let curr = start.startOf('month');
while (curr.isBefore(end)) {
  monthsBetween.push(curr);
  curr = curr.add(1, 'month');
}
const totalMonths = monthsBetween.length;

const Timeline = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="container mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-10">My Journey</h1>

      {/* Timeline Container */}
      <div className="relative w-full h-64">

  {/* Base Timeline Line */}
  <motion.div
    className="absolute w-full h-1 bg-gray-300 z-10"
    initial={{ scaleX: 0 }}
    animate={{ scaleX: 1 }}
    transition={{ duration: 1 }}
    style={{
      top: '80%',  // 🡄 Move timeline down
      transformOrigin: 'left center'
    }}
  />

  {/* Month Ticks */}
  {monthsBetween.map((month, idx) => {
    const percent = (idx / totalMonths) * 100;
    return (
      <motion.div
        key={`tick-${idx}`}
        initial={{ height: 0 }}
        animate={{ height: 10 }}
        transition={{ delay: 1 + idx * 0.01 }}
        className="absolute bg-blue-500 w-[1px] z-20"
        style={{
          left: `${percent}%`,
          top: 'calc(80% - 10px)',  // 🡄 Place ticks above the timeline
          transform: 'translateX(-50%)',
        }}
      />
    );
  })}

  {/* Year Labels */}
  {monthsBetween.map((month, idx) => {
    if (month.month() === 0 || idx === monthsBetween.length - 1) {
      const percent = (idx / totalMonths) * 100;
      return (
        <div
          key={`year-${idx}`}
          className="absolute text-xs text-gray-500 z-30"
          style={{
            left: `${percent}%`,
            top: '90%',  // 🡄 Move year labels below the timeline
            transform: 'translateX(-50%)',
          }}
        >
          {month.format('YYYY')}
        </div>
      );
    }
    return null;
  })}

  {/* Experience Event Bars */}
  {experience.map((exp, idx) => {
    const expStart = dayjs(`${exp.startDate}-01`);
    const monthsFromStart = expStart.diff(start, 'month');
    const positionPercent = (monthsFromStart / totalMonths) * 100;

    return (
      <motion.div
        key={`exp-${idx}`}
        initial={{ height: 0 }}
        animate={{ height: 120 }}
        transition={{ delay: 2 + idx * 0.2 }}
        className="group absolute bg-blue-600 w-4 rounded-md z-30"
        style={{
          left: `${positionPercent}%`,
          bottom: '20%',  // 🡄 Base of experience bars is below the timeline
          transform: 'translateX(-50%)',
        }}
        onMouseEnter={() => setHoveredIndex(idx)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {hoveredIndex === idx && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute -top-32 left-1/2 transform -translate-x-1/2 bg-white shadow-lg p-4 rounded-lg text-sm w-64 z-50"
          >
            <h3 className="font-bold mb-2">{exp.title}</h3>
            <p className="text-gray-600">{exp.startDate}</p>
            <p className="mt-2 text-gray-500">{exp.description}</p>
          </motion.div>
        )}
      </motion.div>
    );
  })}

</div>
    </div>
  );
};

export default Timeline;