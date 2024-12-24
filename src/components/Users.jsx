import React, { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from the API
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Users</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white p-4 shadow rounded flex flex-col items-center"
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="w-24 h-24 object-cover rounded-full mb-2"
            />
            <h3 className="text-lg font-bold">{user.name || "No Name"}</h3>
            <p className="text-gray-600">{user.email || "No Email"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
