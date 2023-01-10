import { Navigate } from "react-router-dom";

function Route() {
  const user = undefined;

  if (!user) return <Navigate to="/login" replace />;

  return (
    <div>
      <h1>About</h1>

      {user}
    </div>
  );
}

export default Route;
