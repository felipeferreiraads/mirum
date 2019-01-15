import React from 'react'
import CustomImageUploader from 'components/CustomImageUploader'
import Select from 'components/Select'
import CustomField from './CustomField'

export default CustomField

CustomField.Select = props =>
  <CustomField component={Select} {...props} />

CustomField.ImageUploader = props =>
  <CustomField component={CustomImageUploader} {...props} />
