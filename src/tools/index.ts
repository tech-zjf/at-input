export class StringTools {
  /**
   * 获取光标位置
   * @param element 输入框元素
   * @returns 光标位置
   */
  static getCursorPosition(
    element: HTMLTextAreaElement | HTMLInputElement
  ): number {
    return element.selectionStart || 0;
  }

  /**
   * 设置光标位置
   * @param element 输入框元素
   * @param position 光标位置
   */
  static setCursorPosition(
    element: HTMLTextAreaElement | HTMLInputElement,
    position: number
  ): void {
    element.focus();
    element.setSelectionRange(position, position);
  }

  /**
   * 在指定位置插入文本
   * @param text 原始文本
   * @param insertText 要插入的文本
   * @param position 插入位置
   * @returns 插入后的文本
   */
  static insertText(
    text: string,
    insertText: string,
    position: number
  ): string {
    return text.slice(0, position) + insertText + text.slice(position);
  }

  /**
   * 获取@用户的文本
   * @param user 用户信息
   * @returns @用户文本
   */
  static getAtUserText(user: { name: string }): string {
    return `@${user.name} `;
  }

  /**
   * 解析文本中的@用户
   * @param text 文本内容
   * @returns @用户列表
   */
  static parseAtUsers(text: string): string[] {
    const regex = /@([^\s]+)/g;
    const matches = text.match(regex);
    return matches ? matches.map((match) => match.slice(1).trim()) : [];
  }

  static isIncludeSpacesOrLineBreak(str: string) {
    return /(\s+)|([\r\n])/gi.test(str);
  }
}
