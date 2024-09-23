window.addEventListener('load', () => {
    Swal.fire({
        title: 'EITSS TUNGGU DULU SABAI PILIH DLU',
        icon: 'heart',
        showCancelButton: true,
        confirmButtonColor: '#d469c4',
        cancelButtonColor: '#1bbed7',
        confirmButtonText: 'LANJUT',
        cancelButtonText: 'ENGGA',
    }).then((result) => {
        if (result.isConfirmed) {
            document.querySelector('.song').play();
            animationTimeline();
        } else {
            animationTimeline();
        }
    });
});
// Ensure GSAP and TextPlugin are loaded
gsap.registerPlugin(TextPlugin);

document.addEventListener("DOMContentLoaded", () => {
    function fadeInElements() {
        gsap.to(".box, .text", {
            opacity: 1,
            duration: 1,
            stagger: 0.3 // Stagger the animations for each element
        });

        // Optional: Add text animation here if needed
        gsap.fromTo(".text-top-right",
            { text: "" },
            { text: " Hii Sabaiii mungkin ini alay, cringe, dan aneh sih, tapi i don't care. Terima kasihh yaa!!, yaa seperti yang aku bilang tadi thanks for coming and thanks for save me hehehehe", duration: 5, ease: "none" }
        );
        gsap.fromTo(".text-bottom-left",
            { text: "" },
            { text: "Semoga kita bareng teruss yaa sabaii, ohh iyaa jika kamu butuh orang buat cerita, cerita ajaa yaa sabaii walaupun aku ga bisa nemenin kamu di real life sih, tapi aku aku bakal ada terus kok buat dengerin semua keluh kesah kamu, cerita senang dari kamu, bahkan bahkan jika kamu lagi sedih atau ada masalah libatkan aku, ga adil rasanya kita seneng bareng tapi ketika kamu sedih ataupun ada masalah kamu sendirian. Tell me whenever thigs get wrong in your life, i might couldn't fix it but we could find the way to fix it", duration: 8, ease: "none", delay: 5 }
        );
        gsap.fromTo(".text-bottom",
            { text: "" },
            { text: "SEKALI LAGI TERIMA KASIH YA SABAI", duration: 4, ease: "none", delay: 13 }
        );
    }

    // Add click event listener to the body
    document.body.addEventListener("click", () => {
        // Apply fade-in animation to all .box and .text elements
        fadeInElements();
        
        // Remove the click event listener to prevent repeated animations
        document.body.removeEventListener("click", arguments.callee);
    });
});

