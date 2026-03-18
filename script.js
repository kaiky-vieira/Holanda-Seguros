document.addEventListener('DOMContentLoaded', () => {
    // Seleciona a segunda seção do site
    const sectionTwo = document.querySelector('.two');
    if (!sectionTwo) return;

    // Seleciona o container das imagens dentro da seção
    const imagesContainer = sectionTwo.querySelector('.two-image');
    if (!imagesContainer) return;

    // Armazena a última posição do scroll para detectar a direção
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        const sectionRect = sectionTwo.getBoundingClientRect();

        // Verifica se a seção está visível na tela para otimizar a performance
        const isVisible = sectionRect.top < window.innerHeight && sectionRect.bottom >= 0;

        if (isVisible) {
            // Adiciona/remove a classe 'scrolling-down' dependendo da direção da rolagem.
            // Se rolar para baixo (currentScrollY > lastScrollY), a classe é adicionada.
            // Se rolar para cima, a condição é falsa e a classe é removida.
            imagesContainer.classList.toggle('scrolling-down', currentScrollY > lastScrollY);
        }

        // Atualiza a última posição do scroll
        lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;
    }, { passive: true }); // A opção 'passive' melhora a performance do evento de scroll
});