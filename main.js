function loadDoc(){
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET',"/Celebrate.txt",false);
    xhttp.send();
    document.getElementById('celebration-content').style.display = 'block';   
    document.getElementById('celebration-content').innerHTML = xhttp.responseText;
}

