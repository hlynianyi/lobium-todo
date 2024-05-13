import { Container } from "react-bootstrap";
import Tasks from "./Tasks";
import NewTaskForm from "./NewTaskForm";

function App() {
  return (
    <Container fluid className="mt-4">
      <NewTaskForm />
      <Tasks />
    </Container>
  );
}

export default App;
