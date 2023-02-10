import "./singleAccomodation.css";

const SingleAccomodation = ({ accomod }) => {
  return (
    <div className="singleAccomodation-main">
      <div>
        <h3>{accomod.city}</h3>
      </div>
      <div>
        <p>Price per night: {accomod.price}$</p>
      </div>
      <div>
        <p>just {accomod.maxGuests} room left</p>
      </div>
    </div>
  );
};

export default SingleAccomodation;
