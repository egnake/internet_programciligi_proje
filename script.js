function typeWriter(text, elementId, speed) {
    let i = 0;
    let target = document.getElementById(elementId);
    if (!target) return;
    
    target.innerHTML = "";
    function type() {
        if (i < text.length) {
            target.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Sayfa Yüklendiğinde Çalışacaklar
document.addEventListener("DOMContentLoaded", function() {
    if(document.getElementById("typing-text")) {
        typeWriter("Görünmez Ol. Güvende Kal. GhostChat.", "typing-text", 100);
    }
});

function formKontrol(event) {
    event.preventDefault(); 
    alert("Mesajınız başarıyla gönderildi! Teşekkürler.");
}