// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
// Function to load components Header e Footer
function loadComponent(id, file) {
    fetch(file)
        .then(response => {
            if (!response.ok) throw new Error(`Erro ao carregar ${file}`);
            return response.text();
        })
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(err => console.error(err));
}




// Add loading animation to quick links
document.querySelectorAll('.quick-link-card').forEach(card => {
    card.addEventListener('click', function(e) {
        // Add a loading state (you can customize this)
        const icon = this.querySelector('.quick-link-icon');
        const originalContent = icon.innerHTML;
        
        icon.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        
        // Simulate loading (remove this in production)
        setTimeout(() => {
            icon.innerHTML = originalContent;
        }, 1000);
    });
});

// Simulate API data loading for feeds
function loadSocialFeed() {
    const socialFeed = document.getElementById('social-feed');
    const placeholder = socialFeed.querySelector('.feed-placeholder');
    
    // Simulate API call delay
    setTimeout(() => {
        // Add more sample posts
        const samplePosts = [
            {
                user: '@empresa_oficial',
                time: '4h atrás',
                content: 'Confira nossos novos recursos de relatórios! 📊'
            },
            {
                user: '@suporte_tecnico',
                time: '6h atrás',
                content: 'Manutenção programada concluída com sucesso ✅'
            },
            {
                user: '@marketing_team',
                time: '1 dia atrás',
                content: 'Webinar sobre otimização de processos amanhã às 14h 🎯'
            }
        ];

        samplePosts.forEach(post => {
            const feedItem = document.createElement('div');
            feedItem.className = 'feed-item';
            feedItem.innerHTML = `
                <div class="feed-item-header">
                    <div class="feed-avatar"></div>
                    <div class="feed-info">
                        <strong>${post.user}</strong>
                        <span>${post.time}</span>
                    </div>
                </div>
                <div class="feed-item-content">
                    <p>${post.content}</p>
                </div>
            `;
            socialFeed.appendChild(feedItem);
        });
    }, 2000);
}

function loadContentFeed() {
    const contentFeed = document.getElementById('content-feed');
    const placeholder = contentFeed.querySelector('.feed-placeholder');
    
    // Simulate API call delay
    setTimeout(() => {
        // Add more sample content
        const sampleContent = [
            {
                source: 'YouTube Channel',
                time: '2 dias atrás',
                content: 'Tutorial: Configuração avançada do sistema'
            },
            {
                source: 'Blog Técnico',
                time: '3 dias atrás',
                content: 'Melhores práticas para gestão de estoque'
            },
            {
                source: 'Newsletter',
                time: '1 semana atrás',
                content: 'Novidades da versão 2.5 do sistema'
            }
        ];

        sampleContent.forEach(content => {
            const feedItem = document.createElement('div');
            feedItem.className = 'feed-item';
            feedItem.innerHTML = `
                <div class="feed-item-header">
                    <div class="feed-avatar"></div>
                    <div class="feed-info">
                        <strong>${content.source}</strong>
                        <span>${content.time}</span>
                    </div>
                </div>
                <div class="feed-item-content">
                    <p>${content.content}</p>
                </div>
            `;
            contentFeed.appendChild(feedItem);
        });
    }, 3000);
}

// Initialize feeds when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadSocialFeed();
    loadContentFeed();
});

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.category-card, .quick-link-card, .feed-grid').forEach(el => {
    observer.observe(el);
});

// Add click tracking for analytics (placeholder)
function trackClick(element, category) {
    console.log(`Click tracked: ${category} - ${element}`);
    // Here you would integrate with your analytics service
    // Example: gtag('event', 'click', { category: category, label: element });
}

// Add click tracking to category links
document.querySelectorAll('.category-link').forEach(link => {
    link.addEventListener('click', function(e) {
        const category = this.closest('.category-card').querySelector('.category-title').textContent.trim();
        trackClick(this.textContent, category);
    });
});

// Add click tracking to quick links
document.querySelectorAll('.quick-link-card').forEach(link => {
    link.addEventListener('click', function(e) {
        const label = this.querySelector('.quick-link-label').textContent;
        trackClick(label, 'Quick Links');
    });
});

