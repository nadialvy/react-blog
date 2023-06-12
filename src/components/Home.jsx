import BlogList from "./BlogList";
import useFetch from "../useFetch";

const Home = () => {
  // const [blogs, setBlogs] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   setTimeout(() => {
  //     fetch('http://localhost:8000/blogs')
  //     .then(res => {
  //       if(res.status >= 400) throw new Error("Server Error");
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setBlogs(data);
  //       setIsLoading(false);
  //       setError(null);
  //     })
  //     .catch((e) => {
  //       setIsLoading(false);
  //       setError(e.message);
  //     })
  //   }, 1000)
  // }, [])

  const { data, loading, error } = useFetch('http://localhost:8000/blogs');

  return (
    <div className="mx-32 mt-8">
      {error && <div className="text-center text-xl font-semibold text-red-800">{error}</div>}
      {loading && <div className="text-center text-xl font-semibold text-gray-800">Loading...</div>}
      {data && <BlogList blogs={data} title="All Blogs!"/>}
    </div>
  );
};

export default Home;
