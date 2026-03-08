# Web Development Project 2 - _Introductory Astronomy Exam 4 Flash Cards_

Submitted by: **Robby Wideman**

This web app: **is designed to help students of introductory astronomy study for an exam, specifically PSC-30 Introductory Astronomy at Butte College, Exam 4, taught by Professor Trento in Fall of 2025!**

Time spent: **6** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The app displays the title of the card set, a short description, and the total number of cards**
  - [x] Title of card set is displayed
  - [x] A short description of the card set is displayed
  - [x] A list of card pairs is created
  - [x] The total number of cards in the set is displayed
  - [x] Card set is represented as a list of card pairs (an array of dictionaries where each dictionary contains the question and answer is perfectly fine)
- [x] **A single card at a time is displayed**
  - [x] Only one half of the information pair is displayed at a time
- [x] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [x] Clicking on a card flips it over, showing the back with corresponding information
  - [x] Clicking on a flipped card again flips it back, showing the front
- [x] **Clicking on the next button displays a random new card**

The following **optional** features are implemented:

- [x] Cards contain images in addition to or in place of text
  - [x] Some or all cards have images in place of or in addition to text
- [x] Cards have different visual styles such as color based on their category
  - Example categories you can use:
    - Difficulty: Easy/medium/hard
    - Subject: Biology/Chemistry/Physics/Earth science

The following **additional** features are implemented:

- [x] List anything else that you added to improve the site's functionality!
  - [x] Added link to my video on the Drake Equation on the specific Drake Equation flash card (I like my own video, and if you want to hear my take, watch it if you have time haha!)
  - [x] Moved "Flashcard" function into it's own file (Flashcard.jsx) to be more akin to a component. Imported it for use in App.jsx.
  - [x] Cards continued to randomly repeat with no stop, often repeating before the entire array/list/dictionary of definitions had been completed. Implemented an End Card and option to restart.
  - [x] Additional styling for organization and look added to App.css.
  - [x] Add a card counter pill above the flash cards, which will tell the user how many cards they've gone through over how many total cards there are, and how many cards remain in the set (format appears as "Card #/58 • # remaining" in this case)

## Video Walkthrough

Here’s a video walkthrough of the implemented required features:

[![Watch the walkthrough](https://img.youtube.com/vi/_O9va2Uv03s/hqdefault.jpg)](https://youtu.be/_O9va2Uv03s?si=9AigmvP7mgGDUuXT)

Here's a GIF walkthrough (not as detailed)

<img src="project2Walkthrough.gif" width="800" alt="GIF Walkthrough" />

GIF created with ScreenToGif (https://www.screentogif.com/) for Windows

## Notes

Smoothing out the card flip animation and getting everything properly centered probably took the most work (aside from the study guide I typed out on this subject for the terms and definitions, but _technically_ I wrote that out last semester, I just had to put them into the dictionary/array format for this project). I think I may use something like this for future study guides!
Setting up the logic for the card counter (as explained in the Additional Features section) took some thinking, but it came out looking nice, especially on the front end.

## License

    Copyright 2026 Robby Wideman

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
