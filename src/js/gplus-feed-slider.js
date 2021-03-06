/*******************************************************
*                                                      *
*   Google+ Feed Slider - Particle for Gantry          *
*                                                      *
*   Purpose: This project implements a basic           *
*            feed slider that fetches data from        *
*            an existing Google+ profile. The          *
*            appearance as well as the data output     *
*            can be configured via the Gantry          *
*            templating framework.                     *
*                                                      *
*   Author: Andreas Kar (thex) <andreas.kar@gmx.at>    *
*   Repository: https://git.io/fA9XZ                   *
*   Homepage: https://gantryprojects.com               *
*                                                      *
*******************************************************/

function GPlusFeedSilder(){

    //runtime information
    this.currentSlide = 0;
    this.delayedAuto = false;

    //configuration of slider
    this.cfg = {container_id: "1",
                api_key: "",
                profile: "+LarryPage",
                collection: "public",
                maxResults: 20,

                link_enable: true,
                link_title: "Link to Google+ Post",
                link_target: "_blank",
                filter_empty: true,
                empty_title: "go to post",

                display_name: false,
                plus_one: true,
                slide_count: false,

                slider_auto: true,
                slider_delay: 5000,
                slider_mode: 1,
                slider_effect: 1,

                image_enable: true,
                image_design: 2,
                image_size: 25,
                image_alt: "Google Plus Profile",

                date_mode: 3,
                date_format: 2,
                date_delimiter: '/',
                time_delimiter: ' -'};

    //check if should be slided and clear old state
    this.isSlidable = function (gfs, slides, auto, cls){        
        if(auto && gfs.delayedAuto) {
            gfs.delayedAuto = false;
            return false;
        } else if (!auto){
            gfs.delayedAuto = true;
        }
        for (var i = 0; i < slides.length; i++) {
            slides[i].classList.add(cls.off);
            slides[i].classList.remove(cls.on);
        }
        return true;
    };

    //scrolling left / rights
    this.slide = function(gfs, slides, auto, mode){
        var cls = {on: "slide-on", off: "slide-off", left: "left-dir", right: "right-dir"};
        return function(){
            if(!gfs.isSlidable(gfs, slides, auto, cls)) return;
            if(mode == 1){
                gfs.currentSlide = (gfs.currentSlide != 0) ? gfs.currentSlide - 1 : slides.length - 1;
                slides[gfs.currentSlide].classList.add(cls.left);
                slides[gfs.currentSlide].classList.remove(cls.right);
            }else{
                gfs.currentSlide = (gfs.currentSlide != slides.length - 1) ? gfs.currentSlide + 1 : 0;
                slides[gfs.currentSlide].classList.add(cls.right);
                slides[gfs.currentSlide].classList.remove(cls.left);
            }
            slides[gfs.currentSlide].classList.add(cls.on);
            slides[gfs.currentSlide].classList.remove(cls.off);
        };
    };

    //date by mode
    this.slideDate = function(slide){
        var date = new Date(Date.parse(slide.published));
        var prepare = function(val){ return (val < 10 ? "0" + val : val); };
        var del = this.cfg.date_delimiter;
        var dateTime = "";

        if(this.cfg.date_mode == 1 || this.cfg.date_mode == 3){
            dateTime += "&nbsp;";
            switch(this.cfg.date_format){
                case 1:
                    dateTime += prepare(date.getDate()) + del + prepare(date.getMonth()) + del + date.getFullYear();
                    break;
                case 2:
                    dateTime += date.getFullYear() + del + prepare(date.getMonth()) + del + prepare(date.getDate());
                    break;
                case 3:
                    dateTime += prepare(date.getMonth()) + del + prepare(date.getDate()) + del + date.getFullYear();
                    break;
                default:
                    dateTime += date.getFullYear() + del + prepare(date.getMonth()) + del + prepare(date.getDate());
            }
        }
        
        if(this.cfg.date_mode == 2 || this.cfg.date_mode == 3){
            dateTime += this.cfg.time_delimiter + " " + prepare(date.getHours()) + ":" + prepare(date.getMinutes());  
        }
        return dateTime;
    };

    //build slide
    this.buildSlide = function(gfs, slide, state, count){
        var cls = {on: "slide-on",
                     off: "slide-off",
                     effect: "slide-effect-" + gfs.cfg.slider_effect,
                     element: "slide-element",
                     date: "slide-date",
                     name: "slide-display-name",
                     pluses: "slide-plus-one",
                     img_cont: "slide-image-container",
                     img: "slide-person-image slide-image-mode-" + gfs.cfg.image_design};

        var imgUrl = slide.actor.image.url;
        var slideText;
        var relTarget;
        var html;
        
        if(gfs.cfg.link_target !== 'none'){
            relTarget = " target=\"" + gfs.cfg.link_target + "\"";
            if(gfs.cfg.link_target === '_blank')
                relTarget += " rel=\"noopener noreferrer\""
        }

        slideText = (gfs.cfg.slide_count ? count + ". | " : "") + (!slide.title ? gfs.cfg.empty_title : slide.title);
        imgUrl = ((gfs.cfg.image_size != 50) ? imgUrl.replace("sz=50", "sz=25") : imgUrl);

        html = "<div class=\"" + cls.element + "" + (state ? " " + cls.on : " " + cls.off) + " " + cls.effect + "\"" + ">";
        html += ((gfs.cfg.link_enable) ? "<a href=\"" + slide.url + "\"" + relTarget + " title=\"" + gfs.cfg.link_title + "\">" + slideText + "</a>" : slideText);
        html += "<span class=\"" + cls.date + "\">&nbsp;" + gfs.slideDate(slide)  + "</span>";
        html += "<span class=\"" + cls.img_cont + "\">";

        if(gfs.cfg.image_enable){
            html += "<img class=\"" + cls.img + "\" src=\"" + imgUrl + "\" ";
            html += "width=\"" + gfs.cfg.image_size + "\" ";
            html += "height=\"" + gfs.cfg.image_size + "\" ";
            html += "alt=\"" + gfs.cfg.image_alt + "\">";
        }

        html += "<span class=\"" + cls.name + "\">" + ((gfs.cfg.display_name) ? "&nbsp;" + slide.actor.displayName : "");
        html += "<span class=\"" + cls.pluses + "\">" + ((gfs.cfg.plus_one) ? "&nbsp;+" + slide.object.plusoners.totalItems : "");
        html += "</span></span></div>";

        return html;
    };
    
    //API url
    this.getAccessUrl = function(){
        var url = "https://www.googleapis.com/plus/v1/people/" + this.cfg.profile + "/activities";
        url += (this.cfg.collection) ? "/" + this.cfg.collection : "";
        url += "?key=" + this.cfg.api_key;
        url += "&maxResults=" + ((this.cfg.maxResults) ? this.cfg.maxResults : 20);
        return url;
    };

    //fetch feed
    this.addLoadFeedEvent = function(){
        var xhttp = new XMLHttpRequest();  
        xhttp.open("GET", this.getAccessUrl(), true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.onload = this.getFeedLoadEvent(this, xhttp);
        xhttp.send(null);         
    };

    this.getFeedLoadEvent = function(gfs) {
        return function(){
            
            //selectors
            var sel = {slider: ".g-google-plus-slider.slider-" + gfs.cfg.container_id,
                       content: ".content-container",
                       element: ".slide-element",
                       left: ".scroll-left",
                       right: ".scroll-right"};

            var $slider = jQuery(sel.slider);
            var slides = [];
            var html = "";
            var count = 1;
            var json;
            
            if(this.status >= 400){
                $slider.find(sel.element + " > span").html("Server / Configuration Error - Check API Key! - Error Code: " + this.status);
                return;
            }
            
            json = JSON.parse(this.responseText);

            //build slides
            for(var i=0; i < Object.keys(json.items).length; i++){
                if((!gfs.cfg.filter_empty && json.items[i].title != "" && json.items[i].title.length > 0) || gfs.cfg.filter_empty){
                    html += gfs.buildSlide(gfs, json.items[i], html.length == 0, count);
                    count++;
                }
            }

            //output slides
            $slider.find(sel.content).html(html);
            slides = jQuery(sel.slider + " " + sel.content + " > " + sel.element)

            //repeating event (autoscroll)
            if(gfs.cfg.slider_auto){
                var slideDir = (gfs.cfg.slider_mode == 1) ? gfs.slide(gfs, slides, true, 2) : gfs.slide(gfs, slides, true, 1);
                setInterval(slideDir, gfs.cfg.slider_delay);
            }

            //button click events
            $slider.find(sel.right).on('click', gfs.slide(gfs, slides, false, 2));
            $slider.find(sel.left).on('click', gfs.slide(gfs, slides, false, 1));
        };
    };
};