# Asg-1

# Yoasobi Website

## Project Overview
This project is an english version of the website dedicated to the Japanese music duo Yoasobi. (Current Official Yoasobi website is mostly in Japanese). The site showcases their music, upcoming tours, member details, and Yoasobi-themed merchandise. The design of this project revolves around creating an engaging and functional platform for fans of Yoasobi. The core aim is to offer an English-based website that bridges the language gap present in the original Japanese site, ensuring accessibility and usability for international audiences. Every design choice aligns with the theme of Yoasobi's vibrant music, while emphasizing user engagement, responsiveness, and aesthetic appeal.

## Design Process
The design process focused on delivering a user-centered experience. The primary audience includes Yoasobi fans who are looking for merchandise, music, or information about upcoming tours. This project ensures they can achieve their goals quickly and easily.

User Stories:
As a new visitor, I want to learn about Yoasobi’s background, so that I can understand their music and connect with them.
As a non-Japanese-speaking fan, I want a Yoasobi English page, so that I can easily access information and explore their website, which is currently mostly in Japanese.
As a concertgoer, I want to check upcoming tour dates, so that I can plan to attend their events.
As a user on mobile, I want the website to be fully responsive, so that I can browse comfortably on any device.
As a fan, I want to browse and purchase Yoasobi merchandise, so that I can support the band and collect exclusive items.
As a new visitor, I want to learn about Yoasobi’s background, so that I can understand their music and connect with them.
As a concertgoer, I want to check upcoming tour dates, so that I can plan to attend their events.
As a user on mobile, I want the website to be fully responsive, so that I can browse comfortably on any device.

Wireframes:
Used Figma to create a low-fidelity wireframe that serves as a layout for the official website.
Link to figma wireframes: https://www.figma.com/design/uqnjPEIjb1vAjLKjMSfk7k/Module_S10267303J_JavierLeo_Assg1_wireframe?node-id=0-1&t=lf28lojiQhgQDMmz-1

Rationale: 

Target Audience
Fans of Yoasobi: Primarily international fans who lack access to information due to the language barrier on the original website.
Music Enthusiasts: People exploring J-pop and looking for details about Yoasobi’s music, tours, and merchandise.
Objectives
Accessibility: The site provides key information like music albums, tours, and merchandise in an easy-to-navigate format.
Brand Representation: Vibrant gradients, dynamic typography, and animations reflect Yoasobi's energetic and artistic brand identity.
User Engagement: Interactive elements like hover effects, responsive layouts, and animations keep users engaged.
Visual Choices
Color Scheme:

