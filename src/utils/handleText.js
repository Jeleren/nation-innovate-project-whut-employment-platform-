export function handleText (text) {
  return text.replace(/(\r\n)|(\n)/g, '<br>')
}
