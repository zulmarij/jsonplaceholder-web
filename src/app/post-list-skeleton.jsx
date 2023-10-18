import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "components/ui/card";
import { Skeleton } from "components/ui/skeleton";

const PostListSkeleton = ({ length }) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
      {Array(length)
        .fill()
        .map((_, i) => i + 1)
        .map((value) => (
          <Card key={value} className="flex flex-col hover:shadow-xl">
            <CardHeader className="flex-1">
              <CardTitle className="space-y-1">
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-[200px]" />
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col">
              <div className="flex items-center pb-3">
                <div>
                  <Skeleton className="h-9 w-9 rounded-full" />
                </div>
                <div className="ml-4 space-y-1">
                  <Skeleton className="h-4 w-[100px]" />
                  <Skeleton className="h-4 w-[150px]" />
                </div>
              </div>
              <div className="space-y-1">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </CardContent>
            <CardFooter className="flex items-center space-x-4 border-t py-3">
              <div className="flex items-center">
                <Skeleton className="h-4 w-[100px]" />
              </div>
            </CardFooter>
          </Card>
        ))}
    </div>
  );
};

export default PostListSkeleton;
