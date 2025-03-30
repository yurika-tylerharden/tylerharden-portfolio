import resumeData from '../content/resume.json';

function Resume() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Resume</h1>
      <p className="mb-6">{resumeData.bio}</p>
      <h2 className="text-xl font-semibold mb-4">Experience</h2>
      <ul className="space-y-4">
        {resumeData.experience.map((item, index) => (
          <li key={index} className="border-b pb-4">
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.date}</p>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
      <p className="mt-6">
        Download my resume{' '}
        <a
          href="/Tyler Harden_Resume_2025.pdf"
          className="text-blue-500 underline"
        >
          here
        </a>.
      </p>
    </div>
  );
}

export default Resume;