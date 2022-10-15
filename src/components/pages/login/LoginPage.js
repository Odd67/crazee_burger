import { useState } from "react";

export default function LoginPage() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => setInputValue(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Bonjour ${inputValue}`);
    setInputValue("");
  };

  return (
    <div>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={handleChange}
          required
          placeholder="Entrez votre prénom"
        />
        <button>Accéder à mon espace</button>
      </form>
    </div>
  );
}
