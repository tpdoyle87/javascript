// read existing notes from localStorage
const getSavedNotes = function () {
  const notesJSON = localStorage.getItem('notes')

  if (notesJSON !== null) {
    return JSON.parse(notesJSON)
  } else {
    return []
  }
}

// Save notes to local localStorage
const savedNotes = function (notes) {
  localStorage.setItem('notes', JSON.stringify(notes))
}

// generate the DOM structure for a // NOTE:
const generateNoteDOM = function (note) {
  const noteEl = document.createElement('p')

  if (note.title.lenght > 0) {
    noteEl.textContent = note.title
  } else {
    noteEl.textContent = 'Unnamed note'
  }
  return noteEl
}

// render application notes
const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter(function (note) {
    // returns the filtered notes that include are search criteria
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })
  document.querySelector('#filtered-notes').innerHTML = ''

  // builds are elements that meet the criteria
  filteredNotes.forEach(function (note) {
    const noteEl = generateNoteDOM(note)

    document.querySelector('#filtered-notes').appendChild(noteEl)
  })
}
