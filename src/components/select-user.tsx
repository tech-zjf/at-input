import React from "react";
import "./index.less";
import { SelectUserProps } from "./interface";

const SelectUser = React.memo((props: SelectUserProps) => {
  const {
    options,
    visible,
    cursorPosition,
    onSelect,
    loading = false,
    style,
    renderOption,
    selectedIndex,
  } = props;
  const { x, y } = cursorPosition;

  if (!visible) return null;

  return (
    <div
      className="select-container"
      style={{
        position: "absolute",
        left: x,
        top: y + 20,
        ...style,
      }}
    >
      {loading ? (
        <div className="loading-state">加载中...</div>
      ) : options.length === 0 ? (
        <div className="empty-state">无匹配结果</div>
      ) : (
        <ul className="options-list">
          {options.map((user, index) => (
            <li
              key={user.id}
              onClick={() => onSelect(user)}
              className={`option-item ${
                selectedIndex === index ? "selected" : ""
              }`}
            >
              {renderOption ? (
                renderOption(user)
              ) : (
                <>
                  {user.avatar && (
                    <img className="avatar" src={user.avatar} alt={user.name} />
                  )}
                  <span className="name">{user.name}</span>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});

export default SelectUser;
