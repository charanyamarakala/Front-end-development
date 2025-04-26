import React from "react";
import { useParams } from "react-router-dom";

const courseData = {
  "dsa": {
    title: "Data Structures & Algorithms",
    description: "Master DSA with interactive problems and real-world projects.",
    image: "https://example.com/dsa-image.jpg",
    video: "https://example.com/dsa-video.mp4"
  },
  "web-development": {
    title: "Full Stack Web Development",
    description: "Learn HTML, CSS, JavaScript, React, and backend development.",
    image: "https://example.com/webdev-image.jpg",
    video: "https://example.com/webdev-video.mp4"
  },
  "java": {
    title: "Java Programming",
    description: "Build robust applications using core and advanced Java.",
    image: "https://example.com/java-image.jpg",
    video: "https://example.com/java-video.mp4"
  },
  "python": {
    title: "Python Programming",
    description: "Explore Python from basics to advanced with hands-on exercises.",
    image: "https://example.com/python-image.jpg",
    video: "https://example.com/python-video.mp4"
  },
  "machine-learning": {
    title: "Machine Learning",
    description: "Dive into ML algorithms, models, and data science.",
    image: "https://example.com/ml-image.jpg",
    video: "https://example.com/ml-video.mp4"
  }
};

export default function CourseDetail() {
  const { id } = useParams();
  const course = courseData[id];

  if (!course) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl text-red-500 font-semibold">Course Not Found</h2>
        <p className="mt-2">The course you're looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-orange-600 mb-4">{course.title}</h1>
      <img src={course.image} alt={course.title} className="w-full h-auto rounded-lg mb-6" />
      <p className="text-lg text-gray-700 mb-6">{course.description}</p>
      <div className="mb-6">
        <video controls className="w-full h-auto rounded-lg">
          <source src={course.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <button className="bg-orange-500 text-white px-6 py-2 rounded shadow hover:bg-orange-600">
        Enroll Now
      </button>
    </div>
  );
}
