import injectTopTagsComponent from './components/TopTagsComponent/inject';

// This module will be loaded during client-side rendering
export function onRouteDidUpdate() {
  // Call the injection function when route changes
  injectTopTagsComponent();
}

// This will be called on initial page load
export function onClientEntry() {
  // Register an event to be fired when the DOM is fully loaded
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    if (document.readyState === 'complete') {
      injectTopTagsComponent();
    } else {
      window.addEventListener('load', () => {
        injectTopTagsComponent();
      });
    }
  }
}