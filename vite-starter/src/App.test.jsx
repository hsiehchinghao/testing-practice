import { logRoles } from "@testing-library/react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

// test("App contains correct heading", () => {
//   render(<App />);
//   //用文字取得元素
//   const headingElement = screen.getByText(/learn react/i);
//   //用 role 取得元素
//   const headingEle = screen.getByRole("heading", { name: /learn react/i });
//   expect(headingEle).toBeInTheDocument();
// });

//確認點擊後變化
test("btn has correct label and color after click", () => {
  //render App
  render(<App />);
  //find btn
  const btn = screen.getByRole("button");
  //check initial color
  expect(btn).toHaveClass("red");
  //click btn
  fireEvent.click(btn);
  //check changed
  expect(btn).toHaveClass("blue");
});

test("test multi checkbox", () => {
  render(<App />);
  const check1 = screen.getByRole("checkbox", { name: /hello/i });
});
