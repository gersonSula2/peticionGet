import axios from 'axios';
import { useState } from 'react';
import './index.css'; 

const sharedClasses = {
  card: 'border border-muted p-4 bg-card m-1 striped-bg', // Clase para el fondo de rayas
  text: 'text-muted-foreground',
  primary: 'bg-primary text-primary-foreground p-2 rounded-lg hover:bg-primary/80',
};

const ConsultaGet = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState('');

  const handleBuscar = async () => {
    try {
      const response = await axios.get('/api/blog');
      const blogData = response.data;

      console.log(blogData); // Verifica lo que se obtiene de la API

      if (blogData.length > 0) {
        setBlogs(blogData);
        setError('');
      } else {
        setError('No se encontraron blogs');
        setBlogs([]);
      }
    } catch (error) {
      console.error(error);
      setError('Error al buscar los blogs');
      setBlogs([]);
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold text-primary-foreground mb-4">PETICIÓN GET</h1>
      <button className={`mt-4 ${sharedClasses.primary}`} onClick={handleBuscar}>
        Consultar
      </button>

      {error && <p className="text-red-500">{error}</p>}

      {blogs.length > 0 && (
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-1">
              <div className={sharedClasses.card}><strong>Id</strong>
                <div>
                  {blogs.map((blog) => (
                    <p key={blog.id}>{blog.id}</p>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className={sharedClasses.card}><strong>Titulo</strong>
                <div>
                  {blogs.map((blog) => (
                    <p key={blog.id}>{blog.title}</p>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className={sharedClasses.card}><strong>Autor</strong>
                <div>
                  {blogs.map((blog) => (
                    <p key={blog.id}>{blog.author}</p>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className={sharedClasses.card}><strong>Categoría</strong>
                <div>
                  {blogs.map((blog) => (
                    <p key={blog.id}>{blog.category}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConsultaGet;
