// JavaScript to handle modal functionality
let modal = document.getElementById("imageModal");
let modalImg = document.getElementById("modalImage");
let captionText = document.getElementById("caption");

// เปิด modal เมื่อคลิกที่ภาพ
document.querySelectorAll(".thumbnail").forEach(item => {
    item.addEventListener("click", function(event) {
        modal.style.display = "block";
        modalImg.src = event.target.src;  // กำหนด src ของภาพใน modal
        captionText.innerHTML = event.target.alt;  // แสดง alt text (optional)
    });
});

// ฟังก์ชันปิด modal
function closeModal() {
    modal.style.display = "none";
}

// ปิด modal ถ้าคลิกที่พื้นที่นอก modal
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
