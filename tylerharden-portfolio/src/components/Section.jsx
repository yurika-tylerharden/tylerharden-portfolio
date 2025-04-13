const Section = ({ name, reference, children }) => {
    return (
      <div ref={reference} className=" mx-auto p-6 px-6 pt-2  ">
        {/* Section Header */}
        <div className="py-6">
          <h1 className="text-5xl font-bold">{name}</h1>
        </div>
  
        {/* Section Content */}
        {children}
      </div>
    );
  };
  
  export default Section;

//   bg-gray-50 dark:bg-gray-900