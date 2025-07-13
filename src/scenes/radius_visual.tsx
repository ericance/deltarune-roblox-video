import { Circle, Img, Layout, Line, makeScene2D, Rect, Txt } from "@motion-canvas/2d";
import { all, createRef, createSignal, Vector2, waitFor } from "@motion-canvas/core";
import  circlePng from "../../images/circle.png";

export default makeScene2D(function* (view) {
	// Background
	view.add(<Img
		src={circlePng}
		scale={1.8}
		x={75}
	/>)
	
	const innerRadius = createRef<Circle>();
	const innerLayout = createRef<Layout>();
	const innerLine = createRef<Line>();

	const outerRadius = createRef<Circle>();
	// const outerLayout = createRef<Layout>();
	// const outerLine = createRef<Line>();
	view.add(
		<>
			{/* Inner Radius */}
			<Layout
				ref={innerLayout}
				alignItems={'center'}
				direction={'column'} 
				layout gap={20} 
				x={-15}
				scale={0}
			>
				<Txt
					fontFamily={"JetBrains Mono, monospace"}
					text={'Inner Radius'}
					fill={'white'}
					fontSize={36}
				/>

				<Line
					ref={innerLine}
					points={[
						Vector2.zero,
						() => Vector2.right.scale(420)
					]}
					lineDash={[20, 20]}
					lineWidth={5}
					stroke={'#fff'}
				/>
				<Txt
					fontFamily={"JetBrains Mono, monospace"}
					text={'4.5'}
					fill={'white'}
					fontSize={24}
				/>
			</Layout>
			<Circle
				ref={innerRadius}
				size={0}
				stroke={'#fff'}
				lineWidth={5}
				x={-15}
			/>
			
			{/* Outer Radius */}

			<Circle
				ref={outerRadius}
				size={0}
				stroke={'#fff'}
				lineWidth={5}
				x={-15}
			/>
		</>
	)
	yield* all(
		innerRadius().size(0, 0.2).to(420, 0.5),
		innerLayout().scale(0, 0.2).to(1,0.5),
		innerLine().points([0, 0], 0.2).to([
			Vector2.zero, 
			() => Vector2.right.scale(420)
		], 0.8),
		outerRadius().size(0, 1.3).to(470, 0.5),
		// outerLayout().scale(0, 1.8).to(1, 0.5),
		// 1:10
	)
})