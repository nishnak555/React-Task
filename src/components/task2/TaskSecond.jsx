import { useState } from "react";
import "./TaskSecond.css";

import { Button, Grid } from "@mui/material";

const tasks = [
  "apple",
  "mountain",
  "candle",
  "eclipse",
  "ocean",
  "dragon",
  "forest",
  "river",
  "galaxy",
  "thunder",
  "sunrise",
  "breeze",
  "whisper",
  "horizon",
  "glacier", "volcano",
  "tornado",
  "island",
  "meteor",
  "comet",
  "nebula",
  "quasar",
  "cosmos",
  "planet",
  "starburst",
  "aurora",
  "twilight",
  "mirage",
  "phoenix",
  "cascade",
  "hurricane",
  "waterfall",
  "moonlight",
  "firefly",
  "lightning",
  "cyclone",
  "geyser",
  "sandstorm",
  "vortex",
  "shadow",
  "pyramid",
  "tundra",
  "flame",
  "gale",
  "snowflake",
  "ripple",
  "meadow",
  "lagoon",
  "serenade",
  "harmony",
  "echo",
  "storm",
  "zephyr",
  "tidal",
  "coral",
  "ember",
  "spectrum",
  "polar",
  "frost",
  "crystal",
  "pebble",
  "cliff",
  "reef",
  "summit",
  "glow",
  "marble",
  "pearl",
  "onyx",
  "boulder",
  "canyon",
  "raindrop",
  "mist",
  "breeze",
  "willow",
  "fern",
  "sprout",
  "dandelion",
  "rose",
  "ivy",
  "lavender",
  "pine",
  "maple",
  "cedar",
  "orchid",
  "lily",
  "violet",
  "thistle",
  "sage",
  "bamboo",
  "iris",
  "insta",
  "photos",
  "vn",
  "airtel",
  "mmt",
  "maps",
  "paytm",
  "google",
  "phonepay",
  "jio",
];
const TaskSecond = () => {
  const [setshowMore, setsetshowMore] = useState(true);

  const incompleteTasks = tasks.slice(64);

  const handleShowMore = () => {
    setsetshowMore(!setshowMore);
  };

  return (
    <Grid spacing={2} container className="taskSecondMainContainer">
      {setshowMore ? (
        <>
          {incompleteTasks &&
            incompleteTasks.map((curTask, index) => {
              return (
                <Grid key={index} item spacing={5} className="task">
                  {curTask}
                </Grid>
              );
            })}
          <Button onClick={handleShowMore}>See More</Button>
        </>
      ) : (
        <>
          {tasks &&
            tasks.map((curTask1, index) => {
              return (
                <>
                  <Grid key={index} item spacing={5} className="task">
                    {curTask1}
                  </Grid>
                </>
              );
            })}
          <Button onClick={handleShowMore}>See less</Button>
        </>
      )}
    </Grid>
  );
};

export default TaskSecond;
