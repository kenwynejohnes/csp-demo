// Attempt to change the parent page's background color
try {
    parent.document.body.style.backgroundColor = "red";
    console.log("Successfully changed the parent page's background color.");
} catch (error) {
    console.error("Sandbox restriction in effect: Cannot access parent window:", error);
}
