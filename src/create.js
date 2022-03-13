import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newBlog = {title, author, body};

        setIsPending(true);

        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: { "Content-Type" : "application/json"},
            body: JSON.stringify(newBlog)
        })
        .then(() => {
            alert("New blog added successfully!");
            setIsPending(false);
            //history.go(1);
            history.push("/");
        });
    }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form action="POST" method="get" className="form" onSubmit={ handleSubmit }>
                <div className="element">
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" id="title" required value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="element">
                    <label htmlFor="author">Author:</label>
                    <input type="text" name="author" id="author" required value={author} onChange={(e) => setAuthor(e.target.value)}/>
                </div>
                <div className="element">
                    <label htmlFor="body">Body:</label>
                    <textarea name="body" id="body" cols="30" rows="10" required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                </div>
                <div className="element">
                    {!isPending && <button className="btn">Add Blog</button>}
                    {isPending && <button className="btn">Adding Blog...</button>}
                </div>
            </form> 
        </div>
     );
}
 
export default Create;