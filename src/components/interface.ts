import React from "react";

/**
 * 用户选项接口，定义用户的基本信息
 */
export interface UserOption {
  name: string;
  id: number;
  avatar?: string;
}

/**
 * 光标位置接口，定义光标在页面中的坐标
 */
export interface CursorPosition {
  x: number;
  y: number;
}

/**
 * AtInput 组件的属性接口
 */
export interface AtInputProps {
  height?: number;
  // 用于请求用户选项的回调函数，接收关键字并返回一个包含用户选项的 Promise
  onRequest: (keyword?: string) => Promise<UserOption[]>;
  // 内容变化时的回调函数，接收当前内容和选中的用户列表
  onChange: (content: string, selectedUsers: UserOption[] | []) => void;
  // 用户选择时的回调函数
  onSelect?: (user: UserOption) => void;
  atColor?: string;
  // 自定义选择器组件
  customSelectComponent?: React.ComponentType<SelectUserProps>;
  // 自定义选择器样式
  customSelectStyle?: React.CSSProperties;
  // 触发字符
  triggerChar?: string;
  // 防抖延迟时间（毫秒）
  debounceDelay?: number;
  // 自定义选项渲染函数
  renderOption?: (option: UserOption) => React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * SelectUser 组件的属性接口
 */
export interface SelectUserProps {
  visible: boolean;
  options: UserOption[];
  cursorPosition: CursorPosition;
  // 用户选择时的回调函数，接收选中的用户选项
  onSelect: (user: UserOption) => void;
  // 当前选中项的索引
  selectedIndex?: number;
  // 是否正在加载数据
  loading?: boolean;
  // 自定义样式
  style?: React.CSSProperties;
  // 自定义选项渲染函数
  renderOption?: (option: UserOption) => React.ReactNode;
}
