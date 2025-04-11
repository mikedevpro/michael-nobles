const router = require('express').Router();
const Recipe = require('./recipes-model')

router.get('/:recipe_id', (req, res, next) => {
  Recipe.getRecipeById(req.params.recipe_id)
    .then(resource => {
      throw new Error('Yikes!')
      res.status(200).json(resource)
    })
    .catch(next)
})

router.use((err, req, res, next) => {
  res.status(500).json({ 
    customMessage: 'something went wrong inside the recipers router',
    message: err.message,
    stack: err.stack
  })
})


module.exports = router