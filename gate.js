(() => {
  const VALID_TOKEN = "AIPTS___2026"; 

  const params = new URLSearchParams(window.location.search);
  const token = params.get("access");

  if (token !== VALID_TOKEN) {
    document.documentElement.innerHTML = `
      <head>
        <title>Currently Under Maintaince</title>
        <style>
          body {
            margin: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: system-ui;
            background: #0f172a;
            color: white;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div>
          <h1>Access Restricted</h1>
          <p>The website will be live soon.</p>
        </div>
      </body>
    `;
  }
})();