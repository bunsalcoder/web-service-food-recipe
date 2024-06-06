import type { Knex } from "knex";

/**
 * Create a table name "ingredient" in the database.
 *
 * @param {Knex} knex - The knex instance use for the database operation. 
 * @returns {Promise<void>} - A promise that resolve when the table is created.
 */
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('ingredient', (table) => {
    table.increments();
    table.string('name').notNullable();
  });
}

/**
 * Drop the table "ingredient" in the database.
 * 
 * @param {Knex} knex - The knex instance use for the database operation. 
 * @returns {Promise<void>} - A promise that resolve when the table is dropped.
 */
export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('ingredient');
}

