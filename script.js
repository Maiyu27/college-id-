// RAVI — RPC Digital ID Profile
// Vanilla JS interactions

document.addEventListener('DOMContentLoaded', function () {

  // Back button: go to previous page if possible, else no-op gracefully
  var backBtn = document.querySelector('.back-btn');
  if (backBtn) {
    backBtn.addEventListener('click', function () {
      if (window.history.length > 1) {
        window.history.back();
      }
    });
  }

  // Ripple-free press feedback for cards (touch devices don't get :hover)
  var cards = document.querySelectorAll('.card');
  cards.forEach(function (card) {
    card.addEventListener('touchstart', function () {
      card.classList.add('is-active');
    }, { passive: true });

    card.addEventListener('touchend', function () {
      window.setTimeout(function () {
        card.classList.remove('is-active');
      }, 150);
    }, { passive: true });
  });

  // Ensure profile image fades in cleanly once actually loaded (lazy load safety)
  var profileImg = document.querySelector('.profile-image');
  if (profileImg) {
    if (profileImg.complete) {
      profileImg.style.opacity = '1';
    } else {
      profileImg.addEventListener('load', function () {
        profileImg.style.opacity = '1';
      });
      profileImg.addEventListener('error', function () {
        // Graceful fallback if image missing — keep layout space intact
        profileImg.style.opacity = '0.15';
      });
    }
  }

});
