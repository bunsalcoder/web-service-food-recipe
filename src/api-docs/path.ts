import authDoc from './auth.doc';
import testDoc from './test.doc';
import userDoc from './user.doc';
import recipeDoc from './recipe.doc';
import recipeIngredientDoc from './recipe_ingredient.doc';
import favouriteDoc from './favourite.doc';
import categoryDoc from './category.doc';
import recipeCategoryDoc from './recipe_category.doc';

export default {
  ...authDoc,
  ...testDoc,
  ...userDoc,
  ...recipeDoc,
  ...recipeIngredientDoc,
  ...favouriteDoc,
  ...categoryDoc,
  ...recipeCategoryDoc,
};
