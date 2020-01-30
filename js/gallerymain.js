/*TEMP: This section is just here to setup the addition of images until we find a more responsive solution*/
//Start of page links - not standalone:
var linkStart = "<a href='gallery/";
//Top off the link HTML - not standalone:
    linkEnd = "'> <figure> <img class='preview-image' src='gallery/images/";
//Array of page links, to be sync'd with imageExact:
    linkExact = [
        linkStart+"3dwork.html"+linkEnd,
        linkStart+"blackandwhite.html"+linkEnd,
        linkStart+"color.html"+linkEnd,
        linkStart+"digital.html"+linkEnd,
        linkStart+"largeprojects.html"+linkEnd,
        linkStart+"logo.html"+linkEnd];
//individual image URL for every image :
    imageExact = [
        "work3d/test.jpg'> <figcaption>3D Work",
        "blackandwhite/test.jpg'> <figcaption>2D Black & White Illustrations</figcaption>",
        "color/test.jpg'> <figcaption>2D Color Illustrations</figcaption>",
        "digital/test_tall.jpg'> <figcaption>Digital Work</figcaption>",
        "largeprojects/test.jpg'> <figcaption>Large Scale Projects</figcaption>",
        "logo/test.jpg'> <figcaption>Logo Work</figcaption>"];
//Top off the HTML addition:
    linkEnd = "</figure></a>";

$(document).ready( function(){
    var display = document.getElementById('gallerymain');
    display.setAttribute('id', 'active');
    setupDisplay(display);
});

//Function to set up the display:
function setupDisplay(display){
    for(i=0; i< linkExact.length; i++){
        display.innerHTML += (linkExact[i]+imageExact[i]+linkEnd);
    }
}

