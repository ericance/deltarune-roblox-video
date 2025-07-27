import { Circle, Img, Layout, Line, makeScene2D, Txt } from "@motion-canvas/2d";
import { all, createRef, createSignal, Vector2, waitFor } from "@motion-canvas/core";
import  circlePng from "../../images/circle.png";
import { RadiusLabel } from "../components/RadiusLabel";

export default makeScene2D(function* (view) {
	// Background
	view.add(<Img
		src={circlePng}
		scale={1.8}
		x={75}
	/>)
	
	const innerLabel = createRef<RadiusLabel>();
	const outerLabel = createRef<RadiusLabel>();
	const redLineRight = createRef<Line>();
	const redLineLeft = createRef<Line>();
	const redLineBottom = createRef<Line>();
	const differenceNumber = createRef<Txt>();

	view.add(
		<>
			<RadiusLabel
				ref={innerLabel}
				text={'Inner Radius'}
				value={'4.5'}
			/>
			<RadiusLabel
				ref={outerLabel}
				text={'Radius'}
				value={'5.0'}
				origin={new Vector2(-15, -320)}
			/>
			
			<Line
				ref={redLineRight}
				points={[
					() => new Vector2(220, 7),
				]}
				stroke={'red'}
				lineWidth={4}
			/>
			<Line
				ref={redLineLeft}
				points={[
					() => new Vector2(195, 7),
				]}
				stroke={'red'}
				lineWidth={4}
			/>
			<Line
			ref={redLineBottom}
				points={[
					() => new Vector2(193, 7),
				]}
				stroke={'red'}
				lineWidth={4}
			/>
			<Txt
				ref={differenceNumber}
				fontFamily={"JetBrains Mono, monospace"}
				text={'0.5'}
				fill={'red'}
				fontSize={0}
				x={260}
			/>
		</>
	)

	yield* all(
		innerLabel().appear({
			radiusSize: 420
		}),
		outerLabel().appear({
			layoutStartTime:  0.7,
			layoutEndTime:  0.5,
			radiusSize: 470,
			lineSize:  Vector2.right.scale(470)
		}),
	)

	yield redLineRight().points(
	[
		[220, -312],
		[220, 7],
	], 1)
	yield redLineLeft().points(
	[
		[195, -312],
		[195, 7],
	], 0.8)
	yield redLineBottom().points(
	[
		[193, 7],
		[222, 7],
	], 0.8)

	yield* waitFor(0.5);
	yield differenceNumber().fontSize(26, 1)
	yield* waitFor(2.4);
})