import login from "../api/login";

function Route() {
  function onSubmit(event) {
    event.preventDefault();

    login(Object.fromEntries(new FormData(event.currentTarget).entries()))
      //
      .then(console.log);
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
