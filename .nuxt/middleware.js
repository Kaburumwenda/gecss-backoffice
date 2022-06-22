const middleware = {}

middleware['clearValidationErrors'] = require('../middleware/clearValidationErrors.js')
middleware['clearValidationErrors'] = middleware['clearValidationErrors'].default || middleware['clearValidationErrors']

middleware['redirect'] = require('../middleware/redirect.js')
middleware['redirect'] = middleware['redirect'].default || middleware['redirect']

export default middleware