A dark background paired with pops of vibrant colors (e.g., #dd94b8) creates a modern, clean look while emphasizing the content.
The rainbow gradient in the "Yoasobi" logo and hero text mirrors the duo’s colorful music and persona.
Typography:

Fonts like Poppins and Roboto are used for readability and style, balancing professionalism with playfulness.
Large and bold hero text grabs attention, while body text remains clean and legible.
Imagery:

High-quality images and album covers highlight Yoasobi's identity.
Subtle hover effects on visuals keep the design dynamic without being overwhelming.
Interactive Design:

Menu transitions and hover animations create a seamless experience, enhancing usability.
Features like the "Home" button on all pages ensure users can navigate effortlessly.
Functional Features
Responsive Design:
The website is optimized for various screen sizes, ensuring a smooth experience across devices.
Quick Links & Footer:
Quick navigation links in the footer provide easy access to all pages.
Page Transitions:
Smooth fade-in animations enhance the user experience and create a polished, professional feel.
Accessibility Considerations
High contrast between text and background improves readability.
Simple navigation ensures the site is usable for all audiences, including those unfamiliar with Yoasobi.
Use of clear labels and alt text enhances accessibility for screen readers.
## Technologies Used
HTML
Used to structure the content of the website, creating the foundation for all the visual and interactive elements.


CSS
Utilized to style the website and create visually appealing layouts, animations, and responsive designs for better user experience.


JavaScript
Implemented to add interactivity to the website, including features like menu toggling and hover effects, enhancing the overall functionality.


Figma
Used to create wireframes and prototypes during the design phase, ensuring a clear visualization of the website layout before coding.


Google Fonts
Incorporated to enhance the typography of the website by utilizing modern and visually appealing fonts.


W3C Validator
Used to validate the HTML and CSS code, ensuring compliance with web standards and identifying potential issues.

Git/GitHub

Used for version control to track changes to the code.

WebKit (Browser Rendering Engine)

Used implicitly when testing or developing on browsers like Safari or Chrome. WebKit enhances the ability to implement smooth animations and advanced CSS styling with properties like -webkit- prefixes.

Normalize.css

It ensures consistent styling across different browsers by resetting default styles.

YouTube
Referenced tutorials on YouTube to learn specific CSS animations, JavaScript functionalities, and responsive design techniques. It was also used troubleshooting and exploring ideas.


## Features
Merchandise Section - Allows users to explore and purchase Yoasobi’s merchandise, including clothing, accessories, and special edition merchandise.

Tour Dates Section - Displays upcoming live performances and fan events, helping users plan their attendance.

About Section - Provides an overview of Yoasobi’s background, featuring the duo's bios and artistic journey.

Music Section - Showcases albums and singles with detailed descriptions and streaming options.

Interactive Menu - A dynamic, animated menu provides easy navigation across the site.

Home Section - The hero section features a large, visually appealing image and animated text showcasing the vibrant theme of Yoasobi, immediately capturing the visitor’s attention.

Includes a seamless background-to-content transition for an engaging user experience.

Home Button (Top Right Icon) - Located at the top right corner allows users to quickly return to the homepage from any section of the site.

Footer - Includes essential quick links for navigation.

Quick Links - Quick navigation links in the footer allow users to jump directly to important sections such as "Music," "Tours," "About," and "Merch."

## Testing
CSS Validation Issues

Problem: The W3C CSS Validator showed warnings about missing type="text/css" attributes in the <link> elements.
Solution: Explicitly added the type="text/css" attribute to all <link> elements linking stylesheets.
Responsive Design Adjustments

Problem: Some sections, like the hero image or the merch grid, did not align properly on smaller screen sizes.
Solution: Used media queries to adjust font sizes, grid layouts, and image proportions to ensure consistent and responsive designs across all devices.
JavaScript Menu Toggle Issues

Problem: The navigation menu didn’t close properly when clicking a menu link.
Solution: Added event listeners to all menu links, ensuring the menu closes by toggling the appropriate classes when a link is clicked.
Animation Overlap

Problem: The rainbow animation on the home button conflicted with other elements, causing performance lags in some browsers.
Solution: Optimized the keyframe animation and reduced the background-size property to improve performance.
Testing Browser Compatibility

Problem: Certain animations, especially those involving -webkit- prefixes, didn’t render well in non-WebKit browsers (like Firefox).
Solution: Included vendor-specific prefixes (-webkit-, -moz-, etc.) to ensure consistent rendering across all major browsers.
Hover Effects on Merch Items

Problem: Hover effects on merch items were too subtle and not intuitive enough for users.
Solution: Added a box-shadow and scaling effect to highlight the items more prominently on hover.
Footer Overlapping Content

Problem: The footer occasionally overlapped the content on shorter pages.
Solution: Ensured the footer is dynamically positioned using CSS to stick to the bottom only when necessary.
Z-Index and Layering Issues

Problem: Certain elements, like the navigation menu, were rendering below other sections on the page.
Solution: Adjusted the z-index property for affected elements to ensure proper stacking order.
Hero Image Fade-In

Problem: The hero image’s fade-in animation was delayed on slower networks.
Solution: Added a fallback background color and reduced the initial opacity animation delay to make the page load more seamless.
Validation and Standards Compliance

Problem: Several HTML and CSS validation errors were flagged by the W3C validators, including unclosed tags and unsupported properties.
Solution: Conducted thorough validation, fixing unclosed tags, outdated properties, and ensuring compliance with modern standards.

## Credit
## Content

Text Content for Yoasobi Background and Overview

Some portions of the text in the "About Yoasobi" section were referenced and adapted from the Wikipedia article on Yoasobi. These adaptations were carefully rephrased to ensure readability and relevance for the website's audience.

Tour and Event Details
Tour and event information were inspired by announcements made on Yoasobi's official social media accounts, such as Twitter and Instagram, to ensure authenticity and up-to-date content.

Merchandise Information
Product descriptions for merchandise items were based on listings from Yoasobi’s official online store. Adaptations were made for clarity and presentation within the website's design.

## Media
Peakpx. (n.d.). Yoasobi HD wallpaper. Retrieved from https://www.peakpx.com/en/hd-wallpaper-desktop-efual

Wallpapercave. (n.d.). Yoasobi wallpapers. Retrieved from https://wallpapercave.com/yoasobi-wallpapers

Grammy. (n.d.). Japanese pop duo Yoasobi interview. Retrieved from https://www.grammy.com/news/japanese-pop-duo-yoasobi-interview-j-pop

Tokytunes. (n.d.). Japanese music news. Retrieved from https://tokytunes.com/jp-music-news-113/

Yahoo News Singapore. (2023). Japanese superduo Yoasobi moved by reactions of fans in Singapore. Retrieved from https://sg.news.yahoo.com/japanese-superduo-yoasobi-moved-by-reactions-of-fans-in-singapore-hope-to-return-and-perform-at-bigger-venue-142443589.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAFuaKLzlOYnLPr9fGR1T_zmymfI9T_EVujKh80jJEuxcl2A0XWytSfLu0xCt7bJTcS7hr6EiQJSzVirxLD2rtNN_dGQGL96hobF_zd2Lr6BHOzqoC5zkH-oEaH_BKZzaT-hIOoS4CgLA6wyoa9OifpjUgYKdKQq2vTDcR0qcg30u

Tokytunes. (n.d.). The Orchard Japan. Retrieved from https://tokytunes.com/the-orchard-japan-193/

Korea JoongAng Daily. (2023). "Thank you for making our dream come true" — Yoasobi finishes first concert in Korea. Retrieved from https://koreajoongangdaily.joins.com/news/2023-12-18/entertainment/kpop/Thank-you-for-making-our-dream-come-true-Yoasobi-finishes-first-concert-in-Korea/1938516

Wikipedia. (n.d.). The Book (Yoasobi EP). Retrieved from https://en.wikipedia.org/wiki/The_Book_(Yoasobi_EP)

Songkick. (n.d.). Yoasobi concerts. Retrieved from https://www.songkick.com/artists/8167118-yoasobi

Giphy. (n.d.). Yoasobi GIFs. Retrieved from https://giphy.com/gifs/yoasobi-WJSRHGcuRtO2DceJly

Fyanimegifs. (n.d.). Yoasobi animated GIFs. Retrieved from https://fyanimegifs.tumblr.com/post/715545644957302784

Moshimoshi Nippon. (n.d.). Yoasobi Japanese pop updates. Retrieved from https://www.moshimoshi-nippon.jp/463271

Grape Japan. (n.d.). Yoasobi features in Japan. Retrieved from https://grapeejapan.com/177135

Jpop Fandom. (n.d.). Ikuta Lilas. Retrieved from https://jpop.fandom.com/wiki/Ikuta_Lilas

Vocaloid Fandom. (n.d.). Ayase. Retrieved from https://vocaloid.fandom.com/wiki/Ayase

Consequence. (2023). Yoasobi at Clockenflap. Retrieved from https://consequence.net/2023/12/yoasobi-clockenflap-interview-j-pop/

Yoasobi Online Store. (n.d.). Official Yoasobi merchandise. Retrieved from https://yoasobi-onlinestore.com/s/n135ec/?ima=3304

Redbubble. (n.d.). Yoasobi phone cases. Retrieved from https://www.redbubble.com/shop/yoasobi+phone-cases

Steam. (n.d.). Yoasobi community wallpapers. Retrieved from https://steamcommunity.com/sharedfiles/filedetails/?id=2460745330&searchtext=

Wikipedia. (n.d.). The Book 2. Retrieved from https://en.wikipedia.org/wiki/The_Book_2

Wikipedia. (n.d.). The Book 3. Retrieved from https://en.wikipedia.org/wiki/The_Book_3

The Japan Times. (2023). "Idol" by Yoasobi pens a new chapter in J-pop's story. Retrieved from https://www.japantimes.co.jp/culture/2023/06/30/music/idol-yoasobi-pens-new-chapter-j-pops-story/


## Acknowledgements
I received inspiration for this project from The Official Yoasobi Website

The Yoasobi Fan Community
Yoasobi fans worldwide, including fan translations and insights shared on platforms like Reddit and Twitter, inspired the creation of an English-based Yoasobi page.

Music and Aesthetics of Yoasobi
Yoasobi's music, storytelling, and vibrant visual style heavily influenced the creative direction of the project, ensuring it captures the spirit of their artistry.