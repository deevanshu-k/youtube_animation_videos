import { Img, Line, makeScene2D, Ray, Rect, Txt } from "@motion-canvas/2d";
import {
    all,
    createRef,
    DEFAULT,
    sequence,
    waitFor,
} from "@motion-canvas/core";
import cursorSvg from "/cursor.svg?url";
export default makeScene2D(function* (view) {
    view.fill("#1e1e2e");

    // Show heading
    const headTxtRef = createRef<Txt>();
    view.add(
        <Txt
            ref={headTxtRef}
            text={"Account Login"}
            fontSize={48}
            fontWeight={900}
            fill={"#FFFFFF"}
            letterSpacing={3}
        />
    );

    yield* waitFor(1);
    yield* headTxtRef().opacity(0, 1);

    // Sign Up form
    const signInRectRef = createRef<Rect>();
    const signInBtnRectRef = createRef<Rect>();
    view.add(
        <Rect
            ref={signInRectRef}
            layout
            direction={"column"}
            justifyContent={"space-evenly"}
            padding={40}
            fill={"#2e2e3e"}
            width={400}
            height={380}
            radius={8}
        >
            <Rect
                layout
                paddingLeft={20}
                paddingTop={18}
                paddingRight={20}
                paddingBottom={20}
                lineWidth={2}
                stroke={"#3a3a4a"}
            >
                <Txt
                    text={"xyz@email.com"}
                    letterSpacing={3}
                    fontSize={28}
                    fill={"#BDC0C4"}
                />
            </Rect>
            <Rect
                layout
                paddingLeft={20}
                paddingTop={18}
                paddingRight={20}
                paddingBottom={12}
                lineWidth={2}
                stroke={"#3a3a4a"}
            >
                <Txt
                    fontSize={28}
                    text={"***********"}
                    letterSpacing={4}
                    fill={"#BDC0C4"}
                />
            </Rect>
            <Rect
                ref={signInBtnRectRef}
                layout
                paddingLeft={20}
                paddingTop={18}
                paddingRight={20}
                paddingBottom={20}
                lineWidth={2}
                stroke={"#3a3a4a"}
                fill={"#FFFFFF"}
            >
                <Txt
                    width={400}
                    fontSize={22}
                    textAlign={"center"}
                    text={"Sign In"}
                    letterSpacing={4}
                    fill={"#000000"}
                />
            </Rect>
        </Rect>
    );
    const cursorRef = createRef<Img>();
    view.add(
        <Img ref={cursorRef} size={35} x={1000} y={1000} src={cursorSvg} />
    );

    yield* sequence(
        1.5,
        all(cursorRef().x(0, 1), cursorRef().y(115, 1)),
        all(
            signInBtnRectRef().fill(DEFAULT, 0),
            ...signInBtnRectRef()
                .childrenAs<Txt>()
                .map((c) => c.fill("white", 0))
        )
    );
    yield* all(signInRectRef().x(-600, 1), signInRectRef().y(-200, 1));

    const serverRectRef = createRef<Rect>();
    const reqRectRef = createRef<Rect>();
    const pswdSaltRef = createRef<Rect>();
    const pswdSaltHashRef = createRef<Rect>();
    const dbTableRef = createRef<Rect>();
    const saltToDbLineRef = createRef<Line>();
    const data = [
        {
            label: "abc@email.com",
            hash: "5d41402abc4efVsdfeD2...",
            salt: "as234fdsf",
        },
        {
            label: "xyz@email.com",
            hash: "$2b$10$D9aVq4V3Zhje9...",
            salt: "asddfg12",
            bg: "#4fc3f7",
        },
    ];
    view.add(
        <Rect
            ref={serverRectRef}
            fill={"#2e2e3e"}
            width={"60%"}
            height={"100%"}
            x={390}
            opacity={0}
        >
            <Txt text={"Server"} fill={"#89b4fa"} y={-480} letterSpacing={9} />
            <Rect ref={reqRectRef} opacity={0} y={-270} x={-750}>
                <Ray
                    lineWidth={2}
                    stroke={"white"}
                    fromX={0}
                    toX={400}
                    endArrow
                    arrowSize={15}
                />
                <Txt
                    fontSize={22}
                    x={200}
                    y={-50}
                    fill={"white"}
                    text={
                        "/signin \n Email: xyz@email.com \n Password: MyPassword"
                    }
                />
            </Rect>
            <Rect ref={pswdSaltRef} y={-270} opacity={0}>
                <Rect layout gap={20}>
                    <Txt fill={"white"} fontSize={34} text={"MyPassword"} />
                    <Txt fill={"white"} fontSize={34} text={"+"} />
                    <Txt fill={"#a6e3a1"} fontSize={34} text={"asddfg12"} />
                </Rect>
                <Line
                    lineWidth={3}
                    stroke={"white"}
                    points={[
                        [200, -100],
                        [100, -100],
                        [100, -30],
                    ]}
                    radius={80}
                    endArrow
                    arrowSize={10}
                />
                <Txt
                    x={300}
                    y={-100}
                    fontSize={28}
                    fill={"white"}
                    text={"fetch from DB"}
                />
                <Line
                    lineWidth={3}
                    stroke={"white"}
                    points={[
                        [-220, 30],
                        [-220, 50],
                        [220, 50],
                        [220, 30],
                    ]}
                    arrowSize={10}
                />
            </Rect>

            <Rect
                ref={dbTableRef}
                opacity={0}
                layout
                rowGap={20}
                columnGap={40}
                direction={"column"}
                width={1000}
                height={280}
                padding={20}
                y={380}
                fill={"#1E1E2F"}
            >
                <Txt
                    text={"Data Layer"}
                    fontSize={34}
                    fill={"white"}
                    textAlign={"center"}
                />
                <Rect layout gap={20} direction={"row"} width={"100%"}>
                    <Rect
                        width={"30%"}
                        height={"100%"}
                        fontSize={28}
                        fill={"#FFFFFF"}
                        paddingLeft={12}
                        padding={5}
                    >
                        <Txt text={"Email"} />
                    </Rect>
                    <Rect
                        width={"40%"}
                        height={"100%"}
                        fontSize={28}
                        fill={"#BBBBBB"}
                        paddingLeft={12}
                        padding={5}
                    >
                        <Txt text={"Hash"} />
                    </Rect>
                    <Rect
                        width={"30%"}
                        height={"100%"}
                        fontSize={28}
                        fill={"#BBBBBB"}
                        paddingLeft={12}
                        padding={5}
                    >
                        <Txt text={"Salt"} />
                    </Rect>
                </Rect>
                {data.map((d, i) => (
                    <Rect layout gap={20} direction={"row"} width={"100%"}>
                        <Rect
                            width={"30%"}
                            height={"100%"}
                            fontSize={28}
                            fill={d.bg ? d.bg : "#FFFFFF"}
                            paddingLeft={12}
                            padding={5}
                        >
                            <Txt text={d.label} />
                        </Rect>
                        <Rect
                            width={"40%"}
                            height={"100%"}
                            fontSize={28}
                            fill={d.bg ? d.bg : "#BBBBBB"}
                            paddingLeft={12}
                            padding={5}
                        >
                            <Txt text={d.hash} />
                        </Rect>
                        <Rect
                            width={"30%"}
                            height={"100%"}
                            fontSize={28}
                            fill={d.bg ? d.bg : "#BBBBBB"}
                            paddingLeft={12}
                            padding={5}
                        >
                            <Txt text={d.salt} />
                        </Rect>
                    </Rect>
                ))}
            </Rect>
            <Rect ref={pswdSaltHashRef} opacity={0}>
                <Line
                    lineWidth={3}
                    stroke={"white"}
                    points={[
                        [0, -220],
                        [0, -50],
                    ]}
                    endArrow
                    arrowSize={10}
                />
                <Txt
                    y={-150}
                    fontSize={28}
                    text={"Generate Hash"}
                    fill={"white"}
                />
                <Txt
                    fontSize={28}
                    text={"$2b$10$D9aVq4V3Zhje9QEQixk..."}
                    fill={"#94e2d5"}
                />
                <Txt
                    y={150}
                    fontSize={28}
                    text={"Compare Hash"}
                    fill={"white"}
                />
                <Line
                    lineWidth={3}
                    stroke={"white"}
                    points={[
                        [0, 50],
                        [0, 450],
                    ]}
                    endArrow
                    startArrow
                    arrowSize={10}
                />
            </Rect>

            <Line
                ref={saltToDbLineRef}
                opacity={0}
                lineWidth={3}
                stroke={"white"}
                points={[
                    [450, 480],
                    [450, -270],
                    [250, -270],
                ]}
                endArrow
                arrowSize={10}
            />
        </Rect>
    );

    yield* sequence(
        1.5,
        serverRectRef().opacity(1, 0.5),
        reqRectRef().opacity(1, 0.5),
        all(
            pswdSaltRef().opacity(1, 0.5),
            saltToDbLineRef().opacity(1, 0.5),
            dbTableRef().opacity(1, 0.5)
        ),
        all(pswdSaltHashRef().opacity(1, 0.5))
    );
});
