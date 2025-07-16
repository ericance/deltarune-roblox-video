/* 
	This is my first component just to learn how they are made, and it is very bad.
	I thought I needed it to create two radius visuals but I could've easily just created them without it
	
	Enjoy
*/

import { Circle, initial, Layout, Line, Node, NodeProps, signal, Txt } from "@motion-canvas/2d";
import { all, createRef, SignalValue, SimpleSignal, Vector2 } from "@motion-canvas/core";

export interface RadiusLabelProps extends NodeProps {
	lineSize?: SignalValue<Vector2>;
	origin?: SignalValue<Vector2>;
	value?: SignalValue<string>;
	text?: SignalValue<string>;
}

export class RadiusLabel extends Node {
	@initial("Radius")
	@signal()
	public declare readonly text: SimpleSignal<string, this>;

	@initial(new Vector2(0, 0))
	@signal()
	public declare readonly lineSize: SimpleSignal<Vector2, this>;

	@initial('0')
	@signal()
	public declare readonly value: SimpleSignal<string, this>;

	@initial(new Vector2(-15, 0))
	@signal()
	public declare readonly origin: SimpleSignal<Vector2, this>;

	@initial(new Vector2(-15, 0))
	@signal()
	public declare readonly lineOrigin: SimpleSignal<Vector2, this>;
	
	private readonly radius = createRef<Circle>();
	private readonly layout = createRef<Layout>();
	private readonly line = createRef<Line>();

	public constructor(props?: RadiusLabelProps) {
		super({...props,})
		this.add(
			<>
			<Layout
				ref={this.layout}
				alignItems={'center'}
				direction={'column'} 
				layout gap={20} 
				position={this.origin}
				// x={-15}
				scale={0}
			>
				<Txt
					fontFamily={"JetBrains Mono, monospace"}
					text={() => this.text()}
					fill={'white'}
					fontSize={36}
				/>

				<Line
					ref={this.line}
					points={[
						Vector2.zero,
						() => Vector2.right.scale(0)
					]}
					lineDash={[20, 20]}
					lineWidth={5}
					stroke={'#fff'}
				/>
				<Txt
					fontFamily={"JetBrains Mono, monospace"}
					text={() => this.value()}
					fill={'white'}
					fontSize={24}
				/>
			</Layout>
			<Circle
				ref={this.radius}
				size={0}
				stroke={'#fff'}
				lineWidth={5}
				x={-15}
			/>
			</>
		)
	}

	public *appear({
		radiusSize = 420,
		layoutStartTime = 0.2,
		layoutEndTime = 0.5,
		lineTime = 0.8,
		lineSize = Vector2.right.scale(420)
	}) {
		yield* all(
			this.radius().size(0, layoutStartTime).to(radiusSize, layoutEndTime),
			this.layout().scale(0, layoutStartTime).to(1, layoutEndTime),
			this.line().points([0, 0], layoutStartTime).to([Vector2.zero, () => lineSize], lineTime),
		)
	}
}
