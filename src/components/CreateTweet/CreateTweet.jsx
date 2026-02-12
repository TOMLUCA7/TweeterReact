import React from 'react'

import { JsonInput } from '@mantine/core';

const CreateTweet = () => {
  return (
    <JsonInput
      label="Tweet"
      placeholder="Enter your tweet"
      validationError="Invalid JSON"
      formatOnBlur
      autosize
      minRows={4}
      style={{ width: '50%', marginBottom: '30px' }}
    />
  )
}

export default CreateTweet