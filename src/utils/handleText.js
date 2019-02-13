export function handleText (text) {
  // console.log(text)
  // let wrapReg = /(\r\n)|(\n)/g
  // console.log(wrapReg.test(text))
  return text.replace(/(\r\n)|(\n)/g, '<br>')
}
