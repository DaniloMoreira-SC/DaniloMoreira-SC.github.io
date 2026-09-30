document.addEventListener('DOMContentLoaded', () => {
    
    const anoSpan = document.getElementById('ano-atual');
    
    if (anoSpan) {
        const anoAtual = new Date().getFullYear();
        
        anoSpan.textContent = anoAtual;
    }
    
    console.log('Portfólio de Danilo Moreira carregado com sucesso!');
});
