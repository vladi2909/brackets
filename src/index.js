module.exports = function check(str, bracketsConfig) {
 
  let map = new Map(bracketsConfig);
  let array = [];

  for (let i = 0; i < str.length; i++) {
          str[i] === map.get(array[array.length - 1])
                  ? array.pop()
                  : array.push(str[i]);
  }

  return array.length === 0;
}

