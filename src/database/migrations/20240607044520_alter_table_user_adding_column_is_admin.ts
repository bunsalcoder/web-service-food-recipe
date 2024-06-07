import type { Knex } from "knex";

/**
 * Alter table user, adding a new column 'is_admin' into the table.
 *
 * @param {Knex} knex - The Knex instance for performing the schema alteration.
 * @return {Promise<void>} - A promise that resolves when the alteration is complete.
 */
export async function up(knex: Knex): Promise<void> {
    return knex.schema.alterTable('user', (table) => {
      table.boolean('is_admin').defaultTo(false);
    });
}
  
/**
 * Alter table user, drop a column 'is_admin' from the table.
 *
 * @param {Knex} knex - The Knex instance for performing the schema alteration.
 * @returns {Promise<void>} - A promise that resolves when the alteration is complete.
 */
export async function down(knex: Knex): Promise<void> {
    return knex.schema.alterTable('user', (table) => {
      table.dropColumn('is_admin');
    });
}
