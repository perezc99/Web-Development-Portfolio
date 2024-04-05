$(document).ready(function(){
    $(".left-eye, .right-eye").on
        ("mouseenter", 
            function(){
                $eye = $(this);
                //$eye.removeClass("contact-cont");
                $eye.addClass("tmp-eye");
                $eye.html('<div class="hover-eye email"> <div class="eye-txt"> <p>bus.ces.per@gmail.com</p> </div> </div>');
            }
        );

    $(".left-eye, .left-eye *").on
        ("mouseleave", 
            function(){
                $eye = $(this);
                $eye.removeClass("tmp-eye");
                $eye.html('<img src="../svg files/svg contact/envelope.svg" alt="envelope symbol" class="imger-contact">')
            }
        );

    $(".right-eye").on
        ("mouseenter", 
            function(){
                $eye = $(this);
                //$eye.removeClass("contact-cont");
                $eye.addClass("tmp-eye");
                $eye.html('<div class="hover-eye phone"> <div class="eye-txt"> <p>323.365.4926</p> </div> </div>');
            }
        );

    $(".right-eye, .right-eye *").on
        ("mouseleave", 
            function(){
                $eye = $(this);
                $eye.removeClass("tmp-eye");
                $eye.html('<img src="../svg files/svg contact/telephone.svg" alt="telephone symbol" class="imger-contact">')
            }
        );

    $(".left-eye").click(function(){
        var copyText = "bus.ces.per@gmail.com";
        navigator.clipboard.writeText(copyText);
        alert("Copied text: " + copyText);

        // console.log(true);
        // if($("left-eye").hasClass("tmp-eye")) {
        //     console.log(true);
        // } else {
        //     console.log(false);
        // }
    });

    // $(".right-eye").hover
    //     (function(){
    //         $eye = $(this);
    //         //$eye.addClass("tmp-eye");
    //         $eye.html('<div class="hover-eye phone"> <img src="../svg files/svg contact/telephone.svg" alt="telephone symbol" class="imger-contact2"> <p>323-365-4926</p> </div>');
    //     }, function(){ 
    //         $eye = $(this);
    //         //$eye.removeClass("tmp-eye");
    //         $eye.html('<img src="../svg files/svg contact/telephone.svg" alt="telephone symbol" class="imger-contact">')
    //     }
    // );

    $(".right-eye").click(function(){
        var copyText = "323-365-4926";
        navigator.clipboard.writeText(copyText);
        alert("Copied text: " + copyText);
    });
});


