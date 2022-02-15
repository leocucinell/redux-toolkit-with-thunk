
const PostItem = ({title, body}) => {
    return(
        <div className='post-item'>
            <h4>{title}</h4>
            <p>{body}</p>
        </div>
    )
}

export default PostItem