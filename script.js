// Static site behaviour — no framework, no build step.

document.getElementById("year").textContent = String(new Date().getFullYear());

document.getElementById("inquiry-form").addEventListener("submit", function (e) {
  e.preventDefault();
  var name = this.name.value.trim();
  var email = this.email.value.trim();
  var message = this.message.value.trim();

  var subject = encodeURIComponent("Inquiry from " + (name || "website"));
  var body = encodeURIComponent(message + "\n\n— " + name + "\n" + email);

  window.location.href =
    "mailto:nidhikaloomba@gmail.com?subject=" + subject + "&body=" + body;
});
