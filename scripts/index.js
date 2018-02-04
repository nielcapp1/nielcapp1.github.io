(function () {
       // switch to stereoscopic mode directly on page load, this needs to be after the a-scene loads.
       var scene = document.querySelector('a-scene');
       if (scene.hasLoaded) {
           scene.enterVR();
       } else {
           scene.addEventListener('loaded', function () {
               setTimeout(function () {
                   scene.enterVR();
               }, 1000);
           });
       };
   })();