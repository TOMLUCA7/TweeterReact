import React, { useState } from "react";

import { Textarea } from "@mantine/core";
import { Button } from "@mantine/core";

const CreateTweet = ({ createTweet }) => {
  const [tweet, setTweet] = useState("");

  const isTooLong = tweet.length > 140;

  const addTweet = () => {
    if (!tweet) return alert("Please enter a tweet");
    createTweet(tweet);
    setTweet("");
  };

  return (
    <>
      <Textarea
        label="Tweet"
        placeholder="Enter your tweet"
        error={
          isTooLong && "The tweet is too long can't be more than 140 characters"
        }
        autosize
        minRows={4}
        style={{ width: "50%", marginBottom: "30px", marginTop: "30px" }}
        value={tweet}
        onChange={(e) => setTweet(e.target.value)}
      />
      <Button
        onClick={addTweet}
        variant="filled"
        color="blue"
        style={{ marginBottom: "30px" }}
        disabled={isTooLong}
      >
        Tweet
      </Button>
    </>
  );
};

export default CreateTweet;
