const NotFound = () => {
  return ( 
    <div className="not-found h-screen flex items-center justify-center">
      <div>
        <h1 className="text-3xl font-bold mb-4 text-red-800 text-center">404</h1>
        <p className="text-center text-red-800">Sorry, the page you`re looking for doesn`t exist</p>
      </div>
    </div>
   );
}
 
export default NotFound;