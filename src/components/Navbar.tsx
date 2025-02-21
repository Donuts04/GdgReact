import { Avatar, AvatarFallback } from "./ui/avatar";

const Navbar = () => {
  return (
    <nav className="sticky top-0 flex w-full bg-black justify-between p-4 items-center z-50">
      <div className="flex items-center gap-3">
        <img
          src="/cat.jpeg"
          alt="Logo"
          className="h-12 w-12 rounded-full object-cover"
        />
        <h1 className="text-white text-xl font-semibold">Htu Events</h1>
      </div>

      <div className="hidden md:flex gap-6 text-lg">
        <a className="text-white/90 hover:text-white transition-colors cursor-pointer">
          Home
        </a>
        <a className="text-white/90 hover:text-white transition-colors cursor-pointer">
          About
        </a>
        <a className="text-white/90 hover:text-white transition-colors cursor-pointer">
          Contact
        </a>
      </div>

      <Avatar className="w-10 h-10">
        <AvatarFallback className="font-medium">OK</AvatarFallback>
      </Avatar>
    </nav>
  );
};

export default Navbar;