// Simple search functionality (can be enhanced)
function addSearchFunctionality() {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Buscar';
    searchInput.className = 'search-input';
    searchInput.style.cssText = `
        width: 100%;
        max-width: 400px;
        padding: 12px 16px;
        border: 1px solid #ced4da;
        border-radius: 8px;
        background: #ffffff;
        font-size: 16px;
        margin: 20px auto;
        display: block;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        transition: border-color 0.3s ease, box-shadow 0.3s ease;
    `;

    // Insert search input before categories section
    const categoriesSection = document.getElementById('categorias');
categoriesSection.parentNode.insertBefore(searchInput, categoriesSection);

 // CARROSEL
const carrosel = document.querySelector('.carrosel');
const slides = carrosel.querySelectorAll('.slide');

let atual = 0;

setInterval(() => {
  slides[atual].classList.remove('ativo');
  atual = (atual + 1) % slides.length;
  slides[atual].classList.add('ativo');
}, 3000);

// FIM DO CARROSEL
function mudarSlide() {
  slides[atual].classList.remove('ativo');
  atual = (atual + 1) % slides.length;
  slides[atual].classList.add('ativo');
}

function iniciarCarrosel() {
  slides[atual].classList.add('ativo');
  setInterval(mudarSlide, 3000);
}

iniciarCarrosel();

prev.addEventListener('click', () => {
  slides[atual].classList.remove('ativo');
  atual = (atual - 1 + slides.length) % slides.length;
  slides[atual].classList.add('ativo');
});

next.addEventListener('click', mudarSlide);   
  
// Add search functionality INDEX
  searchInput.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const sections = document.querySelectorAll('section.categories-section');

    sections.forEach(section => {
        const cards = section.querySelectorAll('.category-second-card');
        let anyVisible = false;
        cards.forEach(card => {
            const cardText = card.textContent.toLowerCase();
            if (cardText.includes(searchTerm)) {
                card.style.display = '';
                anyVisible = true;
            } else {
                card.style.display = 'none';
            }
        });
        section.style.display = anyVisible ? '' : 'none';
    });
});



document.querySelectorAll('.category-card .card-header').forEach(header => {
    header.addEventListener('click', function() {
        const content = this.nextElementSibling;

        // Verifica se o card está aberto ou fechado
        if (content.style.display === 'block') {
            // Fecha o card
            content.style.display = 'none';
        } else {
            // Fecha todos os cards abertos
            document.querySelectorAll('.category-card .card-content').forEach(otherContent => {
                otherContent.style.display = 'none';
            });

            // Abre o card clicado
            content.style.display = 'block';
        }
    });
});

}


document.querySelectorAll('.category-second-card .card-header').forEach(header => {
    header.addEventListener('click', function() {
        const content = this.nextElementSibling;

        // Verifica se o card está aberto ou fechado
        if (content.style.display === 'block') {
            // Fecha o card
            content.style.display = 'none';
        } else {
            // Fecha todos os cards abertos
            document.querySelectorAll('.category-second-card .card-content').forEach(otherContent => {
                otherContent.style.display = 'none';
            });

            // Abre o card clicado
            content.style.display = 'block';
        }
    });
});
// Initialize search functionality
document.addEventListener('DOMContentLoaded', function() {
    addSearchFunctionality();
});

// API Integration Helper Functions
window.APIHelpers = {
    // Function to integrate Instagram API
    loadInstagramFeed: function(accessToken, userId) {
        // Placeholder for Instagram API integration
        console.log('Instagram API integration placeholder');
        // Example implementation:
        /*
        fetch(`https://graph.instagram.com/${userId}/media?fields=id,caption,media_type,media_url,thumbnail_url,timestamp&access_token=${accessToken}`)
            .then(response => response.json())
            .then(data => {
                // Process and display Instagram posts
                this.displaySocialPosts(data.data, 'instagram');
            })
            .catch(error => console.error('Instagram API error:', error));
        */
    },

    // Function to integrate YouTube API
    loadYouTubeFeed: function(apiKey, channelId) {
        // Placeholder for YouTube API integration
        console.log('YouTube API integration placeholder');
        // Example implementation:
        /*
        fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=10`)
            .then(response => response.json())
            .then(data => {
                // Process and display YouTube videos
                this.displayContentPosts(data.items, 'youtube');
            })
            .catch(error => console.error('YouTube API error:', error));
        */
    },

    // Helper function to display social media posts
    displaySocialPosts: function(posts, platform) {
        const socialFeed = document.getElementById('social-feed');
        const placeholder = socialFeed.querySelector('.feed-placeholder');
        
        if (placeholder) {
            placeholder.style.display = 'none';
        }

        posts.forEach(post => {
            const feedItem = document.createElement('div');
            feedItem.className = 'feed-item';
            // Customize based on platform and post data
            socialFeed.appendChild(feedItem);
        });
    }
};

const sidebar = document.querySelector('.sidebar');
const header = document.querySelector('.header');
const content = document.querySelector('.content');

