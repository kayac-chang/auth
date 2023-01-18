import { useNavigate } from "react-router-dom";
import login from "../api/login";

function Route() {
  const nav = useNavigate();

  function onSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(
      new FormData(event.currentTarget).entries()
    );

    login(data).then(() => nav("/"));
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="email">Email: </label>
        <input id="email" name="email" type="text" />
      </div>

      <div>
        <label htmlFor="password">Password: </label>
        <input id="password" name="password" type="password" />
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default Route;
