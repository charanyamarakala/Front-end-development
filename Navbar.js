import { Link } from "react-router-dom";

export default function CodingNinjasClone() {
  return (
    <nav className="bg-white shadow py-4 px-8 flex justify-between items-center">
      <div className="text-xl font-bold text-orange-500">Coding Ninjas</div>
      <div className="space-x-6">
        <Link to="/courses" className="hover:text-orange-500">Courses</Link>
        <Link to="/practice" className="hover:text-orange-500">Practice</Link>
        <Link to="/events" className="hover:text-orange-500">Events</Link>
        <Link to="/campus" className="hover:text-orange-500">Campus</Link>
        <Link to="/login">
          <button className="bg-orange-500 text-white px-4 py-2 rounded">Login</button>
        </Link>
      </div>
    </nav>
  );
}
