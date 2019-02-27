(function($){

var img = $("img"),
    h2 = $("h2"),
    h1 = $("h1"),
    intro = $(".intro"),
    listItem= $("ul li"),
    buttons=$('button'),
    tl = new TimelineLite({paused: true}),
    // tijdlijn met de content
    dot=$('.dot'),
    loader=$('#loader'),
    header=$('#header')
    tlLoader=new TimelineMax({repeat:2,onComplete:loadContent});
    //tijdlijn voor het laadscherm


//content staat op pauze
tl
  .set(header,{autoAlpha:1})  //als tl weer afpeelt laat de content zien.
  .staggerFrom(buttons,0.3, {cycle:{x:[500,-500]
  },autoAlpha:0,ease:Power1.easeOut},0.1)
  .from(h1, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
  .from(intro, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
  .from(img, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
  .from(h2, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
  .from(listItem, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut});

//  .staggerFrom(buttons,0.2, {cycle:{x:[500,-500]}},0.1)
//cycle:{x:[500,-500]} eerste item van 500 2e van -500

//loader Timeline

tlLoader    //animatie maken van de dots.
    .staggerFromTo(dot, 0.3,
    {y:0, autoAlpha:0},
    {y:20,autoAlpha:1,ease:Back.easeInOut},
    0.05
)
.fromTo(loader, 0.3,
  {autoAlpha:1,scale:1.3},
  {autoAlpha:1, scale:1,ease:Power0.easeNone},
  1);
// lader is klaar. Nu einde aan maken en content uitladen

  function loadContent(){ //nieuwe tl dots krijgen kleur. faden weg.
    var tlLoaderOut=new TimelineLite({onComplete: contentIn})
    tlLoaderOut
    .set(dot,{backgroundColor:'#2b4d66'})
    .to(loader,0.2,{autoAlpha:1, scale:1.3, ease:Power0.easeNone})
    .staggerFromTo(dot, 0.3,
      {y:0, autoAlpha:0},
      {y:20,autoAlpha:1,ease:Back.easeInOut},
      0.05,0)
      .to(loader,0.3,{y: -150,autoAlpha:0,ease:Back.easeIn},"+=0.3");
  } // als dit klaar is (oncomplete content in)

function contentIn(){ // speel tijdlijn weer af. Kijk tl lijn 1 .set etc
  tl.play();
}
// als de tijdplijn afspeelt maak content als eerste zichtbaar


  $('#btnPlay').on('click',function(){
    tl.play();
  });

  $('#btnPause').on('click',function(){
    tl.pause();
  });

  $('#btnResume').on('click',function(){
    tl.resume();
  });

  $('#btnReverse').on('click',function(){
    tl.reverse();
    });

    $('#btnSpeedUp').on('click',function(){
      tl.timeScale(8);
    });

    $('#btnSlowDown').on('click',function(){
      tl.timeScale(0.5);
    });

    $('#btnSeek').on('click',function(){
      tl.seek(1);
      // je kan naar een label springen, (1) is 1 seconde 2= 2 seconde etc.
    });

    $('#btnProgress').on('click',function(){
      tl.progress(0.5);
    });

    $('#btnRestart').on('click',function(){
      tl.restart(0.5);
    });



})(jQuery);
