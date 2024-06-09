import type { Knex } from "knex";

/**
 * Alter table ingredient, adding a new column 'deleted_at' into the table.
 *
 * @param {Knex} knex - The Knex instance for performing the schema alteration.
 * @return {Promise<void>} - A promise that resolves when the alteration is complete.
 */
export async function up(knex: Knex): Promise<void> {
    return knex.schema.alterTable('ingredient', (table) => {
      table.timestamp('deleted_at').nullable();;
    });
}
  
/**
 * Alter table ingredient, drop a column 'deleted_at' from the table.
 *
 * @param {Knex} knex - The Knex instance for performing the schema alteration.
 * @returns {Promise<void>} - A promise that resolves when the alteration is complete.
 */
export async function down(knex: Knex): Promise<void> {
    return knex.schema.alterTable('ingredient', (table) => {
      table.dropColumn('deleted_at');
    });
}