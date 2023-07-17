      function generateRedirectUrl() {
        const longUrl = document.getElementById("long-url").value;
        const numbersToCheck = [""]; // add the numbers to check here

        if (!numbersToCheck.some(num => longUrl.includes(num))) {
          alert("This URL does not shorten without registration. Please contact AMAN- +8801773633328 (WhatsApp) ");
          return;
        }

        // Make an API call to v.ht endpoint
        fetch("https://v.ht/api.php?format=text&url=" + encodeURIComponent(longUrl))
          .then(function(response) {
            return response.text();
          })
          .then(function(data) {
            var shortenedUrl = data.trim();

            const event = "comments";
            const redirToken = "QUFFLUhqazFqdGVIUmM5eURHSUtBeFBmTUJtejh1N1hsQXxBQ3Jtc0ttMEdQaDVEMER4MmNycXd1NllkTTFVYlVJRlpVWDJDNHJhc2VNbmo0QkpIUzBLRmFabi15d0NPb2JNRkp1WmZVbWswSlFyaFBMVldIaGVVMUJTbWEtMVNkcVFEMGRSQklPamg2SmtsVVlWREVndW1qRQ&q";
            const redirectUrl = "https://www.youtube.com/redirect?" + "&event=" + event + "&redir_token=" + redirToken + "=" + encodeURIComponent(shortenedUrl) + "&html_redirect=1";

            // Update result and copy button
            const shortUrl = redirectUrl;
            document.getElementById("result").innerHTML = "Your YouTube redirect URL is: <a href='" + shortUrl + "' target='_blank'>" + shortUrl + "</a>";
            document.getElementById("copy-btn").style.display = "block";
            document.getElementById("copy-btn").setAttribute("data-clipboard-text", shortUrl);
          })
          .catch(function(error) {
            console.log(error);
            document.getElementById("result").innerHTML = "An error occurred while shortening the URL.";
          });
      }

      // Add copy to clipboard functionality
      const copyBtn = document.getElementById("copy-btn");
      copyBtn.addEventListener("click", function() {
        const clipboardText = copyBtn.getAttribute("data-clipboard-text");
        navigator.clipboard.writeText(clipboardText).then(function() {
          alert("Copied to clipboard!");
        }, function() {
          alert("Error: Could not copy to clipboard.");
        });
      });
