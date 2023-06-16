import axios from 'axios';

const key = `77d2cedd5a944b288f0de0648f282b1e`;
const baseUrl = `https://api.spoonacular.com/`;

const recipePage = {
    recipeName: "",
    image: "",
    rating: "",
    timeToCook: "",
    creator: "",
    description: "",
    steps: [],
    ingredients: [],
};


function fetchRecipeByIngredients(ingredientList) {
    const ls = ingredientList.join(",+");
    var url = `${baseUrl}/recipes/findByIngredients?apiKey=${key}&ingredients=${ls}`;

    console.log(`Making a request to ${url}`);

    var recipes = [];
    return axios.get(url).then((response) => {
        var res = response.data;
        var recipeMatch = res.length;

        for (var i = 0; i < recipeMatch; i++) {
            var recipe = {
                id: res[i].id,
                image: res[i].image,
                missedIngredientCount: res[i].missedIngredientCount,
                missedIngredients: res[i].missedIngredients,

            };
            recipes.push(recipe);
        }
        //console.log(res);
        return recipes;
    }).catch((error) => {
        throw new error;
    });
}

export function fetchRecipeById(recipeId){
    var url = `${baseUrl}/recipes/${recipeId}/information?apiKey=${key}`;
    console.log(`Making a request to ${url}`);

    return axios.get(url).then((response) =>{
        var res = response.data;

        var recipe = {
            recipeName: res.title,
            image: res.image,
            imageType: res.imageType,
            timeToCook: res.readyInMinutes,
            creator: "",
            description: res.summary,
            steps: res.analyzedInstructions,
        };

        return recipe;
    });
}


const createIngredient = (name, amount) => ({
    ingredientName: name,
    ingredientAmount: amount,
});

const filterIngredientList = (ingredientList, filterName) => {
    console.log("Test");
}

