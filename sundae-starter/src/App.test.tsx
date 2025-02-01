import React from "react"; // 顯式導入 React
import { render, screen, fireEvent } from "@testing-library/react";
import SummaryForm from "./summary/SummaryForm";

test("test start", async () => {
  render(<SummaryForm />);
  const chocolate = screen.getByRole("checkbox", { name: "Chocolate" });
  const strawberry = screen.getByRole("checkbox", { name: "Strawberry" });
  const btn = screen.getByRole("button");
  expect(chocolate).toBeInTheDocument();
  expect(strawberry).toBeInTheDocument();
  //預設不選chkBox
  expect(chocolate).not.toBeChecked();
  expect(strawberry).not.toBeChecked();
  expect(btn).not.toBeEnabled();
  //選了 chkBox 可點 btn
  fireEvent.click(chocolate);
  expect(btn).toBeEnabled();
  //取消 chkBox 不可點 btn
  fireEvent.click(chocolate);
  expect(btn).not.toBeEnabled();
});
