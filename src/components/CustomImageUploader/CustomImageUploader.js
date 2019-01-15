import React from 'react'
import PropTypes from 'prop-types'
import ImageUploader from 'react-images-upload'

export default function CustomImageUploader ({ text, onChange }) {
  return (
    <ImageUploader
      buttonText={text}
      withIcon={false}
      withPreview={true}
      onChange={onChange}
    />
  )
}

CustomImageUploader.propTypes = {
  /** Field's text */
  text: PropTypes.string.isRequired,

  /** Field's onChange function */
  onChange: PropTypes.func.isRequired
}
