const notes = [{
  title: 'My next trip',
  body: 'I would like to go to Spain'

}, {
  title: 'Habits to work on',
  body: 'Exercise, eating better'
}, {
  title: 'Office Modifications',
  body: 'Get a new seat'
}]


const sortNotes = function (notes) {
  notes.sort(function (a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1
    } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1
    } else {
      return 0
    }
  })
}

const findNote = function(notes, noteTitle){
  return notes.find(function(note, index){
    return note.title.toLowerCase() === noteTitle.toLowerCase()
  })
}
const findNotes = function (notes, query) {
  return notes.filter(function (note, index) {
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
    return isTitleMatch || isBodyMatch
  })
}
// console.log(findNotes(notes, 'ne'))


// const note = findNote(notes, 'some other Office Modifications')
// console.log(note)

sortNotes(notes)
console.log(notes)
