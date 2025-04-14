import React from 'react';
import ReactDOM from 'react-dom';
import TopTagsComponent from './index';

// This function will be called when the page loads
function injectTopTagsComponent() {
  // Create a timer to allow the footer to render first
  setTimeout(() => {
    // Select the footer section where we want to inject our component
    const footerSections = document.querySelectorAll('.footer__title');
    let targetSection = null;
    
    // Find the section with the text "My key tags"
    footerSections.forEach(section => {
      if (section.textContent.trim() === 'My key tags') {
        targetSection = section.parentElement;
      }
    });
    
    if (targetSection) {
      // Create a container for our component
      const container = document.createElement('div');
      container.id = 'top-tags-footer-container';
      
      // Append the container to the footer section
      targetSection.appendChild(container);
      
      // Render our component into the container
      ReactDOM.render(<TopTagsComponent />, container);
    }
  }, 500); // Wait 500ms for the footer to render
}

// Export the function to be used
export default injectTopTagsComponent;