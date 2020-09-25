var i = 0;
        var images = [];
        var time = 2000;

        images[0] = 'img/slide4.jpeg';
        images[1] = 'img/slide34.jpeg';
        images[2] = 'img/child9.jpeg';
        images[3] = 'img/fshoe56.jpeg';
        images[4] = 'img/fshoe60.jpeg';
        images[5] = 'img/fshoe68.jpeg';
        images[6] = 'img/fshoe71.jpeg';
        images[7] = 'img/fshoe70.jpeg';
        images[8] = 'img/mshoe26.jpeg';
        images[5] = 'img/mshoe24.jpeg';

        function changeImg() {
            document.slide.src = images[i];

            if(i < images.length - 1) {
                i++
            } else {
                i = 0;
            }

            setTimeout("changeImg()", time);
        }

        window.onload = changeImg;

        var loadFile = function(event) {
            var image = document.getElementById('output');
            image.src = URL.createObjectURL(event.target.files[0]);
        };


        function validate() {
            var form = document.forms["myForm"].value;
            var name = document.getElementById("name").value;
            var num = document.getElementById("num").value;
            var email = document.getElementById("email").value;
            var mess = document.getElementById("mess").value;


            if (name == Number) {
                alert('Your name can\'t be a number');
                return false;
              } else if (name !== Number) {
                alert("Congratulations!" + " " + name + ". " + " Your message has been sent successfully."+ " " + "We'll send an email to you within 24 hours at:" + " " + email + "." + " " + "Thanks for reaching out to us!")
                alert("Incase you dont get an email, please do well to send us a message on whatsaap at 07015741887. \n Thanks for reaching out to us!")
            }
        }

        