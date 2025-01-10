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
    mainHashRef().remove();

    yield* waitFor(2)
});
