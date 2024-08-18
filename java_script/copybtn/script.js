// script.js

document.getElementById('copy-button').addEventListener('click', function() {
    const textToCopy = document.getElementById('text-to-copy').innerText;
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');
    document.body.removeChild(tempTextArea); 
    // Optionally, you can add a message to inform the user
    alert('Text copied to clipboard');
});
