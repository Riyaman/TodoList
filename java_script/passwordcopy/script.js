// script.js

document.getElementById('generate-button').addEventListener('click', function() {
    const password1 = generatePassword();
    const password2 = generatePassword();
    document.getElementById('password1').innerText = `Generate text: ${password1}`;
    document.getElementById('password2').innerText = `Generate text: ${password2}`;
});

document.getElementById('copy-button1').addEventListener('click', function() {
    copyToClipboard(document.getElementById('password1').innerText.split(': ')[1]);
});

document.getElementById('copy-button2').addEventListener('click', function() {
    copyToClipboard(document.getElementById('password2').innerText.split(': ')[1]);
});

function generatePassword() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    const passwordLength = 12;
    let password = '';
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

function copyToClipboard(text) {
    // Create a temporary textarea element
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = text;
    document.body.appendChild(tempTextArea);
    
    // Select the text in the textarea
    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999); // For mobile devices
    
    // Copy the text to the clipboard
    document.execCommand('copy');
    
    // Remove the temporary textarea
    document.body.removeChild(tempTextArea);
    
    // Optionally, you can add a message to inform the user
    alert('Text copied to clipboard');
}
