import {makeProject} from '@motion-canvas/core';
import code_snippet from './scenes/code_snippet?scene';
import radius_visual from './scenes/radius_visual?scene';
import radius from "../audio/radius.mp3"

export default makeProject({
  scenes: [
    // code_snippet,
    radius_visual
  ],
  audio: radius,
});