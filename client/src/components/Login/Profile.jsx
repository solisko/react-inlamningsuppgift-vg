import { useLocation } from "react-router-dom";

export default function Profile() {
  const location = useLocation();
  const username = location.state.username;

  return (
    <div>
      <h1>Welcome, {username}!</h1>
    </div>
  );
}
