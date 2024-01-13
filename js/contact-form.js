
document.querySelector('#sendMessage').addEventListener('click', postdata)

function postdata(e) {
    var message = document.querySelector("textarea").value;
    var name = document.querySelector("input[type=text]").value;
    var mail = document.querySelector("input[type=email]").value;

    const data = {
        mail: mail,
        name: name,
        message: message,
    }

    const checkMessage = validateString(data.message)
    const checkName = validateString(data.name)
    const checkMail = validateEmail(data.mail)
    
    if(checkName && checkMail && checkMessage){
        alert('Message sent')
        sendData(data)
    } else if (checkName && !checkMail && checkMessage) {
        alert('Please provide a valid email.')
    } else {
        alert('Please fill out all the fields')
    }
   e.preventDefault();
}

function validateString(string) {
    return string.length >= 1
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function sendData(data) {
  


    const postData = JSON.stringify(data);
    fetch("https://formspree.io/f/xeqveydl", {
            method: "post",
            body: postData,
        })
        .then((res) => res.json())
        .then((handleData));
    
        document.forms['simple-contact-form'].reset()

   
}

function handleData () {
    return false
}