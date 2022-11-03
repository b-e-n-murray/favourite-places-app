import { PageHeader } from "./PageHeader";

test.skip("greet returns a string, greeting the passed name", () => {
  expect(PageHeader("World")).toBe("Hello, World!");
  expect(PageHeader("Richard")).toBe("Hello, Richard!");
  expect(PageHeader("Academy Scholars")).toBe("Hello, Academy Scholars!");
});
