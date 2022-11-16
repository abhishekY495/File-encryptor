// Source - https://github.com/carlz812/railFenceCipher
const railfence = {
  cipher: function (string) {
    let arr = string.split("");
    let result = [];
    for (var i = 0; i < 2; i++) {
      result[i] = [];
      for (var j = 0; j < arr.length; j++) {
        var k = j * 2 + i;
        k < arr.length ? result[i].push(k) : 1;
        if (i !== 0 && i !== 2) {
          var k2 = j * 2 - i;
          k2 < arr.length && k2 > 0 ? result[i].push(k2) : 1;
        }
      }
    }

    function uniqueSort(arr) {
      arr = Array.from(new Set(arr));
      return arr.sort(function (a, b) {
        return a - b;
      });
    }

    result = result
      .map(function (arr) {
        return uniqueSort(arr);
      })
      .reduce(function (a, b) {
        return a.concat(b);
      })
      .map(function (i) {
        return arr[i];
      })
      .join("");
    return result;
  },
  decipher: function (string) {
    const stringArr = string.split("");
    const len = parseInt(stringArr.length / 2);
    const remainder = stringArr.length % 2;
    const splitArr = [];
    let tempArr = [];
    const result = [];
    for (var i = 0; i < 2; i++) {
      splitArr.push(i == 0 || i == 2 - 1 ? len : 2 * len);
    }
    if (remainder > 2) {
      splitArr = splitArr.map(function (num) {
        return num + 1;
      });
      remainder = remainder - 2;
      for (var j = 2 - 2; j >= 2 - remainder - 1; j--) {
        splitArr[j]++;
      }
    } else {
      for (var j = 0; j < remainder; j++) {
        splitArr[j]++;
      }
    }

    tempArr = splitArr.map(function (len) {
      var ans = stringArr.splice(0, len);
      return ans;
    });
    var float = 0,
      k = 0;

    function lineUp(isAdd) {
      if (k === string.length) {
        return;
      }
      result.push(tempArr[float].shift());
      k++;
      isAdd ? float++ : float--;
      if (float === 2) {
        float = float - 2;
        isAdd = false;
      }
      if (float === 0) {
        isAdd = true;
      }
      lineUp(isAdd);
    }

    lineUp(true);
    return result.join("");
  },
};

module.exports.railfence = railfence;
