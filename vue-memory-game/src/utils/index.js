import * as types from './../constant'

const _getItemName = function (num) {
  const str = '0000' + num
  return str.substring(str.length - 3, str.length)
}

const _handleData = function (data) {
  return data.map(a => {
    return {
      cardName: _getItemName(a),
      flipped: !types.FLIPPED
    }
  })
}

export const genRandomNum = function (min, max) {
  min = Math.floor(min)
  max = Math.floor(max)
  return Math.ceil(Math.random() * (max - min)) + min
}

export const shuffle = function (arr) {
  const length = arr.length
  for (let i = 0; i < length; i++) {
    const index = genRandomNum(0, length) - 1
    const tmp = arr[i]
    arr[i] = arr[index]
    arr[index] = tmp
  }
  return arr
}

export const genData = function (size) {
  let count = types.IMAGECOUNT
  if (size > count) size = count
  let set = new Set()
  for (; set.size < size;) {
    set.add(genRandomNum(0, count))
  }
  const data = shuffle([...set, ...set])
  return _handleData(data)
}

export const getLocalHighestSpeed = function () {
  let result = localStorage.getItem(types.LOCALSTORAGESTRING)
  return Number(result) || 9999
}

export const setLocalHighestSpeed = function (time) {
  localStorage.setItem(types.LOCALSTORAGESTRING, time)
}
