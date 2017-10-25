require(['./js/m2.js'], fn => {
  let abc = fn()
  console.log(abc)

  function s (str) {
    let reg = /\D/g
    str = str.replace(reg, '')
    let mod = str.length % 3
    str = str.replace(/(\d{3})(?=\d)/g, '$1' + '-')
    if (mod == 1) {
      let arr = str.split('')
      arr.splice(arr.length - 3, 0, '-')
      arr.splice(arr.length - 2, 1)
      str = arr.join('')
    }
    return str
  }

  console.log(s('0323k333231223'))
})
