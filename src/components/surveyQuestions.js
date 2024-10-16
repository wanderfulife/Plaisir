


export const questions = [
	{
		id: "Q1",
		text: "Lieu d'enquête : secteur et nom de la rue ou du parking",
		freeText: true,
		next: "Q2",
	},
	{
		id: "Q2",
		text: "La personne ... ",
		options: [
			{ id: 1, text: "Monte dans un véhicule", next: "Q3" },
			{ id: 2, text: "Descend d'un véhicule", next: "Q3" },
		],
	},
	{
		id: "Q3",
		text: "Nombre de personnes dans le véhicule (Indiquez le nombre de personnes (adultes + enfants) dans le véhicule y compris le conducteur)",
		freeText: true,
		next: "Q4",
	},
	{
		id: "Q4",
		text: "Pour quelle raison principale êtes vous garés ici ?",
		options: [
			{ id: 1, text: "Vous prenez ou avez pris le train", next: "Q5" },
			{ id: 2, text: "Vous prenez ou avez pris un  bus", next: "Q5" },
			{ id: 3, text: "Vous accompagnez une personne qui prend/va prendre un train", next: "Q5" },
			{ id: 4, text: "Vous venez prendre un renseignement/ acheter un billet en gare", next: "Q5" },
			{ id: 5, text: "Vous travaillez dans le quartier", next: "Q5" },
			{ id: 6, text: "Vous habitez dans le quartier", next: "Q5" },
			{ id: 7, text: "Vous vous rendez dans un commerce/bureau/service/école... du quartier", next: "Q5" },
			{ id: 8, text: "Vous rendez visite à quelqu'un dans le quartier", next: "Q5" },
			{ id: 9, text: "Vous venez récupérer quelqu'un a la gare", next: "Q5" },
			{ id: 10, text: "Autre", next: "Q5" },
		],
	},
	{
		id: "Q5",
		text: "Combien de temps prévoyez-vous de/êtes-vous restés garés ici ?",
		options: [
			{ id: 1, text: "Moins de  20 minutes", next: "Q6" },
			{ id: 2, text: "Maximum 1h", next: "Q6" },
			{ id: 3, text: "De 1h à 2h", next: "Q6" },
			{ id: 4, text: "De 2h à 4h", next: "Q6" },
			{ id: 5, text: "Toute la journée", next: "Q6" },
			{ id: 6, text: "Plus d'une journée", next: "Q6" },
			{ id: 7, text: "Toute la nuit", next: "Q6" },
		],
	},
	{
		id: "Q6",
		text: "Vous stationnez ici, pour le même motif ?",
		options: [
			{ id: 1, text: "Tous les jours y compris le WE", next: "Q7" },
			{ id: 2, text: "4 à 5 fois par semaine", next: "Q7" },
			{ id: 3, text: "2 à 3 fois  par semaine", next: "Q7" },
			{ id: 4, text: "1 fois par semaine", next: "Q7" },
			{ id: 5, text: "entre 1 fois par semaine et 1 fois par mois", next: "Q7" },
			{ id: 6, text: "Moins souvent", next: "Q7" },
		],
	},
	{
		id: "Q7",
		text: "Quelle est votre commune/quartier de résidence",
		options: [
			{ id: 1, text: "Plaisir - Grignon", next: "Quartier" },
			{ id: 2, text: "Autre commune", next: "Q8" },
		],
	},
	{
		id: "Q8",
		text: "Quelle est votre commune/quartier de résidence",
		usesCommuneSelector: true,  // Add this flag to indicate it uses CommuneSelector
		next: "end"  // Explicitly set the next question
	},
	{
		id: "Quartier",
		text: "Quelle est votre quartier de résidence",
		options: [
			{ id: 1, text: "Aqueduc Sud", next: "end" },
			{ id: 2, text: "Aqueduc Nord", next: "end" },
			{ id: 3, text: "Brigitte", next: "end" },
			{ id: 4, text: "Centre Ville", next: "end" },
			{ id: 5, text: "Chevalier Les Petits Pres", next: "end" },
			{ id: 6, text: "Daniele Petit Bontemps", next: "end" },
			{ id: 7, text: "Gatines La Bataille", next: "end" },
			{ id: 8, text: "La Boissière", next: "end" },
			{ id: 9, text: "La Haise Les Gares", next: "end" },
			{ id: 10, text: "Le Valibout", next: "end" },
			{ id: 11, text: "Les Ebisoires", next: "end" },
			{ id: 12, text: "La Mare aux Saules", next: "end" },
			{ id: 13, text: "champ libre", next: "QuartierPrecision" },
		],
	},
	{
		id: "QuartierPrecision",
		text: "Precisez le quartier",
		freeText: true,
		next: "end",
	},
	
];

