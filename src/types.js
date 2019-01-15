import PropTypes from 'prop-types'

export const componentType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.func
])

export const userType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.shape({
    url: PropTypes.string.isRequired
  })
})
