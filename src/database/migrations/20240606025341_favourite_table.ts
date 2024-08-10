import type { Knex } from "knex";


/**
 * Create a table name "favourite" in the database.
 * 
 * @param {Knex} knex - The knex instance used for database operations.
 * @returns {Promise<void>} - A promise that resolve when the table is created.
 */
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('favourite', (table) => {
    table.increments();
    table.integer('recipe_id').references('id').inTable('recipe');
    table.integer('user_id').references('id').inTable('user');
    table.unique(['recipe_id', 'user_id']);
  });
}

/**
 * Drop the table "favourite" if exists in the database.
 * 
 * @param {Knex} knex - The knex instance used for database operations. 
 * @returns {Promise<void>} - A promise that resolve when the table is dropped.
 */
export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('favourite');
}
  
