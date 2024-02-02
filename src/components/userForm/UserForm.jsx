import React, { useState } from "react";

const defaultData = {
  id: "",
  name: "",
  email: "",
  phone: "",
  website: "",
};
const UserForm = ({ addUserHandler }) => {
  const [userData, setUserData] = useState(defaultData);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    addUserHandler(userData);
    setUserData(defaultData);
  };

  const onInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input name="name" value={userData.name} onChange={onInputChange} />
        <input name="phone" value={userData.phone} onChange={onInputChange} />
        <input name="email" value={userData.email} onChange={onInputChange} />
        <input
          name="website"
          value={userData.website}
          onChange={onInputChange}
        />
        <button>Add User</button>
      </form>
    </div>
  );
};

export default UserForm;
