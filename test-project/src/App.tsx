import React, { useState } from "react";
import { AtInput } from "@tech-zjf/at-input";
import "@tech-zjf/at-input/dist/style.css";

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <h1>测试 @tech-zjf/at-input 组件</h1>
      <AtInput
        value={value}
        onChange={(val, selectedUsers) => {
          setValue(val);
          console.log("选中的用户:", selectedUsers);
        }}
        onRequest={async (keyword) => {
          const users = [
            { id: 1, name: "张三" },
            { id: 2, name: "李四" },
            { id: 3, name: "王五" },
          ];
          return users.filter((u) =>
            keyword ? u.name.includes(keyword) : true
          );
        }}
        placeholder="请输入内容，输入@可以提及用户"
      />
      <div style={{ marginTop: "20px" }}>
        <p>当前输入内容：{value}</p>
      </div>
    </div>
  );
}

export default App;
