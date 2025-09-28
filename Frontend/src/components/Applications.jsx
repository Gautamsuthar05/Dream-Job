function Applications() {
  return (
    <div className="w-full px-4 py-6 overflow-y-auto">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        {[
          "Frontend developer",
          "Backend developer",
          "Web designer",
          "Fullstack developer",
          "Javascript developer",
          "React developer",
          "Python developer",
          "UX/UI Designer",
          "DevOps Engineer",
          "Frontend developer",
          "Backend developer",
          "Web designer",
          "Fullstack developer",
          "Javascript developer",
          "React developer",
          "Python developer",
          "UX/UI Designer",
          "DevOps Engineer",
        ].map((val, idx) => (
          <div
            key={idx}
            id={`tech-${idx}`}
            className="border border-gray-300 rounded-md shadow-sm p-4 bg-white flex flex-col items-center justify-center min-h-[120px]"
          >
            <h1 className="text-base font-semibold text-gray-700">
              Job role: {val}
            </h1>
            <p className="text-sm text-gray-500 mt-1">Lorem ipsum dolor sit.</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Applications;
