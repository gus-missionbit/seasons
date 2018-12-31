
//const seasonRoot = document.getElementById('fruits')
const fruitsDiv = document.getElementById('fruits')
const category1div = document.getElementById('category1')
const category2div = document.getElementById('category2')
const category3div = document.getElementById('category3')
const category4div = document.getElementById('category4')


// category1div.style.color = "red"
// category2div.style.color = "yellow"
// category2div.style.webkitTextStroke = "2px black"
// category3div.style.webkitTextStroke = "2px black"
// category3div.style.color = "white"
// category4div.style.color = "blue"

const seasonalPick = [
"What foods do you eat?", 
"Here are your fruits for breakfast", 
"Here are your fruits for lunch"
]
const fruit = [
[		"Apples",
	    "Avocados",
	    "Bananas",
	    "Beets",
	    "Brussels Sprouts",
	    "Cabbage",
	    "Carrots",
	    "Celery",
	    "Collard Greens",
	    "Grapefruit",
	    "Kale",
	    "Kiwifruit",
	    "Leeks",
	    "Lemons",
	    "Limes",
	    "Onions",
	    "Oranges",
	    "Parsnips",
	    "Pears",
	    "Pineapples",
	    "Potatoes",
	    "Pumpkins",
	    "Rutabagas",
	    "Sweet Potatoes",
	    "Yams",
	    "Swiss Chard",
	    "Turnips",
	    "Winter Squash"
  ],
  [    "Apples",
	    "Bananas",
	    "Beets",
	    "Bell Peppers",
	    "Broccoli",
	    "Brussels Sprouts",
	    "Cabbage",
	    "Carrots",
	    "Cauliflower",
	    "Celery",
	    "Collard Greens",
	    "Cranberries",
	    "Garlic",
	    "Ginger",
	    "Grapes",
	    "Green Beans",
	    "Kale",
	    "Kiwifruit",
	    "Lemons",
	    "Lettuce",
	    "Limes",
	    "Mangos",
	    "Mushrooms",
	    "Onions",
	    "Parsnips",
	    "Pears",
	    "Peas",
	    "Pineapples",
	    "Potatoes",
	    "Pumpkins",
	    "Radishes",
	    "Raspberries",
	    "Rutabagas",
	    "Spinach",
	    "Sweet Potatoes",
	    "Yams",
	    "Swiss Chard",
	    "Turnips",
	    "Winter Squash"
  ],
  [ 	"Apples",
	    "Apricots",
	    "Asparagus",
	    "Avocados",
	    "Bananas",
	    "Broccoli",
	    "Cabbage",
	    "Carrots",
	    "Celery",
	    "Collard Greens",
	    "Garlic",
	    "Kale",
	    "Kiwifruit",
	    "Lemons",
	    "Lettuce",
	    "Limes",
	    "Mushrooms",
	    "Onions",
	    "Peas",
	    "Pineapples",
	    "Radishes",
	    "Rhubarb",
	    "Spinach",
	    "Strawberries",
	    "Swiss Chard",
	    "Turnips"
	  ],
	  [
	    "Apples",
	    "Apricots",
	    "Avocados",
	    "Bananas",
	    "Beets",
	    "Bell Peppers",
	    "Blackberries",
	    "Blueberries",
	    "Cantaloupe",
	    "Carrots",
	    "Celery",
	    "Cherries",
	    "Corn",
	    "Cucumbers",
	    "Eggplant",
	    "Garlic",
	    "Green Beans",
	    "Honeydew Melon",
	    "Lemons",
	    "Lima Beans",
	    "Limes",
	    "Mangos",
	    "Okra",
	    "Peaches",
	    "Plums",
	    "Raspberries",
	    "Strawberries",
	    "Summer Squash",
	    "Tomatillos",
	    "Tomatoes",
	    "Watermelon",
	    "Zucchini"
  ]
]

let currentQuestion = 0
let fireScore = 0
let airScore = 0
let earthScore = 0
let waterScore = 0

function advance() {
	if (currentQuestion===3){
		category1div.textContent = ""
		category2div.textContent = ""
		category3div.textContent = ""
		category4div.textContent = ""

		fruitsDiv.textContent = "All done"

		score = "YOUR ELEMENTS... fire: " + fireScore + 
			" earth: " + earthScore + 
			" air: " + airScore + 
			" water: " + waterScore;

		alert(score);
	} else {
		currentQuestion += 1
		fruitsDiv.textContent = seasonalPick[currentQuestion-1]
		category1div.textContent = fruit[currentQuestion-1][0]
		category2div.textContent = fruit[currentQuestion-1][1]
		category3div.textContent = fruit[currentQuestion-1][2]
		category4div.textContent = fruit[currentQuestion-1][3]
    }
}
category1.onclick = function() {
	fireScore += 1
	advance()
}
category2.onclick = function() {
	earthScore += 1
	advance()
}
category3.onclick = function() {
	airScore += 1
	advance()
}
category4.onclick = function() {
	waterScore += 1
	advance()
}

advance()


