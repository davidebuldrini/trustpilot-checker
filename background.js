chrome.action.onClicked.addListener((tab) => {
  if (!tab.url) return;

  try {
    const url = new URL(tab.url);
    // Extract hostname (e.g., "www.example.com" or "sub.example.co.uk")
    let hostname = url.hostname;

    // Basic logic to strip 'www.' if present, as Trustpilot often handles domains without it better,
    // or at least it's a common convention.
    if (hostname.startsWith('www.')) {
      hostname = hostname.slice(4);
    }

    // Open Trustpilot in a new tab
    const trustpilotUrl = `https://www.trustpilot.com/review/${hostname}`;
    chrome.tabs.create({ url: trustpilotUrl });
  } catch (e) {
    console.error("Invalid URL:", tab.url);
  }
});