$(document).ready(function() {

    function generatePoepidyHead (canvas, ctx) {
       // Head Outline 
       ctx.beginPath();
       ctx.moveTo(canvas.width * .25, canvas.height * 0);

       ctx.lineTo(canvas.width * .07, canvas.height * .20);
       ctx.lineTo(canvas.width * .10, canvas.height * .20);
       ctx.lineTo(canvas.width * .22, canvas.height * .30);
       ctx.lineTo(canvas.width * .24, canvas.height * .50);
       ctx.lineTo(canvas.width * .28, canvas.height * .70);
       ctx.lineTo(canvas.width * .40, canvas.height * .85);
       ctx.quadraticCurveTo(canvas.width * .5, canvas.height * 1, canvas.width * .6, canvas.height * .85);
       ctx.lineTo(canvas.width * .72, canvas.height * .70);
       ctx.lineTo(canvas.width * .76, canvas.height * .50);
       ctx.lineTo(canvas.width * .78, canvas.height * .30);
       ctx.lineTo(canvas.width * .90, canvas.height * .20);
       ctx.lineTo(canvas.width * .93, canvas.height * .2);
       ctx.lineTo(canvas.width * .75, canvas.height * 0);
       ctx.lineTo(canvas.width * .65, canvas.height * .12);
       ctx.quadraticCurveTo(canvas.width * .5, canvas.height * 0, canvas.width * .35, canvas.height * .12);
       ctx.lineTo(canvas.width * .25, canvas.height * 0);
    

       ctx.closePath();
       ctx.stroke();
       ctx.fillStyle = "rgba(0, 0, 0, 1)";
       ctx.fill();
    }

    function generatePoepidyHeadBTM (canvas, ctx) {
        // Head Bottom
        ctx.beginPath();
        ctx.moveTo(canvas.width * .24, canvas.height * .50);

        ctx.lineTo(canvas.width * .28, canvas.height * .70);
        ctx.lineTo(canvas.width * .40, canvas.height * .85);
        ctx.quadraticCurveTo(canvas.width * .5, canvas.height * 1, canvas.width * .6, canvas.height * .85);
        ctx.lineTo(canvas.width * .72, canvas.height * .70);
        ctx.lineTo(canvas.width * .76, canvas.height * .50);
        ctx.quadraticCurveTo(canvas.width * .635, canvas.height * .42, canvas.width * .5, canvas.height * .5);
        ctx.quadraticCurveTo(canvas.width * .375, canvas.height * .42, canvas.width * .24, canvas.height * .5);

        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = "tan";
        ctx.fill();
    }

    function generatePoepidyInnerEars (canvas, ctx) {
        // Left Ear
        ctx.beginPath();
        ctx.strokeStyle = "rgba(255, 150, 255, 1)";
        ctx.moveTo(canvas.width * .115, canvas.height * .20);
        
        ctx.lineTo(canvas.width * .225, canvas.height * .29);
        ctx.quadraticCurveTo(canvas.width * 0.24, canvas.height * .245, canvas.width * .28, canvas.height * .20);
        
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = "rgba(255, 150, 255, .5)";
        ctx.fill();

        // Right Ear
        ctx.beginPath();
        ctx.strokeStyle = "rgba(255, 150, 255, 1)";
        ctx.moveTo(canvas.width * .885, canvas.height * .20);
        
        ctx.lineTo(canvas.width * .775, canvas.height * .29);
        ctx.quadraticCurveTo(canvas.width * 0.76, canvas.height * .245, canvas.width * .72, canvas.height * .20);
        
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = "rgba(255, 150, 255, .5)";
        ctx.fill();
    }

    function generatePoepidyEyesBack (canvas, ctx) {
        // Eyes Background
        // Left Eye Back
        ctx.beginPath();
        ctx.strokeStyle = "rgba(255, 255, 255, 1)";

        ctx.ellipse(canvas.width * .39, canvas.height * .30, canvas.width * .045, canvas.width * .022, -(Math.PI)/10, 0, 2 * Math.PI);
        
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = "tan";
        ctx.fill();

        // Right Eye Back
        ctx.beginPath();
        ctx.strokeStyle = "rgba(255, 255, 255, 1)";
        
        ctx.ellipse(canvas.width * .61, canvas.height * .30, canvas.width * .045, canvas.width * .022, (Math.PI)/10, 0, 2 * Math.PI);
        
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = "tan";
        ctx.fill();
    }

    function generatePoepidyNose (canvas, ctx) {
        // Nose
        ctx.beginPath();
        ctx.strokeStyle = "rgba(255, 255, 255, 1)";

        ctx.ellipse(canvas.width * .50, canvas.height * .50, canvas.width * .06, canvas.width * .03, 0, 0, 2 * Math.PI);
        
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = "rgba(10, 10, 10, 1)";
        ctx.fill();

        // Left Nostril
        ctx.beginPath();
        ctx.strokeStyle = "rgba(255, 255, 255, 1)";

        ctx.ellipse(canvas.width * .47, canvas.height * .50, canvas.width * .016, canvas.width * .012, 0, 0, 2 * Math.PI);
        
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = "rgba(0, 0, 0, 1)";
        ctx.fill();

        // Right Nostril
        ctx.beginPath();
        ctx.strokeStyle = "rgba(255, 255, 255, 1)";

        ctx.ellipse(canvas.width * .53, canvas.height * .50, canvas.width * .016, canvas.width * .012, 0, 0, 2 * Math.PI);
        
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = "rgba(0, 0, 0, 1)";
        ctx.fill();
    }

    function generatePoepidyMouth (canvas, ctx) {
        // Mouth Background
        ctx.beginPath();
        ctx.moveTo(canvas.width * .30, canvas.height * .50);

        ctx.lineTo(canvas.width * .40, canvas.height * .55);
        ctx.quadraticCurveTo(canvas.width * .45, canvas.height * .6, canvas.width * .5, canvas.height * .52);
        ctx.quadraticCurveTo(canvas.width * .55, canvas.height * .6, canvas.width * .6, canvas.height * .55);
        ctx.lineTo(canvas.width * .70, canvas.height * .50);
        ctx.quadraticCurveTo(canvas.width * .5, canvas.height * 1.2, canvas.width * .30, canvas.height * .50);
        
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = "rgba(0, 0, 0, 1)";
        ctx.fill();

        // Top-Left Teeth 
        ctx.beginPath();
        ctx.moveTo(canvas.width * .42, canvas.height * .57);

        ctx.lineTo(canvas.width * .435, canvas.height * .61);
        ctx.lineTo(canvas.width * .45, canvas.height * .57);

        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = "rgba(255, 255, 255, 1)";
        ctx.fill();

        // Top-Right Teeth 
        ctx.beginPath();
        ctx.moveTo(canvas.width * .58, canvas.height * .57);

        ctx.lineTo(canvas.width * .565, canvas.height * .61);
        ctx.lineTo(canvas.width * .55, canvas.height * .57);

        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = "rgba(255, 255, 255, 1)";
        ctx.fill();
        
        // Bottom Teeth
        ctx.beginPath();
        ctx.moveTo(canvas.width * .5, canvas.height * .77);

        ctx.lineTo(canvas.width * .435, canvas.height * .77);
        ctx.lineTo(canvas.width * .42, canvas.height * .70);
        ctx.lineTo(canvas.width * .405, canvas.height * .77);
        ctx.quadraticCurveTo(canvas.width * .5, canvas.height * .925, canvas.width * .595, canvas.height * .77);
        ctx.lineTo(canvas.width * .58, canvas.height * .70);
        ctx.lineTo(canvas.width * .5675, canvas.height * .77);
 
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = "rgba(255, 255, 255, 1)";
        ctx.fill();

        // Tongue 
        ctx.beginPath();
        ctx.strokeStyle = "rgba(255, 159, 255, 1)";
        ctx.moveTo(canvas.width * .5, canvas.height * .70);

        ctx.quadraticCurveTo(canvas.width * .4625, canvas.height * .65, canvas.width * .425, canvas.height * .70);
        ctx.lineTo(canvas.width * .47, canvas.height * .90);
        ctx.quadraticCurveTo(canvas.width * .5, canvas.height * 1, canvas.width * .53, canvas.height * .90);
        ctx.lineTo(canvas.width * .5775, canvas.height * .70);
        ctx.quadraticCurveTo(canvas.width * .5375, canvas.height * .65, canvas.width * .5, canvas.height * .70);
        
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = "rgba(255, 150, 255, 1)";
        ctx.fill();
    }


    $(function() {
        const canvas = document.getElementById("poepidy-drawing");
        const ctx = canvas.getContext("2d");

        ctx.strokeStyle = "rgba(255, 255, 255, 1)";
        
        generatePoepidyHead(canvas, ctx);
        generatePoepidyHeadBTM(canvas, ctx);
        generatePoepidyInnerEars(canvas, ctx);
        generatePoepidyEyesBack(canvas, ctx);
        generatePoepidyNose(canvas, ctx);
        generatePoepidyMouth(canvas, ctx)        
    });
        
}
);