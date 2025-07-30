class TicketsService {
  constructor() {
    this.tickets = [];
  }

  setTickets(tickets) {
    tickets.forEach((element) => {
      this.tickets = tickets;
    });
  }

  findTickets() {
    return [...this.tickets].sort((a, b) => a.creation - b.creation);
  }
}

const service = new TicketsService();

function setTickets(tickets) {
  return service.setTickets(tickets);
}

function findTickets() {
  return service.findTickets();
}

module.exports = { setTickets, findTickets };
