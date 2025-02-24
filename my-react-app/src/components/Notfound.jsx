import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold text-red-500">404 - Page Not Found</h1>
      <p className=" mt-2 text-lg text-slate-950">Oops! The page you are looking for doesn't exist.</p>
      <Link to="/" className="text-blue-500 mt-4 block">
        Go back to Home
      </Link>
    </div>
  );
};

export default Notfound;
