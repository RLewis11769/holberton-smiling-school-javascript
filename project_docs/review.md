# Holberton Smiling School JavaScript Project Review

Holberton Smiling School (with added JavaScript!) is a fully-responsive frontend implementation of a Figma design (originally completed [here](https://github.com/RLewis11769/holberton-smiling-school)) with most data dynamically pulled from a custom API.

It shows off my technical skills in all aspects of core knowledge of Frontend Web Development. I implemented best practices including minimum API calls, focus on organization, and attention to accessibility that I consider crucial to any frontend implementation. I also consider my reusable functions to be a key aspect of clean, quick web design.

This project does NOT include a backend. "Contact Us" is a link leading nowhere in the navigation menu.

## Final Project

Hero/Header at mobile size:

![BannerMobile](https://github.com/RLewis11769/holberton-smiling-school-javascript/blob/main/project_docs/My_BannerMobile.png)

Carousel at full size (in the middle of moving):

![CarouselFull](https://github.com/RLewis11769/holberton-smiling-school-javascript/blob/main/project_docs/My_Carousel.png)

Grid on "pricing" page at tablet size:

![PricingGrid](https://github.com/RLewis11769/holberton-smiling-school-javascript/blob/main/project_docs/My_PricingGrid.png)

Working search on "courses" page including loader at mobile size:

![CoursesLoading](https://github.com/RLewis11769/holberton-smiling-school-javascript/blob/main/project_docs/My_LoaderMobile.png)

Final search result on "courses" page:

![CoursesSearch](https://github.com/RLewis11769/holberton-smiling-school-javascript/blob/main/project_docs/My_CoursesSearch.png)

## Structure

Having multiple HTML files would not have been my preference. If I did choose to include that many files, I would have preferred a different JavaScript file for each rather than one encompassing the entire project. However, the HTML files do provide a nice breakdown of the static section removed from the previous task and the dynamic data added:

#### Homepage
- 0-homepage - starter file including all static data
- 1-homepage - replace single-item "quotes" carousel based on API request
- 2-homepage - replace multi-item "popular tutorials" carousel based on API request
- homepage - replace multi-item "latest videos" carousel based on API request

#### Pricing
- 0-pricing - starter file including all static data
- pricing - replace single-item "quotes" carousel based on API request

#### Courses
- 0-courses - starter file including all static data
- courses - Add dynamic search with sorting based on "search" value, "topic", and "sort by" fields from API request

## Focus

My focus in completing this project lay in a few key areas:

- Organization
- Reusable code

### Organization

I have a specific style when writing HTML and CSS that I think is very clear in this project. The comments in my JavaScript file are also very indicative of my personal organization. I like to be able to dive right back into a project after months away based on the comments and I think it would be very easy to do so for this project.

I don't tend to write navigation for the sections within CSS and JavaScript files although I do like to group functions according to section.

A key aspect of the code I write is that it must be easily-understandable to anyone who looks at it. I believe if someone was given this codebase to modify, it would be an easy learning curve. This is crucial for quick, effective teamwork

When I completed this project, I was satisfied that I had accomplished my goal of clean code and logical organization. Looking back 5 months later, I remain convinced.

### Reusability

My [scripts.js](https://github.com/RLewis11769/holberton-smiling-school-javascript/blob/main/scripts.js) file includes 10 functions and 2 global variables for the Slick carousels. I call every function at least twice for different pages and sections. Both Slick configurations are also used at least twice.

There are 3 sections that include "tutorials" and 2 that include "testimonials". Although the format of the resultant carousels might be different, the only difference in the code is which id I'm referencing and which API is being requested, which are passed in. Implementing each subsequent carousel after the first took minutes.

I'm very interested in modularity and reusability. With a little extra upfront planning, you can simplify and speed up implementation, leading to better efficiency and optimized functionality. It can even lead to safer code, better organization, and more simplicity.

I believe the key to properly implementing reusable code is to understand both what unites different tasks and the nuances between them. In addition, I do think that reusability needs to be a consideration from the beginning.

## Challenges

To be clear, this project lasted 7 days and consisted only of replacing static content with dynamic content from an API. With that said, when reflecting I'd like to consider the entire 14-day process to arrive at this final product including the static Bootstrap-based design.

### Static Content

It's been about 5 months since [this project](https://github.com/RLewis11769/holberton-smiling-school) and I still get made fun of. One day, I woke up from a dead sleep and thought to myself, "The pricing grid isn't a grid. It's a table." I crawled out of bed and wrote a table without even pausing for coffee. It turns out the pricing grid IS a grid-- If it were a table, it wouldn't have the same responsiveness.

Point being, I had to put in WORK and many, many hours to finish before the deadline. This was my greatest challenge regarding the static content portion of the project. This is primarily because I was given a week to learn Bootstrap right before this project and just...didn't. So almost everything I implemented in Bootstrap was learned during the 7 days of the project.

I unfortunately failed to fully understand flexbox prior to this project, although it clicked during the course of the project. As in the [pure CSS design](https://github.com/RLewis11769/holberton-headphones) I implemented based on a Figma design, the first section took well over a day to complete and the last took an hour or so.

I had also failed to properly include a working multi-item carousel during the original Bootstrap project. I had a single-item carousel consisting of different cards that looked like a multi-item carousel. However, [Jay Calhoun](https://github.com/Valinor13) recommended using the [Slick plugin](https://kenwheeler.github.io/slick/), so I implemented a working multi-item carousel as my first task of this project before I began converting the static content to dynamic.

### Dynamic Content

Regarding the JavaScript section of the project in this repo, my challenges were more technical in nature.

I had the most trouble getting the search to work properly. I didn't have much experience with searches in general so I struggled getting the value of the dropdowns. I'm still not confident it works with multiple words, for example. Once I had the data, I don't think I had trouble parsing the videos down to the specific videos I want, but I did have trouble sorting them.

Finally, I originally failed to include the "loading" animation. I wasn't sure how to test so I incorrectly assumed I was calling the displayLoading() in the right place. After the deadline for the project passed, Jay again came to my rescue by explaining the purpose of "beforeSend" and "complete" in an Ajax request.

## Conclusion

Even today, 5 months later with much more experience in frontend development, I'm proud of this project. The code I wrote is clean, well-organized, and works as intended.

If I wrote it today, I would probably make a more specialized request to the API with query parameters rather than requesting everything and parsing it afterwards. I would also likely use slightly different syntax. Other than that, I'm very pleased with the result.

The final product looks right at almost all widths and the JavaScript is well-written and does exactly what I want it to do.
