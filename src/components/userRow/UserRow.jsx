import React from "react";
import PropTypes from "prop-types";

const UserRow = ({ user }) => {
  const { id, name, phone, email, website } = user;
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{website}</td>
      <td>
        <button>X</button>
      </td>
    </tr>
  );
};

UserRow.propTypes = {};

export default UserRow;
