# Casino Night 2026 File Guide
### Zoya Rahman, 12/24/25
This directory is kept isolated from the rest of the website content so that when Casino Night is over, the entire 
casinonight26 directory can be dragged into old_website_content/past-casinonight-websites/, and can be used as reference when designing new Casino Night pages. Future Design Directors can use the VSCode Live Server Extension to do this. Right clicking on casinonight26.html, and pressing "Open with Live Server", should show them what the page looked like when it was up during 2026.

### casinonight26.html
Head contains favicon images for the website, google font link to Cormorant Garamond (used in navbar and footer), Splide and Bootstrap library links, and all custom css and js paths. 
<br>
Body contains following subsections (as of 12/24/25):
- divider for Modal declarations, for Splide carousel of event highlights and sponsorship prospectus
- divider for Landing page, consisting of the navbar and animation. 
- divider for the About section, including the notice
- divider for both the Past Event Highlights and Featured Sponsors section. they are grouped to ensure the background image spans underneath both sections. 
- divider for the RSVP section
- divider for Prospective Sponsors section
- footer

### assets
#### css:
The css folder contains the following components (as of 12/24/25):
- itc-kabel-std folder, containing the 5 font variations of ITC Kabel
- novelGothic.otf, the font file for Novel Gothic
- casinonight26.css, which contains the css styling for the entire casinonight26.html file, including the navbar 
Both fonts used are taken from Clue (1985)'s promotional material, otherwise brand guidelines prioritize Cormorant Garamond and DM Sans. 

#### favicon_io
The favicon_io directory is identical to the directory in the main assets folder, and can be deleted if taking too much space. Please note that the casinonight26.html file points to the favicon_io images in this directory, and not the one in the primary assets folder. Should this directory be deleted, the pathways should be changed to those.

#### images
The images directory contains 3 subfolders (as of 12/24/25):
-  background-photos, all of the images used in the background of the webpage, along with any additional images (like the about section's poster)
- gallery-2025, all of the 2025 casino night images used as modals in the splide carousel for Past Event Highlights
- gallery-sponsor, all of the sponsorship prospectus images used as modals in the splide carousel for the Prospective Sponsors

#### js
The js directory should only contain two files, site.js for the Navbar's Reduce Motion feature, and splide_modal.js for the Past Event Highlights and Sponsorship section. 
