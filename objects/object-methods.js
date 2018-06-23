let restaurant = {
  name: 'ASB',
  guestCapacity: 75,
  guestCount: 0,
  checkAvailablity: function(partySize) {
    let availableSeats = this.guestCapacity - this.guestCount
    if (partySize > availableSeats) {
      console.log(`There is no room for a party size of ${partySize} there are only ${availableSeats} seats available.`)
    } else {
      console.log("Right this way")
    }
  },
  seatParty: function(partySize) {
     this.guestCount += partySize
   },
  removeParty: function(partySize){
     this.guestCount -= partySize
   }
}

restaurant.seatParty(72)
restaurant.checkAvailablity(4)
restaurant.removeParty(5)
restaurant.checkAvailablity(4)
