// Typing effect
const typingText = ["Frontend Developer", "Python Developer", "React Enthusiast"];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
  if (i < typingText.length) {
    if (!isDeleting && j <= typingText[i].length) {
      current = typingText[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      current = typingText[i].substring(0, j--);
    }

    document.getElementById("typing").innerText = current;

    if (j === typingText[i].length) isDeleting = true;
    if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % typingText.length;
    }
  }
  setTimeout(type, 120);
}
type();
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const form = this;

  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        form.reset();
        document.getElementById("thank-you").style.display = "block";
      } else {
        alert("Oops! Something went wrong.");
      }
    })
    .catch((error) => {
      alert("Error sending message. Please try again.");
    });
});


AOS.init();