const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {

    // store triggered event
    window.deferredPrompt = event;

    // remove hidden class from button
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {

    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
     return;
    }

    // Show prompt
    promptEvent.prompt();   

    // resets prompt variable
    window.deferredPrompt = null;
  
    butInstall.classList.toggle('hidden', true);
});


});


// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {});
