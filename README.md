# @tech-zjf/at-input

一个支持@提及功能的 React 输入组件，提供灵活的自定义选项和样式配置。

## 特性

- 支持@提及功能
- 自定义用户选择器样式
- 支持自定义选项渲染
- 支持键盘导航
- 防抖处理
- TypeScript 支持

## 安装

```bash
npm install @tech-zjf/at-input
# 或
yarn add @tech-zjf/at-input
```

## 使用示例

```jsx
import { AtInput } from "@tech-zjf/at-input";
import "@tech-zjf/at-input/dist/style.css";

const App = () => {
  // 模拟获取用户列表
  const handleRequest = async (keyword) => {
    const users = await fetchUsers(keyword);
    return users;
  };

  // 处理内容变化
  const handleChange = (content, selectedUsers) => {
    console.log("内容:", content);
    console.log("选中的用户:", selectedUsers);
  };

  return (
    <AtInput
      onRequest={handleRequest}
      onChange={handleChange}
      atColor="#1964FF"
    />
  );
};
```

## API

### AtInput Props

| 属性                  | 说明                   | 类型                                                   | 默认值    |
| --------------------- | ---------------------- | ------------------------------------------------------ | --------- |
| height                | 输入框高度             | number                                                 | 300       |
| onRequest             | 获取用户列表的回调函数 | (keyword?: string) => Promise<UserOption[]>            | -         |
| onChange              | 内容变化时的回调函数   | (content: string, selectedUsers: UserOption[]) => void | -         |
| onSelect              | 选择用户时的回调函数   | (user: UserOption) => void                             | -         |
| atColor               | @ 用户文本的颜色       | string                                                 | '#1964FF' |
| triggerChar           | 触发字符               | string                                                 | '@'       |
| debounceDelay         | 防抖延迟时间（毫秒）   | number                                                 | 300       |
| customSelectComponent | 自定义选择组件         | React.ComponentType<SelectUserProps>                   | -         |
| customSelectStyle     | 自定义选择框样式       | React.CSSProperties                                    | -         |
| renderOption          | 自定义选项渲染函数     | (option: UserOption) => React.ReactNode                | -         |
| className             | 自定义类名             | string                                                 | -         |
| style                 | 自定义样式             | React.CSSProperties                                    | -         |

### UserOption

```typescript
interface UserOption {
  name: string; // 用户名称
  id: number; // 用户ID
  avatar?: string; // 用户头像URL（可选）
}
```

## 开发

```bash
# 安装依赖
yarn

# 启动开发服务器
yarn dev

# 构建
yarn build
```

## 许可证

MIT
