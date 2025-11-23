import React from "react";
import { UserProps } from "../../interfaces";

interface UserCardProps {
  user: UserProps;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="border rounded-md p-4 mb-4 shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-semibold mb-2">{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>
        Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
      </p>
      {user.phone && <p>Phone: {user.phone}</p>}
      {user.website && <p>Website: {user.website}</p>}
    </div>
  );
};

export default UserCard;
