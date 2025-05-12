import { SunIcon } from 'lucide-react';

const Logo = () => {
  return (
    <a href="#" className="flex items-center space-x-2 group">
      <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white p-2 rounded-md transition-transform group-hover:scale-105 duration-300">
        <SunIcon className="h-6 w-6" />
      </div>
      <span className="font-bold text-xl text-gray-800 dark:text-white">
        Solar<span className="text-primary-600 dark:text-primary-400">Express</span>
      </span>
    </a>
  );
};

export default Logo;