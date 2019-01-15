import React from 'react'
import { shallow } from 'enzyme'
import CustomImageUploader from '.'

it('renders without crashing', () => {
  shallow(<CustomImageUploader />)
})
