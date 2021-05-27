import React, { useEffect, useState } from "react";
import { fetchArticle } from "../service/article_service";
import { Button, Container, Table } from "react-bootstrap";
import Moment from "react-moment";
import moment from "moment";

function Article() {
  const [articles, setArticles] = useState([]);

  useEffect(async () => {
    let data = await fetchArticle();
    setArticles(data);
  }, []);

  return (
    <Container>
      <h1 className="my-3">Articles</h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th style={{ width: "15%" }}>Title</th>
            <th style={{ width: "35%" }}>Description</th>
            <th>Create At</th>
            <th style={{ width: "10%" }}>Thumbnail</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {articles.length === 0 ? (
            <tr>
              <h3>Loading...</h3>
            </tr>
          ) : (
            articles.map((article, index) => (
              <tr key={article._id}>
                <td>{index}</td>
                <td>{article.title}</td>
                <td className="text-3">{article.description}</td>
                <td>
                  <Moment format="YYYY/MM/DD">{article.createdAt}</Moment>{" "}
                </td>
                <td>
                  <img
                    alt="img"
                    className="w-100"
                    src="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081"
                  />
                </td>
                <td>
                  <Button size="sm" variant="primary">
                    View
                  </Button>
                  <Button size="sm" variant="warning" className="mx-2">
                    Edit
                  </Button>
                  <Button size="sm" variant="danger">
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </Container>
  );
}

export default Article;
