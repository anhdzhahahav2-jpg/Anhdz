const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
let gameActive = false;

function checkAdmin() {
    const code = document.getElementById('adminCode').value.trim().toLowerCase();
    const msg = document.getElementById('msg');
    
    if (code === 'anhdzvcl_god') {
        msg.style.color = "#4caf50";
        msg.innerText = "⭐ Đã kích hoạt Bất Tử!";
    } else if (code === 'anhdzvcl_money') {
        msg.style.color = "#4caf50";
        msg.innerText = "💰 Đã nhận 999 điểm Vinh Dự!";
    } else {
        msg.style.color = "#f44336";
        msg.innerText = "❌ Mã không đúng!";
    }
}

function startGame() {
    document.getElementById('overlay').style.display = 'none';
    gameActive = true;
    animate();
}

function animate() {
    if (!gameActive) return;
    ctx.fillStyle = "#0a0a0c";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Vẽ nhân vật đơn giản (Demo)
    ctx.fillStyle = "white";
    ctx.fillRect(100, 300, 50, 100); 
    
    requestAnimationFrame(animate);
}
