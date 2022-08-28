const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning Rameshwar");
    }

    else if(hr == 12) {
        speak("Good noon Rameshwar");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon Rameshwar");
    }

    else {
        speak("Good Evening Rameshwar");
    }
}

window.addEventListener('load', ()=>{
    speak("Activating nobeetaa");
    speak("Going online");
    wishMe();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    if(message.includes('hey') || message.includes('hello')) {
        const finalText = "Hello Rameshwar tell me how can i help you";
        speech.text = finalText;
    }

    else if(message.includes('how are you')) {
        const finalText = "I am fine Rameshwar tell me how can i help you";
        speech.text = finalText;
    }


    else if(message.includes('tumhara naam')) {
        const finalText = "mera naam nobeetaa haai  rameshwar";
        speech.text = finalText;
    }


    else if(message.includes('i love you nobita')) {
        const finalText = "i love you too rameshwar but i don't love with you becouse i'm your virtual assistant";
        speech.text = finalText;
    }


    else if(message.includes('nobita do you like me')) {
        const finalText = "yes i realy like you";
        speech.text = finalText;
    }

    else if(message.includes('i miss you nobita')) {
        const finalText = "i miss you too rameshwar";
        speech.text = finalText;
    }

    else if(message.includes('name')) {
        const finalText = "My name is nobeetaa";
        speech.text = finalText;
    }


    else if(message.includes('tor naam')) {
        const finalText = "Mor naam nobeetaa haave rameshwar";
        speech.text = finalText;
    }




    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }

    else if(message.includes('open youtube')) {
        window.open("https://www.youtube.com/c/rinku%20sahu%20cs%20engineer", "_blank");
        const finalText = "Opening  youtube";
        speech.text = finalText;
    }

    else if(message.includes('open instagram')) {
        window.open("https://www.instagram.com/er_rameshwar07/", "_blank");
        const finalText = "Opening instagram";
        speech.text = finalText;
    }

    else if(message.includes('open github')) {
        window.open("https://github.com/rameshwarsahu07", "_blank");
        const finalText = "Opening github";
        speech.text = finalText;
    }


    else if(message.includes('open facebook')) {
        window.open("https://www.facebook.com/rameshwarsahu07", "_blank");
        const finalText = "Opening facebook";
        speech.text = finalText;
    }


    else if(message.includes('open pinterest')) {
        window.open("https://in.pinterest.com/rameshwarsahu007/", "_blank");
        const finalText = "Opening pinterest";
        speech.text = finalText;
    }

    else if(message.includes('open my website')) {
        window.open("https://rameshwar07.blogspot.com/", "_blank");
        const finalText = "Opening your website";
        speech.text = finalText;
    }


    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        //window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "Abe bolna kya chahta hai mere bhai " + message;
        speech.text = finalText;
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('nobita time kya hua hai')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('nobita aaj ka date kya hai')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}