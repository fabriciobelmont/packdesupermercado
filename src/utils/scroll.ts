export const scrollToOffers = (e?: React.MouseEvent) => {
  if (e) {
    e.preventDefault();
  }
  const element = document.getElementById('ofertas');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
