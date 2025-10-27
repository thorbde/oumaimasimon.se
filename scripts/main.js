// document.addEventListener("DOMContentLoaded", () => {
//   // Wait for GSAP plugins to be registered
//   setTimeout(() => {
//     const heroTitle = document.querySelector("#hero h1");
//     const heroDate = document.querySelector("#hero .date");
//     const heroButton = document.querySelector("#hero .rsvpButton");

//     // Split text into individual characters
//     const split = new SplitText(heroTitle, { type: "chars" });

//     // Set initial state - letters invisible and below their final position
//     gsap.set(split.chars, {
//       opacity: 0,
//       y: 20,
//     });

//     // Set initial state for date and button
//     gsap.set([heroDate, heroButton], {
//       opacity: 0,
//       y: 10,
//     });

//     // Create a timeline for the sequence
//     const timeline = gsap.timeline();

//     // Animate each letter from bottom to top, one at a time
//     timeline.to(split.chars, {
//       opacity: 1,
//       y: 0,
//       duration: 0.5,
//       stagger: 0.08, // Delay between each letter
//       ease: "power2.out",
//     });

//     // Animate date and button after the title completes
//     timeline.to(
//       heroDate,
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.6,
//         ease: "power2.out",
//       },
//       "+=0.2"
//     );

//     timeline.to(
//       heroButton,
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.6,
//         ease: "power2.out",
//       },
//       "-=0.4" // Start while date is still animating
//     );

//     // Create a scroll-controlled timeline for hero fade out
//     // This starts only after the entrance animations complete
//     timeline.add(() => {
//       const scrollTimeline = gsap.timeline({
//         scrollTrigger: {
//           trigger: "#hero",
//           start: "top top",
//           end: "+=100%", // Scroll distance to complete the fade
//           scrub: 1, // Smooth scrubbing, takes 1 second to catch up
//           pin: true, // Pin the hero section while animating
//           anticipatePin: 1,
//         },
//       });

//       // Add fade out animation to scroll timeline
//       // Use fromTo to explicitly define start and end states
//       scrollTimeline.fromTo(
//         "#hero h1, #hero .date, #hero .rsvpButton",
//         {
//           opacity: 1,
//         },
//         {
//           opacity: 0,
//           duration: 1,
//           ease: "power2.inOut",
//         }
//       );
//     });
//   }, 100);
// });
