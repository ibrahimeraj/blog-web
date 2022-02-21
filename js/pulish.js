  function sendMail() {
    var link = 'mailto:aliaaquib17@yahoo.com.com?subject=Message from '
             +document.getElementById('blog').value
             +'&body='+document.getElementById('blog').value;
    window.location.href = 'logblog.html';
}