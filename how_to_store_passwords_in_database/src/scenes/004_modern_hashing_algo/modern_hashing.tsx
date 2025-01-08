import { Img, Line, makeScene2D, Node, Rect, Txt } from "@motion-canvas/2d";
import {
    all,
    createRef,
    Direction,
    slideTransition,
    waitFor,
} from "@motion-canvas/core";

import shieldImage from "./shield.svg";

export default makeScene2D(function* (view) {
    view.fill("#1E1E2E");

    const subHeadTxtRef = createRef<Txt>();
    view.add(
        <Node>
            <Txt
                text={"Modern Hashing Algorithms"}
                fontSize={48}
                fontWeight={900}
                y={-300}
                fill={"#FFFFFF"}
                letterSpacing={3}
            />
            <Txt
                ref={subHeadTxtRef}
                opacity={0}
                text={"Adding Layers of Security"}
                fontSize={28}
                y={-250}
                fill={"#60A5FA"}
                letterSpacing={3}
            />
        </Node>
    );

    yield* slideTransition(Direction.Right, 1);

    yield* subHeadTxtRef().opacity(0.3, 1);

    const layers = [
        {
            ref: createRef<Rect>(),
            label: "Salt Addition",
            color: "#3B82F6",
            x: -250,
            glow_color: "#60A5FA",
        },
        {
            ref: createRef<Rect>(),
            label: "Key Derivation",
            color: "#F59E0B",
            x: 0,
            glow_color: "#FBBF24",
        },
        {
            ref: createRef<Rect>(),
            label: "Hashing Algorithm",
            color: "#10B981",
            x: 250,
            glow_color: "#34D399",
        },
    ];
    const layerRootNodeRef = createRef<Node>();
    const pswdTxtRef = createRef<Txt>();
    const shieldImageRef = createRef<Img>();
    const info = {
        nodeRef: createRef<Node>(),
        txtRef: createRef<Txt>(),
        lineRef: createRef<Line>(),
    };
    view.add(
        <Node ref={layerRootNodeRef} y={100} opacity={0}>
            <Node ref={info.nodeRef} x={-650} y={-200}>
                <Txt
                    ref={info.txtRef}
                    text={"Plain Text Password"}
                    fill={"#60A5FA"}
                    fontSize={24}
                />
                <Line
                    ref={info.lineRef}
                    y={50}
                    points={[
                        [0, 0],
                        [30, 100],
                    ]}
                    endArrow
                    stroke={"#60A5FA"}
                    lineWidth={2}
                    arrowSize={8}
                />
            </Node>
            <Txt
                ref={pswdTxtRef}
                text={"mySecretPassword123"}
                fontSize={28}
                fill={"#FFFFFF"}
                x={-600}
            />
            {layers.map((layer, i) => (
                <Rect
                    ref={layer.ref}
                    width={250}
                    height={450}
                    fill={layer.color}
                    x={layer.x}
                    stroke={layer.glow_color}
                >
                    <Txt text={layer.label} fontSize={24} fill={"#FFFFFF"} />
                </Rect>
            ))}
            <Img ref={shieldImageRef} src={shieldImage} size={0} />
        </Node>
    );

    yield* layerRootNodeRef().opacity(1, 1);
    yield* waitFor(1);
    yield* all(
        info.nodeRef().opacity(0, 0.5),
        pswdTxtRef().x(600, 3),
        pswdTxtRef().text("$2a$12$eK0...", 2),
        ...layers.map((layer, i) => layer.ref().lineWidth(10, i + 1.5))
    );
    info.txtRef().text("Hashed Password");
    info.lineRef().points([
        [0, 0],
        [-30, 100],
    ]);
    info.nodeRef().x(650);
    yield* all(
        info.nodeRef().opacity(1, 0.5),
        shieldImageRef().size(2000, 0).to(100, 1),
        shieldImageRef().x(740, 1)
    );

    yield* waitFor(1);
});
