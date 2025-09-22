/*
	Solid State by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

    var $window = $(window),
        $body = $('body'),
        $header = $('#header'),
        $banner = $('#banner');

    // Breakpoints.
    breakpoints({
        xlarge: '(max-width: 1680px)',
        large: '(max-width: 1280px)',
        medium: '(max-width: 980px)',
        small: '(max-width: 736px)',
        xsmall: '(max-width: 480px)'
    });

    // Play initial animations on page load.
    $window.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-preload');
        }, 100);
    });

    // Header.
    if ($banner.length > 0 &&
        $header.hasClass('alt')) {

        $window.on('resize', function() { $window.trigger('scroll'); });

        $banner.scrollex({
            bottom: $header.outerHeight(),
            terminate: function() { $header.removeClass('alt'); },
            enter: function() { $header.addClass('alt'); },
            leave: function() { $header.removeClass('alt'); }
        });

    }

    // Menu.
    var $menu = $('#menu');

    $menu._locked = false;

    $menu._lock = function() {

        if ($menu._locked)
            return false;

        $menu._locked = true;

        window.setTimeout(function() {
            $menu._locked = false;
        }, 350);

        return true;

    };

    $menu._show = function() {

        if ($menu._lock())
            $body.addClass('is-menu-visible');

    };

    $menu._hide = function() {

        if ($menu._lock())
            $body.removeClass('is-menu-visible');

    };

    $menu._toggle = function() {

        if ($menu._lock())
            $body.toggleClass('is-menu-visible');

    };

    $menu
        .appendTo($body)
        .on('click', function(event) {

            event.stopPropagation();

            // Hide.
            $menu._hide();

        })
        .find('.inner')
        .on('click', '.close', function(event) {

            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();

            // Hide.
            $menu._hide();

        })
        .on('click', function(event) {
            event.stopPropagation();
        })
        .on('click', 'a', function(event) {

            var href = $(this).attr('href');

            event.preventDefault();
            event.stopPropagation();

            // Hide.
            $menu._hide();

            // Redirect.
            window.setTimeout(function() {
                window.location.href = href;
            }, 350);

        });

    $body
        .on('click', 'a[href="#menu"]', function(event) {

            event.stopPropagation();
            event.preventDefault();

            // Toggle.
            $menu._toggle();

        })
        .on('keydown', function(event) {

            // Hide on escape.
            if (event.keyCode == 27)
                $menu._hide();

        });

})(jQuery);


const wrapper = document.getElementById("wrapper");

// Function for Section One
function addCardOne(title, desc, img, BtnLink) {
    wrapper.innerHTML += `
    <section class="wrapper spotlight style1">
      <div class="inner">
        <a href="#" class="image"><img src="${img}" alt="" /></a>
        <div class="content">
          <h2 class="major">${title}</h2>
          <p>${desc}</p>
          <a href="#" class="special">${BtnLink}</a>
        </div>
      </div>
    </section>
  `;
}

// Function for Section Two
function addCardTwo(title, desc, img, BtnLink) {
    wrapper.innerHTML += `
    <section class="wrapper alt spotlight style2">
      <div class="inner">
        <a href="#" class="image"><img src="${img}" alt="" /></a>
        <div class="content">
          <h2 class="major">${title}</h2>
          <p>${desc}</p>
          <a href="#" class="special">${BtnLink}</a>
        </div>
      </div>
    </section>
  `;
}

// Function for Section Three
function addCardThree(title, desc, img, BtnLink) {
    wrapper.innerHTML += `
    <section class="wrapper spotlight style3">
      <div class="inner">
        <a href="#" class="image"><img src="${img}" alt="" /></a>
        <div class="content">
          <h2 class="major">${title}</h2>
          <p>${desc}</p>
          <a href="#" class="special">${BtnLink}</a>
        </div>
      </div>
    </section>
  `;
}

// Function for Section Four
function addCardFour(title, desc, img, BtnLink) {
    wrapper.innerHTML += `
    <section class="wrapper alt style1">
      <div class="inner">
        <h2 class="major">${title}</h2>
        <p>${desc}</p>
        <section class="features">
          <article>
            <a href="#" class="image"><img src="${img}" alt="" /></a>
            <h3 class="major">${title}</h3>
            <p>${desc}</p>
            <a href="#" class="special">${BtnLink}</a>
          </article>
        </section>
        <ul class="actions">
          <li><a href="#" class="button">Browse All</a></li>
        </ul>
      </div>
    </section>
  `;
}

// Example Calls
addCardOne("Muneeb arcu feugiat", "Lorem ipsum dolor sit amet ", "https://shrturl.app/pkhKHV", "Visit Now");
addCardTwo("Tempus adipiscing", "Cras turpis ante, nullam sit amet turpis...", "images/pic02.jpg");
addCardThree("Nullam dignissim", "Mauris id tellus arcu. Nunc vehicula id nulla...", "images/pic03.jpg");
addCardFour("Vitae phasellus", "Cras mattis ante fermentum, malesuada neque vitae...", "images/pic04.jpg");
addCardFour("Vitae phasellus", "Cras mattis ante fermentum, malesuada neque vitae...", "images/pic04.jpg");