   var form = document.getElementById("my-form");

    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      document.getElementById("status").style.color = "green";
      $(function() {
        setTimeout(function() { $("#status").fadeOut(1500); }, 5000)
      })
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Thanks for your submission!";
        form.reset()
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem"
      });
    }
    form.addEventListener("submit", handleSubmit)