import authDoc from "./auth.doc";
import testDoc from "./test.doc";
import userDoc from "./user.doc";
import recipeDoc from "./recipe.doc";
import ingredientDoc from "./ingredient.doc";

export default {
    ...authDoc,
    ...testDoc,
    ...userDoc,
    ...recipeDoc,
    ...ingredientDoc,
};
