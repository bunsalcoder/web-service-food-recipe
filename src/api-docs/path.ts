import authDoc from "./auth.doc";
import testDoc from "./test.doc";
import userDoc from "./user.doc";
import recipeDoc from "./recipe.doc";
import categoryDoc from "./category.doc";
import recipeCategory from "./recipe_category.doc";

export default {
    ...authDoc,
    ...testDoc,
    ...userDoc,
    ...recipeDoc,
    ...categoryDoc,
    ...recipeCategory
};
