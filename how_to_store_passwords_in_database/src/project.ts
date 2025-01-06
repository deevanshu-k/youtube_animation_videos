import { makeProject } from "@motion-canvas/core";

import typeing_password from "./scenes/001_Typeing_password_in_computer/typeing_password?scene";
import hacker_seeing_password from "./scenes/002_hacker_seeing_password_from_db/hacker_seeing_password?scene";

export default makeProject({
    scenes: [hacker_seeing_password],
});
