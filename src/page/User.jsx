import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { USER_URL } from "../api/api";
import Item from "../components/Item";

function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(USER_URL)
      .then((response) => response.json())
      .then((json) => {
        setUsers(json.data);
      });
  }, []);

  return (
    <Container>
      <h1 className="my-3">List Users</h1>
      {users.length === 0 ? (
        <h3>Loading..</h3>
      ) : (
        <Row>
          {users.map((user, index) => (
            <Col key={index} md={4}>
              <Item user={user} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default User;
