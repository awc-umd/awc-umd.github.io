# Association for Women in Computing
## University of Maryland, College Park
This is the official github pages repository for the AWC and Casino Night website.

[Find our website here!](https://awc-umd.github.io/)
<br>
<br>
<br>
# AWC Github File Guide 
Made by Zoya Rahman, 12/24/25, AWC Director of Design 2025'-2026'

## assets
The current assets folder for the 25-26' term, containing the following subdirectories:
- <b>css:</b> index.css, about.css, events.css,  and casino_night.css all live here. Additionally, the navbar for the entire site uses navbar.css, and every .html file has it linked.
- <b>favicon_io:</b> Contains five favicon .pngs and the site.webmanifest detailing app behavior 
- <b>images:</b> Contains header images for index, about, and event pages, the AWC logo (transparent background), and the following directories:
    - <u>gallery-2025</u>: images of past casino night (casino_night.html)
    - <u>gallery-sponsor</u>: images of the sponsorship prospectus (casino_night.html)
    - <u>ig-thumbs</u>: thumbnails of linked instagram reels (casino_night.html)
    - <u>posters</u>: promotional flyers/posts from recent AWC events (events.html)
- <b>js:</b> Contains two scripts, site.js for reducing motion (toggled on navbar) and splide_modal.js for making image carousels (events.html and casino_night.html)
- <b>photos25:</b> Contains photos of the 25'-26' year's board members. 
- AWC 2025-2026 Prospectus.pdf - Sponsorship Prospectus linked in casino_night.html

## casinonight26
This directory contains its own README.md and file guide

## old_website_content
An archive of past website material that I (zoya) made when trying to organize the Github. 
<br>
The <b>assets</b> folder was the original assets folder I inherited when working on the site. For organization's sake, I copied the material that was in active use to other directories. Currently, it is an archive with years worth of assets, much of it unlabelled, unused, and repeated. I have not goten the chance to clean through this entirely, but all current site content has been transferred to <u>assets</u> and nothing is being directed to here anymore. 
<br>
The <b>older_website</b> directory was also inherited, and is what I imagined the website looked like prior to the 22-23' term. I assume my predecessor, like me, left the original website alone in this folder as reference material, and it remains accessible from here. 
<br>
The <b>past-casinonight-websites</b> folder is a directory I made. It contains every casino night html file I could find and its associated assets, all grouped into a folder with its title year. This is so that future directors can call the Live Server Extension (vscode) on the html files and view what the site originally looked like for their Casino Night webpage planning. 
- Note: I have no idea what "casinonight-howto-23" is referring to, I imagine it was a template maybe left by the 21-22 directory that was then modified by the 22-23' director, since it's almost identical to the final 23' page. 
- casinonight.html is the original static casino night page made by Janet Choi (22'-25' Director) and was used in non-promotional months. The current static page, casino_night.html, was build directly off of this file (thank you janet :D). 

The <b>past-website</b> folder is also a directory I made. It contains the past website material that Janet Choi (22'-25' Director) made, and is all completely accessible (using the Live Server Extension). This was originally used as reference material when I began editing the files to update the website, and now remains as an archive of the website before my position. 
<br>
I have no idea what <b>_config.yml</b> was being used for since this is not a site that makes use of Jekyll configuration. It has no real instructions. But it's sitting there for now. 

## .gitignore
Contains .DS_Store as the current two website designers wish to avoid filesystem junk being pushed to the main repo. Since this is a static site, not much is needed in this file. 


## index.html
The home page for AWC's official website, containing the landing page, our mission statement, socials, and company connect sections of the website. The head and navbar are standardized across all of the .html files (save for an extra library link in the head here and there).

## about.html
The about page contains our mission statement and all the current year's executive board members, with pop up modals for each member's biography. 

## events.html
The events page, including a Splide carousel of recent promotional flyers, links to event promotional materials, and our public google event calendar. 

## casino_night.html
The static casino night page, typically showcasing the "coming soon" animation, event description, a Splide carousel of past event pictures, and a prospective sponsorship section. 
- NOTE: This is the static webpage for when Casino Night is not under active promotion, and is not directed to in the months leading up to Casino Night. 
- During that time, index, about, and events.html will all point to the .html file in that year's casino night directory. That webpage will showcase more theme oriented information, an rsvp form, and that year's sponsors. 
