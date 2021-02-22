function htmlGenerator(card) {
  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <title>Team Profile Generator</title>
  </head>
  
  <body>
    <nav class="navbar navbar-dark bg-primary">
      <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
    </nav>
    <div class="container">
      <div class="card-deck">
        ${card}
      </div>
    </div>
  </body>
  
  </html>
  `;
}

module.exports = htmlGenerator;
