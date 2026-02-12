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
      style={{ width: '100%' }}
    />
  )
}

export default CreateTweet