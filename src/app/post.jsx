import Header from "components/layout/header";
import PostList from "./post-list";
import usePosts from "hooks/use-posts";
import { useState } from "react";
import PostMenu from "./post-menu";
import PostListSkeleton from "./post-list-skeleton";

const Post = () => {
  const { data, isLoading, refetch } = usePosts();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <div className="relative flex min-h-screen flex-col">
        <Header />
        <div className="flex-1 border-b">
          <div className="container flex-1 items-start">
            <main className="relative py-6 lg:py-8">
              <div className="mx-auto w-full min-w-0">
                <PostMenu
                  refetch={refetch}
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                />
                {isLoading ? (
                  <PostListSkeleton length={100} />
                ) : (
                  <PostList data={data} searchTerm={searchTerm} />
                )}
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
