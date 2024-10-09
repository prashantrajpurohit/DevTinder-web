import React from "react";
import { useSelector } from "react-redux";

const UserCard = () => {
  const { userData } = useSelector((store) => store?.data);
  console.log(userData);

  return (
    <div
      className="card bg-base-100 w-96 shadow-xl mx-auto my-28"
      draggable={true}
    >
      <figure>
        <img src="/images/user.jpg" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {userData?.firstName + " " + userData?.lastName}
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
