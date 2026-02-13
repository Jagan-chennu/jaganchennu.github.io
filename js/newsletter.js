// Newsletter Form Handler
// This integrates with Formspree for form handling
// Formspree: https://formspree.io/ (free tier available)

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('newsletterForm');
  const emailInput = document.getElementById('emailInput');
  const formMessage = document.getElementById('formMessage');
  
  if (!form) return;

  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const email = emailInput.value.trim();
    
    if (!email) {
      showMessage('Please enter a valid email address.', 'error');
      return;
    }

    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Subscribing...';
    submitBtn.disabled = true;

    try {
      // Using Formspree - Free tier available
      // 1. Create account at https://formspree.io
      // 2. Create new form and replace YOUR_FORM_ID below
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          _subject: 'New Newsletter Subscriber - AVIDFLICK',
          message: `New subscriber email: ${email}`
        })
      });

      if (response.ok) {
        showMessage('✓ Successfully subscribed! Check your email for confirmation.', 'success');
        emailInput.value = '';
        
        // Reset after 5 seconds
        setTimeout(() => {
          formMessage.textContent = '';
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        }, 5000);
      } else {
        showMessage('❌ Subscription failed. Please try again.', 'error');
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    } catch (error) {
      console.error('Error:', error);
      showMessage('❌ Network error. Please check your connection and try again.', 'error');
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });

  function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message form-message-${type}`;
  }
});

/*
  SETUP INSTRUCTIONS:
  
  Option 1: FORMSPREE (Recommended for GitHub Pages)
  ================================================
  1. Go to https://formspree.io
  2. Sign up (free tier)
  3. Create a new form
  4. Copy your form ID (e.g., mjvzdzqk)
  5. Replace "YOUR_FORM_ID" above with your actual form ID
  6. Formspree will send you confirmation emails for each subscriber
  
  Option 2: MAILCHIMP (Better for newsletters)
  ================================================
  Use this code instead (replace with your Audience ID):
  
  const mailchimpScript = document.querySelector('[data-mailchimp-script]');
  if (!mailchimpScript) {
    const script = document.createElement('script');
    script.src = 'https://chimpstatic.com/mcjs-connected/js/users/YOUR_AUDIENCE_ID/YOUR_FORM_ID.js';
    script.async = true;
    script.setAttribute('data-mailchimp-script', 'true');
    form.parentNode.insertBefore(script, form.nextSibling);
  }
  
  Get your IDs from:
  1. Sign up at https://mailchimp.com
  2. Go to Audience > Signup Forms > Embedded Forms
  3. Copy the script URL and extract the IDs
  
  Option 3: GITHUB PAGES + EMAIL SERVICE
  =======================================
  1. Use GitHub actions to send emails when posts are pushed
  2. Requires: Formspree/Mailchimp webhook + GitHub Actions workflow
*/
