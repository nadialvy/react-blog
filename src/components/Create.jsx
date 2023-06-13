import { useState } from 'react';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let date = format(new Date(), 'yyyy-MM-dd');
    const blog = { title, content, author, date };

    setLoading(true);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('New blog added');
      setLoading(false);
      history('/');
    })

  }

  return (
    <div className="create mx-32 mt-8">
      <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">Create New Blog</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="font-semibold text-lg">Title</label>
          <input required value={title} onChange={(e) => setTitle(e.target.value)} id="tile" type="text" className="mt-2 border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline" placeholder="How To Build New Habbit"/>
        </div>
        <div className="mb-4">
          <label htmlFor="author" className="font-semibold text-lg">Author</label>
          <input required value={author} onChange={(e) => setAuthor(e.target.value)} id="author" type="text" className="mt-2 border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline" placeholder="Alexandra Kezia" />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="font-semibold text-lg">Content</label>
          <textarea required value={content} onChange={(e) => setContent(e.target.value)} name="content" id="content" cols="30" rows="10" className="mt-2 border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline" placeholder="People be confusing about how to build a new..."></textarea>
        </div>

        {!loading && <button className="px-5 py-2 font-semibold bg-yellow-300 rounded-md hover:bg-yellow-400 hover:shadow-md">Add Blog</button>}
        {loading && <button className="px-5 py-2 font-semibold bg-yellow-300 rounded-md hover:bg-yellow-400 hover:shadow-md" disabled>Loading..</button>}
      </form>
    </div>
   );
}

export default Create;