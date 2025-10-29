   
        document.addEventListener('DOMContentLoaded', function() {
            const card = document.getElementById('teacherCard');
            let isFlipped = false;

            card.addEventListener('click', function() {
                isFlipped = !isFlipped;
                if (isFlipped) {
                    card.classList.add('flipped');
                } else {
                    card.classList.remove('flipped');
                }
            });

            
            card.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {

e.preventDefault();
                    isFlipped = !isFlipped;
                    if (isFlipped) {
                        card.classList.add('flipped');
                    } else {
                        card.classList.remove('flipped');
                    }
                }
            });

            card.setAttribute('tabindex', '0');
            card.setAttribute('role', 'button');
            card.setAttribute('aria-label', 'Click to flip the Teacher\'s Day card');
        });
    
{function c(){var b=a.contentDocument||a.contentWindow.document};if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9949d0b201f2db23',t:'MTc2MTQ4MDI1Ni4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}} if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}};
