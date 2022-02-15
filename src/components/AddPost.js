import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../features/postsSlice";

const AddPost = () => {

    const dispatch = useDispatch()

    const [titleInputText, setTitleInputText] = useState("");
    const [bodyInputText, setBodyInputText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addPost({
            title: titleInputText,
            body: bodyInputText
        }));
        setTitleInputText("");
        setBodyInputText("");
    }

    const handleTitleChange = (e) => {
        setTitleInputText(e.target.value);
    }

    const handleBodyChange = (e) => {
        setBodyInputText(e.target.value);
    }

    return(
        <form onSubmit={handleSubmit}>
            <h1>ADD POST</h1>
            <input value={titleInputText} onChange={handleTitleChange} type="text" placeholder="title" />
            <input value={bodyInputText} onChange={handleBodyChange} type="text" placeholder="body" />
            <button type='submit'>SUBMIT</button>
        </form>
    )
}

export default AddPost;