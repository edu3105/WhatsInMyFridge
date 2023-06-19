const recipeDB = [
    {
        recipeName: "Grandma Virginia's Oven-Fried Chicken",
        image: "../assets/images/fried_chicken.png", 
        imageType: "png",
        timeToCook: "",
        creator: "Luv Cook Books",
        description: `My mom made this fried chicken, and her recipe is the first one that I posted on Food52. My father has a chicken allergy, so the chicken was our treat when my parents were going out. It is really sautéed and then oven-baked, but in our family we called it fried chicken. It is infinitely easier than southern fried chicken and makes an easy weeknight dinner. My mom served it with home-baked soft white rolls and frozen peas. —luvcookbooks`,
        steps: [`Dissolve the kosher salt in several cups of water and pour over the chicken in a plastic container. Cover and refrigerate overnight. (We used 3 1/4 cups of water.)`, 
                `Dry the chicken well with paper towels.`, 
                `Combine the flour, celery seed, salt, and pepper in a zip-top bag. Shake a few pieces of chicken at a time in the flour mixture.`, 
                `Carefully tap the chicken to remove excess flour.`, 
                `Melt the butter in a heavy frying pan and brown the chicken on both sides.`,
                `Transfer the chicken to a baking sheet and bake at 375° F for 45 minutes.`],     
        ingredients: 
            [
                {
                    name: 'chicken thighs and / or drumsticks',
                    quantity: 8,
                    units: ''
                },
                {
                    name: 'kosher salt',
                    quantity: 1,
                    units: 'tablespoon'
                },
                {
                    name: 'flour',
                    quantity: 1,
                    units: 'cup'
                },
                {
                    name: 'celery seed',
                    quantity: 2,
                    units: 'teaspoons'
                },
                {
                    name: 'Salt and pepper',
                    quantity: null,
                    units: ''
                },
                {
                    name: 'butter',
                    quantity: 4,
                    units: 'tablespoons'
                }
            ]
    },

    {
        recipeName: "Chicken Fried Rice",
        image: "../assets/images/fried_rice.png",
        imageType: "png",
        timeToCook: "",
        creator: "Martha Stewart",
        description: "Chunks of chicken breast make this Chinese favorite a satisfying main dish; snow peas add crunch and vitamin C.",
        steps: [`Cook rice according to package instructions; set aside. Pound breasts with a mallet until 1/4 inch thick. Cut into strips (each 3 inches long and 1/2 inch wide). Season with salt and pepper. `,
                `Heat 1 tablespoon oil in a medium nonstick skillet over medium-high heat until hot but not smoking. Cook chicken until just cooked through, 3 to 4 minutes. Transfer to a plate. `,
                `Reduce heat to medium; add remaining tablespoon oil. Add eggs; just as whites begin to set, stir to scramble. Add scallions and ginger; cook 1 minute. Add reserved rice and bell pepper; cook 2 minutes. Stir together soy sauce, sugar, and stock; add to skillet. Add snow peas and reserved chicken; cook until heated through, about 3 minutes. `,            
                ],
        ingredients: [
            {
                name: 'long-grain white rice',
                quantity: 1,
                units: 'cup'
            },
            {
                name: 'boneless, skinless chicken breasts (12 ounces total)',
                quantity: 2,
                units: ''
            },
            {
                name: 'Salt and freshly ground pepper',
                quantity: null,
                units: ''
            },
            {
                name: 'vegetable oil',
                quantity: 2,
                units: 'tablespoons'
            },
            {
                name: 'eggs',
                quantity: 2,
                units: 'large'
            },
            {
                name: 'scallions, trimmed and thinly sliced on the diagonal',
                quantity: 2,
                units: ''
            },
            {
                name: 'grated and peeled fresh ginger',
                quantity: 1,
                units: 'teaspoon'
            },
            {
                name: 'diced red bell pepper (about 1 small pepper)',
                quantity: 0.5,
                units: 'cup'
            },
            {
                name: 'soy sauce',
                quantity: 2,
                units: 'tablespoons'
            },
            {
                name: 'sugar',
                quantity: 0.5,
                units: 'teaspoon'
            },
            {
                name: 'homemade or low-sodium store-bought chicken stock',
                quantity: 0.5,
                units: 'cup'
            },
            {
                name: 'snow peas, trimmed, sliced on the diagonal into thirds',
                quantity: 1,
                units: 'cup'
            }
        ]
    },

    {
        recipeName: "Pan Fried Noodles",
        image: "../assets/images/fried_noodles.png",
        imageType: "jpg",
        timeToCook: "",
        creator: "Sara Welch",
        description: "These pan fried noodles are tossed with colorful vegetables and coated in a savory sauce. A quick and easy meal option that can be customized in so many different ways. Best of all, this noodle stir fry can be on the table in just 25 minutes!",
        steps: [`Heat 2 teaspoons of vegetable oil over medium high heat in a large pan. Add the carrots and white onions to the pan.`,
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
                name: 'vegetable oil',
                quantity: 1,
                units: 'tablespoon'
            },
            {
                name: 'vegetable oil',
                quantity: 2,
                units: 'teaspoons'
            },
            {
                name: 'shredded carrots',
                quantity: 1,
                units: 'cup'
            },
            {
                name: 'white onion thinly sliced',
                quantity: 0.5,
                units: 'cup'
            },
            {
                name: 'white onion thinly sliced',
                quantity: 0.5,
                units: 'cup'
            },
            {
                name: 'minced garlic',
                quantity: 2,
                units: 'teaspoons'
            },
            {
                name: 'cooked fresh noodles such as yakisoba or Hong Kong noodles',
                quantity: 12,
                units: 'ounces'
            },
            {
                name: 'low sodium soy sauce',
                quantity: 0.25,
                units: 'cup'
            },
            {
                name: 'hoisin sauce',
                quantity: 1,
                units: 'tablespoon'
            },
            {
                name: 'toasted sesame oil',
                quantity: 1,
                units: 'tablespoon'
            },
            {
                name: 'cornstarch',
                quantity: 2,
                units: 'teaspoons'
            },
            {
                name: 'bean sprouts',
                quantity: 1,
                units: 'cup'
            },
            {
                name: 'sesame seeds',
                quantity: 1,
                units: 'tablespoon'
            },
            {
                name: 'green onions for garnish',
                quantity: null,
                units: ''
            }
        ]
    },

    {
        recipeName: "Siomay",
        image: "../assets/images/siomay.png",
        imageType: "png",
        timeToCook: "40",
        creator: "Felix",
        description: "Want to make a delicious snack at home? Try this fish siomay recipe. It uses ingredients such as Spanish mackerel as the main ingredient. However, the fish is processed with other selected ingredients so that there is no fishy smell or taste.",
        steps: [
            "Combine fish with chicken skin, chayote, fried shallots, fried garlic, eggs, pepper, sugar, seasoning, fish sauce, and salt. Knead while occasionally pounding until well combined.",
            "Gradually add tapioca flour while stirring until evenly mixed.",
            "Add sliced spring onions and celery, and stir.",
            "The dough is ready to be processed and shaped with siomay skin. Steam until cooked."
        ],
        ingredients: [
            {
                name: "Spanish mackerel fillet",
                quantity: 500,
                units: "grams"
            },
            {
                name: "chicken skin (ground)",
                quantity: 150,
                units: "grams"
            },
            {
                name: "chayote (finely chopped)",
                quantity: 100,
                units: "grams"
            },
            {
                name: "fried shallots",
                quantity: 5,
                units: "tablespoons"
            },
            {
                name: "fried garlic",
                quantity: 1,
                units: "tablespoon"
            },
            {
                name: "egg",
                quantity: 1,
                units: "piece"
            },
            {
                name: "ground pepper",
                quantity: 0.5,
                units: "teaspoon"
            },
            {
                name: "granulated sugar",
                quantity: 0.5,
                units: "teaspoon"
            },
            {
                name: "seasoning",
                quantity: 0.5,
                units: "teaspoon"
            },
            {
                name: "fish sauce",
                quantity: 0.5,
                units: "teaspoon"
            },
            {
                name: "Salt to taste",
                quantity: null,
                units: null
            },
            {
                name: "tapioca flour",
                quantity: 80,
                units: "grams"
            },
            {
                name: "sliced spring onions",
                quantity: 5,
                units: "tablespoons"
            },
            {
                name: "sliced celery",
                quantity: 2,
                units: "tablespoons"
            }
        ]
    },

    {
        recipeName: "Xiao Long Bao",
        image: "../assets/images/xiaolongbao.png",
        imageType: "png",
        timeToCook: "40",
        creator: "Serious Eats",
        description: "a type of small Chinese steamed bun (baozi) traditionally prepared in a xiaolong, a small bamboo steaming basket, hence the name.",
        steps: [`Combine chicken bones, ham, scallion whites, half of scallion greens, ginger, and white peppercorns in a stockpot and cover with cold water. Bring to a boil over high heat, reduce to a simmer, and simmer, uncovered, for 2 1/2 hours. Line a fine-mesh strainer with cheesecloth, and set over a large heatproof bowl. Carefully pour bone broth through strainer into bowl until the liquid has been strained. Discard solids in strainer. Season to taste with salt, cover, and refrigerate until set into a semi-firm jelly, at least 8 hours. Scrape off the fat that sets on top of the chilled bone broth and discard.`
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
                units: "pounds (1.4kg)"
            },
            {
                name: "Chinese ham or slab bacon",
                amount: 0.5,
                units: "pound (8 ounces; 225g)"
            },
            {
                name: "scallions",
                amount: 6,
                units: "(4 ounces; 115g), whites separated, greens roughly chopped"
            },
            {
                name: "fresh ginger",
                amount: 1,
                units: "1-inch knob (1/2 ounce; 15g)"
            },
            {
                name: "white peppercorns",
                amount: 1,
                units: "tablespoon"
            },
            {
                name: "water",
                amount: 10,
                units: "cups (2.4L)"
            },
            {
                name: "Kosher salt",
                amount: null,
                units: null
            },
            {
                name: "ground pork",
                amount: 0.33,
                units: "pound (150g)"
            },
            {
                name: "raw shrimp, peeled",
                amount: 0.25,
                units: "pound (115g)"
            },
            {
                name: "soy sauce",
                amount: 2,
                units: "teaspoons"
            },
            {
                name: "Shaoxing wine",
                amount: 1,
                units: "tablespoon"
            },
            {
                name: "sugar",
                amount: 2,
                units: "teaspoons"
            },
            {
                name: "Diamond Crystal kosher salt",
                amount: 0.25,
                units: "teaspoon (for table salt, use half as much by volume)"
            },
            {
                name: "all-purpose flour",
                amount: 2,
                units: "cups (9 ounces; 255g)"
            },
            {
                name: "boiling water",
                amount: 1,
                units: "cup (235ml)"
            }
        ],
    }
];

