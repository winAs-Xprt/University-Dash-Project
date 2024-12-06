import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const collegeData = [
  {
    collegeName: 'IIT',
    location: 'Chennai, Tamilnadu',
    course: 'MBA',
    ratings: 5,
    status: 'Active',
    applicants: '10'
  },
  {
    collegeName: 'IIT',
    location: 'Chennai, Tamilnadu',
    course: 'MBA',
    ratings: 5,
    status: 'Active',
    applicants: '10'
  },
  {
    collegeName: 'IIT',
    location: 'Chennai, Tamilnadu',
    course: 'MBA',
    ratings: 5,
    status: 'Active',
    applicants: '10'
  },
  {
    collegeName: 'IIT',
    location: 'Chennai, Tamilnadu',
    course: 'MBA',
    ratings: 5,
    status: 'Active',
    applicants: '10'
  }
];

const RatingStars = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(rating)].map((_, index) => (
        <AiFillStar key={index} className="text-yellow-400" />
      ))}
    </div>
  );
};

const CollegeTable = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">College Details</h2>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search colleges..."
            className="border rounded-lg px-4 py-2 text-sm"
          />
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="text-left text-gray-500 bg-gray-50">
              <th className="py-3 px-4">College Name</th>
              <th className="py-3 px-4">Location</th>
              <th className="py-3 px-4">Course</th>
              <th className="py-3 px-4">Ratings</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">No.of Applicants</th>
            </tr>
          </thead>
          <tbody>
            {collegeData.map((college, index) => (
              <tr key={index} className="border-t">
                <td className="py-4 px-4">{college.collegeName}</td>
                <td className="py-4 px-4">{college.location}</td>
                <td className="py-4 px-4">{college.course}</td>
                <td className="py-4 px-4">
                  <RatingStars rating={college.ratings} />
                </td>
                <td className="py-4 px-4">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded">
                    {college.status}
                  </span>
                </td>
                <td className="py-4 px-4">{college.applicants}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CollegeTable;