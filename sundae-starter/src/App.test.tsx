import React from "react"; // 顯式導入 React
import { logRoles, render, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SummaryForm from "./summary/SummaryForm";

test("test start", async () => {
  //setup user
  const user = userEvent.setup();
  render(<SummaryForm />);
  const chocolate = screen.getByRole("checkbox", { name: "Chocolate" });
  const btn = screen.getByRole("button");
  expect(chocolate).toBeInTheDocument();

  //預設不選chkBox
  expect(chocolate).not.toBeChecked();
  expect(btn).not.toBeEnabled();

  //選了 chkBox 可點 btn
  await user.click(chocolate);
  expect(btn).toBeEnabled();
  //取消 chkBox 不可點 btn
  await user.click(chocolate);
  expect(btn).not.toBeEnabled();
});

test("popover test", async () => {
  // 設定 userEvent
  const user = userEvent.setup();

  // 取得 container
  const { container } = render(<SummaryForm />);

  // logRoles 主要功用：打印出渲染元素內部有 role 的元素
  logRoles(container);

  // 取得 label 標籤 (getByRole / getByLabelText 等表單元素也沒辦法使用，所以用 getByText)
  const label = screen.getByText(/chocolate/i);

  // 確保元素在 document
  expect(label).toBeInTheDocument();

  // 取得 hover 後才會出現的元素（一開始不在文件內）
  // 只有使用 queryBy... 才不會因為找不到元素 throw err
  // 錯誤：const tooltip = screen.getByRole("tooltip");
  const tooltip = screen.queryByTestId("tooltip");
  expect(tooltip).not.toBeInTheDocument();

  // 確認使用者行為執行後，確認結構產生變化
  // user 為 promise 必須使用 await
  // expect(tooltip) 的話，在一開始就已經因為找不到所以為 null
  await user.hover(label);
  logRoles(container);
  expect(screen.getByTestId("tooltip")).toBeInTheDocument();
});
