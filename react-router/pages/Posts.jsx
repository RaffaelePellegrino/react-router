import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "../components/card.jsx";

// API URL corretto
const apiUrl = "http://localhost:3000"; // Assicurati che il server backend stia girando su questa porta

function MainComponent() {
  const [posts, setPosts] = useState([]); 

  useEffect(() => {
    getData(); 
  }, []);

  function getData() {
    axios
      .get(apiUrl + "/posts")
      .then((res) => {
        console.log(res.data);
        setPosts(res.data); 
      })
      .catch((error) => {
        console.log(error); 
      });
  }

  function deleteItem(id) {
    axios
      .delete(apiUrl + "/posts/" + id)
      .then((res) => {
        console.log(res.data);
        getData();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <section>
      <h1>Lista dei post</h1>

      <div>
        <Link to="/posts/create" className="btn btn-success">
          Aggiungi nuovo post
        </Link>
      </div>

      <div className="container">
        <div className="row m-3">
            {posts.length > 0 ? (
            posts.map((post) => (
                <div key={post.id} className="col-6 gy-3 g-3">
                <Card
                    image={post.image}
                    title={post.title} 
                    tag={post.tag + ""}
                    id={post.id}
                    onDelete={() => deleteItem(post.id)} // Aggiungi la logica di eliminazione
                />
                </div>
            ))
            ) : (
            <p>Non ci sono post</p> // Messaggio se non ci sono post
            )}
        </div>
      </div>
    </section>
  );
}

export default MainComponent;
