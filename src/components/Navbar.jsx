
import logo from "../assets/logo.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'> 
      <div className="flex flex-shrink-0 items-center">
       
          <img src={logo} alt='logo' className="mx-2 w-14 h-14" />
      </div>
      <div className="flex m-8 items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/simrankarnwal/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Simrankarnwal" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
