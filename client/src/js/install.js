const butInstall = document.getElementById('buttonInstall');

let deferredPrompt;  // To hold the event payload

window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();  // Prevent the mini-infobar from appearing on mobile
    deferredPrompt = event;  // Save the event so it can be triggered later.
    butInstall.style.visibility = 'visible';  // Update the button to be visible
});

butInstall.addEventListener('click', async () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();  // Trigger the installation prompt
        const { outcome } = await deferredPrompt.userChoice;  // Wait for the user to respond to the prompt
        if (outcome === 'accepted') {
            console.log('User accepted the A2HS prompt');
        } else {
            console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;  // We only want to prompt once, so set this back to null
        butInstall.setAttribute('disabled', true);
        butInstall.textContent = 'Installed!';
    }
});

window.addEventListener('appinstalled', (event) => {
    console.log('App successfully installed', event);
    // Optionally hide the install button or provide other feedback
});
