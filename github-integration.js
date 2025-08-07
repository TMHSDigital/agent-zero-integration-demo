// github-integration.js
// Fetch and display live open issues and contributors
const repo = 'TMHSDigital/agent-zero-integration-demo';

function fetchIssues() {
  fetch(`https://api.github.com/repos/${repo}/issues?state=open&per_page=5`)
    .then(r => r.json())
    .then(data => {
      const el = document.getElementById('issues-list');
      if (!el) return;
      if (Array.isArray(data) && data.length > 0) {
        el.innerHTML = data.map(issue => `<li><a href="${issue.html_url}" target="_blank">#${issue.number}: ${issue.title}</a></li>`).join('');
      } else {
        el.innerHTML = '<li>No open issues.</li>';
      }
    })
    .catch(() => {
      const el = document.getElementById('issues-list');
      if (el) el.innerHTML = '<li>Error loading issues.</li>';
    });
}

function fetchContributors() {
  fetch(`https://api.github.com/repos/${repo}/contributors?per_page=5`)
    .then(r => r.json())
    .then(data => {
      const el = document.getElementById('contributors-list');
      if (!el) return;
      if (Array.isArray(data) && data.length > 0) {
        el.innerHTML = data.map(user => `<li><a href="${user.html_url}" target="_blank">${user.login}</a> (${user.contributions} commits)</li>`).join('');
      } else {
        el.innerHTML = '<li>No contributors found.</li>';
      }
    })
    .catch(() => {
      const el = document.getElementById('contributors-list');
      if (el) el.innerHTML = '<li>Error loading contributors.</li>';
    });
}

document.addEventListener('DOMContentLoaded', () => {
  fetchIssues();
  fetchContributors();
});
