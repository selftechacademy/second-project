import React from "react";
import PropTypes from "prop-types";
import { FaHeart } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const DogCard = ({ url, id, likes, onDeleteClick, onLikeClick }) => {
  return (
    <div>
      <img src={url} width={"100%"} />
      <FaHeart onClick={() => onLikeClick(id)} />
      <span>{likes}</span>
      <MdDeleteForever onClick={() => onDeleteClick(id)} />
    </div>
  );
};

DogCard.propTypes = {};

export default DogCard;
