import {useNavigate, useParams} from "react-router";
import {useFetchPostByIdQuery} from "../../entities/post/api/postApi.ts";
import {PostCard} from "../../entities/post";
import {Loading, NotFound} from "../../shared/ui";

export const PostPage = () => {
  const params = useParams()
  const navigate = useNavigate();

  const {data: post, isFetching} = useFetchPostByIdQuery(Number(params.postId))

  return (
    <div className={'post-page'}>
      {!isFetching && post ? (
        <PostCard
          data={post}
          className={'post-page__post'}
          additional={<>
            <button onClick={() => navigate(-1)}>Go back</button>
          </>}
        />
      ) : isFetching ? (
        <Loading/>
      ) : (
        <NotFound/>
      )}
    </div>
  )
}
