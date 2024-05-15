import { render,screen } from "@testing-library/react";
import TodoList from "./TodoList";

// beforeAll(() => server.listen()); // Start the mock server before running tests
// afterEach(() => server.resetHandlers()); // Reset any request handlers that we may add in individual tests
// afterAll(() => server.close()); // Clean up after all tests are done
describe("TodoList", () => {
  it("api success secnario on load", async () => {
    render(<TodoList />);
    expect(await screen.findByText("count: 0")).toBeInTheDocument();
  });
  it("increament button be in the document", () => {
    render(<TodoList />);
    expect(screen.getByText("+")).toBeInTheDocument();
  });
  it("increment button be in the document", () => {
    render(<TodoList />);
    expect(screen.getByText("+")).toBeInTheDocument();
  });
  it("decrement button be in the document", () => {
    render(<TodoList />);
    expect(screen.getByText("-")).toBeInTheDocument();
  });
  it("increment button click be in the document", () => {
    render(<TodoList />);
    expect(screen.getByText("+")).toBeInTheDocument();
  });
  it("decrement button be in the document", () => {
    render(<TodoList />);
    expect(screen.getByText("-")).toBeInTheDocument();
  });
//   it("length of todo in TodoList", async () => {
//     render(<TodoList />);
//     expect(await screen.findByText("2")).toBeInTheDocument();
//   });
//   it("Todo 2 rendered in p element", async () => {
//     render(<TodoList />);
//     expect(await screen.findByText("Todo 2")).toBeInTheDocument();
//   });
});

