# Project Structure

A short description of what's new in each subsequent HTML and CSS file. Each task builds on previous tasks/code by replacing the static content with dynamic content from the https://smileschool-api.hbtn.info/ API. However, there is one main JavaScript file, [scripts.js](https://github.com/RLewis11769/holberton-smiling-school-javascript/blob/main/scripts.js), that contains all iterations of JavaScript for the entire project.

Note: [homepage.html](https://github.com/RLewis11769/holberton-smiling-school-javascript/blob/main/homepage.html), [pricing.html](https://github.com/RLewis11769/holberton-smiling-school-javascript/blob/main/pricing.html), [courses.html](https://github.com/RLewis11769/holberton-smiling-school-javascript/blob/main/courses.html) include everything from all other tasks. Consider any of them as your primary entry into the project!

## Static Content

### CSS

- All pages use the same CSS file that contains as little CSS as possible
	- File:
		- styles.css

### Bootstrap Design

- All pages are originally filled with static content based on the "Implement a Design in Bootstrap" project that took place from 9/14 to 9/21 located [here](https://github.com/RLewis11769/holberton-smiling-school).
	- Files:
		- 0-homepage.html
		- 0-pricing.html
		- 0-courses.html

## Dynamic Content

### JavaScript (jQuery)

- All pages used the same JavaScript file that executes when the document is fully loaded
	File:
		- scripts.js

### Updated Homepage

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

### Updated Pricing Page

0. Update the pricing page quotes carousel
- Replace static quotes by dynamically loading data from https://smileschool-api.hbtn.info/quotes
- Add a loader during the Ajax request
	- File:
		- pricing.html

### Updated Courses Page

0. Update the courses page video search
- Replace static search output by dynamically loading data from https://smileschool-api.hbtn.info/courses
- Create dynamic search with sorting based on "search" value, "topic", and "sort by" fields
- Add a loader during the Ajax request
	- File:
		- courses.html
