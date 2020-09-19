const timeline = gsap.timeline({ defaults: { ease: "power1.out" } });

timeline.to(".hide span", { y: 0, duration: 1, stagger: 0.25 });
timeline.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
timeline.to(".intro", { y: "-100%", duration: 1 }, "-=1");
timeline.fromTo("main nav", { opacity: 0 }, { opacity: 1, duration: 1 });
timeline.fromTo("main h1", { opacity: 0 }, { opacity: 1, duration: 1 }, "<");
