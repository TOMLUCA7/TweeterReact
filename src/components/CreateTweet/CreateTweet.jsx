import React, { useState } from "react";

import { JsonInput } from "@mantine/core";
import { Button } from "@mantine/core";

const CreateTweet = ({createTweet}) => {
  const [tweet, setTweet] = useState('')

  const isTooLong = tweet.length > 140;

  const addTweet = () => {
    createTweet(tweet)
    setTweet('')
  }

  return (
    <>
      <JsonInput
        label="Tweet"
        placeholder="Enter your tweet"
        validationError="Invalid JSON"
        error={isTooLong && 'The tweet is too long can\'t be more than 140 characters'}
        formatOnBlur
        autosize
        minRows={4}
        style={{ width: "50%", marginBottom: "30px" }}
        value={tweet}
        onChange={setTweet}
      />
      <Button onClick={addTweet} variant="filled" color="blue" style={{ marginBottom: "30px" }} disabled={isTooLong}>
        Tweet
      </Button>
    </>
  );
};

export default CreateTweet;
