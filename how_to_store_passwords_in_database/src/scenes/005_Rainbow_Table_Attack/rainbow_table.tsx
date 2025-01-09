import { Camera, Grid, makeScene2D, Node, Rect, Txt } from "@motion-canvas/2d";
import {
    all,
    createRef,
    Direction,
    range,
    sequence,
    slideTransition,
    waitFor,
} from "@motion-canvas/core";

export default makeScene2D(function* (view) {
    view.fill("#1E1E2E");

    const subHeadTxtRef = createRef<Txt>();
    view.add(
        <Node>
            <Txt
                text={"Rainbow Table"}
                fontSize={48}
                fontWeight={900}
                y={-360}
                fill={"#FFFFFF"}
                letterSpacing={3}
            />
            <Txt
                ref={subHeadTxtRef}
                text={"Performing Attack"}
                opacity={0}
                fontSize={28}
                y={-310}
                fill={"red"}
                letterSpacing={3}
                fontWeight={600}
            />
        </Node>
    );

    // Create grid for rainbow table
    const data = [
        { label: "password123", hash: "5d41402abc4b2a76b9719d911017c592" },
        { label: "letmein", hash: "c8578edf8458ce06fbc5bb76a58c5ca4" },
        { label: "123456", hash: "e99a18c428cb38d5f260853678922e03" },
        { label: "qwerty", hash: "dp958edf8458ce06fbc5bb76a58c5ca4" },
        { label: "iloveyou", hash: "u99a18c428cb38d5f260853678922e03" },
        { label: "admin", hash: "21232f297a57a5a743894a0e4a801fc3" },
    ];
    const tableRef = createRef<Rect>();
    view.add(
        <Node ref={tableRef}>
            <Rect
                layout
                rowGap={20}
                columnGap={40}
                padding={20}
                direction={"column"}
                width={1000}
                height={400}
                fill={"#1E1E2F"}
            >
                <Rect
                    layout
                    gap={20}
                    direction={"row"}
                    width={"100%"}
                    height={100}
                >
                    <Rect
                        width={"20%"}
                        height={"100%"}
                        fontSize={28}
                        fill={"#FFFFFF"}
                        paddingLeft={12}
                        padding={5}
                    >
                        <Txt text={"Passwords"} />
                    </Rect>
                    <Rect
                        width={"60%"}
                        height={"100%"}
                        fontSize={28}
                        fill={"#BBBBBB"}
                        paddingLeft={12}
                        padding={5}
                    >
                        <Txt text={"Precomputed Hashes"} />
                    </Rect>
                </Rect>
                {data.map((d, i) => (
                    <Rect
                        layout
                        gap={20}
                        direction={"row"}
                        width={"100%"}
                        height={100}
                    >
                        <Rect
                            width={"20%"}
                            height={"100%"}
                            fontSize={28}
                            fill={"#FFFFFF"}
                            paddingLeft={12}
                            padding={5}
                        >
                            <Txt text={d.label} />
                        </Rect>
                        <Rect
                            width={"60%"}
                            height={"100%"}
                            fontSize={28}
                            fill={"#BBBBBB"}
                            paddingLeft={12}
                            padding={5}
                        >
                            <Txt text={d.hash} />
                        </Rect>
                    </Rect>
                ))}
            </Rect>
        </Node>
    );

    yield* all(tableRef().x(-400, 2));

    const commands = [
        {
            prev: "mr@robot $ ",
            next: "findpswd -h 'u99a18c428cb38d5f260853678922e03'",
        },
        {
            prev: "$ hash(password123) -> ",
            next: "Not Match",
            nextColor: "red",
        },
        { prev: "$ hash(letmein) -> ", next: "Not Match", nextColor: "red" },
        { prev: "$ hash(123456) -> ", next: "Not Match", nextColor: "red" },
        { prev: "$ hash(qwerty) -> ", next: "Not Match", nextColor: "red" },
        { prev: "$ hash(iloveyou) -> ", next: "Matched", nextColor: "yellow" },
    ];
    const terminalRef = createRef<Rect>();
    const crackedRef = createRef<Rect>();
    view.add(
        <Node x={450} y={25}>
            <Rect
                ref={terminalRef}
                layout
                direction={"column"}
                padding={15}
                width={850}
                height={440}
                fill={"#0F0F0F"}
                stroke={"#00FF00"}
                lineWidth={4}
            >
                {...commands.map((cmd) => (
                    <Rect layout padding={8} direction={"row"} opacity={0}>
                        <Txt text={cmd.prev} fontSize={28} fill={"#00FF00"} />
                        <Txt
                            text={" " + cmd.next}
                            fontSize={28}
                            fill={"#00FF00"}
                        />
                    </Rect>
                ))}
            </Rect>
            <Rect
                ref={crackedRef}
                opacity={0}
                width={250}
                height={80}
                stroke={"red"}
                lineWidth={3}
            >
                <Txt
                    fill={"red"}
                    opacity={1}
                    fontWeight={800}
                    text={"CRACKED"}
                />
            </Rect>
        </Node>
    );
    
    yield* slideTransition(Direction.Right, 1);

    yield* sequence(
        1,
        ...terminalRef()
            .children()
            .map((c) => c.opacity(1, 0.5))
    );

    const overlayTxtRef = createRef<Rect>();
    view.add(
        <Rect ref={overlayTxtRef} opacity={0} width={"100%"} height={"100%"} fill={"#1E1E2E"}>
            <Txt text={"Rainbow Tables = Fast Attacks."} fontSize={65} fill={"white"} fontWeight={900} />
        </Rect>
    );

    yield* overlayTxtRef().opacity(1,2)

    yield* waitFor(3)
});
