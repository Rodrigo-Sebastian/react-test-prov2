// 1. Kommentarslista 3p
// Skapa en React-komponent för att hantera och visa en lista
// med kommentarer. Användare ska kunna lägga till och ta bort kommentarer.
// Listan är tom från början.

// Skapa Ett inputfält och en "Lägg till"-knapp för nya kommentarer.
// och en "Ta bort"-knapp bredvid varje kommentar för att ta bort den från listan.

// 1. Kommentarslista 3p
// Hantera och visa en lista
// med kommentarer. Användare ska kunna lägga till och ta bort kommentarer.
// Listan är tom från början.

import { useState } from "react";

// Skapa Ett inputfält och en "Lägg till"-knapp för nya kommentarer.
// och en "Ta bort"-knapp bredvid varje kommentar för att ta bort den från listan.

let count = 1; //let används för att kunna ändra och ge varje användare ett specifikt id!

export default function App() {
  const [comments, setComments] = useState([]); // en variabel med namnet comments, som innehåller lista över kommentarer och en setComments som avänds för att uppdatera värdet på comments
  const [input, setInput] = useState(""); //en tillstånds variabel med namnet input för att hålla värdet av inmatningsfältet för att lägaa till nya kommentarer.

  function handleComment(e) { //en funktion som skapar en ny kommentera genom att ta tag i värdet e.
    setInput(e.target.value);
  }

  function handleAddComment() { //en funktion som lägger till en nu kommentar till listan med ett id och text.
    const comment = {
      id: count++,
      text: input,
    };

    setComments([...comments, comment]);
  }

  function handleRemove(id) {
    const filteredComments = comments.filter((comment) => comment.id != id);
    setComments(filteredComments);
  }

  return (
    <main>
      {comments.map((comment) => { //en komponet som looper igenom varje kommentar av arrayen oc hrenderar till jdx för varje kommentar
        return (
          <div>
            <p>{comment.text}</p>
            <button onClick={() => handleRemove(comment.id)}>Remove</button>
          </div>
        );
      })}

      <input type="text" onChange={handleComment} />
      <button onClick={handleAddComment}>Add</button>
    </main>
  );
}
