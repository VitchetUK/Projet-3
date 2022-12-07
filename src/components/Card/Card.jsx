import React from "react";
import { Link } from "react-router-dom";

const Card = ({ _id, user, cardType, ...rest }) => {
  const data = Object.entries(rest).map((microArray) => {
    const key = splitWords(microArray[0]);
    return [key, microArray[1]];
  });
  console.log(data);
  return (
    <div className="onePostDiv" key={_id}>
      <div className="imgLinkDiv">
        <Link to={`${cardType}${_id}`}>
          <img className="profilePic" src={user.picture} alt="" />
        </Link>
      </div>
      <p className="onePostName">{user.name}</p>
      <div className="onePostInfo">
        {data.map((element) => {
          return (
            <p>
              {element[0]}: {element[1]}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Card;

function splitWords(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      return `${str.at(0).toUpperCase()}${str.slice(1, i)} ${str
        .slice(i)
        .toLowerCase()}`;
    }
  }
  return str.at(0).toUpperCase() + str.slice(1);
}
