const paragraph = document.querySelectorAll('p')
paragraph.forEach(function(para) {
  if (para.textContent.includes('the')){
    para.remove()
  } 
})
