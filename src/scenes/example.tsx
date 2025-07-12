import {makeScene2D, Code, Circle} from '@motion-canvas/2d';
import { all, createRef, waitFor } from '@motion-canvas/core';
import { ShikiHighlighter } from '../shiki';

const H = new ShikiHighlighter({
  highlighter: {
    lang: "lua",
    theme: "catppuccin-mocha",
  },
});

export default makeScene2D(function* (view) {
  const code = createRef<Code>();
   view.add(
    <Code
      ref={code}
      highlighter={H}
      fontFamily={"JetBrains Mono, monospace"}
      code={`\
    local tweenInfo = TweenInfo.new(0.5)

    TweenService:Create(circle, tweenInfo, {
      InnerRadius = circleAdorn.InnerRadius + GrowSize,
      Radius = circleAdorn.Radius + GrowSize,
      Transparency = 1,
    }):Play() 
      `}
    />
  );

  const luauCode = `\
    local tweenInfo = TweenInfo.new(
      0.5,
      Enum.EasingStyle.Linear,
      Enum.EasingDirection.Out
    )

    TweenService:Create(circle, tweenInfo, {
      InnerRadius = circleAdorn.InnerRadius + GrowSize,
      Radius = circleAdorn.Radius + GrowSize,
      Transparency = 1,
    }):Play() 
  `;

  yield* waitFor(0.6);
  yield* code().code(luauCode, 0.5).wait(0.5);
 
  
});