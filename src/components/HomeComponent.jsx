import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useState } from "react";
const HomeComponent = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [city, setCity] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minPrice, setMinPrice] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) navigate("/login");
    if (searchParams.get("accessToken")) {
      localStorage.setItem("accessToken", searchParams.get("accessToken"));
      navigate("/");
    }
  }, [navigate, searchParams]);

  return (
    <Container>
      <Row className="justify-content-center mt-3">
        <h1> Welcome to our app!</h1>
        <input type="text" placeholder="Where do you want to go?" />
      </Row>
    </Container>
  );
};

export default HomeComponent;
