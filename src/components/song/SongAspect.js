import React from 'react';
import { Chip } from '@material-ui/core';
import { VoteSlider } from '../ui';

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