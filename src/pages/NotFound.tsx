import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-red-500 font-mono flex flex-col items-center justify-center relative overflow-hidden">
      <Helmet>
        <title>404: Project Not Found | A.S. Collections</title>
      </Helmet>

      {/* Matrix Rain Effect Placeholder (CSS Animation) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="animate-pulse w-full h-full bg-[linear-gradient(0deg,transparent_24%,rgba(255,0,0,.3)_25%,rgba(255,0,0,.3)_26%,transparent_27%,transparent_74%,rgba(255,0,0,.3)_75%,rgba(255,0,0,.3)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(255,0,0,.3)_25%,rgba(255,0,0,.3)_26%,transparent_27%,transparent_74%,rgba(255,0,0,.3)_75%,rgba(255,0,0,.3)_76%,transparent_77%,transparent)] bg-[length:50px_50px]" />
      </div>

      <div className="relative z-10 text-center p-4">
        <h1
          className="text-9xl font-black mb-4 animate-pulse glitch-text"
          style={{ textShadow: "2px 2px 0px #fff" }}
        >
          404
        </h1>
        <p className="text-2xl mb-8 text-white">PROJECT NOT FOUND</p>
        <p className="text-red-400 mb-12 max-w-md mx-auto">
          Don't let your own project end up here. We recover lost funds so you
          can keep building.
        </p>

        <div className="flex gap-4 justify-center">
          <Link to="/">
            <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-6 rounded-none border border-red-500">
              GO HOME
            </Button>
          </Link>
          <Link to="/contact">
            <Button
              variant="outline"
              className="bg-transparent border-red-600 text-red-500 hover:bg-red-900/20 font-bold px-8 py-6 rounded-none"
            >
              BOOK A RESCUE
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
