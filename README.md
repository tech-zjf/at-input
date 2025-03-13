# at-input

一个支持@用户功能的 React 富文本输入组件

## 特性

- 支持 @ 提及用户功能
- 支持自定义触发字符
- 支持自定义用户选择界面
- 支持自定义样式
- 支持自定义选项渲染
- 支持自定义筛选逻辑
- 支持输入长度限制
- 支持禁用状态
- 支持防抖优化

## 安装

```bash
npm install at-input
# 或
yarn add at-input
```

## 使用示例

```jsx
import React from "react";
import AtInput from "at-input";

const App = () => {
  // 模拟获取用户列表
  const handleRequest = async (keyword) => {
    // 这里替换为实际的 API 调用
    return [
      { id: 1, name: "张三", avatar: "avatar1.jpg" },
      { id: 2, name: "李四", avatar: "avatar2.jpg" },
    ];
  };

  // 处理内容变化
  const handleChange = (content, selectedUsers) => {
    console.log("内容：", content);
    console.log("选中的用户：", selectedUsers);
  };

  return (
    <AtInput
      height={200}
      onRequest={handleRequest}
      onChange={handleChange}
      placeholder="输入 @ 提及用户"
      maxLength={1000}
      triggerChar="@"
      debounceDelay={300}
    />
  );
};

export default App;
```

## API

### AtInput Props

| 属性                  | 说明                   | 类型                                                   | 默认值    |
| --------------------- | ---------------------- | ------------------------------------------------------ | --------- |
| height                | 输入框高度             | number                                                 | 300       |
| onRequest             | 获取用户列表的回调函数 | (keyword?: string) => Promise<UserOption[]>            | -         |
| onChange              | 内容变化时的回调函数   | (content: string, selectedUsers: UserOption[]) => void | -         |
| onBlur                | 失去焦点时的回调函数   | (content: string) => void                              | -         |
| onFocus               | 获得焦点时的回调函数   | () => void                                             | -         |
| placeholder           | 占位符文本             | string                                                 | -         |
| atColor               | @ 用户文本的颜色       | string                                                 | '#1890ff' |
| maxLength             | 最大输入长度           | number                                                 | -         |
| triggerChar           | 触发字符               | string                                                 | '@'       |
| debounceDelay         | 防抖延迟时间（毫秒）   | number                                                 | 300       |
| customSelectComponent | 自定义选择组件         | React.ComponentType<SelectUserProps>                   | -         |
| customSelectStyle     | 自定义选择框样式       | React.CSSProperties                                    | -         |
| disabled              | 是否禁用               | boolean                                                | false     |
| renderOption          | 自定义选项渲染函数     | (option: UserOption) => React.ReactNode                | -         |
| filterOption          | 自定义筛选逻辑         | (input: string, option: UserOption) => boolean         | -         |

### UserOption

```typescript
interface UserOption {
  name: string;
  id: number;
  avatar?: string;
  [key: string]: any; // 支持其他自定义字段
}
```

### SelectUserProps

```typescript
interface SelectUserProps {
  visible: boolean;
  options: UserOption[];
  cursorPosition: { x: number; y: number };
  onSelect: (user: UserOption) => void;
  style?: React.CSSProperties;
  renderOption?: (option: UserOption) => React.ReactNode;
}
```

## 自定义示例

### 自定义选项渲染

```jsx
const App = () => {
  const renderOption = (user) => (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src={user.avatar}
        alt={user.name}
        style={{ width: 30, height: 30, borderRadius: "50%" }}
      />
      <div style={{ marginLeft: 10 }}>
        <div>{user.name}</div>
        <div style={{ fontSize: 12, color: "#999" }}>{user.title}</div>
      </div>
    </div>
  );

  return (
    <AtInput
      onRequest={handleRequest}
      onChange={handleChange}
      renderOption={renderOption}
    />
  );
};
```

### 自定义筛选逻辑

```jsx
const App = () => {
  const filterOption = (input, option) => {
    return (
      option.name.toLowerCase().indexOf(input.toLowerCase()) >= 0 ||
      option.title.toLowerCase().indexOf(input.toLowerCase()) >= 0
    );
  };

  return (
    <AtInput
      onRequest={handleRequest}
      onChange={handleChange}
      filterOption={filterOption}
    />
  );
};
```

## 开发

```bash
# 安装依赖
yarn

# 开发模式
yarn dev

# 构建
yarn build

# 运行测试
yarn test
```

## 许可证

MIT
