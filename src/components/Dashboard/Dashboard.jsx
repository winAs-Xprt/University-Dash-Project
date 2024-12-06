import React from 'react';
import StatCard from './StatCard';
import Chart from './Chart';
import RecentRegistrations from './RecentRegistrations';
import TopList from './TopList';
import { BiGroup, BiFile, BiCalendar } from 'react-icons/bi';

const topColleges = [
  {
    name: 'Anna university',
    location: 'Chennai, Tamilnadu',
    applicants: '250 Applicants'
  },
  {
    name: 'IIT (Madras)',
    location: 'Chennai, Tamilnadu',
    applicants: '250 Applicants'
  },
  {
    name: 'IIT (Madras)',
    location: 'Chennai, Tamilnadu',
    applicants: '250 Applicants'
  }
];

const topCourses = [
  {
    name: 'Computer Science and Engineering',
    location: 'Engineering',
    applicants: '5250 Applicants'
  },
  {
    name: 'Electronics and Communication',
    location: 'Engineering',
    applicants: '2350 Applicants'
  }
];

function Dashboard() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard
          title="Total Students"
          value="9,899"
          icon={BiGroup}
          trend="60% Rise over last week"
          trendType="up"
        />
        <StatCard
          title="Active Applications"
          value="380"
          icon={BiFile}
          trend="60% Fall over last week"
          trendType="down"
        />
        <StatCard
          title="Completed Applications"
          value="6,800"
          icon={BiFile}
          trend="60% Rise over last week"
          trendType="up"
        />
        <StatCard
          title="Upcoming Counseling Sessions"
          value="6,800"
          icon={BiCalendar}
          trend="60% Rise over last week"
          trendType="up"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <Chart />
        </div>
        <div>
          <TopList
            title="Top Colleges"
            items={topColleges}
            type="college"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentRegistrations />
        </div>
        <div>
          <TopList
            title="Top Courses"
            items={topCourses}
            type="course"
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;