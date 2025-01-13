import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "../components/card.jsx";

// API URL corretto
const apiUrl = "http://localhost:3000"; // Assicurati che il server backend stia girando su questa porta

function MainComponent() {
  const [posts, setPosts] = useState([]); // Stato per i post

  useEffect(() => {
    getData(); // Carica i dati quando il componente viene montato
  }, []);

  // Chiamata axios per ottenere i dati dei post
  function getData() {
    axios
      .get(apiUrl + "/posts") // Richiesta GET al server
      .then((res) => {
        console.log(res.data); // Controlla la risposta della richiesta
        setPosts(res.data); // Imposta i dati ricevuti nello stato 'posts'
      })
      .catch((error) => {
        console.log(error); // Gestisci errori di rete o server
      });
  }

  // Funzione per eliminare un post
  function deleteItem(id) {
    axios
      .delete(apiUrl + "/posts/" + id)
      .then((res) => {
        console.log(res.data);
        getData(); // Ricarica i dati dopo l'eliminazione del post
      })
      .catch((error) => {
        console.log(error); // Gestisci errori di rete o server
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
