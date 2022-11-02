import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [inputValue, setInputValue] = useState();
  const navigate = useNavigate();

  const handleChange = (event) => setInputValue(event.target.value);
  const handleSubmit = (event) => navigate(`order/${inputValue}`);

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
      <button>Accéder à mon espace</button>
    </form>
  );
}
