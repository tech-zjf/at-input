import AtInput from "./components/index";
import "./App.css";

function App() {
  return (
    <div
      className="min-h-screen bg-gray-100 p-8 w-full max-w-[600px] mx-auto"
      style={{ width: 600 }}
    >
      <h4>@输入框</h4>
      <AtInput
        onRequest={async (key) => {
          const users = [
            {
              name: "张三",
              id: 1,
              avatar:
                "https://p6-passport.byteacctimg.com/img/user-avatar/d499bec908ea4c0619c4fccd416d5e7c~100x100.awebp",
            },
            {
              name: "李四",
              id: 2,
              avatar:
                "https://p6-passport.byteacctimg.com/img/user-avatar/d499bec908ea4c0619c4fccd416d5e7c~100x100.awebp",
            },
            {
              name: "王五",
              id: 3,
              avatar:
                "https://p6-passport.byteacctimg.com/img/user-avatar/d499bec908ea4c0619c4fccd416d5e7c~100x100.awebp",
            },
            {
              name: "王二麻子",
              id: 4,
              avatar:
                "https://p6-passport.byteacctimg.com/img/user-avatar/d499bec908ea4c0619c4fccd416d5e7c~100x100.awebp",
            },
          ];
          return users.filter((u) => u.name.includes(key || ""));
        }}
        onChange={(val, select) => {
          console.log(val, select);
        }}
      />
    </div>
  );
}

export default App;
