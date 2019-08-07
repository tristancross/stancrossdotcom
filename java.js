
$(document).ready(function(){


  // LOADER
  var overlay = document.getElementById("overlay");
window.addEventListener('load', function(){
  overlay.style.display = 'none';
})

// LOAD
  $(".showhim").removeClass("logochange");
  $(".hidehover1").removeClass("hidestyle");
  $(".hideh2").addClass("disappear");
  $(".article1").removeClass("changeStyle");
  $(".article1").removeClass("changeStyle3");
  $(".article2").addClass("changeStyle3");
  $(".article3").addClass("changeStyle3");
  $(".article4").addClass("changeStyle3");
  $(".menu-1").removeClass("changeStyle3");
  $(".menu-2").addClass("changeStyle3");
  $(".menu-3").addClass("changeStyle3");
  $(".menu-4").addClass("changeStyle3");
  $(".hideh2").addClass("disappear");
  $(".writing-grid").addClass("changeStyle3");
  $(".video-grid").addClass("changeStyle3");
  $(".sides-grid").addClass("changeStyle3");
  $(".menu-1").removeClass("changeStyle4");
  $(".menu-2").addClass("changeStyle4");
  $(".menu-3").addClass("changeStyle4");
  $(".menu-4").addClass("changeStyle4");
  $(".writing-grid").addClass("changeStyle4");
  $(".video-grid").addClass("changeStyle4");
  $(".sides-grid").addClass("changeStyle4");
  $(".article1").addClass("changeStyle-tabopen");
  $(".hidehover1").removeClass("hidestyle2");
  $(".black1").addClass("hide-tablet-title-designs");
  $(".licensemob").addClass("appear-no-strings ");
  $(".tableticons").addClass("appear-no-strings ");



    $(".article1").hover(function(){
        $(".article1").removeClass("changeStyle");
        $(".article2").addClass("changeStyle1");
        $(".article2").removeClass("changeStyle");
        $(".article3").addClass("changeStyle1");
        $(".article3").removeClass("changeStyle");
        $(".article4").addClass("changeStyle1");
        $(".article4").removeClass("changeStyle");
        $(".hidehover1").removeClass("hidestyle");
        $(".showhim").removeClass("logochange");
        // $(".licensemob").removeClass("disappear");
        $(".icons").removeClass("disappear");
        $(".icons").addClass("iconschange");
        $(".icons2").removeClass("icons2change");
        $(".license2b").addClass("del");
        $(".license2a").removeClass("del");
        $(".license3b").addClass("del");
        $(".license3a").removeClass("del");
        $(".license4b").addClass("del");
        $(".license4a").removeClass("del");
        $(".writing3").removeClass("smalltext");
        $(".writing3").addClass("bigtext");
        $(".writingdesign0").addClass("writingdesign0big");
        $(".writingdesign1").addClass("writing2big");
        $(".writingdesign2").addClass("writing2big");
        $(".writingdesign3").addClass("writing2big");
        $(".writingdesign4").addClass("writingdesign4big");
        $(".writingdesign0").removeClass("writingdesign0small");
        $(".writingdesign1").removeClass("writing2small");
        $(".writingdesign2").removeClass("writing2small");
        $(".writingdesign3").removeClass("writing2small");
        $(".writingdesign4").removeClass("writingdesign4small");
        $(".column2designpic").removeClass("col2picmove");
        $(".zitem6").removeClass("zitem6small");
        $(".spin").removeClass("spinchange");
                    })


                    $(".article1").click(function(){
                      $(".showhim").removeClass("disappear");
                      $(".hidehover1").removeClass("hidestyle-tab");
                      $(".hidehover1").removeClass("hidestyle2");
                      $(".hideh2").addClass("disappear");
                      $(".article1").addClass("changeStyle-tabopen");
                      $(".article2").addClass("changeStyle-tabclose");
                      $(".article2").removeClass("changeStyle-tabopen");
                      $(".article3").addClass("changeStyle-tabclose");
                      $(".article3").removeClass("changeStyle-tabopen");
                      $(".article4").addClass("changeStyle-tabclose");
                      $(".article4").removeClass("changeStyle-tabopen");
                      $(".menu-1").removeClass("changeStyle4");
                      $(".menu-2").addClass("changeStyle4");
                      $(".menu-3").addClass("changeStyle4");
                      $(".menu-4").addClass("changeStyle4");
                      $(".writing-grid").addClass("changeStyle4");
                      $(".video-grid").addClass("changeStyle4");
                      $(".sides-grid").addClass("changeStyle4");
                      $(".black1").addClass("hide-tablet-title-designs");
                      $(".black2").removeClass("hide-tablet-title-designs");
                      $(".black3").removeClass("hide-tablet-title-designs");
                      $(".black4").removeClass("hide-tablet-title-designs");
                      $(".opaque4").removeClass("hide-tablet-title-designs");
                      $(".opaque2").removeClass("hide-tablet-title-designs");
                      $(".opaque3").removeClass("hide-tablet-title-designs");
                      $(".opaque1").addClass("hide-tablet-title-designs");
                      
                    })

    $(".article2").hover(function(){
      $('article').not(this).find('.wrapper').scrollTop(0)
      $('article').not(this).find('.column2design').scrollTop(0)
        $(".article2").removeClass("changeStyle");
        $(".article1").addClass("changeStyle");
        $(".article1").removeClass("changeStyle1");
        $(".article3").addClass("changeStyle");
        $(".article3").removeClass("changeStyle1");
        $(".article4").addClass("changeStyle");
        $(".article4").removeClass("changeStyle1");
        $(".showhim").addClass("logochange");
        $(".icons").addClass("disappear");
        $(".icons").removeClass("iconschange");
        $(".icons2").addClass("icons2change");
        $(".hidehover1").addClass("hidestyle");
        // $(".licensemob").addClass("disappear");
        $(".license2a").addClass("del");
        $(".license2b").removeClass("del");
        $(".license2b").addClass("appear");
        $(".license3b").addClass("del");
        $(".license3a").removeClass("del");
        $(".license4b").addClass("del");
        $(".license4a").removeClass("del");
        $(".writing3").addClass("smalltext");
        $(".writing3").removeClass("bigtext");
        $(".writingdesign0").addClass("writingdesign0small");
        $(".writingdesign1").addClass("writing2small");
        $(".writingdesign2").addClass("writing2small");
        $(".writingdesign3").addClass("writing2small");
        $(".writingdesign4").addClass("writingdesign4small");
        $(".column2designpic").addClass("col2picmove");
        $(".writingdesign0").removeClass("writingdesign0big");
        $(".writingdesign1").removeClass("writing2big");
        $(".writingdesign2").removeClass("writing2big");
        $(".writingdesign3").removeClass("writing2big");
        $(".writingdesign4").removeClass("writingdesign4big");
        $(".zitem6").addClass("zitem6small");
        $(".spin").addClass("spinchange");
    
            })

            $(".article2").click(function(){
              $(".hidehover1").addClass("hidestyle2");
              $(".showhim").addClass("disappear");
              $(".spin").addClass("spinchange");
              $(".hideh2").removeClass("disappear");
              $(".article2").addClass("changeStyle-tabopen");
              $(".article2").removeClass("changeStyle-tabclose");
              $(".article1").addClass("changeStyle-tabclose");
              $(".article1").removeClass("changeStyle-tabopen");
              $(".article3").addClass("changeStyle-tabclose");
              $(".article3").removeClass("changeStyle-tabopen");
              $(".article4").addClass("changeStyle-tabclose");
              $(".article4").removeClass("changeStyle-tabopen");
              $(".menu-1").addClass("changeStyle4");
              $(".menu-2").removeClass("changeStyle4");
              $(".menu-3").addClass("changeStyle4");
              $(".menu-4").addClass("changeStyle4");
              $(".writing-grid").removeClass("changeStyle4");
              $(".video-grid").addClass("changeStyle4");
              $(".sides-grid").addClass("changeStyle4");
              $(".black2").addClass("hide-tablet-title-designs");
              $(".black1").removeClass("hide-tablet-title-designs");
              $(".black3").removeClass("hide-tablet-title-designs");
              $(".black4").removeClass("hide-tablet-title-designs");
              $(".opaque1").removeClass("hide-tablet-title-designs");
              $(".opaque4").removeClass("hide-tablet-title-designs");
              $(".opaque3").removeClass("hide-tablet-title-designs");
              $(".opaque2").addClass("hide-tablet-title-designs");
            })
      
    
    $(".article3").hover(function(){
      $('article').not(this).find('.wrapper').scrollTop(0)
        $(".article3").removeClass("changeStyle");
        $(".article1").addClass("changeStyle");
        $(".article1").removeClass("changeStyle1");
        $(".article2").addClass("changeStyle");
        $(".article2").removeClass("changeStyle1");
        $(".article4").addClass("changeStyle");
        $(".article4").removeClass("changeStyle1");
        $(".hidehover1").addClass("hidestyle");
        $(".showhim").addClass("logochange");
        $(".icons").addClass("disappear");
        $(".icons").removeClass("iconschange");
        $(".icons2").removeClass("icons2change");
        // $(".licensemob").addClass("disappear");
        $(".license2b").addClass("del");
        $(".license2a").removeClass("del");
        $(".license3a").addClass("del");
        $(".license3b").removeClass("del");
        $(".license3b").addClass("appear");
        $(".license4b").addClass("del");
        $(".license4a").removeClass("del");
        $(".writing3").addClass("smalltext");
        $(".writing3").removeClass("bigtext");
        $(".writingdesign0").addClass("writingdesign0small");
        $(".writingdesign1").addClass("writing2small");
        $(".writingdesign2").addClass("writing2small");
        $(".writingdesign3").addClass("writing2small");
        $(".writingdesign4").addClass("writingdesign4small");
        $(".column2designpic").addClass("col2picmove");
        $(".writingdesign0").removeClass("writingdesign0big");
        $(".writingdesign1").removeClass("writing2big");
        $(".writingdesign2").removeClass("writing2big");
        $(".writingdesign3").removeClass("writing2big");
        $(".writingdesign4").removeClass("writingdesign4big");
        $(".zitem6").addClass("zitem6small");
        $(".spin").addClass("spinchange");
         })

         $(".article3").click(function(){
          $('article').not(this).find('.wrapper').scrollTop(0)
          $(".hidehover1").addClass("hidestyle2");
          $(".article3").addClass("changeStyle-tabopen");
          $(".article3").removeClass("changeStyle-tabclose");
          $(".article1").addClass("changeStyle-tabclose");
          $(".article1").removeClass("changeStyle-tabopen");
          $(".article2").addClass("changeStyle-tabclose");
          $(".article2").removeClass("changeStyle-tabopen");
          $(".article4").addClass("changeStyle-tabclose");
          $(".article4").removeClass("changeStyle-tabopen");
          $(".menu-1").addClass("changeStyle4");
          $(".menu-3").removeClass("changeStyle4");
          $(".menu-2").addClass("changeStyle4");
          $(".menu-4").addClass("changeStyle4");
          $(".writing-grid").addClass("changeStyle4");
          $(".video-grid").removeClass("changeStyle4");
          $(".sides-grid").addClass("changeStyle4");
          $(".column2design").removeClass("disappear");
          $(".column3design").addClass("disappear");
          $(".column4design").addClass("disappear");
          $(".spin").addClass("spinchange");
          $(".black3").addClass("hide-tablet-title-designs");
          $(".black2").removeClass("hide-tablet-title-designs");
          $(".black1").removeClass("hide-tablet-title-designs");
          $(".black4").removeClass("hide-tablet-title-designs");
          $(".opaque1").removeClass("hide-tablet-title-designs");
          $(".opaque2").removeClass("hide-tablet-title-designs");
          $(".opaque4").removeClass("hide-tablet-title-designs");
          $(".opaque3").addClass("hide-tablet-title-designs");
        })
  

    $(".article4").hover(function(){
      $('article').not(this).find('.wrapper').scrollTop(0)
        $(".article4").removeClass("changeStyle");
        $(".article1").addClass("changeStyle");
        $(".article1").removeClass("changeStyle1");
        $(".article2").addClass("changeStyle");
        $(".article2").removeClass("changeStyle1");
        $(".article3").addClass("changeStyle");
        $(".article3").removeClass("changeStyle1");
        $(".hidehover1").addClass("hidestyle");
        $(".showhim").addClass("logochange");
        $(".hideh2").removeClass("disappear");
        $(".icons").addClass("disappear");
        $(".icons").removeClass("iconschange");
        $(".icons2").removeClass("icons2change");
        // $(".licensemob").addClass("disappear");
        $(".license2b").addClass("del");
        $(".license2a").removeClass("del");
        $(".license3b").addClass("del");
        $(".license3a").removeClass("del");
        $(".license4a").addClass("del");
        $(".license4b").removeClass("del");
        $(".license4b").addClass("appear");
        $(".writing3").addClass("smalltext");
        $(".writing3").removeClass("bigtext");
        $(".writingdesign0").addClass("writingdesign0small");
        $(".writingdesign1").addClass("writing2small");
        $(".writingdesign2").addClass("writing2small");
        $(".writingdesign3").addClass("writing2small");
        $(".writingdesign4").addClass("writingdesign4small");
        $(".column2designpic").addClass("col2picmove");
        $(".writingdesign0").removeClass("writingdesign0big");
        $(".writingdesign1").removeClass("writing2big");
        $(".writingdesign2").removeClass("writing2big");
        $(".writingdesign3").removeClass("writing2big");
        $(".writingdesign4").removeClass("writingdesign4big");
        $(".writingdesign4").addClass("writingdesign4small");
        $(".zitem6").addClass("zitem6small");
        $(".spin").addClass("spinchange");
             })

             $(".article4").click(function(){
              $(".article4").addClass("changeStyle-tabopen");
              $(".article4").removeClass("changeStyle-tabclose");
              $(".article1").addClass("changeStyle-tabclose");
              $(".article1").removeClass("changeStyle-tabopen");
              $(".article2").addClass("changeStyle-tabclose");
              $(".article2").removeClass("changeStyle-tabopen");
              $(".article3").addClass("changeStyle-tabclose");
              $(".article3").removeClass("changeStyle-tabopen");
              $(".menu-1").addClass("changeStyle4");
              $(".menu-4").removeClass("changeStyle4");
              $(".menu-2").addClass("changeStyle4");
              $(".menu-3").addClass("changeStyle4");
              $(".writing-grid").addClass("changeStyle4");
              $(".video-grid").addClass("changeStyle4");
              $(".sides-grid").removeClass("changeStyle4");
              $(".column2design").removeClass("disappear");
              $(".column3design").removeClass("disappear");
              $(".column4design").addClass("disappear");
              $(".spin").addClass("spinchange");
              $(".black4").addClass("hide-tablet-title-designs");
              $(".black2").removeClass("hide-tablet-title-designs");
              $(".black3").removeClass("hide-tablet-title-designs");
              $(".black1").removeClass("hide-tablet-title-designs");
              $(".opaque1").removeClass("hide-tablet-title-designs");
              $(".opaque2").removeClass("hide-tablet-title-designs");
              $(".opaque3").removeClass("hide-tablet-title-designs");
              $(".opaque4").addClass("hide-tablet-title-designs");
              $(".hidehover1").addClass("hidestyle2");
            })
      

             $(".burg").click(function(){
              $(".showhim").removeClass("logochange");
              $(".showhim").removeClass("disappear");
              $(".hidehover1").removeClass("hidestyle");
              $(".hideh2").addClass("disappear");
              $(".article1").removeClass("changeStyle");
              $(".article1").removeClass("changeStyle3");
              $(".article2").addClass("changeStyle3");
              $(".article3").addClass("changeStyle3");
              $(".article4").addClass("changeStyle3");
              $(".menu-1").removeClass("changeStyle3");
              $(".menu-2").addClass("changeStyle3");
              $(".menu-3").addClass("changeStyle3");
              $(".menu-4").addClass("changeStyle3");
              $(".writing-grid").addClass("changeStyle3");
              $(".video-grid").addClass("changeStyle3");
              $(".sides-grid").addClass("changeStyle3");
            })

             $(".noodlebreak").click(function(){
              $(".article1").addClass("changeStyle3");
              $(".article2").removeClass("changeStyle3");
              $(".article3").addClass("changeStyle3");
              $(".article4").addClass("changeStyle3");
              $(".menu-1").addClass("changeStyle3");
              $(".menu-2").removeClass("changeStyle3");
              $(".menu-3").addClass("changeStyle3");
              $(".menu-4").addClass("changeStyle3");
              $(".writing-grid").removeClass("changeStyle3");
              $(".video-grid").addClass("changeStyle3");
              $(".sides-grid").addClass("changeStyle3");
            })

            $(".noodle").click(function(){
              $(".article1").addClass("changeStyle3");
              $(".article2").removeClass("changeStyle3");
              $(".article3").addClass("changeStyle3");
              $(".article4").addClass("changeStyle3");
              $(".menu-1").addClass("changeStyle3");
              $(".menu-2").removeClass("changeStyle3");
              $(".menu-3").addClass("changeStyle3");
              $(".menu-4").addClass("changeStyle3");
              $(".writing-grid").removeClass("changeStyle3");
              $(".video-grid").addClass("changeStyle3");
              $(".sides-grid").addClass("changeStyle3");
            })

            $(".pizza").click(function(){
              $(".article1").addClass("changeStyle3");
              $(".article2").addClass("changeStyle3");
              $(".article3").removeClass("changeStyle3");
              $(".article4").addClass("changeStyle3");
              $(".menu-1").addClass("changeStyle3");
              $(".menu-2").addClass("changeStyle3");
              $(".menu-3").removeClass("changeStyle3");
              $(".menu-4").addClass("changeStyle3");
              $(".writing-grid").addClass("changeStyle3");
              $(".video-grid").removeClass("changeStyle3");
              $(".sides-grid").addClass("changeStyle3");
            })



             $(".fries").click(function(){
              $(".article1").addClass("changeStyle3");
              $(".article2").addClass("changeStyle3");
              $(".article3").addClass("changeStyle3");
              $(".article4").removeClass("changeStyle3");
              $(".menu-1").addClass("changeStyle3");
              $(".menu-2").addClass("changeStyle3");
              $(".menu-3").addClass("changeStyle3");
              $(".menu-4").removeClass("changeStyle3");
              $(".writing-grid").addClass("changeStyle3");
              $(".video-grid").addClass("changeStyle3");
              $(".sides-grid").removeClass("changeStyle3");
            })

    $(document).mouseleave(function () {
        $(".article1").removeClass("changeStyle");
        $(".article1").removeClass("changeStyle1");
        $(".article2").removeClass("changeStyle");
        $(".article2").removeClass("changeStyle1");
        $(".article3").removeClass("changeStyle");
        $(".article3").removeClass("changeStyle1");
        $(".article4").removeClass("changeStyle");
        $(".article4").removeClass("changeStyle1");
        $(".hidehover1").removeClass("hidestyle");
        $(".icons").removeClass("disappear");
        $(".showhim").removeClass("logochange");
        $(".icons2").removeClass("icons2change");
        // $(".licensemob").removeClass("disappear");
        // $(".hideh2").addClass("disappear");
        // $(".showhim").removeClass("disappear");
        $(".license2b").addClass("del");
        $(".license2a").removeClass("del");
        $(".license3b").addClass("del");
        $(".license3a").removeClass("del");
        $(".license4b").addClass("del");
        $(".license4a").removeClass("del");
        $(".writing3").removeClass("smalltext");
        $(".writing3").addClass("bigtext");
        $(".writingdesign0").addClass("writingdesign0big");
        $(".writingdesign1").addClass("writing2big");
        $(".writingdesign2").addClass("writing2big");
        $(".writingdesign3").addClass("writing2big");
        $(".writingdesign4").addClass("writingdesign4big");
        $(".column2designpic").removeClass("col2picmove");
        $(".writingdesign0").removeClass("writingdesign0small");
        $(".writingdesign1").removeClass("writing2small");
        $(".writingdesign2").removeClass("writing2small");
        $(".writingdesign3").removeClass("writing2small");
        $(".writingdesign4").removeClass("writingdesign4small");
        $(".zitem6").removeClass("zitem6small");
        $(".spin").removeClass("spinchange");
        // $(".menu-1").removeClass("changeStyle3");
        // $(".menu-2").addClass("changeStyle3");
        // $(".menu-3").addClass("changeStyle3");
        // $(".menu-4").addClass("changeStyle3");
        // $(".hideh2").addClass("disappear");
        // $(".writing-grid").addClass("changeStyle3");
        // $(".video-grid").addClass("changeStyle3");
        // $(".sides-grid").addClass("changeStyle3");
        
        });

        


if(window.ltIE9) {
                (function($) {
                  $('.tabs input[type="radio"]:checked')
                  .closest('.tab')
                  .addClass('checked');
                  $('html').on('click', '.tabs input', function() {
                    $('input[name="' + this.name + '"]')
                    .closest('.tab')
                    .removeClass('checked');
                    $(this)
                    .closest('.tab')
                    .addClass('checked');
                  });
                })(window.jQuery);
              }

              // If there is no GDPR cookie set for the site
//
// Show the notice
//
// Agreed?
//
// Store the cookie.




/* https://github.com/madmurphy/cookies.js (GPL3) */
var docCookies={getItem:function(e){return e&&decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null},setItem:function(e,o,t,n,r,c){if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return!1;var s="";if(t)switch(t.constructor){case Number:s=t===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+t;break;case String:s="; expires="+t;break;case Date:s="; expires="+t.toUTCString()}return document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(o)+s+(r?"; domain="+r:"")+(n?"; path="+n:"")+(c?"; secure":""),!0},removeItem:function(e,o,t){return!!this.hasItem(e)&&(document.cookie=encodeURIComponent(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(t?"; domain="+t:"")+(o?"; path="+o:""),!0)},hasItem:function(e){return!(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))&&new RegExp("(?:^|;\\s*)"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},keys:function(){for(var e=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),o=e.length,t=0;t<o;t++)e[t]=decodeURIComponent(e[t]);return e},clear:function(e,o){for(var t=this.keys(),n=t.length,r=0;r<n;r++)this.removeItem(t[r],e,o)}};"undefined"!=typeof module&&void 0!==module.exports&&(module.exports=docCookies);
//# sourceMappingURL=cookies.min.js.map

function maxAgeToGMT (nMaxAge) {
  return nMaxAge === Infinity ? "Fri, 31 Dec 9999 23:59:59 GMT" : (new Date(nMaxAge * 1e3 + Date.now())).toUTCString();
}

const cookieBanner = document.querySelector('.cookie');
const button = document.querySelector('.cookie button');
let cookieRead = docCookies.getItem("GDPR");

if (cookieRead) {
	console.log("has cookie");
} else {
	cookieBanner.classList.toggle("show");
}


button.addEventListener('click', function(){
	cookieBanner.classList.toggle('show');
	docCookies.setItem("GDPR", "Accepted Cookie", maxAgeToGMT);
});

     

    
});