/*window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const headerHeight = header.offsetHeight;

  if (scrollTop > headerHeight) {
    sidebar.style.top = `${scrollTop - headerHeight}px`;
  } else {
    sidebar.style.top = '0px';
  }
});*/


/*Carrosel*/
const carrosel = document.querySelector('.carrosel');
const carroselInner = document.querySelector('.carrosel-inner');
const carroselItems = document.querySelectorAll('.carrosel-item');
const carroselPrev = document.querySelector('.carrosel-prev');
const carroselNext = document.querySelector('.carrosel-next');

let currentItem = 0;

carroselPrev.addEventListener('click', () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = carroselItems.length - 1;
  }
  carroselInner.style.transform = `translateX(-${currentItem * 100}%)`;
});

carroselNext.addEventListener('click', () => {
  currentItem++;
  if (currentItem >= carroselItems.length) {
    currentItem = 0;
  }
  carroselInner.style.transform = `translateX(-${currentItem * 100}%)`;
});

// ======= Soluções ========
function abrirPopup(area) {
    // Exemplo de dados dinâmicos por área
    const dados = {
        'Área 1': {
            titulo: 'Controle de Acesso Veículos',
            grid: [
            {img: 'assets/imagens/cancela.png', text: 'Cancelas', url:'https://loja.dca.com.br'},
            {img: 'assets/imagens/garra.png', text: 'Garras de Tigre', url:'assets/pdf/Apresentação Assa Abloy.pdf'},
            {img: 'assets/imagens/camera-lpr.png', text: 'Leitores de Placas', url:'https://www.dahuasecurity.com/Products/productSelector'},
            {img: 'assets/imagens/antena-uhf.png', text: 'Antenas UHF', url:'https://loja.dca.com.br/busca/UHF'}
        ],
            links: [
                {text: 'Integrações', url: '#'},
                {text: 'Fabricantes', url: '#'},
                {text: 'Modelos', url: '#'},
                {text: 'Vídeos', url: 'assets/pdf/digital-twin.mp4'}
            ]
        },
        'Área 2': {
            titulo: 'Controle de Acesso Pedestres',
            grid: ['A', 'B', 'C', 'D'],
            links: [
                {text: 'Google', url: 'https://www.google.com'},
                {text: 'YouTube', url: 'https://www.youtube.com'},
                {text: 'GitHub', url: 'https://github.com'}
            ]
        },
        'Área 3': {
            titulo: 'Data Center',
            grid: ['A', 'B', 'C', 'D'],
            links: [
                {text: 'Google', url: 'https://www.google.com'},
                {text: 'YouTube', url: 'https://www.youtube.com'},
                {text: 'GitHub', url: 'https://github.com'}
            ]
        },
        'Área 4': {
            titulo: 'Infraestrutura de Rede',
            grid: ['A', 'B', 'C', 'D'],
            links: [
                {text: 'Google', url: 'https://www.google.com'},
                {text: 'YouTube', url: 'https://www.youtube.com'},
                {text: 'GitHub', url: 'https://github.com'}
            ]
        },
        'Área 5': {
            titulo: 'Segurança Perimetral',
            grid: ['A', 'B', 'C', 'D'],
            links: [
                {text: 'Google', url: 'https://www.google.com'},
                {text: 'YouTube', url: 'https://www.youtube.com'},
                {text: 'GitHub', url: 'https://github.com'}
            ]
        }
    };

    const info = dados[area];

    // Atualiza título
    document.getElementById('popup-title').textContent = info.titulo;

    // Atualiza grid com imagens
    const gridContainer = document.getElementById('popup-grid');
    gridContainer.innerHTML = '';
    info.grid.forEach(item => {
        const div = document.createElement('div');
const link = document.createElement('a');
link.href = item.url;       // URL de destino
link.target = '_blank';     // abre em nova aba (opcional)
const img = document.createElement('img');
img.src = item.img;
link.appendChild(img);      // a imagem fica clicável
div.appendChild(link);

// texto abaixo da imagem (opcional)
const p = document.createElement('p');
p.textContent = item.text;
div.appendChild(p);

gridContainer.appendChild(div);

    });

    /// Atualiza links
    const linksContainer = document.getElementById('popup-links');
    linksContainer.innerHTML = '';
    info.links.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;
        a.target = '_blank';
        a.textContent = link.text;
        linksContainer.appendChild(a);
    });

    // Mostra popup
    document.getElementById('popup').style.display = 'flex';
}

function fecharPopup() {
    document.getElementById('popup').style.display = 'none';
}