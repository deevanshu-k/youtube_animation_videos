import {
    Camera,
    Circle,
    Line,
    makeScene2D,
    Rect,
    Txt,
} from "@motion-canvas/2d";
import {
    all,
    createRef,
    createSignal,
    DEFAULT,
    Direction,
    range,
    slideTransition,
    waitFor,
    waitUntil,
    zoomOutTransition,
} from "@motion-canvas/core";

export default makeScene2D(function* (view) {
    view.fill("#181818");
    let loginForm = {
        ref: createRef<Rect>(),
        width: createSignal(view.width() * 0.32),
        height: createSignal(view.height() * 0.65),
        radius: createSignal(20),
        scale: createSignal(10),
        pswd: createSignal("Enter password"),
    };
    let lineRef = createRef<Line>();

    view.add(
        <Rect
            ref={loginForm.ref}
            width={() => loginForm.scale() * 60}
            height={() => loginForm.scale() * 75}
            fill={"343434"}
            radius={loginForm.scale() * 2}
        >
            <Txt
                text="Login"
                y={() => -loginForm.scale() * 30}
                fill={"white"}
                fontWeight={() => 80 * loginForm.scale()}
                letterSpacing={6}
            />
            <Rect
                width={() => loginForm.scale() * 45}
                height={() => loginForm.scale() * 10}
                radius={loginForm.scale() / 2}
                y={() => -loginForm.scale() * 8}
                fill={"white"}
            >
                <Txt
                    textAlign={"left"}
                    width={() => loginForm.scale() * 40}
                    text={"username"}
                />
            </Rect>
            <Rect
                width={() => loginForm.scale() * 45}
                height={() => loginForm.scale() * 10}
                radius={loginForm.scale() / 2}
                y={() => loginForm.scale() * 7}
                fill={"white"}
            >
                <Txt
                    textAlign={"left"}
                    width={() => loginForm.scale() * 40}
                    text={() => loginForm.pswd()}
                />
            </Rect>
            <Rect
                width={() => loginForm.scale() * 45}
                height={() => loginForm.scale() * 10}
                radius={loginForm.scale() / 2}
                y={() => loginForm.scale() * 25}
                fill={"#9b9b9b"}
            />
        </Rect>
    );

    let str = "";
    for (let i in range(10)) {
        yield* loginForm
            .pswd(str, 0)
            .to((str = str + i), 0.1)
            .to((str = str.substring(0, str.length - 1) + "*"), 0.1);
    }
});
