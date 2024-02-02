import React, { useEffect, useState } from "react";
import UserRow from "../../components/userRow/UserRow";
import "./userApp.style.css";
import UserForm from "../../components/userForm/UserForm";

const url = "https://jsonplaceholder.typicode.com/users";

const UsersApp = () => {
  const [userList, setUserList] = useState([]);
  const [isUserFormOpen, setIsUserFormOpen] = useState(true);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setUserList(data);
    } catch (error) {
      console.log("error");
    }
  };

  const addUserHandler = (user) => {
    console.log("user", user);
  };

  return (
    <div>
      {isUserFormOpen ? <UserForm addUserHandler={addUserHandler} /> : null}
      <table>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>phone</th>
          <th>website</th>
          <th>action</th>
        </tr>
        {userList.map((el) => (
          <UserRow user={el} />
        ))}
      </table>
    </div>
  );
};

export default UsersApp;
