import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Courses() {
  const [searchQuery, setSearchQuery] = useState("");

  const courseList = ["DSA", "Web Development", "Java", "Python", "Machine Learning"];

  const filteredCourses = courseList.filter(course =>
    course.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-orange-600">All Courses</h1>
      <input
        type="text"
        className="border border-gray-300 rounded p-2 mb-4 w-full"
        placeholder="Search Courses..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course, i) => (
          <Link to={`/courses/${course.toLowerCase().replace(/ /g, '-')}`} key={i}>
            <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg">
              <h2 className="text-xl font-semibold text-gray-800">{course}</h2>
              <p className="text-sm text-gray-600 mt-2">Learn {course} from scratch.</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
