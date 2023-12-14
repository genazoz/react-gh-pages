import {FC, ReactNode} from "react";
import cs from 'classnames'
import {IPost} from "../model/types/IPost.ts";

type PostCardProps = {
  /**
   * Post data
   */
  data: IPost,

  /**
   * Post classname
   */
  className?: string,

  /**
   * Additional buttons
   */
  additional?: ReactNode
}

export const PostCard: FC<PostCardProps> = (props) => {
  const {
    data,
    className,
    additional
  } = props

  const {
    id,
    title,
    body
  } = data

  return (
    <div className={cs('post-card', className)}>
      <div className="post-card__content">
        <div className={'post-card__id'}>
          {id}
        </div>
        <div className='post-card__title'>
          {title}
        </div>
        <div className='post-card__body'>
          {body}
        </div>
      </div>

      {additional ? (
        <div className={'post-card__additional'}>
          {additional}
        </div>
      ) : null}
    </div>
  );
};
