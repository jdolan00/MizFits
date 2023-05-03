import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

const UserDetails = ({ render }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const decoded = jwt_decode(token);
        const userId = decoded.id;

        const response = await fetch(`http://localhost:3001/api/user/${userId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return <>{render(user)}</>;
};

export default UserDetails;