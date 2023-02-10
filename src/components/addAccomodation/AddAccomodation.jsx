import "./addAccomodation.css";
import { useState } from "react";
const AddAccomodation = () => {
  const [dataToPost, setDataToPost] = useState({
    city: "",
    price: 1,
    maxGuests: 1,
    email: "",
    description: "s",
  });
  console.log(dataToPost);
  const fetchAccomodations = async (dataToPost) => {
    const accessToken = localStorage.getItem("accessToken");
    const res = await fetch(`http://localhost:3001/accomodations`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToPost),
    });
    const data = await res.json();
    return data;
  };

  return (
    <div className="singleAccomodation-main mt-5">
      <div className="mt-4">
        <h3>Add a city name</h3>
        <input
          type="text"
          placeholder="city"
          onChange={(e) =>
            setDataToPost({ ...dataToPost, city: e.target.value })
          }
        />
      </div>
      <div className="mt-4">
        <p>Add price per night in $</p>
        <input
          type="text"
          placeholder="price"
          onChange={(e) =>
            setDataToPost({ ...dataToPost, price: e.target.value })
          }
        />
      </div>
      <div className="mt-4">
        <p>How many room available?</p>
        <input
          type="text"
          placeholder="rooms"
          onChange={(e) =>
            setDataToPost({ ...dataToPost, maxGuests: e.target.value })
          }
        />
      </div>
      <div className="mt-4">
        <p>enter your mail</p>
        <input
          type="text"
          placeholder="your email"
          onChange={(e) =>
            setDataToPost({ ...dataToPost, email: e.target.value })
          }
        />
      </div>
      <div className="mt-4">
        <p>description</p>
        <input
          type="text"
          placeholder="description"
          onChange={(e) =>
            setDataToPost({ ...dataToPost, description: e.target.value })
          }
        />
      </div>
      <div className="mt-4">
        <button onClick={(e) => fetchAccomodations(dataToPost)}>Submit</button>
      </div>
    </div>
  );
};

export default AddAccomodation;
