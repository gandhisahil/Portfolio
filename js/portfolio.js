
function SendLinkByMail() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var body = document.getElementById("body");

    var subject= "Message from portfolio website";
    var body = "From: " + encodeURIComponent(name);
    body += " \n Email: " + encodeURIComponent(email);
    body += " \n\n " + encodeURIComponent(body);
    var uri = "mailto:sahilgandhi94@gmail.com?subject=";
    uri += encodeURIComponent(subject);
    uri += "&body=";
    uri += encodeURIComponent(body);
    window.open(uri);
}
	
