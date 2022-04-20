let btn = document.getElementById('button');

btn.addEventListener('click', function(){
    let contentCelebration  = document.getElementById('celebration-content');
    contentCelebration.style.display = 'block';
    contentCelebration.innerHTML = `
    <h4 class="celebration-title">
    Tuổi mới chúc Nguyên luôn :
</h4>
<ul class="celebration">
    <li style="background-color:aqua">Luôn nhiều sức khỏe &#129311;&#129311;</li>
    <li style="background-color:rgba(255, 90, 0, 0.8)">Luôn vui vẻ, hạnh phúc với mọi người &#128150;&#128150;</li>
    <li style="background-color:rgba(255, 90, 88, 0.8)">Ngày càng học giỏi &#128218;&#128218;</li>
    <li style="background-color:rgba(102, 189, 28, 0.8)">Tương lai sẽ kiếm công việc lương nghìn đô &#128176;&#128176;</li>
    <li style="background-color:rgba(220, 90, 212, 0.8)">Luôn gặp nhiều may mắn &#129310;&#129310;</li>
    <li style="background-color:rgba(220, 90, 95, 0.8)">Luôn giữ vững niềm tin vượt qua khó khăn trong cuộc sống &#128526;&#128526</li>
</ul>`;

})