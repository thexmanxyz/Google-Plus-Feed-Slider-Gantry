# Google+ Feed Slider - Particle for Gantry
**IMPORTANT: The Particle is deprecated as the Google+ services are no longer running.**

This projects implements a feed slider that fetches post data from an existing Google+ profile.  The appearance as well as the data output can be configured via the Gantry templating framework. Moreover, **Google+ Feed Slider** supports the flexible parameterization of API requests as well as the custom slider styling and rendering. Furthermore, it provides an easy, user friendly and GUI assisted configuration and integration. In the current revision the following CMSs are supported:
* Joomla
* Wordpress
* Grav

## Prerequisites
* CMS (Joomla, Wordpress, Grav)
* Gantry Templating Framework and Theme

## Download
Choose the correct download for your target platform. The Joomla Plugin System is supported for all Gantry themes globally or locally for the templates Helium and Hydrogen. The latest Particle version is **v1.0.4**.
___
**Default Particle:**
[English](https://github.com/thexmanxyz/Google-Plus-Feed-Slider-Gantry/releases/download/v1.0.4/gfs.particle.only.EN.v1.0.4.zip) / [German](https://github.com/thexmanxyz/Google-Plus-Feed-Slider-Gantry/releases/download/v1.0.4/gfs.particle.only.DE.v1.0.4.zip)

**Legacy Particle - Gantry <5.3.2:**
[English](https://github.com/thexmanxyz/Google-Plus-Feed-Slider-Gantry/releases/download/v1.0.4/gfs.particle.only.legacy.EN.v1.0.4.zip) / [German](https://github.com/thexmanxyz/Google-Plus-Feed-Slider-Gantry/releases/download/v1.0.4/gfs.particle.only.legacy.DE.v1.0.4.zip)

**Joomla Plugin - All Templates (Global):**
[English](https://github.com/thexmanxyz/Google-Plus-Feed-Slider-Gantry/releases/download/v1.0.4/gfs.j3.global.EN.v1.0.4.zip) / [German](https://github.com/thexmanxyz/Google-Plus-Feed-Slider-Gantry/releases/download/v1.0.4/gfs.j3.global.DE.v1.0.4.zip)

**Joomla Plugin - Hydrogen:**
[English](https://github.com/thexmanxyz/Google-Plus-Feed-Slider-Gantry/releases/download/v1.0.4/gfs.j3.hydrogen.EN.v1.0.4.zip) / [German](https://github.com/thexmanxyz/Google-Plus-Feed-Slider-Gantry/releases/download/v1.0.4/gfs.j3.hydrogen.DE.v1.0.4.zip)

**Joomla Plugin - Helium:**
[English](https://github.com/thexmanxyz/Google-Plus-Feed-Slider-Gantry/releases/download/v1.0.4/gfs.j3.helium.EN.v1.0.4.zip) / [German](https://github.com/thexmanxyz/Google-Plus-Feed-Slider-Gantry/releases/download/v1.0.4/gfs.j3.helium.DE.v1.0.4.zip)
___

## Automatic Installation (Joomla only)
1. Download the Plugin of the *Google Plus Feed Slider Particle* for **Hydrogen, Helium or Global** installation.
2. Install it over the Joomla Plugin System.
3. Create or modify the `custom.scss` file located under `/[GANTRY_THEME]/custom/scss` and add the following line `@import "gplus-feed-slider";` at the end. Please check the list below to determine where the template folder for your CMS is located.

*If you install the plugin globally be aware that the resource location changes to `/media/gantry5/engines/nucleus`*

## Manual Installation
1. Download the **Default or Legacy Package** of the *Google Plus Feed Slider Particle*. If you are using Gantry **<5.3.2** please use the **Legacy Package** for compatibility reasons.
2. Extract the files.
3. Copy the `.html.twig` and the `.yaml` file to your particle folder `/[GANTRY_THEME]/custom/particles`. Please check the [listing](https://github.com/thexmanxyz/Google-Plus-Feed-Slider-Gantry#cms-template-folder) below to determine where the template folder for your CMS is located.
4. Copy the `.js` file to the folder `/[GANTRY_THEME]/custom/js`. Create the folder if it does not exist.
5. Copy the `.scss` file to the folder `/[GANTRY_THEME]/custom/scss`. Create the folder if it does not exist.
6. Create or modify the `custom.scss` file located under `/[GANTRY_THEME]/custom/scss` and add the following line `@import "gplus-feed-slider";` at the end.

## CMS Template Folder
Please be aware that the template folder path varies in dependence of the used CMS. Here is a list of the folders for the different platforms:

### Wordpress
`/wp-content/themes/[GANTRY_THEME]`

### Joomla
`/templates/[GANTRY_THEME]`

### Grav
`/user/data/gantry5/themes/[GANTRY_THEME]`
   
## Configuration
1. Go to your Gantry templating backend (e.g. Extensions/Templates).
2. Switch to **Layout** and add the new appearing Particle called **Google Plus Feed Slider** either globally to your site (**base outline**), to a specific template or page by dragging it to the designated section.
3. Get a API Key from the [Google API Console](https://console.cloud.google.com/apis/dashboard). Set your API Key within the Particle backend. 
4. Configure the appearance according to your favor.
5. [Optional] The download package contains the original version of the Google+ REST API JS file. You can embed it over the backend configuration if you do not want to use the default CDN. If you chose automatic installation the file is already there.

**Important:** *Please be aware that the API Key can always be seen by everyone so you have to restrict the access to both your domain and products (Google+ only). Please create an explicit key for this use case and restrict it appropriately*
 
## Supported Parameters and Particle Options
* Container attributes
* Custom CSS classes for container
* Target profile
* Number of posts fetched
* Slider 
  * Auto slide
  * Slider scroll delay
  * Slider scroll mode
  * Slider effects (about 25)
* Post configuration
  * Display name
  * +1 counter
  * Slide number
* Image configuration
  * Image size
  * Image design (square, rounded)
  * Image alt text
* Date configuration (format, mode, delimiters)  
* Button configuration
  * Different designs
  * Arrangement modes
* Link to original post
* Link title
  * Link back to original post
  * Target Configuration
* Filtering of posts with empty titles
* Loading text while fetching data
* JS priority and placement (head or footer)
* JS loading
  * Remote, Local and Default
* JS execution
  * Asynchronous
  * Deferred

## Showroom
Insight of the *Google Plus Feed Slider - Gantry Particle* configuration:

**Backend (1)** - *[General](/screenshots/backend_general.png)*

![1](/screenshots/backend_general.png)

**Backend (2)** - *[Slider](/screenshots/backend_slider.png)*

![2](/screenshots/backend_slider.png)

**Backend (3)** - *[Text](/screenshots/backend_text.png)*

![3](/screenshots/backend_text.png)

**Backend (4)** - *[Post](/screenshots/backend_post.png)*

![4](/screenshots/backend_post.png)

**Backend (5)** - *[Image](/screenshots/backend_image.png)*

![5](/screenshots/backend_image.png)

**Backend (6)** - *[Date](/screenshots/backend_date.png)*

![6](/screenshots/backend_date.png)

**Backend (7)** - *[Javascript](/screenshots/backend_js.png)*

![7](/screenshots/backend_js.png)

Example for a basic slider:

**Frontend (1)** - *[Slider](/screenshots/frontend_slider.gif)*

![8](/screenshots/frontend_slider.png)

## Future Tasks
- [ ] support more API options usable for slide rendering
- [ ] add more CSS3 slide effects
- [ ] add more languages

## Known Issues
None

## Dependencies
[Google+ REST API](https://developers.google.com/+/web/api/rest/)

[Gantry Framework](http://gantry.org/)

## Credits
Thanks to the [Gantry](https://github.com/gantry) team for providing a modern templating framework.

Thanks to Google for the Google Plus Platform API.

## by [thex](https://github.com/thexmanxyz) | [gantryprojects](https://gantryprojects.com)
Copyright (c) 2018, free to use in personal and commercial software as per the [license](/LICENSE).
