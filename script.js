(function() {
  const items = [
    { 
      src:"/img/Trabalhe 4 horas por semana - Timothy Ferriss.jpeg", 
      alt: "Trabalhe 4 horas por semana - Timothy Ferriss",      
      title: "Trabalhe 4 horas por semana",
      author: "Timnothy Ferriss",
    },
    { src:"/img/Steve Jobs - Walter Isaacson.jpeg", 
      alt: "Steve Jobs - Walter Isaacson",
      title: "Steve Jobs",
      author: "Walter Isaacson",
    },
    { src:"/img/De zero a um - Peter Thiel.jpg", 
      alt: "De zero a um - Peter Thiel",
      title: "De zero a um",
      author: "Peter Thiel",
    },
    { src:"/img/A loja de tudo - Brad Stone.jpg", 
      alt: "A loja de tudo - Brad Stone.jpg",
      title: "A loja de tudo",
      author: "Brad Stone",
    },
    { 
      src:"img/Casais inteligentes enriquecem juntos - Gustavo Cerbasi.jpg", 
      alt: "Casais inteligentes enriquecem juntos - Gustavo Cerbasi",
      title: "Casais inteligentes enriquecem juntos",
      author: "Gustavo Cerbasi",
    },  
    { 
      src:"img/Como o Google funciona - Eric Schmidt, Jonathan Rosenberg.jpg", 
      alt: "Como o Google funciona - Eric Schmidt, Jonathan Rosenberg",
      title: "Como o Google funciona",
      author: "Eric Schmidt, Jonathan Rosenberg",
    },   
    { 
      src:"img/Jony Ive - O gênio por trás dos grandes produtos da Apple - Leander Kahney.jpg", 
      alt: "Jony Ive - O gênio por trás dos grandes produtos da Apple - Leander Kahney",
      title: "Jony Ive - O gênio por trás dos grandes produtos da Apple",
      author: "Leander Kahney",
    },    
    { 
      src:"img/O poder do hábito - Charles Duhigg.jpg", 
      alt: "O poder do hábito - Charles Duhigg",
      title: "O poder do hábito",
      author: "Charles Duhigg",
    },  
    { 
      src:"img/Roube como um artista - Austin Kleon.jpg", 
      alt: "Roube como um artista - Austin Kleon",
      title: "Roube como um artista",
      author: "Austin Kleon",
    },    
    { 
      src:"img/A lógica do cisne negro - Nassim Nicholas Taleb.jpg", 
      alt: "A lógica do cisne negro - Nassim Nicholas Taleb",
      title: "A lógica do cisne negro",
      author: "Nassim Nicholas Taleb",
    },    
    { 
      src:"img/Desconstruindo a Web - Willian Molinari.jpg", 
      alt: "Desconstruindo a Web - Willian Molinari",
      title: "Desconstruindo a Web",
      author: "Willian Molinari",
    },    
    { 
      src:"img/Antifrágil - Nassim Nicholas Taleb.jpg", 
      alt: "Antifrágil - Nassim Nicholas Taleb",
      title: "Antifrágil",
      author: "Nassim Nicholas Taleb",
    },    
    { 
      src:"img/O último teorema de Fermat - Simon Singh.jpg", 
      alt: "O último teorema de Fermat - Simon Singh",
      title: "O último teorema de Fermat",
      author: "Simon Singh",
    },    
    { 
      src:"img/As 48 leis do poder - Robert Greene.jpg", 
      alt: "As 48 leis do poder - Robert Greene",
      title: "As 48 leis do poder",
      author: "Robert Greene",
    },    
    { 
      src:"img/Cartas a um jovem cientista: O universo, a vida e outras paixões - Marcelo Gleiser.jpg", 
      alt: "Cartas a um jovem cientista: O universo, a vida e outras paixões - Marcelo Gleiser",
      title: "Cartas a um jovem cientista: O universo, a vida e outras paixões",
      author: "Marcelo Gleiser",
    },    
    { 
      src:"img/Arriscando a própria pele - Nassim Nicholas Taleb.jpg", 
      alt: "Arriscando a própria pele - Nassim Nicholas Taleb",
      title: "Arriscando a própria pele",
      author: "Nassim Nicholas Taleb",
    },    
    { 
      src:"img/O que o governo fez com o nosso dinheiro - Murray N. Rothbard.jpg", 
      alt: "O que o governo fez com o nosso dinheiro - Murray N. Rothbard",
      title: "O que o governo fez com o nosso dinheiro - Murray N. Rothbard",
      author: "Murray N. Rothbard",
    },
    { 
      src:"img/Pense e enriqueça - Napoleon Hill.jpg", 
      alt: "Pense e enriqueça - Napoleon Hill",
      title: "Pense e enriqueça",
      author: "Napoleon Hill",
    },      
    { 
      src:"img/Rápido e Devagar - Daniel Kahneman.jpg", 
      alt: "Rápido e Devagar - Daniel Kahneman",
      title: "Rápido e Devagar",
      author: "Daniel Kahneman",
    },
    { 
      src:"img/O lado difícil das situações difíceis - Ben Horowitz.jpg", 
      alt: "O lado difícil das situações difíceis - Ben Horowitz",
      title: "O lado difícil das situações difíceis",
      author: "Ben Horowitz",
    },  
    { 
      src:"img/Iludidos pelo o acaso - Nassim Nicholas Taleb.jpg", 
      alt: "Iludidos pelo o acaso - Nassim Nicholas Taleb",
      title: "Iludidos pelo o acaso",
      author: "Nassim Nicholas Taleb",
    },
    { 
      src:"img/A guerra do Cálculo - Jason Socrates Bardi.jpg", 
      alt: "A guerra do Cálculo - Jason Socrates Bardi",
      title: "A guerra do Cálculo",
      author: "Jason Socrates Bardi",
    },
    { 
      src:"img/O codificador limpo - Robert C. Martin.jpg", 
      alt: "O codificador limpo - Robert C. Martin",
      title: "O codificador limpo",
      author: "Robert C. Martin",
    },
    { 
      src:"img/Sprint - O método usado no Google para testar e aplicar novas ideias em apenas cinco dias - Jake Knapp, John Zeratsky, Braden Kowitz.jpg", 
      alt: "Sprint - O método usado no Google para testar e aplicar novas ideias em apenas cinco dias - Jake Knapp, John Zeratsky, Braden Kowitz",
      title: "Sprint - O método usado no Google para testar e aplicar novas ideias em apenas cinco dias",
      author: "Jake Knapp, John Zeratsky, Braden Kowitz",
    },
    { 
      src:"img/1499 : O Brasil antes de Cabral - Reinaldo José Lopes.jpg", 
      alt: "1499 : O Brasil antes de Cabral - Reinaldo José Lopes",
      title: "1499 : O Brasil antes de Cabral",
      author: "Reinaldo José Lopes",
    },
    { 
      src:"img/O Homem mais rico da Babilônia - George S. Clason.jpg", 
      alt: "O Homem mais rico da Babilônia - George S. Clason",
      title: "O Homem mais rico da Babilônia",
      author: "George S. Clason",
    },
    { 
      src:"img/Iludidos pelo o acaso - Nassim Nicholas Taleb.jpg", 
      alt: "Iludidos pelo o acaso - Nassim Nicholas Taleb",
      title: "Iludidos pelo o acaso",
      author: "Nassim Nicholas Taleb",
    },
    { 
      src:"img/Inspired - How to create tech products customers love - Marty Cagan.jpg", 
      alt: "Inspired - How to create tech products customers love - Marty Cagan",
      title: "Inspired - How to create tech products customers love",
      author: "Marty Cagan",
    },
    { 
      src:"img/A Mentalidade Anticapitalista - Ludwig Von Mises.jpg", 
      alt: "A Mentalidade Anticapitalista - Ludwig Von Mises",
      title: "A Mentalidade Anticapitalista",
      author: "Ludwig Von Mises",
    },
    { 
      src:"img/Estatística - O que é Para que serve Como funciona - Charles Wheelan.jpg", 
      alt: "Estatística - O que é? Para que serve? Como funciona? - Charles Wheelan",
      title: "Estatística - O que é? Para que serve? Como funciona?",
      author: "Charles Wheelan",
    },
    {
      src:"img/Do zero ao infinito (e além) - Mike Goldsmith.jpg", 
      alt: "Do zero ao infinito (e além) - Mike Goldsmith",
      title: "Do zero ao infinito (e além)",
      author: "Mike Goldsmith",
    },
    { 
      src:"img/Uma breve história da humanidade - Sapiens - Yuval Noah Harari.jpg", 
      alt: "Uma breve história da humanidade - Sapiens - Yuval Noah Harari",
      title: "Uma breve história da humanidade - Sapiens",
      author: "Yuval Noah Harari",
    },
    { 
      src:"img/Como fazer amigos & influenciar pessoas - Dale Carnegie.jpeg", 
      alt: "Como fazer amigos & influenciar pessoas - Dale Carnegie",
      title: "Como fazer amigos & influenciar pessoas",
      author: "Dale Carnegie",
    },
    { 
      src:"img/O Jeito Peter Lynch de investir - Peter Lynch.jpg", 
      alt: "O Jeito Peter Lynch de investir - Peter Lynch",
      title: "O Jeito Peter Lynch de investir",
      author: "Peter Lynch",
    },
    { 
      src:"img/Migrando sistemas monolíticos para microsserviços - Sam Newman.jpg", 
      alt: "Migrando sistemas monolíticos para microsserviços - Sam Newman",
      title: "Migrando sistemas monolíticos para microsserviços",
      author: "Sam Newman",
    },
    { 
      src:"img/Gatilhos mentais - Gustavo Ferreira.jpeg", 
      alt: "Gatilhos mentais - Gustavo Ferreira",
      title: "Gatilhos mentais",
      author: "Gustavo Ferreira",
    },
    { 
      src:"img/Venda à mente, não ao cliente: Como aplicar a neurociência para negociar mais falando menos - Jürgen Klaric.jpg", 
      alt: "Venda à mente, não ao cliente: Como aplicar a neurociência para negociar mais falando menos - Jürgen Klaric",
      title: "Venda à mente, não ao cliente: Como aplicar a neurociência para negociar mais falando menos",
      author: "Jürgen Klaric",
    },
    { 
      src:"img/A Riqueza das Nações de Adam Smith - Uma interpretação moderna e prática - Karen McCreadie.jpg", 
      alt: "A Riqueza das Nações de Adam Smith - Uma interpretação moderna e prática - Karen McCreadie",
      title: "A Riqueza das Nações de Adam Smith - Uma interpretação moderna e prática",
      author: "Karen McCreadie",
    },
    { 
      src:"img/Pare de Acreditar no Governo - Por que os Brasileiros não Confiam nos Políticos e Amam o Estado - Bruno Garschagen.jpg", 
      alt: "Pare de Acreditar no Governo - Por que os Brasileiros não Confiam nos Políticos e Amam o Estado - Bruno Garschagen",
      title: "Pare de Acreditar no Governo - Por que os Brasileiros não Confiam nos Políticos e Amam o Estado",
      author: "Bruno Garschagen",
    },
    { 
      src:"img/Na raça: como Guilherme Benchimol criou a XP e iniciou a maior revolução do mercado financeiro brasileiro.jpg", 
      alt: "Na raça: como Guilherme Benchimol criou a XP e iniciou a maior revolução do mercado financeiro brasileiro - Maria Luíza Filgueiras",
      title: "Na raça: como Guilherme Benchimol criou a XP e iniciou a maior revolução do mercado financeiro brasileiro",
      author: "Maria Luíza Filgueiras",
    },
    { 
      src:"img/Storytelling com dados: Um guia sobre visualização de dados para profissionais de negócios - Cole Nussbaumer Knaflic.jpg", 
      alt: "Storytelling com dados: Um guia sobre visualização de dados para profissionais de negócios - Cole Nussbaumer Knaflic",
      title: "Storytelling com dados: Um guia sobre visualização de dados para profissionais de negócios",
      author: "Cole Nussbaumer Knaflic",
    },      
    { 
      src:"img/Vicente Falconi - O que importa é resultado - Cristiane Correa.jpg", 
      alt: "Vicente Falconi - O que importa é resultado - Cristiane Correa",
      title: "Vicente Falconi - O que importa é resultado",
      author: "Cristiane Correa",
    },
    { 
      src:"img/Avalie o que importa: Como o Google, Bono Vox e a Fundação Gates sacudiram o mundo com os OKRs - John Doerr.jpg", 
      alt: "Avalie o que importa: Como o Google, Bono Vox e a Fundação Gates sacudiram o mundo com os OKRs - John Doerr",
      title: "Avalie o que importa: Como o Google, Bono Vox e a Fundação Gates sacudiram o mundo com os OKRs",
      author: "John Doerr",
    },
    { 
      src:"img/A Fórmula Mágica de Joel Greenblatt para Bater o Mercado de Ações - Joel Greenblatt.jpg", 
      alt: "A Fórmula Mágica de Joel Greenblatt para Bater o Mercado de Ações - Joel Greenblatt",
      title: "A Fórmula Mágica de Joel Greenblatt para Bater o Mercado de Ações",
      author: "Joel Greenblatt",
    },
    { 
      src:"img/Código limpo: Habilidades práticas do Agile Software - Robert C. Martin.jpg", 
      alt: "Código limpo: Habilidades práticas do Agile Software - Robert C. Martin",
      title: "Código limpo: Habilidades práticas do Agile Software",
      author: "Robert C. Martin",
    },
    { 
      src:"img/Start with Why: How Great Leaders Inspire Everyone to Take Action - Simon Sinek.jpg", 
      alt: "Start with Why: How Great Leaders Inspire Everyone to Take Action - Simon Sinek",
      title: "Start with Why: How Great Leaders Inspire Everyone to Take Action",
      author: "Simon Sinek",
    },
    { 
      src:"img/Factfulness: Ten Reasons We're Wrong About the World - and Why Things Are Better Than You Think - Hans Rosling with Ola Rosling and Anna Rosling Rönnlund.jpg", alt: "Factfulness: Ten Reasons We're Wrong About the World - and Why Things Are Better Than You Think - Hans Rosling with Ola Rosling and Anna Rosling Rönnlund",
      title: "Factfulness: Ten Reasons We're Wrong About the World - and Why Things Are Better Than You Think",
      author: "Hans Rosling with Ola Rosling and Anna Rosling Rönnlund",
    },
    { 
      src:"img/Arquitetura limpa: O guia do artesão para estrutura e design de software -  Robert C. Martin.jpg", 
      alt: "Arquitetura limpa: O guia do artesão para estrutura e design de software -  Robert C. Martin",
      title: "Arquitetura limpa: O guia do artesão para estrutura e design de software",
      author: "Robert C. Martin",
    },
    { 
      src:"img/Product Backlog Building: Um guia prático para criação e refinamento de backlog para produtos de sucesso -  Fábio Aguiar (Autor), Paulo Caroli (Autor).jpg", alt: "Product Backlog Building: Um guia prático para criação e refinamento de backlog para produtos de sucesso -  Fábio Aguiar, Paulo Caroli",
      title: "Product Backlog Building: Um guia prático para criação e refinamento de backlog para produtos de sucesso",
      author: "Fábio Aguiar, Paulo Caroli",
    },
    { 
      src:"img/Test-Driven Development - Teste e Design no mundo real com Java - Maurício Aniche.jpg", 
      alt: "Test-Driven Development - Teste e Design no mundo real com Java - Maurício Aniche",
      title: "Test-Driven Development - Teste e Design no mundo real com Java",
      author: "Maurício Aniche",
    },
    { 
      src:"img/The Start-Up of You - Reid Hoffman  and Ben Casnocha.jpg", 
      alt: "The Start-Up of You - Reid Hoffman  and Ben Casnocha",
      title: "The Start-Up of You",
      author: "Reid Hoffman  and Ben Casnocha",
    },
    { 
      src:"img/Nunca diga Abraços para um gringo - Gavin Roy.jpg", 
      alt: "Nunca diga Abraços para um gringo - Gavin Roy",
      title: "Nunca diga Abraços para um gringo - Gavin Roy",
      author: "Gavin Roy",
    },    
    { 
      src:"img/Como as democracias morrem - Steven Levitsky e Daniel Ziblatt.jpg", 
      alt: "Como as democracias morrem - Steven Levitsky e Daniel Ziblatt",
      title: "Como as democracias morrem",
      author: "Steven Levitsky e Daniel Ziblatt",
    },
    { 
      src:"img/A startup enxuta: Como usar a inovação contínua para criar negócios radicalmente bem-sucedidos - Eric Ries.jpg", 
      alt: "A startup enxuta: Como usar a inovação contínua para criar negócios radicalmente bem-sucedidos - Eric Ries",
      title: "A startup enxuta: Como usar a inovação contínua para criar negócios radicalmente bem-sucedidos",
      author: "Eric Ries",
    },
    { 
      src:"img/Pequeno manual Bastter.com - Saúde - Tranquilidade financeira - Paz - Bastter.com.jpg", 
      alt: "Pequeno manual Bastter.com - Saúde - Tranquilidade financeira - Paz - Bastter.com",
      title: "Pequeno manual Bastter.com - Saúde - Tranquilidade financeira - Paz",
      author: "Bastter.com",
    },
    { 
      src:"img/Shape Up - Stop Running in Circles and Ship Work that Matters - Ryan Singer.jpg", 
      alt: "Shape Up - Stop Running in Circles and Ship Work that Matters - Ryan Singer",
      title: "Shape Up - Stop Running in Circles and Ship Work that Matters",
      author: "Ryan Singer",
    },
    { 
      src:"img/Inventar & vagar: princípios e filosofias da Amazon e Blue Origin - Walter Isaacson.jpg", 
      alt: "Inventar & vagar: princípios e filosofias da Amazon e Blue Origin - Walter Isaacson",
      title: "Inventar & vagar: princípios e filosofias da Amazon e Blue Origin",
      author: "Walter Isaacson",
    },
  ];

  const bookListContainer = document.getElementById('book-list-container');
  const bookGridContainer = document.getElementById('book-grid-container');
  const books = document.getElementById('books');
  const btnViewMode = document.getElementById('btn-view-mode');

  function createlistlView() {
    items.forEach(item => {
      const divContainer = document.createElement('div');
      const img = document.createElement('img');
      const divTitle = document.createElement('div');
      const divAuthor = document.createElement('div');

      divContainer.setAttribute('class', 'book-list');

      img.src = item.src;
      img.alt = item.alt;
      img.setAttribute('class', 'book-list-img');

      divTitle.innerText = item.title;
      divTitle.setAttribute('class', 'book-list-title');

      divAuthor.innerText = item.author;
      divAuthor.setAttribute('class', 'book-list-author');

      divContainer.appendChild(img);
      divContainer.appendChild(divTitle);
      divContainer.appendChild(divAuthor);
      
      books.appendChild(divContainer);
    });


    const clone = books.cloneNode(true);
    bookListContainer.appendChild(clone);
  }

  function createGripView() {
    items.forEach(item => {
      let divContainer = document.createElement('div');
      let img = document.createElement('img');
      let divTitle = document.createElement('div');
      let divAuthor = document.createElement('div');

      divContainer.setAttribute('class', 'book-grid');

      img.src = item.src;
      img.alt = item.alt;
      img.setAttribute('class', 'book-grid-img');

      divTitle.innerText = item.title;
      divTitle.setAttribute('class', 'book-grid-title');

      divAuthor.innerText = item.author;
      divAuthor.setAttribute('class', 'book-grid-author');

      divContainer.appendChild(img);
      divContainer.appendChild(divTitle);
      divContainer.appendChild(divAuthor);

      bookGridContainer.appendChild(divContainer);        
    });
  }

  function AddViewModeControl() {
    btnViewMode.onclick = function() {
      const viewMode = bookListContainer.style.display;
  
      if (viewMode == 'block') {
        books.style.animationPlayState = 'paused';
        bookListContainer.style.display = 'none';
        bookGridContainer.style.display = 'grid';
      } else {
        books.style.animationPlayState = 'running';
        bookListContainer.style.display = 'block';
        bookGridContainer.style.display = 'none';
      }
    }
  }

  function main() {
    createlistlView();
    createGripView();
    AddViewModeControl();
  }

  main();

})();