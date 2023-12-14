import {useEffect, useRef, useState} from "react";
import {ListOnScrollProps} from "react-window";
import {Link} from "react-router-dom";
import {Virtualizer} from "../../../shared/ui";
import {useFetchAllPostsQuery} from "../../../entities/post/api/postApi.ts";
import {PostCard} from "../../../entities/post";

export const PostList = () => {
  const [page, setPage] = useState(0);
  const {data: posts = [], isFetching} = useFetchAllPostsQuery(page)
  const ref = useRef<any>(null)

  const handleScroll = ({scrollOffset}: ListOnScrollProps) => {
    const scrollToBottom = ref.current?.clientHeight - window.innerHeight - scrollOffset

    if (scrollToBottom < 200 && !isFetching && posts.length <= 80) {
      setPage(posts.length / 20)
    }
  }

  const renderRow = (index: number) => (
    <PostCard
      data={posts[index]}
      additional={<>
        <Link to={`/post/${posts[index].id}`}>
          Go to post
        </Link>
      </>}
    />
  );

  useEffect(() => {
    if (!isFetching && ref.current?.clientHeight < window.innerHeight && posts.length <= 80) {
      setPage(posts.length / 20)
    }
  }, [isFetching]);

  return (
    <Virtualizer
      innerRef={ref}
      itemCount={posts.length ?? 0}
      onScroll={handleScroll}
      itemSize={40}
      renderRow={renderRow}
    />
  )
}
