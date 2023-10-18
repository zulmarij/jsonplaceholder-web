import { Avatar, AvatarFallback, AvatarImage } from "components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "components/ui/card";
import { MessageCircle } from "lucide-react";
import md5 from "md5";

const PostList = ({ data, searchTerm }) => {
  const posts = searchTerm
    ? data.filter(
        (value) =>
          value.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          value.body.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : data;

  if (posts.length < 1) {
    return (
      <div className="relative flex items-center justify-center h-full">
        <img className="h-[calc(100vh-12rem)]" src="/images/no-data.svg" alt="no posts data"/>
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
      {posts.map((post) => (
        <Card key={post.id} className="flex flex-col hover:shadow-xl">
          <CardHeader className="flex-1">
            <CardTitle className="line-clamp-2">{post.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col">
            <div className="flex items-center pb-3">
              <Avatar className="h-9 w-9">
                <AvatarImage
                  src={`https://www.gravatar.com/avatar/${md5(
                    post.user.email
                  )}`}
                  alt="Avatar"
                />
                <AvatarFallback>ZM</AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {post.user.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {post.user.email}
                </p>
              </div>
            </div>
            <p className="line-clamp-4">{post.body}</p>
          </CardContent>
          <CardFooter className="flex items-center space-x-4 border-t py-3">
            <div className="flex items-center">
              <MessageCircle className="w-5 h-5 text-muted-foreground" />
              <span className="ml-1 text-sm text-muted-foreground">
                {post.comments.length} Comments
              </span>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default PostList;
