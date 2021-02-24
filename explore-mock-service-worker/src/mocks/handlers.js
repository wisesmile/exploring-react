import { rest } from "msw";

const handlers = [
  rest.get("https://swapi.dev/api/people/1", (req, res, context) => {
    return res(
      context.status(200),
      context.json({ username: "Obi Wan Kenobi" })
    );
  }),
];

export { handlers, rest };
