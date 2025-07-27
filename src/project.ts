import {makeProject} from '@motion-canvas/core';
import code_snippet from './scenes/code_snippet?scene';
import radius_visual from './scenes/radius_visual?scene';
import timing_visual from './scenes/timing_visual?scene';
import audio from "../audio/audio.wav"

export default makeProject({
  scenes: [
    code_snippet,
    radius_visual,
    timing_visual,
  ],
  audio: audio,
});