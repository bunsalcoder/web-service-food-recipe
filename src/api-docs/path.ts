import authDoc from "./auth.doc";
import testDoc from "./test.doc";
import userDoc from "./user.doc";
import recipeDoc from "./recipe.doc";

export default {
    ...authDoc,
    ...testDoc,
    ...userDoc,
    ...recipeDoc,
};
