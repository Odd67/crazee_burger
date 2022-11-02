import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => setInputValue(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Bonjour ${inputValue}`);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input
        value={inputValue}
        onChange={handleChange}
        required
        placeholder="Entrez votre prénom"
      />
      <Link to="/order">
        <button>Accéder à mon espace</button>
      </Link>
    </form>
  );
}
