import { Navbar, Nav, Container, Form, FormControl, NavDropdown } from "react-bootstrap";
import "./style.css";

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar shadow-sm">
      <Container>
        <Navbar.Brand href="/" className="logo">
          <span className="logo-text">منصة رواد الإخبارية</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto nav-links">
            <NavDropdown title="التصنيفات" id="categories-dropdown">
              <NavDropdown.Item href="#">أخبار محلية</NavDropdown.Item>
              <NavDropdown.Item href="#">أخبار عالمية</NavDropdown.Item>
              <NavDropdown.Item href="#">رياضة</NavDropdown.Item>
              <NavDropdown.Item href="#">تقنية</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="الصفحات" id="pages-dropdown">
              <NavDropdown.Item href="#">من نحن</NavDropdown.Item>
              <NavDropdown.Item href="#">سياسة الخصوصية</NavDropdown.Item>
              <NavDropdown.Item href="#">الشروط والأحكام</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#">تواصل معنا</Nav.Link>
            <Nav.Link href="#">حول الموقع</Nav.Link>
          </Nav>

          <Form className="d-flex search-bar">
            <FormControl type="search" placeholder="ابحث عن شيء ...." className="me-2" />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
