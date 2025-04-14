import React from 'react';
import { createRoot } from 'react-dom/client';
import TopTagsComponent from './index';

// This function will be called when the page loads
function injectTopTagsComponent() {
  // Create a timer to allow the footer to render first
  setTimeout(() => {
    // Select the footer section where we want to inject our component
    const footerSections = document.querySelectorAll('.footer__title');
    let targetSection = null;
    
    // Find the section with the text "Core Interests"
    footerSections.forEach(section => {
      if (section.textContent.trim() === 'Core Interests') {
        targetSection = section.parentElement;
      }
    });
    
    if (targetSection) {
      // Create a container for our component
      const container = document.createElement('div');
      container.id = 'top-tags-footer-container';
      
      // Append the container to the footer section
      targetSection.appendChild(container);
      
      // Create root and render our component into the container using React 18's createRoot
      const root = createRoot(container);
      root.render(<TopTagsComponent />);
    }
  }, 500); // Wait 500ms for the footer to render
}

// Export the function to be used
export default injectTopTagsComponent;