document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();
  const footer = document.querySelector('.footer-inner p');

  if (footer) {
    footer.textContent = `© ${year} Alex Carter`;
  }
});
