import React, { useState, useEffect } from 'react';
import { Card, Button, Container, Row, Col, Modal } from 'react-bootstrap';

const PublishedBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [username, setUsername] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    setUsername(storedUsername);

    const fetchBlogs = async () => {
      try {
        const response = await fetch(`http://localhost:5000/getPublishedBlogs?username=${storedUsername}`);
        const data = await response.json();

        if (response.ok) {
          setBlogs(data);
        } else {
          console.error('Failed to fetch blogs:', data.error);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    if (storedUsername) {
      fetchBlogs();
    }
  }, []);

  const handleShowModal = (blog) => {
    setSelectedBlog(blog);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedBlog(null);
  };

  return (
    <Container className="my-4" style={{marginBottom :'555%'}}>
      <h2 className="text-center mb-4">Published Blogs by {username}</h2>
      {blogs.length > 0 ? (
        <Row>
          {blogs.map((blog, index) => (
            <Col md={6} lg={4} className="mb-4" key={index}>
              <Card className="shadow-sm" style={{ borderRadius: '15px' }}>
                <Card.Img
                  variant="top"
                  src={blog.image || 'https://via.placeholder.com/150'}
                  alt={blog.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>{blog.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{blog.tagline}</Card.Subtitle>
                  <Card.Text>
                    <strong>Category:</strong> {blog.category}
                  </Card.Text>
                  <Card.Text>{blog.content.slice(0, 100)}...</Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                  <Button variant="primary" onClick={() => handleShowModal(blog)}>
                    Read More
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <p className="text-center">No blogs found for this user.</p>
      )}

      {/* Modal for Full Blog Content */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedBlog?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedBlog && (
            <>
              <img
                src={selectedBlog.image || 'https://via.placeholder.com/150'}
                alt={selectedBlog.title}
                style={{ width: '100%', height: 'auto', marginBottom: '15px', borderRadius: '10px' }}
              />
              <h5>{selectedBlog.tagline}</h5>
              <p><strong>Category:</strong> {selectedBlog.category}</p>
              <p>{selectedBlog.content}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default PublishedBlogs;
