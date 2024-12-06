import React from 'react';

const courseData = [
  {
    courseName: 'B.Tech. CSE',
    collegeName: 'IIT Chennai',
    duration: '4 Years',
    feeRange: '4L - 6L/Year',
    mode: 'Offline'
  },
  {
    courseName: 'B.Tech. CSE',
    collegeName: 'IIT Chennai',
    duration: '4 Years',
    feeRange: '4L - 6L/Year',
    mode: 'Offline'
  },
  {
    courseName: 'B.Tech. CSE',
    collegeName: 'IIT Chennai',
    duration: '4 Years',
    feeRange: '4L - 6L/Year',
    mode: 'Offline'
  },
  {
    courseName: 'B.Tech. CSE',
    collegeName: 'IIT Chennai',
    duration: '4 Years',
    feeRange: '4L - 6L/Year',
    mode: 'Offline'
  },
  {
    courseName: 'B.Tech. CSE',
    collegeName: 'IIT Chennai',
    duration: '4 Years',
    feeRange: '4L - 6L/Year',
    mode: 'Offline'
  }
];

const CourseTable = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Course Details</h2>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search courses..."
            className="border rounded-lg px-4 py-2 text-sm"
          />
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="text-left text-gray-500 bg-gray-50">
              <th className="py-3 px-4">Course Name</th>
              <th className="py-3 px-4">College Name</th>
              <th className="py-3 px-4">Duration</th>
              <th className="py-3 px-4">Fee Range</th>
              <th className="py-3 px-4">Mode</th>
            </tr>
          </thead>
          <tbody>
            {courseData.map((course, index) => (
              <tr key={index} className="border-t">
                <td className="py-4 px-4">{course.courseName}</td>
                <td className="py-4 px-4">{course.collegeName}</td>
                <td className="py-4 px-4">{course.duration}</td>
                <td className="py-4 px-4">{course.feeRange}</td>
                <td className="py-4 px-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded">
                    {course.mode}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseTable;