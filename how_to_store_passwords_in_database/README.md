### Script: How to Store Passwords in a Database (With Animations)

---

#### **Opening Scene**
- **Visual:**
  - Start with a close-up of a computer screen showing a login form. A user types "123456" as the password. Add a subtle animation of the password dots appearing in real-time.
  - Transition to a hacker's screen showing plaintext passwords being retrieved from a database labeled "Plaintext Passwords."
  - Add a red warning overlay and sound effect for "Danger! Data Breach!"
- **Voiceover:** "Imagine this: you're logging into your favorite website. But behind the scenes, your password might be stored in plain text."
- **Visual:** The screen fades to black with the words "Unprotected Data = Big Risk" appearing in bold.
- **Voiceover:** "A data breach can expose your password to hackers in an instant."

---

#### **1. Hashing**
- **Visual:**
  - Show a database labeled "Plaintext Passwords" getting stamped with a red "Vulnerable" warning. Transition to a secure box labeled "Hash Function."
  - Animate a password (`123456`) entering the hash box and exiting as a hashed string (`A12B34CD...`). Use glowing effects to emphasize security.
- **Voiceover:** "To protect passwords, we use hashing—a process that transforms a password into a unique, one-way fingerprint."

- **Visual:**
  - Display a simple lock icon and text: "One-Way Transformation."
  - Follow with two paint buckets (red and blue) pouring into a mixer to create purple paint. Overlay text: "You can't separate the original colors."
- **Voiceover:** "Think of hashing like mixing colors—it's irreversible."

- **Visual:**
  - Introduce a progress bar labeled "Bcrypt" filling up slowly. Add a stopwatch showing the increased time needed to compute a hash.
- **Voiceover:** "Modern hashing algorithms like bcrypt add layers of security, making it computationally expensive for hackers to crack passwords."

---

#### **2. Salting**
- **Visual:**
  - Start with a table labeled "Rainbow Table" mapping passwords to precomputed hashes. Show a hacker instantly matching a hash to a password.
  - Overlay text: "Rainbow Tables = Fast Attacks."
- **Voiceover:** "But there's a catch. Hackers can use precomputed hashes, known as rainbow tables, to crack passwords."

- **Visual:**
  - Show a password (`123456`) combining with a random salt (`$@4d5!`). Animate the merged string entering the hash function and producing a unique output hash (`Z98Y76X...`).
- **Voiceover:** "Salting adds a random string to each password before hashing, creating a unique fingerprint."

- **Visual:**
  - Compare two users with the same password (`123456`). Add unique salts (`$@4d5!` and `#9fT3*`) and demonstrate how they produce different hashes. Use color-coded arrows for clarity.
- **Voiceover:** "This ensures even identical passwords produce different hashes, rendering rainbow tables useless."

- **Visual:**
  - Show the hacker's rainbow table "glitching out" with a red error message: "Precomputed Attacks Invalid!"
  - Add an animation of a frustrated hacker throwing their keyboard.
- **Voiceover:** "Adding salt makes precomputed attacks ineffective."

---

#### **3. Stretching**
- **Visual:**
  - Display a hacker's screen rapidly trying password combinations (`0000`, `0001`, ...). Add a counter ticking up rapidly and a progress bar labeled "Brute Force Speed."
- **Voiceover:** "Hackers might still try brute force—testing millions of combinations."

- **Visual:**
  - Show a password entering a hash function repeatedly on a conveyor belt. Each step visibly slows down, with a progress bar labeled "Key Stretching."
- **Voiceover:** "Key stretching applies the hash function multiple times, slowing down brute force attacks."

- **Visual:**
  - Cut to the hacker’s frustrated face as their program progress bar crawls at 2%. Add an exaggerated sigh animation.
- **Voiceover:** "This makes it exponentially harder for hackers to guess the password."

---

#### **Workflow Animations**

**1. Account Creation**
- **Visual:**
  - Show a user typing a password into a signup form. 
  - Server screen pops up with steps: "Generate Salt," "Combine Salt + Password," "Hash," and "Store in Database." 
  - Animate the database storing two fields: Salt and Hash.
- **Voiceover:** "When you sign up, the server generates a unique salt, combines it with your password, and stores the hash alongside the salt."

**2. Login Validation**
- **Visual:**
  - User enters their password in a login form.
  - Server screen retrieves the salt and combines it with the entered password. Show the hash function running and outputting a fingerprint.
  - Database comparison occurs with a green checkmark and text: "Access Granted."
- **Voiceover:** "During login, the server regenerates the hash using the stored salt and checks it against the database. If they match, you're in!"

---

#### **Conclusion**
- **Visual:**
  - A checklist appears:
    - "Hash passwords securely."
    - "Add salt to passwords."
    - "Use key stretching to slow brute force."
    - "Encourage strong, unique passwords."
  - Each item gets a green tick with a glowing animation.
- **Voiceover:** "To store passwords securely: hash them, add salt, and use key stretching. And always encourage users to create strong, unique passwords."

- **Visual:**
  - Split-screen: A happy user celebrates secure access while a hacker angrily closes their laptop.
  - Overlay text: "Security Wins!"
- **Voiceover:** "With these practices, you can keep your users' data safe from even the most determined attackers."

---

#### **Closing Scene**
- **Visual:**
  - Animated text: "Subscribe for more coding tips!" with icons for YouTube, GitHub, and a glowing light bulb symbolizing learning.
  - Add an animated bell ringing to encourage notifications.
- **Voiceover:** "Subscribe to learn more about secure coding and best practices!"

---

