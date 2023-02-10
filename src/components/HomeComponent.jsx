import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useState } from "react";
import SingleAccomodation from "./singleAccomodation/SingleAccomodation";
const HomeComponent = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [accomodations, setAccomodation] = useState([]);
  const [city, setCity] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minPrice, setMinPrice] = useState("");
  console.log(localStorage.getItem("accessToken"));
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) navigate("/login");
    if (searchParams.get("accessToken")) {
      localStorage.setItem("accessToken", searchParams.get("accessToken"));
      navigate("/");
    }
    fetchAccomodations();
  }, [navigate, searchParams]);

  const fetchAccomodations = async () => {
    const accessToken = localStorage.getItem("accessToken");
    const res = await fetch(
      `http://localhost:3001/accomodations?city=${city}&maxPrice=${maxPrice}&minPrice=${minPrice}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await res.json();
    setAccomodation(data);
  };
  return (
    <Container>
      <Row className="justify-content-center mt-3">
        <h1> Welcome to our app!</h1>
        <div className="homepage-display-flex">
          <input
            type="text"
            placeholder="Where do you want to go?"
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="text"
            placeholder="max price"
            onChange={(e) => setMaxPrice(e.target.value)}
          />
          <input
            type="text"
            placeholder="min price"
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <button onClick={() => fetchAccomodations()}>Search</button>
        </div>
        {accomodations.length > 1 && (
          <div className="list-of-accomodation mt-5">
            {accomodations.map((acc, i) => (
              <SingleAccomodation accomod={acc} />
            ))}
          </div>
        )}
      </Row>
    </Container>
  );
};

export default HomeComponent;
