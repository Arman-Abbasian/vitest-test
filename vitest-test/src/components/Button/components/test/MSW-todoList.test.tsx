
import { server } from "./mocks/server";
import { HttpResponse, http } from "msw";
import MSWTodoList from "../MSW-todoList";
import { render,screen } from "../test/utils/test-utils";

it("api success secnario on load", async () => {
    render(<MSWTodoList />);
    expect(await screen.findByText("1")).to
  });

  it("api error scenario on load", () => {
    render(<MSWTodoList />);
    server.use(
      http.get("https://dummyjson.com/todos", () => {
        return new HttpResponse(null, { status: 401 });
      })
    );
    expect(screen.queryByText("Todo List")).not.toBeInTheDocument();
  });

  // it("api success scenario on load", () => {
  //   render(<MSWTodoList />);
  //   server.use(
  //     http.get('https://jsonplaceholder.typicode.com/todos', () => {
  //       return HttpResponse.json({
  //           "todos": [
  //               {
  //                   "id": 1,
  //                   "title": "Do something nice for someone I care about",
  //                   "completed": true,
  //                   "userId": 26
  //               },
  //           ]
  //       }, { status: 200 })
  //   }
  // )
  //   );
  //   expect(screen.queryByText("1")).toBeInTheDocument();
  // });