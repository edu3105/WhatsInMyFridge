const recipeDB = [
  {
    recipeName: "Cheeseburger",
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/1/31/2/FNM_030113-Cheese-Stuffed-Cheeseburger-Recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371613778527.jpeg",
    imageType: "jpg",
    timeToCook: "20",
    creator: "Jamie",
    description:
      "A cheeseburger is a hamburger with a slice of melted cheese on top of the meat patty, added near the end of the cooking time. Cheeseburgers can include variations in structure, ingredients and conmposition. As with other hamburgers, a cheeseburger may include various condiments and other toppings such as lettuce, tomato, onion, pickles, bacon, avocado, mushrooms, mayonnaise, ketchup, and mustard.",
    steps: [
      `Combine chicken bones, ham, scallion whites, half of scallion greens, ginger, and white peppercorns in a stockpot and cover with cold water. Bring to a boil over high heat, reduce to a simmer, and simmer, uncovered, for 2 1/2 hours. Line a fine-mesh strainer with cheesecloth, and set over a large heatproof bowl. Carefully pour bone broth through strainer into bowl until the liquid has been strained. Discard solids in strainer. Season to taste with salt, cover, and refrigerate until set into a semi-firm jelly, at least 8 hours. Scrape off the fat that sets on top of the chilled bone broth and discard.`,
      `Meanwhile, combine pork, shrimp, soy sauce, wine, sugar, 1 teaspoon salt, and remaining scallion greens in a food processor. Process until a fine paste is formed, about 12 to 15 one-second pulses. Refrigerate until ready to use.`,
      `Meanwhile, place flour in the bowl of a food processor. With machine running, slowly drizzle in water until a cohesive dough is formed (you probably won't need all the water). Allow dough to ride around processor for 30 seconds. Form into a ball using floured hands and transfer to a bowl. Cover with a damp towel and let rest for at least 30 minutes. `,
      `When broth is gelled, transfer filling mixture to a bowl along with 1 1/2 cups of jellied broth (save the rest for another use). Beat or whisk it in until homogenous. Season with salt. Keep filling well chilled.`,
      `Divide dough into 4 sections. Roll each section into a 6-inch long log. Cut each section into 10 equal pieces and roll each into a 10 gram ball, making 40 balls total. On a well-floured work surface, roll each ball into a round, flat wrapper, 3 1/2- to 4-inches in diameter. Using a roller, gradually roll the edges of the wrapper towards the center to create thinner edges and a thicker center. Stack wrappers and keep under plastic until all of them are rolled out.`,
      `To form dumplings, place 1 tablespoon of filling in the center of a wrapper. Moisten the edges of the wrapper with a wet fingertip or a pastry brush. Pleat edges of the wrapper repeatedly, pinching the edge closed after each pleat until the entire dumpling is sealed in a cinched purse shape. Pinch and twist top to seal. Transfer sealed dumplings to a lightly floured wooden or parchment-lined board. `,
      `Place a bamboo steamer over a wok with 2 inches of water. Place over medium-high heat until simmering. Line steamer with napa cabbage leaves and place dumplings directly on leaves. Steam until cooked through, 10 to 12  minutes. Serve immediately, being careful not to break them. `,
    ],
    ingredients: [
      {
        name: "hamburger buns",
        amount: 3,
        units: "pounds (1.4kg)",
      },
      {
        name: "pickles",
        amount: 0.5,
        units: "pound (8 ounces; 225g)",
      },
      {
        name: "processed american Cheese",
        amount: 6,
        units: "(4 ounces; 115g), whites separated, greens roughly chopped",
      },
      {
        name: "ground beef",
        amount: 1,
        units: "cup (235ml)",
      },
    ],
  },
  {
    recipeName: "Grandma Virginia's Oven-Fried Chicken",
    image:
      "data:image/jpeg;base64,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",
    imageType: "png",
    timeToCook: "",
    creator: "Luv Cook Books",
    description: `My mom made this fried chicken, and her recipe is the first one that I posted on Food52. My father has a chicken allergy, so the chicken was our treat when my parents were going out. It is really sautéed and then oven-baked, but in our family we called it fried chicken. It is infinitely easier than southern fried chicken and makes an easy weeknight dinner. My mom served it with home-baked soft white rolls and frozen peas. —luvcookbooks`,
    steps: [
      `Dissolve the kosher salt in several cups of water and pour over the chicken in a plastic container. Cover and refrigerate overnight. (We used 3 1/4 cups of water.)`,
      `Dry the chicken well with paper towels.`,
      `Combine the flour, celery seed, salt, and pepper in a zip-top bag. Shake a few pieces of chicken at a time in the flour mixture.`,
      `Carefully tap the chicken to remove excess flour.`,
      `Melt the butter in a heavy frying pan and brown the chicken on both sides.`,
      `Transfer the chicken to a baking sheet and bake at 375° F for 45 minutes.`,
    ],
    ingredients: [
      {
        name: "5 spice powder",
        quantity: 8,
        units: "",
      },
      {
        name: "kosher salt",
        quantity: 1,
        units: "tablespoon",
      },
      {
        name: "flour",
        quantity: 1,
        units: "cup",
      },
      {
        name: "celery seed",
        quantity: 2,
        units: "teaspoons",
      },
      {
        name: "Salt and pepper",
        quantity: null,
        units: "",
      },
      {
        name: "butter",
        quantity: 4,
        units: "tablespoons",
      },
    ],
  },

  {
    recipeName: "Chicken Fried Rice",
    image: "../assets/images/fried_rice.png",
    imageType: "png",
    timeToCook: "",
    creator: "Martha Stewart",
    description:
      "Chunks of chicken breast make this Chinese favorite a satisfying main dish; snow peas add crunch and vitamin C.",
    steps: [
      `Cook rice according to package instructions; set aside. Pound breasts with a mallet until 1/4 inch thick. Cut into strips (each 3 inches long and 1/2 inch wide). Season with salt and pepper. `,
      `Heat 1 tablespoon oil in a medium nonstick skillet over medium-high heat until hot but not smoking. Cook chicken until just cooked through, 3 to 4 minutes. Transfer to a plate. `,
      `Reduce heat to medium; add remaining tablespoon oil. Add eggs; just as whites begin to set, stir to scramble. Add scallions and ginger; cook 1 minute. Add reserved rice and bell pepper; cook 2 minutes. Stir together soy sauce, sugar, and stock; add to skillet. Add snow peas and reserved chicken; cook until heated through, about 3 minutes. `,
    ],
    ingredients: [
      {
        name: "long-grain white rice",
        quantity: 1,
        units: "cup",
      },
      {
        name: "boneless, skinless chicken breasts (12 ounces total)",
        quantity: 2,
        units: "",
      },
      {
        name: "Salt and freshly ground pepper",
        quantity: null,
        units: "",
      },
      {
        name: "vegetable oil",
        quantity: 2,
        units: "tablespoons",
      },
      {
        name: "eggs",
        quantity: 2,
        units: "large",
      },
      {
        name: "scallions, trimmed and thinly sliced on the diagonal",
        quantity: 2,
        units: "",
      },
      {
        name: "grated and peeled fresh ginger",
        quantity: 1,
        units: "teaspoon",
      },
      {
        name: "diced red bell pepper (about 1 small pepper)",
        quantity: 0.5,
        units: "cup",
      },
      {
        name: "soy sauce",
        quantity: 2,
        units: "tablespoons",
      },
      {
        name: "sugar",
        quantity: 0.5,
        units: "teaspoon",
      },
      {
        name: "homemade or low-sodium store-bought chicken stock",
        quantity: 0.5,
        units: "cup",
      },
      {
        name: "snow peas, trimmed, sliced on the diagonal into thirds",
        quantity: 1,
        units: "cup",
      },
    ],
  },

  {
    recipeName: "Pan Fried Noodles",
    image: "../assets/images/fried_noodles.png",
    imageType: "jpg",
    timeToCook: "",
    creator: "Sara Welch",
    description:
      "These pan fried noodles are tossed with colorful vegetables and coated in a savory sauce. A quick and easy meal option that can be customized in so many different ways. Best of all, this noodle stir fry can be on the table in just 25 minutes!",
    steps: [
      `Heat 2 teaspoons of vegetable oil over medium high heat in a large pan. Add the carrots and white onions to the pan.`,
      `Cook for 3-5 minutes or until vegetables are softened.`,
      `Add the green onions and garlic and cook for 30 seconds. Remove the vegetables from the pan, and cover to keep warm.`,
      `Rinse the noodles under hot water to separate them. `,
      `Heat the remaining tablespoon of vegetable oil in the pan. Add the noodles and cook for 3-4 minutes per side or until browned and crispy on the edges.`,
      `Add the vegetables back to the pan.`,
      `In a small bowl, whisk together the soy sauce, hoisin sauce, sesame oil, cornstarch and 2 tablespoons of cold water.`,
      `Add the bean sprouts to the pan, and toss to combine.`,
      `Add the sauce to the pan and bring to a simmer. Cook for 2-3 minutes or until sauce has just thickened and bean sprouts have wilted.`,
      `Sprinkle with sesame seeds and additional green onions if desired, then serve.`,
    ],
    ingredients: [
      {
        name: "vegetable oil",
        quantity: 1,
        units: "tablespoon",
      },
      {
        name: "vegetable oil",
        quantity: 2,
        units: "teaspoons",
      },
      {
        name: "shredded carrots",
        quantity: 1,
        units: "cup",
      },
      {
        name: "white onion thinly sliced",
        quantity: 0.5,
        units: "cup",
      },
      {
        name: "white onion thinly sliced",
        quantity: 0.5,
        units: "cup",
      },
      {
        name: "minced garlic",
        quantity: 2,
        units: "teaspoons",
      },
      {
        name: "cooked fresh noodles such as yakisoba or Hong Kong noodles",
        quantity: 12,
        units: "ounces",
      },
      {
        name: "low sodium soy sauce",
        quantity: 0.25,
        units: "cup",
      },
      {
        name: "hoisin sauce",
        quantity: 1,
        units: "tablespoon",
      },
      {
        name: "toasted sesame oil",
        quantity: 1,
        units: "tablespoon",
      },
      {
        name: "cornstarch",
        quantity: 2,
        units: "teaspoons",
      },
      {
        name: "bean sprouts",
        quantity: 1,
        units: "cup",
      },
      {
        name: "sesame seeds",
        quantity: 1,
        units: "tablespoon",
      },
      {
        name: "green onions for garnish",
        quantity: null,
        units: "",
      },
    ],
  },

  {
    recipeName: "Siomay",
    image: "../assets/images/siomay.png",
    imageType: "png",
    timeToCook: "40",
    creator: "Felix",
    description:
      "Want to make a delicious snack at home? Try this fish siomay recipe. It uses ingredients such as Spanish mackerel as the main ingredient. However, the fish is processed with other selected ingredients so that there is no fishy smell or taste.",
    steps: [
      "Combine fish with chicken skin, chayote, fried shallots, fried garlic, eggs, pepper, sugar, seasoning, fish sauce, and salt. Knead while occasionally pounding until well combined.",
      "Gradually add tapioca flour while stirring until evenly mixed.",
      "Add sliced spring onions and celery, and stir.",
      "The dough is ready to be processed and shaped with siomay skin. Steam until cooked.",
    ],
    ingredients: [
      {
        name: "Spanish mackerel fillet",
        quantity: 500,
        units: "grams",
      },
      {
        name: "chicken skin (ground)",
        quantity: 150,
        units: "grams",
      },
      {
        name: "chayote (finely chopped)",
        quantity: 100,
        units: "grams",
      },
      {
        name: "fried shallots",
        quantity: 5,
        units: "tablespoons",
      },
      {
        name: "fried garlic",
        quantity: 1,
        units: "tablespoon",
      },
      {
        name: "egg",
        quantity: 1,
        units: "piece",
      },
      {
        name: "ground pepper",
        quantity: 0.5,
        units: "teaspoon",
      },
      {
        name: "granulated sugar",
        quantity: 0.5,
        units: "teaspoon",
      },
      {
        name: "seasoning",
        quantity: 0.5,
        units: "teaspoon",
      },
      {
        name: "fish sauce",
        quantity: 0.5,
        units: "teaspoon",
      },
      {
        name: "Salt to taste",
        quantity: null,
        units: null,
      },
      {
        name: "tapioca flour",
        quantity: 80,
        units: "grams",
      },
      {
        name: "sliced spring onions",
        quantity: 5,
        units: "tablespoons",
      },
      {
        name: "sliced celery",
        quantity: 2,
        units: "tablespoons",
      },
    ],
  },

  {
    recipeName: "Xiao Long Bao",
    image:
      "https://www.seriouseats.com/thmb/4sQ_PSwAk3NI3DiLwFkA0dESLIo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Soup_Dumplings_hero-AntonisAchilleos-4de81e0b74dd4e7690aea42918eb97ef.JPG",
    imageType: "png",
    timeToCook: "40",
    creator: "Serious Eats",
    description:
      "a type of small Chinese steamed bun (baozi) traditionally prepared in a xiaolong, a small bamboo steaming basket, hence the name.",
    steps: [
      `Combine chicken bones, ham, scallion whites, half of scallion greens, ginger, and white peppercorns in a stockpot and cover with cold water. Bring to a boil over high heat, reduce to a simmer, and simmer, uncovered, for 2 1/2 hours. Line a fine-mesh strainer with cheesecloth, and set over a large heatproof bowl. Carefully pour bone broth through strainer into bowl until the liquid has been strained. Discard solids in strainer. Season to taste with salt, cover, and refrigerate until set into a semi-firm jelly, at least 8 hours. Scrape off the fat that sets on top of the chilled bone broth and discard.`,
      `Meanwhile, combine pork, shrimp, soy sauce, wine, sugar, 1 teaspoon salt, and remaining scallion greens in a food processor. Process until a fine paste is formed, about 12 to 15 one-second pulses. Refrigerate until ready to use.`,
      `Meanwhile, place flour in the bowl of a food processor. With machine running, slowly drizzle in water until a cohesive dough is formed (you probably won't need all the water). Allow dough to ride around processor for 30 seconds. Form into a ball using floured hands and transfer to a bowl. Cover with a damp towel and let rest for at least 30 minutes. `,
      `When broth is gelled, transfer filling mixture to a bowl along with 1 1/2 cups of jellied broth (save the rest for another use). Beat or whisk it in until homogenous. Season with salt. Keep filling well chilled.`,
      `Divide dough into 4 sections. Roll each section into a 6-inch long log. Cut each section into 10 equal pieces and roll each into a 10 gram ball, making 40 balls total. On a well-floured work surface, roll each ball into a round, flat wrapper, 3 1/2- to 4-inches in diameter. Using a roller, gradually roll the edges of the wrapper towards the center to create thinner edges and a thicker center. Stack wrappers and keep under plastic until all of them are rolled out.`,
      `To form dumplings, place 1 tablespoon of filling in the center of a wrapper. Moisten the edges of the wrapper with a wet fingertip or a pastry brush. Pleat edges of the wrapper repeatedly, pinching the edge closed after each pleat until the entire dumpling is sealed in a cinched purse shape. Pinch and twist top to seal. Transfer sealed dumplings to a lightly floured wooden or parchment-lined board. `,
      `Place a bamboo steamer over a wok with 2 inches of water. Place over medium-high heat until simmering. Line steamer with napa cabbage leaves and place dumplings directly on leaves. Steam until cooked through, 10 to 12  minutes. Serve immediately, being careful not to break them. `,
    ],
    ingredients: [
      {
        name: "chicken backs or wings",
        amount: 3,
        units: "pounds (1.4kg)",
      },
      {
        name: "Chinese ham or slab bacon",
        amount: 0.5,
        units: "pound (8 ounces; 225g)",
      },
      {
        name: "5 spice powder",
        amount: 6,
        units: "(4 ounces; 115g), whites separated, greens roughly chopped",
      },
      {
        name: "fresh ginger",
        amount: 1,
        units: "1-inch knob (1/2 ounce; 15g)",
      },
      {
        name: "white peppercorns",
        amount: 1,
        units: "tablespoon",
      },
      {
        name: "water",
        amount: 10,
        units: "cups (2.4L)",
      },
      {
        name: "Kosher salt",
        amount: null,
        units: null,
      },
      {
        name: "ground pork",
        amount: 0.33,
        units: "pound (150g)",
      },
      {
        name: "raw shrimp, peeled",
        amount: 0.25,
        units: "pound (115g)",
      },
      {
        name: "soy sauce",
        amount: 2,
        units: "teaspoons",
      },
      {
        name: "Shaoxing wine",
        amount: 1,
        units: "tablespoon",
      },
      {
        name: "sugar",
        amount: 2,
        units: "teaspoons",
      },
      {
        name: "Diamond Crystal kosher salt",
        amount: 0.25,
        units: "teaspoon (for table salt, use half as much by volume)",
      },
      {
        name: "all-purpose flour",
        amount: 2,
        units: "cups (9 ounces; 255g)",
      },
      {
        name: "boiling water",
        amount: 1,
        units: "cup (235ml)",
      },
    ],
  },
];

export default recipeDB;
