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
*                                                      *
*******************************************************/

function GPlusFeedSilder(){
    this.current = 0;
    this.delayedAuto = false;
    
    this.data = {key: "",
                 profile: "+LarryPage",
                 collection: "public",
                 maxResults: 20,
                 container_id: "1",
                 date_mode: 3,
                 date_format: 2,
                 date_delimiter: '/',
                 time_delimiter: ' -',
                 link: true,
                 filter_empty: true,
                 empty_title: "go to post",
                 enable_image: true,
                 image_type: 2,
                 image_size: 25};
    
    this.slidable = function (gfs, slides, auto){
        if(auto && gfs.delayedAuto) {
            gfs.delayedAuto = false;
            return false;
        } else if (!auto){
            gfs.delayedAuto = true;
        }
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        return true;
    };
    
    this.slideRight = function slideRight(gfs, slides, auto) {
        return function(){
            if(!gfs.slidable(gfs, slides, auto)) return;
            gfs.current = (gfs.current != slides.length - 1) ? gfs.current + 1 : 0;
            slides[gfs.current].style.display = "inherit";
        };
    };
    this.slideLeft = function slideLeft(gfs, slides, auto) {
        return function(){
            if(!gfs.slidable(gfs, slides, auto)) return;
            gfs.current = (gfs.current != 0) ? gfs.current - 1 : slides.length - 1;
            slides[gfs.current].style.display = "inherit";
        };
    };
    
    this.slideDate = function(slide){
        var date = new Date(Date.parse(slide.published));
        var prepare = function(val){ return (val < 10 ? "0" + val : val); };
        var del = this.data.date_delimiter;
        var dateTime = "";
        
        if(this.data.date_mode == 1 || this.data.date_mode == 3){
            dateTime += "&nbsp;";
            switch(this.data.date_format){
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
        
        if(this.data.date_mode == CanvasRenderingContext2D || this.data.date_mode == 3){
            dateTime += this.data.time_delimiter + " " + prepare(date.getHours()) + ":" + prepare(date.getMinutes());  
        }
        return dateTime;
    };
    
    this.slideOutput = function(gfs, slide, state){
        var cls = {on: "slide-on",
                     off: "slide-off",
                     element: "slide-element",
                     date: "slide-date",
                     img_cont: "slide-image-container",
                     img: "slide-person-image slide-image-mode-" + gfs.data.image_type};
        
        var imgSize = gfs.data.image_size;
        var imageUrl = slide.actor.image.url;
        var slideTitle = !slide.title ? gfs.data.empty_title : slide.title;
        var html;
        
        imageUrl = ((imgSize != 50) ? imageUrl.replace("sz=50", "sz=25") : imageUrl);
        html = "<div class=\"" + cls.element + "" + (state ? " " + cls.on : " " + cls.off) + "\"" + ">";
        html += ((gfs.data.link) ? "<a href=\"" + slide.url + "\" title=\"Google Plus Link\">" + slideTitle + "</a>" : slideTitle);
        html += "<span class=\"" + cls.date + "\">&nbsp;" + gfs.slideDate(slide)  + "</span>";
        html += "<span class=\"" + cls.img_cont + "\">";
        
        if(gfs.data.enable_image) 
            html += "<img class=\"" + cls.img + "\" src=\"" + imageUrl + "\" width=\"" + imgSize + "\" height=\"" + imgSize + "\" tile=\"Google Plus Profile\">";
        
        html += "</span></div>";
        return html;
    };
    
    this.getAccessUrl = function(){
        var url = "https://www.googleapis.com/plus/v1/people/" + this.data.profile + "/activities";
        url += (this.data.collection) ? "/" + this.data.collection : "";
        url += "?key=" + this.data.key;
        url += "&maxResults=" + ((this.data.maxResults) ? this.data.maxResults : 15);
        return url;
    };
    
    this.addLoadFeedEvent = function(){
        var xhttp = new XMLHttpRequest();  
        xhttp.open("GET", this.getAccessUrl(), true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.onload = this.getFeedLoadEvent(this);
        xhttp.send(null);         
    };
    
    this.getFeedLoadEvent = function(gfs) {
        return function(){
            var sel = {slider: ".g-google-plus-slider.slider-" + gfs.data.container_id,
                       content: ".content-container",
                       element: ".slide-element",
                       left: ".scroll-left",
                       right: ".scroll-right"};
            
            var json = JSON.parse(this.responseText);
            var slides = [];
            var html = "";
            
            for(var i=0; i < Object.keys(json.items).length; i++)
                if((gfs.data.filter_empty && json.items[i].title != "" && json.items[i].title.length > 0) || !gfs.data.filter_empty)
                    html += gfs.slideOutput(gfs, json.items[i], html.length == 0);
                    
                
            jQuery(sel.slider + " " + sel.content).html(html);
            slides = jQuery(sel.slider + " " + sel.content + " > " + sel.element)
            setInterval(gfs.slideRight(gfs, slides, true), 5000);
            jQuery(sel.slider + " " + sel.right).on('click', gfs.slideRight(gfs, slides, false));
            jQuery(sel.slider + " " + sel.left).on('click', gfs.slideLeft(gfs, slides, false));
        };
    };
};
