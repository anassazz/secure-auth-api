import { useContext } from "react";
import { UserContext } from "../context/userContext";

function Dashboard() {
  const { user } = useContext(UserContext);
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-orange-500 mb-4">Dashboard</h1>
      {user && (
        <h2 className="text-xl text-gray-700">
          Hi <span className="font-semibold">{user.name}</span>!
        </h2>
      )}
    </div>
  );
}

export default Dashboard;
