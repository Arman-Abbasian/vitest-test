import { screen, render } from "@testing-library/react";
import TodoList, { todoUrl, userUrl } from "../src/components/TodoList";
import "@testing-library/jest-dom";
import "text-encoding-utf-8";
import "fast-text-encoding";
import "isomorphic-fetch";

import { HttpResponse, http } from "msw";
import { setupServer } from "msw/node";

const todoResponse = http.get(todoUrl, () => {
  return HttpResponse.json([
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      title: "et porro tempora",
      completed: true,
    },
    {
      userId: 1,
      id: 5,
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: false,
    },
  ]);
});

// const todoErrorResponse = http.get(todoUrl, () => {
//   return HttpResponse.json(500);
// });

const userResponse = http.get(userUrl, () => {
  return HttpResponse.json([
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
        geo: {
          lat: "-43.9509",
          lng: "-34.4618",
        },
      },
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
      company: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains",
      },
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      address: {
        street: "Douglas Extension",
        suite: "Suite 847",
        city: "McKenziehaven",
        zipcode: "59590-4157",
        geo: {
          lat: "-68.6102",
          lng: "-47.0653",
        },
      },
      phone: "1-463-123-4447",
      website: "ramiro.info",
      company: {
        name: "Romaguera-Jacobson",
        catchPhrase: "Face to face bifurcated interface",
        bs: "e-enable strategic applications",
      },
    },
  ]);
});

const handlers = [todoResponse, userResponse];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("it should have the correct todo item 'delectus aut autem'", async () => {
  render(<TodoList />);
  const todoItem = await screen.findByText("delectus aut autem");
  expect(todoItem).toBeVisible();
});

test("it should have correct user 'et porro tempora'", async () => {
  render(<TodoList />);
  const todoItem = await screen.findByText("et porro tempora");
  expect(todoItem).toBeVisible();
});

// test("it should have the correct todo item clean car", async () => {
//   render(<TodoList />);
//   const todoItem = await screen.findByText("clean car");
//   expect(todoItem).toBeVisible();
// });

// test("it should have correct user Clark Kent", async () => {
//   render(<TodoList />);
//   const todoItem = await screen.findByText("Clark Kent");
//   expect(todoItem).toBeVisible();
// });

// test("it should handle error message from todo", async () => {
//   server.use(todoErrorResponse);
//   render(<TodoList />);
//   const todoItem = await screen.findByText("Opps come back later");
//   expect(todoItem).toBeVisible();
// });
