console.log("Current path:", window.location.pathname);
if (window.location.pathname === '/ORDRP' || window.location.pathname === '/ORDRP/') {
    console.log("Redirecting to /projects/ORDRP/");
    window.location.href = '/projects/ORDRP/';
} else {
    console.log("No redirection triggered.");
}

