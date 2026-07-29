// Cookie-Consent-Banner für Google Analytics
// Einbindung: <script src="/cookie-banner.js"></script> vor </body>

(function () {
  var GA_ID = 'G-VW83VSP9KW';

  // Styles einfügen
  var style = document.createElement('style');
  style.textContent = `
    #cookie-banner {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: #1e293b;
      color: white;
      padding: 20px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      z-index: 9999;
      box-shadow: 0 -4px 20px rgba(0,0,0,0.15);
      font-family: inherit;
    }
    #cookie-banner p {
      margin: 0;
      font-size: 14px;
      max-width: 600px;
      line-height: 1.5;
    }
    #cookie-banner a {
      color: #93c5fd;
    }
    #cookie-banner .cookie-buttons {
      display: flex;
      gap: 10px;
      flex-shrink: 0;
    }
    #cookie-banner button {
      padding: 10px 20px;
      border-radius: 8px;
      border: none;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      font-family: inherit;
    }
    #cookie-accept {
      background: #3B82F6;
      color: white;
    }
    #cookie-decline {
      background: transparent;
      color: white;
      border: 1px solid rgba(255,255,255,0.3) !important;
    }
  `;
  document.head.appendChild(style);

  // Banner HTML einfügen
  var banner = document.createElement('div');
  banner.id = 'cookie-banner';
  banner.style.display = 'none';
  banner.innerHTML = `
    <p>Wir nutzen Google Analytics, um zu verstehen, wie unsere Website genutzt wird. Deine Zustimmung ist freiwillig und jederzeit widerrufbar. Mehr dazu in unserer <a href="/datenschutz.html">Datenschutzerklärung</a>.</p>
    <div class="cookie-buttons">
      <button id="cookie-decline">Ablehnen</button>
      <button id="cookie-accept">Akzeptieren</button>
    </div>
  `;
  document.body.appendChild(banner);

  function loadAnalytics() {
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', GA_ID);
    window.gtag = gtag;
  }

  var consent = localStorage.getItem('cookie-consent');
  if (consent === 'accepted') {
    loadAnalytics();
  } else if (consent === null) {
    banner.style.display = 'flex';
  }

  document.getElementById('cookie-accept').addEventListener('click', function () {
    localStorage.setItem('cookie-consent', 'accepted');
    banner.style.display = 'none';
    loadAnalytics();
  });

  document.getElementById('cookie-decline').addEventListener('click', function () {
    localStorage.setItem('cookie-consent', 'declined');
    banner.style.display = 'none';
  });
})();
