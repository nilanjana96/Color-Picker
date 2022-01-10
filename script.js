$(document).ready(function () {

    var hexColor;
     // * initializing the color picker* //
      $('.input').ColorPicker( {
        onSubmit: function (hsb, hex, rgb, el) {
            $("a")[0].innerHTML = '#' + hex;
            hexColor = '#' + hex;
            createDiv();
        },
        onChange: function (hsb, hex, rgb) {

            $("a")[0].innerHTML = '#' + hex;
            hexColor = '#' + hex;
            createDiv();
        }
    });
    // * function to create div element*//
    const createDiv = () => {
        try {
            if ($('.assignment').length > 0) {
                $('.assignment').remove();
            }
            $(`<div class="assignment">I have completed the assignment, ${hexColor}</div>`)
                .appendTo('.colorpicker');
        } catch (e) {
            console.error(e);
        }
    };

    // * function for converting the hex code to link *//
    $(".input").keyup(function () {
        try {
            console.log('inside key up function');

            if ($("a").length > 0){
                hexColor = $("a")[0].innerHTML;
             
            }else{
                hexColor = $(".input")[0].innerHTML;
            }
            console.log('hexColor',hexColor);
            let hexColorVal = hexColor.substring(1, hexColor.length);
            console.log(hexColorVal);
            console.log(hexColorVal.match(/^([A-Fa-f0-9]{6})$/));
            if (hexColorVal.length === 6 && hexColorVal.match(/^([A-Fa-f0-9]{6})$/)) {
                var aRgbHex = hexColorVal.match(/.{1,2}/g);
                console.log(aRgbHex);
                var rgbColor = [
                    parseInt(aRgbHex[0], 16),
                    parseInt(aRgbHex[1], 16),
                    parseInt(aRgbHex[2], 16)
                ];
                console.log(rgbColor);
                $(".input")[0].innerHTML = '';
                $(`<a id="link" href>${hexColor}</a>`)
                    .appendTo('.input');

            }
        } catch (e) {
            console.error(e);
        };

    });

    // * function for removing the anchor element when delete/backspace is clicked  *//
    $(".input").keydown(function () {
        try {
            var key = event.keyCode || event.charCode;
            if (key == 8 || key == 46) {
                if ($("a").length > 0) {
                    $('a').remove();
                }
            }

        } catch (e) {
            console.error(e);
        }

    });

    // * function for opening the color picker modal on link click *//
    const openModal = () => {
        try {
            console.log(event.target);
            console.log($("a").length);
            if ($("a").length > 0) {
                let hexColorInsideA = $("a")[0].innerHTML;
                let hexColorInsideAVal = hexColorInsideA.substring(1, hexColorInsideA.length);
                console.log(hexColorInsideAVal.length);
            }
            $('.input').ColorPickerSetColor(hexColor);
            createDiv();
        } catch (e) {
            console.error(e);
        }
    }
    $(".input").click(function () {
        try {
            if ($("#link").length > 0){
                $(".colorpicker").css("visibility", "visible");
                openModal();
            }else if($("#link").length === 0 && $(".colorpicker").length > 0){
                
                $(".colorpicker").css("visibility", "hidden");
            }
           
        } catch (e) {
            console.error(e);
        }

    });
   /* $("#link").click(function(){
        try {
            openModal();
        } catch (e) {
            console.error(e);
        }

    });*/

});
