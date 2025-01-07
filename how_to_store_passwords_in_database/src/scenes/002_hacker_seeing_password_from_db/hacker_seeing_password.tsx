import {
    Img,
    makeScene2D,
    Txt,
    Node,
    Circle,
    Spline,
    Knot,
    Rect,
    Line,
} from "@motion-canvas/2d";
import {
    all,
    createRef,
    Direction,
    slideTransition,
    waitFor,
} from "@motion-canvas/core";

import hackerImage from "./hacker.png";
import database from "./database.png";

export default makeScene2D(function* (view) {
    view.fill("#1E1E2E");

    const mainRectRef = createRef<Rect>();
    const rect1Ref = createRef<Rect>();
    const rect2Ref = createRef<Rect>();
    const rect2TxtRef = createRef<Txt>();
    const rect2Txt2Ref = createRef<Txt>();

    view.add(
        <Rect
            ref={mainRectRef}
            width={"90%"}
            height={"90%"}
            smoothCorners
            radius={20}
        >
            <Node x={-500} y={-150}>
                <Img src={database} size={300} />
                <Txt text={"Database"} y={200} fill={"white"} />
            </Node>
            <Img src={hackerImage} size={700} x={500} y={-150} />
            <Node y={-50}>
                <Rect
                    ref={rect1Ref}
                    width={100}
                    height={50}
                    fill={"white"}
                    x={-500}
                    y={-60}
                    stroke={"black"}
                    lineWidth={5}
                />
                <Line
                    points={() => [
                        [
                            rect1Ref().x() + rect1Ref().width() / 2,
                            rect1Ref().y() - rect1Ref().height() / 2,
                        ],
                        [
                            rect2Ref().x() + rect2Ref().width() / 2,
                            rect2Ref().y() - rect2Ref().height() / 2,
                        ],
                    ]}
                    stroke={"black"}
                    lineWidth={5}
                />
                <Line
                    points={() => [
                        [
                            rect1Ref().x() + rect1Ref().width() / 2,
                            rect1Ref().y() + rect1Ref().height() / 2,
                        ],
                        [
                            rect2Ref().x() + rect2Ref().width() / 2,
                            rect2Ref().y() + rect2Ref().height() / 2,
                        ],
                    ]}
                    stroke={"black"}
                    lineWidth={5}
                />
                <Line
                    points={() => [
                        [
                            rect1Ref().x() - rect1Ref().width() / 2,
                            rect1Ref().y() - rect1Ref().height() / 2,
                        ],
                        [
                            rect2Ref().x() - rect2Ref().width() / 2,
                            rect2Ref().y() - rect2Ref().height() / 2,
                        ],
                    ]}
                    stroke={"black"}
                    lineWidth={5}
                />
                <Line
                    points={() => [
                        [
                            rect1Ref().x() - rect1Ref().width() / 2,
                            rect1Ref().y() + rect1Ref().height() / 2,
                        ],
                        [
                            rect2Ref().x() - rect2Ref().width() / 2,
                            rect2Ref().y() + rect2Ref().height() / 2,
                        ],
                    ]}
                    stroke={"black"}
                    lineWidth={5}
                />
                <Rect
                    ref={rect2Ref}
                    width={100}
                    height={50}
                    fill={"white"}
                    stroke={"black"}
                    lineWidth={5}
                    x={-500}
                    y={-60}
                    clip
                >
                    <Txt
                        fontSize={10}
                        ref={rect2TxtRef}
                        text={"12345678910"}
                        letterSpacing={6}
                    />
                </Rect>
                <Txt
                    opacity={0}
                    ref={rect2Txt2Ref}
                    text={"Plaintext Passwords"}
                    fontSize={40}
                    letterSpacing={3}
                    fill={"white"}
                    y={() => rect2Ref().y() + rect2Ref().height() / 1.3}
                    x={() => rect2Ref().x()}
                />
            </Node>
        </Rect>
    );

    yield* slideTransition(Direction.Right, 1);

    yield* all(
        rect2Ref().y(300, 2),
        rect2Ref().x(0, 2),
        rect2Ref().width(500, 2),
        rect2Ref().height(150, 2),
        rect2TxtRef().fontSize(45, 2)
    );

    yield* rect2Txt2Ref().opacity(1, 0.1);

    const rectDataBreachRef = createRef<Rect>();
    const rectTxtDataBreachRef = createRef<Rect>();
    view.add(
        <Rect
            ref={rectDataBreachRef}
            fill={"#d00000"}
            stroke={"white"}
            lineWidth={5}
            width={"100%"}
            height={80}
        >
            <Txt
                ref={rectTxtDataBreachRef}
                text={"Data Breach"}
                fill={"white"}
            />
        </Rect>
    );

    yield* all(
        rectDataBreachRef()
            .opacity(0, 0.5)
            .to(1, 0.5)
            .to(0, 0.5)
            .to(1, 0.5)
            .to(0, 0.5)
            .to(1, 0.5)
    );

    const bigRiskRectRef = createRef<Rect>();
    view.add(
        <Rect ref={bigRiskRectRef} width={"100%"} height={"100%"} fill={"#1E1E2E"} opacity={0}>
            <Txt text={"Unprotected Data = Big Risk"} fontSize={65} fill={"white"} fontWeight={900} />
        </Rect>
    );

    yield* bigRiskRectRef().opacity(1,2);
    yield* waitFor(4)
});
