(function () {
  var nav = document.getElementById("site-nav");
  var toggle = document.querySelector(".nav-toggle");
  var year = document.getElementById("year");
  var links = nav ? nav.querySelectorAll("a") : [];
  var sections = document.querySelectorAll("main section[id]");

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  function setMenu(open) {
    if (!nav || !toggle) {
      return;
    }
    if (open) {
      nav.className = "nav is-open";
      document.body.className = (document.body.className + " nav-open").replace(/^\s+/, "");
    } else {
      nav.className = "nav";
      document.body.className = document.body.className.replace(/\bnav-open\b/g, "").replace(/\s+/g, " ");
    }
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  function isMenuOpen() {
    return nav && (" " + nav.className + " ").indexOf(" is-open ") > -1;
  }

  if (toggle) {
    toggle.onclick = function () {
      setMenu(!isMenuOpen());
    };
  }

  for (var i = 0; i < links.length; i++) {
    links[i].onclick = function () {
      setMenu(false);
    };
  }

  document.onkeydown = function (event) {
    var key = event || window.event;
    if ((key.key === "Escape" || key.keyCode === 27) && isMenuOpen()) {
      setMenu(false);
    }
  };

  window.onresize = function () {
    if (window.innerWidth >= 900) {
      setMenu(false);
    }
  };

  function setActiveLink() {
    var current = "";
    var offset = 90;
    var y = window.pageYOffset || document.documentElement.scrollTop || 0;

    for (var s = 0; s < sections.length; s++) {
      if (y >= sections[s].offsetTop - offset) {
        current = sections[s].id;
      }
    }

    for (var l = 0; l < links.length; l++) {
      var href = links[l].getAttribute("href") || "";
      if (href === "#" + current) {
        links[l].className = "is-active";
      } else {
        links[l].className = "";
      }
    }
  }

  if (window.addEventListener) {
    window.addEventListener("scroll", setActiveLink, false);
  } else if (window.attachEvent) {
    window.attachEvent("onscroll", setActiveLink);
  }

  setActiveLink();
})();
