import React from 'react';
import { VoteSlider } from '../ui';
import { Typography, Chip } from '@material-ui/core';

const SongAspect = (props) => {
    return (
        <div>
            <Chip label={props.aspect} />
            <VoteSlider
              defaultValue={5}
              aria-labelledby="continuous-slider"
              aria-label="vote slider"
              step={1}
              marks={props.marks}
              min={0}
              max={10}
            />
        </div>
    );
}

export default SongAspect;