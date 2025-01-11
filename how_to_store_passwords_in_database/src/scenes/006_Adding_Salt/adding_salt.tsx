import { Line, makeScene2D, Node, Ray, Rect, Txt } from "@motion-canvas/2d";
import {
    all,
    createRef,
    createSignal,
    DEFAULT,
    sequence,
    waitFor,
} from "@motion-canvas/core";

export default makeScene2D(function* (view) {
    view.fill("#1e1e2e");

    // Add Salting Head Page
    const saltHeadRef = createRef<Rect>();
    const saltSubHeadRef = createRef<Txt>();
    view.add(
        <Node ref={saltHeadRef}>
            <Txt
                text={"How Salting and Hashing Secure Your Passwords"}
                fontSize={48}
                fontWeight={900}
                fill={"#FFFFFF"}
                letterSpacing={3}
            />
            <Txt
                opacity={0}
                ref={saltSubHeadRef}
                text={
                    "Combining a Password with a Salt Creates a Unique Fingerprint Every Time"
                }
                fontSize={28}
                y={50}
                fill={"#60A5FA"}
                letterSpacing={3}
            />
        </Node>
    );

    yield* waitFor(1.5);
    yield* saltHeadRef().y(-300, 1);
    yield* saltSubHeadRef().opacity(1, 0.5);

    // Text for password and salt
    const password = createSignal("Password");
    const salt = createSignal("Salt");
    const combined = createSignal("SaltPassword");
    const hashOutput = createSignal("Hash");
    const pswdRef = createRef<Txt>();
    const pswdMainNodeRef = createRef<Node>();
    const hashMainNodeRef = createRef<Node>();
    const hashLineRef = createRef<Line>();
    const hashingTxtRef = createRef<Txt>();
    const mainHashRef = createRef<Node>();
    view.add(
        <Node ref={mainHashRef} y={100}>
            <Node opacity={0} ref={pswdMainNodeRef}>
                <Txt x={-125} fill={"#f9e2af"} fontSize={35} text={salt()} />
                <Txt x={-40} fill={"white"} fontSize={45} text={" + "} />
                <Txt x={125} fill={"#f28f79"} fontSize={35} text={password()} />
                {/* <Txt
                    ref={pswdRef}
                    fill={"#89b4fa"}
                    fontSize={35}
                    text={combined()}
                /> */}
            </Node>
            <Line
                opacity={0}
                ref={hashLineRef}
                points={() => [
                    [pswdMainNodeRef().x() + 350, pswdMainNodeRef().y()],
                    [hashMainNodeRef().x() - 300, hashMainNodeRef().y()],
                ]}
                stroke={"#cba6f7"}
                lineWidth={4}
                endArrow
                arrowSize={10}
            />
            <Txt
                opacity={0}
                ref={hashingTxtRef}
                fill={"#cba6f7"}
                fontSize={35}
                text={"Hashing"}
                y={-40}
            />
            <Node opacity={0} ref={hashMainNodeRef} x={500}>
                <Txt
                    ref={pswdRef}
                    fill={"#a6e3a1"}
                    fontSize={35}
                    text={hashOutput()}
                />
            </Node>
        </Node>
    );

    // Add salt with password
    yield* pswdMainNodeRef().opacity(1, 1.5);
    yield* pswdMainNodeRef().x(-550, 1);
    // Add arrow and hashing text
    yield* all(hashLineRef().opacity(1, 0.5), hashingTxtRef().opacity(1, 1));
    // Add hash
    yield* hashMainNodeRef().opacity(1, 0.5);

    // Hash two user password
    yield* waitFor(1)
    mainHashRef().remove();
    const mainPswdTxtRef = createRef<Txt>();
    const pswdWithSalt1TxtRef = createRef<Node>();
    const pswdWithSalt2TxtRef = createRef<Node>();
    const dLine1Ref = createRef<Line>();
    const dLine2Ref = createRef<Line>();
    const pLine1Ref = createRef<Line>();
    const pLine2Ref = createRef<Line>();
    const hashContRef = createRef<Rect>();
    const hash1Ref = createRef<Txt>();
    const hash2Ref = createRef<Txt>();
    view.add(
        <Node y={120}>
            <Txt
                ref={mainPswdTxtRef}
                x={0}
                fontSize={28}
                text={"MyPassword"}
                fill={"#4FC3F7"}
            />
            <Rect
                ref={pswdWithSalt1TxtRef}
                opacity={0}
                layout
                direction={"row"}
                x={-200}
                y={-140}
            >
                <Txt fontSize={28} text={"MyPassword"} fill={"#4FC3F7"} />
                <Txt
                    fontSize={28}
                    paddingLeft={25}
                    paddingRight={25}
                    text={"+"}
                    fill={"#4FC3F7"}
                />
                <Txt fontSize={28} text={"Salt1"} fill={"#FF7043"} />
            </Rect>
            <Rect
                opacity={0}
                ref={pswdWithSalt2TxtRef}
                layout
                direction={"row"}
                x={-200}
                y={140}
            >
                <Txt fontSize={28} text={"MyPassword"} fill={"#4FC3F7"} />
                <Txt
                    fontSize={28}
                    paddingLeft={25}
                    paddingRight={25}
                    text={"+"}
                    fill={"#4FC3F7"}
                />
                <Txt fontSize={28} text={"Salt2"} fill={"#AB47BC"} />
            </Rect>

            <Rect
                opacity={0}
                ref={hash2Ref}
                layout
                direction={"row"}
                x={480}
                y={140}
            >
                <Txt
                    fontSize={30}
                    text={"92ba2dbf8d4ffd09681b..."}
                    fill={"#6A1B9A"}
                />
            </Rect>
            <Rect
                opacity={0}
                ref={hash1Ref}
                layout
                direction={"row"}
                x={480}
                y={-140}
            >
                <Txt
                    fontSize={30}
                    text={"e4250094cde315dad684..."}
                    fill={"#E64A19"}
                />
            </Rect>
            {/* Password diversion arrows  */}
            <Line
                opacity={0}
                ref={dLine1Ref}
                lineWidth={3}
                stroke={"white"}
                endArrow
                arrowSize={10}
                points={[
                    [-580, -20],
                    [-400, -110],
                ]}
            />
            <Line
                opacity={0}
                ref={dLine2Ref}
                lineWidth={3}
                stroke={"white"}
                endArrow
                arrowSize={10}
                points={[
                    [-580, 20],
                    [-400, 110],
                ]}
            />
            {/* Hashing arrows */}
            <Line
                opacity={0}
                ref={pLine1Ref}
                lineWidth={3}
                stroke={"white"}
                endArrow
                arrowSize={10}
                points={[
                    [0, -140],
                    [230, -140],
                ]}
            />
            <Line
                opacity={0}
                ref={pLine2Ref}
                lineWidth={3}
                stroke={"white"}
                endArrow
                arrowSize={10}
                points={[
                    [0, 140],
                    [230, 140],
                ]}
            />
            <Rect
                opacity={0}
                ref={hashContRef}
                x={120}
                stroke={"white"}
                lineWidth={4}
                height={450}
                width={160}
                fontSize={26}
                fill={"green"}
            >
                <Txt fill={"white"} text={"Hashing"} fontSize={26} />
            </Rect>
        </Node>
    );

    yield* waitFor(2);
    yield* sequence(
        1,
        mainPswdTxtRef().x(-700, 1),
        all(dLine1Ref().opacity(1, 1), dLine2Ref().opacity(1, 1)),
        all(
            pswdWithSalt1TxtRef().opacity(1, 1),
            pswdWithSalt2TxtRef().opacity(1, 1)
        ),
        all(pLine1Ref().opacity(1, 1), pLine2Ref().opacity(1, 1)),
        hashContRef().opacity(1, 1),
        all(hash1Ref().opacity(1, 1), hash2Ref().opacity(1, 1))
    );
    yield* waitFor(2);
});
