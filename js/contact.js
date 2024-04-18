/**
 * WEBSITE: https://metazoneuae.com
 * GITHUB: https://github.com/ennovater/
 */


var submitted = false;
const contactUs = () => {
  if (submitted) {
    const ok = Swal.fire({
      title: "Email Sent Successfully",
      text: "We will get back to you, Thank You.",
      icon: "success",
      confirmButtonText: "OK",
    }).then(() => {
      window.location = "/";
    });
  }
};

