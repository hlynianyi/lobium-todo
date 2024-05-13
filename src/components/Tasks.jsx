import { useSelector, useDispatch } from "react-redux";
import { toggleTodoState } from "../slices/todosSlice";
import { InputGroup, Card, Stack } from "react-bootstrap";

const Tasks = () => {
  const tasks = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <Stack gap={2}>
      {tasks.map((todo) => (
        <Card key={todo.id}>
          <Card.Header>{todo.title}</Card.Header>
          <Card.Body>
            <Card.Title>
              <InputGroup>
                <InputGroup.Text
                  style={{
                    color: todo.status === "completed" ? "orange" : "green",
                  }}
                >
                  {todo.status}
                </InputGroup.Text>
                <InputGroup.Checkbox
                  aria-label="Checkbox for task status"
                  onChange={() => dispatch(toggleTodoState(todo.id))}
                />
              </InputGroup>
            </Card.Title>
            <Card.Text>{todo.description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Stack>
  );
};

export default Tasks;
