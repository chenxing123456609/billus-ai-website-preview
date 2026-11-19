// Reveal content as it enters the viewport. The page stays fully visible when
// motion is reduced, IntersectionObserver is unavailable, or JS does not run.
export function createScrollReveal() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let observer = null;
  let frame = 0;
  const selector = [
    'main > section', 'main > header', 'main > article',
    'main section article', 'main section figure', 'main .section-heading',
    'main .docs-heading', 'main .docs-section', 'main .reader-section',
    'main .company-content-section', 'main .reader-layout > aside',
    'main .docs-grid > aside', 'main .sales-page-grid > *',
    'main .model-hero-copy', 'main .model-hero-visual',
    'footer .footer-grid > *'
  ].join(',');
  function updateDepth() {
    frame = 0;
    const height = window.innerHeight || 1;
    document.querySelectorAll('.hero-visual, .model-hero-visual').forEach(el => {
      const rect = el.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (height - rect.top) / (height + rect.height)));
      el.style.setProperty('--depth-offset', `${Math.round((progress - .5) * 25)}px`);
    });
  }
  function onScroll() {
    if (!frame) frame = requestAnimationFrame(updateDepth);
  }
  function clear() {
    observer?.disconnect(); observer = null;
    document.documentElement.classList.remove('motion-ready');
    document.querySelectorAll('.scroll-reveal').forEach(el => {
      el.classList.remove('scroll-reveal', 'is-visible');
      el.style.removeProperty('--reveal-delay');
    });
  }
  function refresh() {
    clear();
    if (reduced.matches || !('IntersectionObserver' in window)) return;
    const elements = [...document.querySelectorAll(selector)];
    elements.forEach((el, index) => {
      el.classList.add('scroll-reveal');
      el.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 65}ms`);
    });
    observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer?.unobserve(entry.target);
      }
    }, {rootMargin: '0px 0px -5% 0px', threshold: .05});
    elements.forEach(el => observer.observe(el));
    document.documentElement.classList.add('motion-ready');
    updateDepth();
  }
  window.addEventListener('scroll', onScroll, {passive: true});
  window.addEventListener('resize', onScroll, {passive: true});
  reduced.addEventListener?.('change', refresh);
  function dispose() {
    clear();
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
    reduced.removeEventListener?.('change', refresh);
    if (frame) cancelAnimationFrame(frame);
  }
  return {refresh, dispose};
}
