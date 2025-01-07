import { Img, Line, makeScene2D, Node, Rect, Txt } from "@motion-canvas/2d";
import { all, createRef, Direction, slideTransition, waitFor } from "@motion-canvas/core";

import lockImage from "./lock.svg";
import paint1Image from "./paint1.svg";
import paint2Image from "./paint2.svg";
import paint3Image from "./paint3.svg";

export default makeScene2D(function* (view) {
    // view.fill("#181818");
    view.fill("#1E1E2E");

    // Password Hash View
    const pswdRef = createRef<Rect>();
    const hashRef = createRef<Rect>();
    const hashFnxRef = createRef<Rect>();
    const hashFnxTxtRef = createRef<Txt>();

    view.add(
        <Node>
            <Rect ref={pswdRef} x={-600} width={300} height={100} radius={30}>
                <Txt
                    fontSize={40}
                    letterSpacing={5}
                    text={"12345678910"}
                    fill={"#B5E8A2"}
                />
            </Rect>
            <Rect ref={hashRef} width={480} height={250} radius={20}>
                <Txt
                    fontSize={36}
                    y={-65}
                    letterSpacing={8}
                    text={"63640264849a87c9"}
                    fill={"#E5A47D"}
                />
                <Txt
                    fontSize={36}
                    y={22}
                    letterSpacing={8}
                    text={"0356129d99ea165e"}
                    fill={"#E5A47D"}
                />
                <Txt
                    fontSize={36}
                    y={-22}
                    letterSpacing={8}
                    text={"37aa5fabc1fea469"}
                    fill={"#E5A47D"}
                />
                <Txt
                    fontSize={36}
                    y={65}
                    letterSpacing={8}
                    text={"06df1a7ca50db492"}
                    fill={"#E5A47D"}
                />
            </Rect>
            <Rect
                ref={hashFnxRef}
                width={600}
                height={300}
                fill={"#2E3440"}
                radius={20}
                stroke={"88C0D0"}
                lineWidth={5}
            >
                <Txt
                    ref={hashFnxTxtRef}
                    letterSpacing={5}
                    text={"Hashing Function"}
                    fill={"white"}
                />
            </Rect>
        </Node>
    );

    yield* slideTransition(Direction.Right, 1);

    yield* pswdRef().x(0, 2);

    yield* hashRef().x(600, 1);

    yield* waitFor(2);

    view.removeChildren();

    // Lock View
    const lockRef = createRef<Node>();
    const oneWayTxtRef = createRef<Txt>();
    const oneWayLockRef = createRef<Txt>();
    view.add(
        <Node ref={lockRef}>
            <Img ref={oneWayLockRef} y={-80} src={lockImage} />
            <Txt
                ref={oneWayTxtRef}
                opacity={0}
                y={80}
                fill={"#A3BE8C"}
                text={"One-Way Transformation"}
            />
        </Node>
    );
    yield* oneWayTxtRef().opacity(1, 0.5);
    yield* waitFor(3);

    yield* all(
        lockRef().y(-400, 1),
        lockRef().x(-650, 1),
        oneWayTxtRef().fontSize(30, 1),
        oneWayTxtRef().x(110, 1),
        oneWayTxtRef().y(0, 1),
        oneWayLockRef().size(65, 1),
        oneWayLockRef().y(0, 1),
        oneWayLockRef().x(-110, 1)
    );

    // Paint View

    const paintNodeRef = createRef<Node>();
    const cantSeperateTxtRef = createRef<Txt>();
    view.add(
        <Node ref={paintNodeRef} opacity={0}>
            <Img x={-500} src={paint1Image} />
            <Txt
                x={-250}
                fill={"white"}
                fontWeight={600}
                fontSize={75}
                text={"+"}
            />
            <Img src={paint2Image} />
            <Txt
                x={250}
                fill={"white"}
                fontWeight={600}
                fontSize={75}
                text={"="}
            />
            <Img x={500} src={paint3Image} />
            <Txt
                opacity={0}
                ref={cantSeperateTxtRef}
                text={"You can't separate the original colors"}
                fill={"white"}
                y={200}
            />
            <Node x={220} y={-350}>
                <Txt text={"Hashing"} fill={"white"} />
                <Line
                    y={50}
                    points={[
                        [0, 0],
                        [15, 40],
                        [-15, 80],
                        [15, 120],
                        [-15, 160],
                        [30, 200],
                        [30, 280],
                    ]}
                    endArrow
                    stroke={"white"}
                    lineWidth={10}
                />
            </Node>
        </Node>
    );

    yield* paintNodeRef().opacity(1, 1);
    yield* waitFor(1);
    yield* cantSeperateTxtRef().opacity(1, 1);
    yield* waitFor(3);
});
