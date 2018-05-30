# Google+ Feed Slider - Particle for Gantry
This projects implements a feed slider that fetches post data from an existing Google+ profile.  The appearance as well as the data output can be configured via the Gantry templating framework. Moreover, it supports the flexible parameterization of the API requests, the slider styling and rendering. Furthermore, it provides an easy, user friendly and GUI assisted configuration and integration. In the current revision the following CMSs are supported:
* Joomla
* Wordpress
* Grav

## Prerequisites
* CMS (Joomla, Wordpress, Grav)
* Gantry Templating Framework and Theme

## Download
Choose the correct download for your target platform. Joomla Plugin System supported for the Gantry themes - Helium and Hydrogen. The latest Particle version is **v1.0.0**.
___
**Default Particle:**
[English](https://github.com/thexmanxyz/Google-Plus-Feed-Slider-Gantry/releases/download/v1.0.0/gfs.particle.only.EN.v1.0.0.zip) / [German](https://github.com/thexmanxyz/Google-Plus-Feed-Slider-Gantry/releases/download/v1.0.0/gfs.particle.only.DE.v1.0.0.zip)

**Legacy Particle - Gantry <5.3.2:**
[English](https://github.com/thexmanxyz/Google-Plus-Feed-Slider-Gantry/releases/download/v1.0.0/gfs.particle.only.legacy.EN.v1.0.0.zip) / [German](https://github.com/thexmanxyz/Google-Plus-Feed-Slider-Gantry/releases/download/v1.0.0/gfs.particle.only.legacy.DE.v1.0.0.zip)

**Joomla Plugin - Hydrogen:**
[English](https://github.com/thexmanxyz/Google-Plus-Feed-Slider-Gantry/releases/download/v1.0.0/gfs.j3.hydrogen.EN.v1.0.0.zip) / [German](https://github.com/thexmanxyz/Google-Plus-Feed-Slider-Gantry/releases/download/v1.0.0/gfs.j3.hydrogen.DE.v1.0.0.zip)

**Joomla Plugin - Helium:**
[English](https://github.com/thexmanxyz/Google-Plus-Feed-Slider-Gantry/releases/download/v1.0.0/gfs.j3.helium.EN.v1.0.0.zip) / [German](https://github.com/thexmanxyz/Google-Plus-Feed-Slider-Gantry/releases/download/v1.0.0/gfs.j3.helium.DE.v1.0.0.zip)
___

## Automatic Installation (Joomla only)
1. Download the Plugin of the *Google Plus Feed Slider Particle* for **Hydrogen or Helium**.
2. Install it over the Joomla Plugin System.
3. Modify the `custom.scss` file located under `/[GANTRY_THEME]/custom/scss` and add the following line `@import "gplus-feed-slider";` at the end. Please check the list below to determine where the template folder for your CMS is located.

## Manual Installation
1. Download the **Default or Legacy Package** of the *Google Plus Feed Slider Particle*. If you are using Gantry **<5.3.2** please use the **Legacy Package** for compatibility reasons.
2. Extract the files.
3. Copy the `.html.twig` and the `.yaml` file to your particle folder `/[GANTRY_THEME]/custom/particles`. Please check the list below to determine where the template folder for your CMS is located.
4. Copy the `.js` file to the folder `/[GANTRY_THEME]/custom/js`. Create it if it does not exist.
5. Copy the `.scss` file to the folder `/[GANTRY_THEME]/custom/scss`.
6. Modify the `custom.scss` file located under `/[GANTRY_THEME]/custom/scss` and add the following line `@import "gplus-feed-slider";` at the end.

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
3. Configure the appearance according to your favor.
 
## Supported Parameters and Particle Options
* Container Attributes
* Custom CSS Classes
  * for Container and Image Text

## Showroom
Insight of the *Google Plus Feed Slider - Gantry Particle* configuration:

**Backend (1)** - *[General](/screenshots/backend_general.png)*

![1](/screenshots/backend_general.png)




Example for a basic slider:

**Frontend (1)** - *[Slider](/screenshots/frontend_slider.gif)*

![8](/screenshots/frontend_slider.gif)

## Future Tasks
* support more API options which can be rendered to slide

## Known Issues
None

## Dependencies
[Google+ REST API](https://developers.google.com/+/web/api/rest/)

[Gantry Framework](http://gantry.org/)

## Credits
Thanks to Google for the Google Plus Platform API and the Gantry team for providing a modern templating framework.

## by [thex](https://github.com/thexmanxyz)
Copyright (c) 2018, free to use in personal and commercial software as per the [license](/LICENSE.md).
