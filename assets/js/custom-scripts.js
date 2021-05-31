!(function(e) {
    setTimeout(() => {
            e("#myTost").addClass("show");
        }, 1e4),
        e(".toast__close").click(function() {
            e("#myTost").removeClass("show");
        }),
        e(".owl-carousel").owlCarousel({
            loop: !0,
            margin: 10,
            nav: !0,
            navText: [
                "<i class='fa fa-caret-left'></i>",
                "<i class='fa fa-caret-right'></i>",
            ],
            autoplay: !0,
            autoplayHoverPause: !0,
            responsive: { 0: { items: 1 }, 600: { items: 3 }, 1e3: { items: 3 } },
        });
    var t = document.querySelector(".prgoress_indicator path"),
        o = t.getTotalLength();
    (t.style.transition = t.style.WebkitTransition = "none"),
    (t.style.strokeDasharray = o + " " + o),
    (t.style.strokeDashoffset = o),
    t.getBoundingClientRect(),
        (t.style.transition = t.style.WebkitTransition =
            "stroke-dashoffset 10ms linear");
    var i = function() {
        var i = e(window).scrollTop(),
            s = e(document).height() - e(window).height(),
            n = o - (i * o) / s;
        t.style.strokeDashoffset = n;
    };
    i(), e(window).on("scroll", i);
    jQuery(window).on("scroll", function() {
            jQuery(this).scrollTop() > 250 ?
                jQuery(".prgoress_indicator").addClass("active-progress") :
                jQuery(".prgoress_indicator").removeClass("active-progress");
        }),
        jQuery(".prgoress_indicator").on("click", function(e) {
            return (
                e.preventDefault(),
                jQuery("html, body").animate({ scrollTop: 0 }, 550), !1
            );
        }),
        e(document).ready(function() {
            e(".pdf").click(function() {
                return (
                    e.fancybox({
                        width: "70%",
                        height: "90%",
                        autoDimensions: !1,
                        content: '<embed src="' +
                            this.href +
                            '#nameddest=self&page=1&view=FitH,0&zoom=80,0,0" type="application/pdf" height="99%" width="100%" />',
                        onClosed: function() {
                            e("#fancybox-inner").empty();
                        },
                    }), !1
                );
            });
        }),
        e(".tbtn").click(function() {
            e("html,body").animate({ scrollTop: e("#experience").offset().top },
                "slow"
            );
        }),
        e(".tbtn2").click(function() {
            e("html,body").animate({ scrollTop: e("#portfolio").offset().top },
                "slow"
            );
        }),
        e(".tbtn3").click(function() {
            e("html,body").animate({ scrollTop: e("#certifications").offset().top },
                "slow"
            );
        }),
        jQuery(document).ready(function(e) {
            e(".popup-trigger").on("click", function(t) {
                    t.preventDefault(), e(".popup").addClass("is-visible");
                }),
                e(".popup-triggers").on("click", function(t) {
                    t.preventDefault(), e(".popup2").addClass("is-visible");
                }),
                e(".popup").on("click", function(t) {
                    (e(t.target).is(".popup-close") || e(t.target).is(".popup")) &&
                    (t.preventDefault(), e(this).removeClass("is-visible"));
                }),
                e(document).keyup(function(t) {
                    "27" == t.which && e(".popup").removeClass("is-visible");
                });
        }),
        (e.fn.andSelf = function() {
            return this.addBack.apply(this, arguments);
        }),
        e(window).on("load", function() {
            e(".section-loader").fadeOut("slow");
            var t = e(".portfolioContainer");
            t.isotope({ filter: "*", animationOptions: { queue: !0 } }),
                e(".portfolio-nav li").click(function() {
                    e(".portfolio-nav .current").removeClass("current"),
                        e(this).addClass("current");
                    var o = e(this).attr("data-filter");
                    return t.isotope({ filter: o, animationOptions: { queue: !0 } }), !1;
                });
        });
    e(".navbar-toggler");
    var s = e(".overlay"),
        n = e(".navbar-collapse");

    function a() {
        swal(
            "😔 Oops!. Did you fill in all the information correctly?",
            " * Your name is required \n * Your Email is required \n * Your message is required",
            "error"
        );
    }
    e(".navbar-toggler, .navbar-nav li a, .overlay").on("click", function() {
            e(".navbar-toggler").toggleClass("active"),
                s.toggleClass("active"),
                n.toggleClass("active");
        }),
        e("#mh-header").onePageNav({
            currentClass: "active",
            changeHash: !1,
            scrollSpeed: 500,
            scrollThreshold: 0.5,
        }),
        e("[data-fancybox]").fancybox({}),
        new WOW({ mobile: !1 }).init(),
        e(window).on("scroll", function() {
            e(window).scrollTop() >= 50 ?
                e(".nav-scroll").addClass("nav-strict") :
                e(".nav-scroll").removeClass("nav-strict");
        }),
        e(".determinate").each(function() {
            var t = e(this).text();
            e(this).css("width", t).empty().append('<i class="fa fa-circle"></i>');
        }),
        e(function() {
            e(".nav-link-footer").click(function() {
                if (
                    location.pathname.replace(/^\//, "") ==
                    this.pathname.replace(/^\//, "") &&
                    location.hostname == this.hostname
                ) {
                    var t = e(this.hash);
                    if (
                        (t = t.length ? t : e("[name=" + this.hash.slice(1) + "]")).length
                    )
                        return (
                            e("html,body").animate({ scrollTop: t.offset().top }, 800), !1
                        );
                }
            });
        }),
        e("#contactForm")
        .validator()
        .on("submit", function(t) {
            var o, i, s;
            t.isDefaultPrevented() ?
                a() :
                (t.preventDefault(),
                    (o = e("#name").val()),
                    (i = e("#email").val()),
                    (s = e("#message").val()),
                    e.ajax({
                        type: "POST",
                        url: "php/form-process.php",
                        data: "name=" + o + "&email=" + i + "&message=" + s,
                        success: function(t) {
                            "success" == t
                                ?
                                (swal(
                                        "Message submitted",
                                        "Hooray. I will contact you as soon as possible",
                                        "success"
                                    ),
                                    e(":input").val(""),
                                    e("textarea").val(""),
                                    e("#mail__contact").modal("hide")) :
                                (a(), document.getElementById("#contactForm").reset());
                        },
                    }));
        }),
        jQuery(document).ready(function(e) {
            e(".popupt-trigger").on("click", function(t) {
                    t.preventDefault(), e(".popupt").addClass("is-visible");
                }),
                e(".popupt").on("click", function(t) {
                    (e(t.target).is(".popupt-close") || e(t.target).is(".popupt")) &&
                    (t.preventDefault(), e(this).removeClass("is-visible"));
                }),
                e(document).keyup(function(t) {
                    "27" == t.which && e(".popupt").removeClass("is-visible");
                });
        }),
        jQuery(document).ready(function(e) {
            e(".popups-trigger").on("click", function(t) {
                    t.preventDefault(), e(".popups").addClass("is-visible");
                }),
                e(".popups").on("click", function(t) {
                    (e(t.target).is(".popups-close") || e(t.target).is(".popups")) &&
                    (t.preventDefault(), e(this).removeClass("is-visible"));
                }),
                e(document).keyup(function(t) {
                    "27" == t.which && e(".popups").removeClass("is-visible");
                });
        }),
        e(function() {
            e(".video").fancybox({ width: 640, height: 400, type: "iframe" });
        });
})(jQuery);