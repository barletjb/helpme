class Ticket {
  constructor(id, titre, auteur, description, creation, etat) {
    if (!titre || titre.length > 50) {
      throw new Error("Titre obligatoire et <= 50 caractères");
    }

    if (!auteur) {
      throw new Error("Auteur obligatoire");
    }

    if (description && description.length > 2000) {
      throw new Error("Description <= 2000 caractères");
    }

    this.id = id;
    this.titre = titre;
    this.auteur = auteur;
    this.description = description;
    this.creation = new Date();
    this.etat = etat || EtatTicket.OUVERT;
  }
}

const EtatTicket = Object.freeze({
  OUVERT: "OUVERT",
  CLOS: "CLOS",
});

module.exports = { Ticket, EtatTicket };
