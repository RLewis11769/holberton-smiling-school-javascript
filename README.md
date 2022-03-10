# Holberton SmilingSchool
# Now With Added JavaScript!

## Description

This project adds JavaScript, primarily through jQuery, to the previous Bootstrap project found [here](https://github.com/RLewis11769/holberton-smiling-school).

This project duplicates the full dynamic front-end design of a fully functional website. The static content can be seen as 3 separate Figma designer files found [here](https://www.figma.com/file/QYQqMYbdpAHL5xTclwJKSI/Homepage?node-id=0%3A1), [here](https://www.figma.com/file/KLAI53jdYpfFNEy0O79ymB/Pricing?node-id=0%3A1), and [here](https://www.figma.com/file/ivg3abH1HLmMayBgjGg1Qf/Courses?node-id=0%3A1).

Content on the page is dynamically loaded from the SmileSchool API found [here](https://smileschool-api.hbtn.info).

The [project_docs/](https://github.com/RLewis11769/holberton-smiling-school-javascript/tree/main/project_docs) folder contains all documentation describing my goals, results, and thoughts on the project. Check out an overview of the final project including screenshots and my review [here](https://github.com/RLewis11769/holberton-smiling-school-javascript/blob/main/project_docs/review.md). This was a school project with a specific structure. I've outlined it [here](https://github.com/RLewis11769/holberton-smiling-school-javascript/blob/main/project_docs/project_structure.md)here. Any of [homepage.html](https://github.com/RLewis11769/holberton-smiling-school-javascript/blob/main/homepage.html), [pricing.html](https://github.com/RLewis11769/holberton-smiling-school-javascript/blob/main/pricing.html), [courses.html](https://github.com/RLewis11769/holberton-smiling-school-javascript/blob/main/courses.html) would work as an entry point for the project, as all are connected via clickable links in the header.

## README Navigation

- [Description](#description)
- [Navigation](#navigation)
- [Examples](#examples)
- [Installation](#installation)
- [Project Rules](#project-rules)
- [Features](#features)
- [Bugs](#bugs)
- [Credit](#credit)

## Examples

Full desktop/tablet, and mobile examples are shown here:

![All](https://github.com/RLewis11769/holberton-smiling-school-javascript/blob/main/project_docs/AllExamples.jpg)

The example for the first (single-item) carousel on the homepage and the carousel on the pricing page at full width:

![QuoteCarousel](https://github.com/RLewis11769/holberton-smiling-school-javascript/blob/main/project_docs/QuoteCarousel.gif).

The example for the second and third (multi-item) carousels on the homepage:

![TutorialsCarousel](https://github.com/RLewis11769/holberton-smiling-school-javascript/blob/main/project_docs/TutorialsCarousel.gif)

The example for the search bar on the courses page:

![Searchbar](https://github.com/RLewis11769/holberton-smiling-school-javascript/blob/main/project_docs/Searchbar.gif)

## Installation

### 1. Install

Clone the repository into your system with the command:

```
git@github.com:RLewis11769/holberton-smiling-school-javascript.git
```

### 2. Open

Choose an HTML file. I recommend [homepage.html](https://github.com/RLewis11769/holberton-smiling-school-javascript/blob/main/homepage.html)! Install "Live Server" or another server preview extension, run it, and navigate to the open port.

### 3. View

"Holberton SmilingSchool - JavaScript" is now ready to view!

## Project Rules

- You won’t have a lot of instruction, so you are free to implement it the way that you want. The objective is simple: Create a fully functional web page that looks the same as the designer file.
- Your styles.css must be as small as you can. You must use Bootstrap classes as much as you can.
- You have to use JQuery.
- Your scripts.js must contain all of your JavaScript.
- Your JavaScript must be executed only when the document is loaded.

## Features

- Reusable and easily-changeable content
- Decently accessible as defined by [axe Dev Tools](https://www.deque.com/axe/devtools/)
- Working multi-item carousel (using [slick carousel](https://kenwheeler.github.io/slick/) plugin)
- No static content present in dynamic sections
- Loader is briefly visible if change Network to "Slow 3G"
- Search initialized by:
	- Click on magnifying glass
	- Pressing "enter" while in "keywords" input field
	- New topic selected
	- New sort selected

## Bugs

- Loader should be visible during click on "next" arrow on carousels but couldn't get it working and included "infinite" loop instead
- Latest tutorials only has 4 cards so arrows are not visible on desktop when exactly 4 are displayed (due to Slick carousel)

## Credit

This webpage was designed by [Nicolas Philippot](https://dribbble.com/upmitt), UI/UX designer. This HTML/CSS replica was implemented by [Rachel Lewis](https://github.com/RLewis11769).
