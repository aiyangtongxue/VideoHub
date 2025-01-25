function parseVideo() {
    const videoUrl = document.getElementById('videoUrl').value.trim();
    const playerContainer = document.getElementById('playerContainer');
    const player = document.getElementById('player');
    
    if (!videoUrl) {
        alert('请输入视频链接！');
        return;
    }
    
    // 设置解析接口
    const parseUrl = `https://jx.xmflv.cc/?url=${encodeURIComponent(videoUrl)}`;
    player.src = parseUrl;
    
    // 显示播放器
    playerContainer.style.display = 'block';
}

// 支持回车键触发解析
document.getElementById('videoUrl').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        parseVideo();
    }
}); 