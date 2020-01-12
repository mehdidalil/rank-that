import React from 'react';
import SongAspect from './SongAspect';

const marks = [
  {
    value: 0,
    label: "0"
  },
  {
    value: 5,
    label: "5"
  },
  {
    value: 10,
    label: "10"
  }
];

const SongCardForm = () => {
    return (
        <div>
          <SongAspect aspect="Flow" marks={marks}/>
          <SongAspect aspect="Lyrics" marks={marks}/>
          <SongAspect aspect="Originality" marks={marks}/>
          <SongAspect aspect="Music" marks={marks}/>
        </div>
    );
}

export default SongCardForm;