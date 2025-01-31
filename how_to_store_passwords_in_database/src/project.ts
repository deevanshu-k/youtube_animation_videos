import { makeProject } from "@motion-canvas/core";

import audio from "../public/DK YT1 20250125-154346.mp3";

import typeing_password from "./scenes/001_Typeing_password_in_computer/typeing_password?scene";
import hacker_seeing_password from "./scenes/002_hacker_seeing_password_from_db/hacker_seeing_password?scene";
import hashing_password from "./scenes/003_Hashing_Password/hashing_password?scene";
import modern_hashing from "./scenes/004_modern_hashing_algo/modern_hashing?scene";
import rainbow_attack from "./scenes/005_Rainbow_Table_Attack/rainbow_table?scene";
import adding_salt from "./scenes/006_Adding_Salt/adding_salt?scene";
import signup_flow from "./scenes/007_Signup_Flow/signup_flow?scene";
import login_flow from "./scenes/008_Login_Flow/login_flow?scene";

export default makeProject({
    // scenes: [signup_flow],
    scenes: [
        typeing_password,
        hacker_seeing_password,
        hashing_password,
        modern_hashing,
        rainbow_attack,
        adding_salt,
        signup_flow,
        login_flow,
    ],
});
