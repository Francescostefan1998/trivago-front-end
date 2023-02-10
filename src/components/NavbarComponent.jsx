import { Navbar, Container, Nav } from "react-bootstrap";
import "../components/navbar.css";
import { AiOutlineHeart } from "react-icons/ai";
const NavbarComponent = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/" id="navbar-image-logo">
            <img
              src="https://th.bing.com/th/id/R.a6b3454a7e09890715b234e23e34020f?rik=d8eStAK6R%2fWx%2fw&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f10%2fTrivago_logo_logotype.png&ehk=9J3YOrlZAbPgAC4vboB0X3VhuNgY%2fbGncyywiL6Tfo4%3d&risl=&pid=ImgRaw&r=0"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="navbar-display-flex-end"
          >
            <Nav className="navbar-display-flex-end">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/">
                <AiOutlineHeart />
                My favourite
              </Nav.Link>

              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/">Menue</Nav.Link>

              <Nav.Link href="/users">Users</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
