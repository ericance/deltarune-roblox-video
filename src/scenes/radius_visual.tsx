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
	
	// const innerRadius = createRef<Circle>();
	// const innerLayout = createRef<Layout>();
	// const innerLine = createRef<Line>();

	// const outerRadius = createRef<Circle>();
	// const outerLayout = createRef<Layout>();
	// const outerLine = createRef<Line>();
	const innerLabel = createRef<RadiusLabel>();
	const outerLabel = createRef<RadiusLabel>();
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


			{/* <Circle
				ref={innerRadius}
				size={0}
				stroke={'#fff'}
				lineWidth={5}
				x={-15}
			/> */}
			

			{/* <Circle
				ref={outerRadius}
				size={0}
				stroke={'#fff'}
				lineWidth={5}
				x={-15}
			/> */}
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
			lineSize:  Vector2.right.scale(500)
		})
		// outerRadius().size(0, 1.3).to(470, 0.5),
		// outerLayout().scale(0, 1.8).to(1, 0.5),
		// 1:10
	)
})