// 把驼峰命名转换为横杠连接
export const toLine = (value: string) =>
  value.replace(/([A-Z])/g, '-$1').toLocaleLowerCase()
