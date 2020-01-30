/*Initial prepping of the gallery*/
$(document).ready(function(){    
    var artType = $(".galleria").attr('id');
    var gallery = document.getElementById(artType);
    gallery.innerHTML = '';
    loadImages(artType, gallery);

    //initialize Galleria:
    Galleria.loadTheme('../js/galleria-1.6.1/themes/classic/galleria.classic.min.js');
    Galleria.run(gallery);
    //initialize fullscreen:

});

/*TEMP: Loads appropriate images to DOM based on artType. artType should share the same name as the containing art folder
within the 'gallery' directory, so that they can later load the appropriate images via the arrays below ex: 'gallery/images/artType/example.jpg*/
function loadImages(artType, gallery){
    var artDir = artType.toString();
    //Default location the images will be found to be added to the gallery:
    var image = '';
    var imageStart = ("<img src='images/"+artDir+"/");
    var imageEnd = "'></img>";
    //add the images to the gallery
    var imagesToLoad = findAppropriateImages(artDir);
    for(i=0; i < imagesToLoad.length; i++){
        image = imagesToLoad[i];
        gallery.innerHTML += (imageStart+image+imageEnd);
    }
}

//Load individual image:
function loadSingleImage(imagePath, image){

}

/*TEMP: These hold the individual HTML for the images we wish to load, broken down by artType
These are held in arrays to be referenced with extension name as 'example.jpg'. 
load images will take care of the for loop and gallery location*/

//2D color
var color = [
    'test.jpg',
    'test.jpg',
    'test_tall.jpg'
];
//2D Black and White
var blackandwhite = [
    'test_tall.jpg',
    'test.jpg',
    'test_tall.jpg',
    'test2.jpg'
];
//Logo Work
var logo = [
    'test_tall.jpg',
    'test.jpg',
    'test_tall.jpg',
    'test2.jpg',
    'test2.jpg'
];
//Digital
var digital = [
    'test_tall.jpg',
    'test_tall.jpg',
    'test_tall.jpg',
    'test_tall.jpg',
    'test_tall.jpg',
    'test_tall.jpg',
];
//Large Projects
var largeprojects = [
    'test_tall.jpg',
    'test_tall.jpg',
    'test_tall.jpg',
    'test_tall.jpg',
    'test_tall.jpg',
    'test_tall.jpg',
    'test_tall.jpg'
];
//3D Work
var work3d = [
    'test_tall.jpg',
    'test_tall.jpg',
    'test_tall.jpg',
    'test_tall.jpg',
    'test_tall.jpg',
    'test_tall.jpg',
    'test_tall.jpg',
    'test_tall.jpg'
];

//Just a quick switch to determine which images to loa based on artType
function findAppropriateImages(artType){
    switch(artType){
        case "color":
            return color;
        case "blackandwhite":
            return blackandwhite;
        case "logo":
            return logo;
        case "digital":
            return digital;
        case "largeprojects":
            return largeprojects;
        case "work3d":
            return work3d;
    }
}

