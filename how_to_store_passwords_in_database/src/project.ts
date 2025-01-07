import { makeProject } from "@motion-canvas/core";

import typeing_password from "./scenes/001_Typeing_password_in_computer/typeing_password?scene";
import hacker_seeing_password from "./scenes/002_hacker_seeing_password_from_db/hacker_seeing_password?scene";
import hashing_password from "./scenes/003_Hashing_Password/hashing_password?scene";

export default makeProject({
    scenes: [typeing_password, hacker_seeing_password, hashing_password],
});
