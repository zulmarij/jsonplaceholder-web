import { Button } from "components/ui/button";
import { Input } from "components/ui/input";

const PostMenu = ({ searchTerm, setSearchTerm, refetch }) => {
  return (
    <div className="flex justify-between items-center pb-4">
      <Input
        value={searchTerm}
        type="search"
        placeholder="Search..."
        className="w-[300px]"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button onClick={refetch} className="ml-2">Refresh</Button>
    </div>
  );
};

export default PostMenu;
