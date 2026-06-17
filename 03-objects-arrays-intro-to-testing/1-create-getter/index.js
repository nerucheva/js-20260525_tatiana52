/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */

export function createGetter(path) {
  const objNodes = path.split(".");

  return (obj) => {
    if (!obj) {
      return undefined;
    }

    let result = obj;

    for (let i = 0; i < objNodes.length; i++) {
      if (Object.hasOwn(result, objNodes[i])) {
        result = result[objNodes[i]];
      } else {
        result = undefined;
        break;
      }
    }

    return result;
  };
}
