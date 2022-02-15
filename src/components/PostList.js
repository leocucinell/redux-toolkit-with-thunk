import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../features/postsSlice';

import PostItem from './PostItem';

const PostList = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.value)

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return(
        <div className="post-list-container">
            {
                posts.isLoading ?
                <p>Loading...</p>
                :
                posts.posts.map((post) => {
                    return(
                        <PostItem title={post.title} body={post.body} />
                    )
                })
            }
        </div>
    );
}

export default PostList