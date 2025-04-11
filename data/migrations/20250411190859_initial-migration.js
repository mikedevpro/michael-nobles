
exports.up = async function(knex) {
  await knex.schema
  .createTable('recipes', table => {
    table.increments('recipe_id')
    table.string('recipe_name', 200).notNullable().unique()
  })
  .createTable('ingredients', tbl => {
    table.increments('ingredient_id')
    table.string('ingredient_name', 200).notNullable().unique()
    table.integer('ingredient_unit', 50)
  })
  .createTable('steps', table => {
    table.increments('steps_id')
    table.string(step_text, 200).notNullable()
    table.string(step_order, 200).notNullable()
    table.integer('recipe_id').unsigned().notNullable()
    table.foreign('recipe_id').references('recipes.recipe_id')
  })
  .createTable('step_ingredients', table => {
    table.increments()
  })
};


exports.down = async function(knex) {
  await knex.schema
  .dropTableIfExists('step_ingredients')
  .dropTableIfExists('steps')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('recipes')
};
