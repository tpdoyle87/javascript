const notes = getSavedNotes()

// empty object for what we will be filtering are notes by
const filters = {
  searchText: ''
}

const user = {
  name: 'andrew',
  age: 27
}

renderNotes(notes, filters)

document.querySelector('#create').addEventListener('click', function (event) {
  notes.push({
    title: '',
    body: ''
  })
  savedNotes(notes)
  renderNotes(notes, filters)
})

// renders notes that match our search criteria
document.querySelector('#search-text').addEventListener('input', function (e) {
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
  console.log(e.target.value)
})
