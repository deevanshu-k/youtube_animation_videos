import { makeProject } from "@motion-canvas/core";

import typeing_password from "./scenes/001_Typeing_password_in_computer/typeing_password?scene";
import hacker_seeing_password from "./scenes/002_hacker_seeing_password_from_db/hacker_seeing_password?scene";
import hashing_password from "./scenes/003_Hashing_Password/hashing_password?scene";
import modern_hashing from "./scenes/004_modern_hashing_algo/modern_hashing?scene";
import rainbow_attack from "./scenes/005_Rainbow_Table_Attack/rainbow_table?scene";
import adding_salt from "./scenes/006_Adding_Salt/adding_salt?scene";

export default makeProject({
    // scenes: [adding_salt],
    scenes: [
        typeing_password,
        hacker_seeing_password,
        hashing_password,
        modern_hashing,
        rainbow_attack,
        adding_salt
    ],
});
