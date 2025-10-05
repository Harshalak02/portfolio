/**
 * JavaScript function to capture all click events and page views.
 *
 * It is applied to the HTML files for Q1, Q2, Q3, Q4, and Q5.
 * The output is printed to the browser's developer console (F12).
 */

// --- A. Track Page View (Initial load) ---
function trackPageView() {
    const timestamp = new Date().toISOString();
    const pageUrl = window.location.href;
    const pageTitle = document.title || 'Untitled Page';

    console.log("==================================================");
    console.log("🚀 PAGE VIEW CAPTURED");
    console.log(`Timestamp: [${timestamp}]`);
    console.log(`URL: ${pageUrl}`);
    console.log(`Title: ${pageTitle}`);
    console.log("==================================================");
}

// Wait for the entire page to load before logging the view
window.addEventListener('load', trackPageView);


// --- B. Track Click Events ---
function trackClickEvent(event) {
    const timestamp = new Date().toISOString();
    const targetElement = event.target;

    // Capture details from the HTML tag and CSS objects (ID/Class)
    const tagName = targetElement.tagName;
    const elementId = targetElement.id || 'N/A';
    
    // Get all class names and format them
    const classList = targetElement.className.split(/\s+/).filter(c => c).join(' | ') || 'N/A';
    
    // Capture up to the first 50 characters of the element's visible text content
    const elementText = targetElement.textContent.trim().substring(0, 50) + (targetElement.textContent.trim().length > 50 ? '...' : '');

    console.log("⚡ CLICK EVENT CAPTURED");
    console.log(`Timestamp: [${timestamp}]`);
    console.log(`Element Tag: ${tagName}`);
    console.log(`Element ID: #${elementId}`);
    console.log(`CSS Classes: .${classList}`);
    console.log(`Visible Text: "${elementText}"`);
    console.log(`Location: (${event.clientX}px, ${event.clientY}px)`);
    console.log("--------------------------------------------------");
}

// Attach the click event listener to the entire document
document.addEventListener('click', trackClickEvent);