import { useState } from "react";
import { Form, Accordion, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTask } from "../slices/todosSlice";

const NewTaskForm = () => {
  const [validated, setValidated] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity()) {
      const title = document.getElementById("newTaskTitle").value;
      const description = document.getElementById("newTaskDescription").value;

      setTitle("");
      setDescription("");
      setValidated(false);

      dispatch(addTask(title, description, "active"));
    } else {
      event.stopPropagation();
      setValidated(true);
    }
  };

  return (
    <Accordion defaultActiveKey="1" className="mb-4">
      <Accordion.Item eventKey="0">
        <Accordion.Header>New task</Accordion.Header>
        <Accordion.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group hasvalidation="true" className="mb-3">
              <Form.Label>Task title</Form.Label>
              <Form.Control
                id="newTaskTitle"
                required
                type="title"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter title for new task.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                id="newTaskDescription"
                type="description"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Accordion.Body>
      </Accordion.Item>
      <Form></Form>
    </Accordion>
  );
};

export default NewTaskForm;
