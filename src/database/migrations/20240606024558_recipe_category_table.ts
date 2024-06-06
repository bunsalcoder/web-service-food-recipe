import type { Knex } from "knex";


/**
 * Create a table name "recipe_category" in the database.
 * 
 * @param {Knex} knex - The knex instance used for database operations.
 * @returns {Promise<void>} - A promise that resolve when the table is created.
 */
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('recipe_category', (table) => {
    table.increments();
    table.integer('recipe_id').references('id').inTable('recipe');
    table.integer('category_id').references('id').inTable('category');
    table.unique(['recipe_id', 'category_id']);
  });
}
  
  /**
   * Drop the table "recipe_category" if exists in the database.
   * 
   * @param {Knex} knex - The knex instance used for database operations. 
   * @returns {Promise<void>} - A promise that resolve when the table is dropped.
   */
  export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('recipe_category');
  }
  
