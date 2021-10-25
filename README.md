# Holberton SmilingSchool
# Now With Added JavaScript!

## Description

This project adds JavaScript, primarily through jQuery, to the previous Bootstrap project found [here](https://github.com/RLewis11769/holberton-smiling-school). 

This project duplicates the full front-end design of a fully functional website. The static content can be seen as 3 separate Figma designer files found [here](https://www.figma.com/file/QYQqMYbdpAHL5xTclwJKSI/Homepage?node-id=0%3A1), [here](https://www.figma.com/file/KLAI53jdYpfFNEy0O79ymB/Pricing?node-id=0%3A1), and [here](https://www.figma.com/file/ivg3abH1HLmMayBgjGg1Qf/Courses?node-id=0%3A1).

Content on the page should be dynamically loaded from the SmileSchool API found [here](https://smileschool-api.hbtn.info).

## Examples

The example for the first (single-item) carousel on the homepage and the carousel on the pricing page is found [here](https://github.com/RLewis11769/holberton-smiling-school-javascript/blob/main/usage/QuoteCarousel.gif).

The example for the second and third (multi-item) carousels on the homepage is found [here](https://github.com/RLewis11769/holberton-smiling-school-javascript/blob/main/usage/TutorialsCarousel.gif).

The example for the search bar on the courses page is found [here](https://github.com/RLewis11769/holberton-smiling-school-javascript/blob/main/usage/Searchbar.gif).

## Installation

### 1. Install

Clone the repository into your system with the command:

```
git@github.com:RLewis11769/holberton-smiling-school-javascript.git
```

### 2. Open

Install "Live Server" or another server preview extension, run it, and navigate to the open port.

### 3. View

Holberton SmilingSchool - JavaScript is now ready to view. See below for details.

## Structure

### Static Content

#### CSS

- All pages use the same CSS file that contains as little CSS as possible
	- File:
		- styles.css

#### Bootstrap Design

- All pages are originally filled with static content based on the "Implement a Design in Bootstrap" project that took place from 9/14 to 9/21 located [here](https://github.com/RLewis11769/holberton-smiling-school).
	- Files:
		- 0-homepage.html
		- 0-pricing.html
		- 0-courses.html

### Dynamic Content

#### JavaScript (jQuery)

- All pages used the same JavaScript file that executes when the document is fully loaded
	File:
		- scripts.js

#### Updated Homepage

0. Update the homepage quotes carousel
- Replace static quotes by dynamically loading data from https://smileschool-api.hbtn.info/quotes
- Add a loader during the Ajax request
	- File:
		- 1-homepage.html

1. Update the homepage popular tutorials carousel
- Replace static tutorials by dynamically loading data from https://smileschool-api.hbtn.info/popular-tutorials
- Add a loader during the Ajax request
	- File:
		- 2-homepage.html

2. Update the homepage latest videos carousel
- Replace static tutorials by dynamically loading data from https://smileschool-api.hbtn.info/latest-videos
- Add a loader during the Ajax request
	- File:
		- homepage.html

#### Updated Pricing Page

0. Update the pricing page quotes carousel
- Replace static quotes by dynamically loading data from https://smileschool-api.hbtn.info/quotes
- Add a loader during the Ajax request
	- File:
		- pricing.html

#### Updated Courses Page

0. Update the courses page video search
- Replace static search output by dynamically loading data from https://smileschool-api.hbtn.info/courses
- Create dynamic search with sorting based on "search" value, "topic", and "sort by" fields
- Add a loader during the Ajax request
	- File:
		- courses.html

## Project Rules

- You won’t have a lot of instruction, so you are free to implement it the way that you want. The objective is simple: Create a fully functional web page that looks the same as the designer file.
- Your styles.css must be as small as you can. You must use Bootstrap classes as much as you can.
- You have to use JQuery.
- Your scripts.js must contain all of your JavaScript.
- Your JavaScript must be executed only when the document is loaded.

## Features

- Generic and easily-changeable content
- Decently accessible
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

This webpage static design was designed by Nicolas Philippot, UI/UX designer. This HTML/Bootstrap/JavaScript replica was implemented by Rachel Lewis.
