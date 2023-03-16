const countComment = (parentNode) => {
  const number = parentNode.childElementCount-3
  return number
}

const printComment = (number) => {
  const commentTitle = document.getElementById('comment-title')
  commentTitle.innerHTML = `Comments(${number})`
}

export {countComment, printComment}