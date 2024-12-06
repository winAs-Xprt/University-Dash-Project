import React from 'react';

const examData = [
  {
    examName: 'GATE',
    examDate: '1.02.2024',
    registrationDeadline: '1.02.2024',
    examMode: 'Offline',
    status: 'Open',
    applicants: '890'
  },
  {
    examName: 'GATE',
    examDate: '1.02.2024',
    registrationDeadline: '1.02.2024',
    examMode: 'Offline',
    status: 'Open',
    applicants: '890'
  },
  {
    examName: 'GATE',
    examDate: '1.02.2024',
    registrationDeadline: '1.02.2024',
    examMode: 'Offline',
    status: 'Open',
    applicants: '890'
  }
];

const ExamTable = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Exam Details</h2>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search exams..."
            className="border rounded-lg px-4 py-2 text-sm"
          />
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="text-left text-gray-500">
              <th className="pb-4">Exam name</th>
              <th className="pb-4">Exam Date</th>
              <th className="pb-4">Registration Deadline</th>
              <th className="pb-4">Exam mode</th>
              <th className="pb-4">Status</th>
              <th className="pb-4">No.of Applicants</th>
            </tr>
          </thead>
          <tbody>
            {examData.map((exam, index) => (
              <tr key={index} className="border-t">
                <td className="py-4">{exam.examName}</td>
                <td>{exam.examDate}</td>
                <td>{exam.registrationDeadline}</td>
                <td>{exam.examMode}</td>
                <td>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded">
                    {exam.status}
                  </span>
                </td>
                <td>{exam.applicants}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExamTable;