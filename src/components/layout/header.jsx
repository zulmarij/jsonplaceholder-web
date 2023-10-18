import { Braces } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <div className="mr-6 flex items-center space-x-2">
            <Braces />
            <span className="font-bold sm:inline-block">
              Json Placeholder
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
