gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

        // Inicializando ScrollSmoother
        const scrollerSmoother = ScrollSmoother.create({
            content: '#content',
            wrapper: '#wrapper',
            smooth: 1,
            normalizeScroll: true,
            effects: true
        });

        // Animación para los elementos accordion
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.accordions',
                pin: true,
                start: 'top top',
                end: 'bottom top',
                scrub: 1
            }
        });

        tl.to('.accordion .text', {
            height: 0,
            paddingBottom: 0,
            opacity: 0,
            stagger: 0.5
        }).to('.accordion', {
            marginBottom: -15,
            stagger: 0.5
        }, '<');