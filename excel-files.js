async function loadExcelFiles() {
    try {
        const response = await fetch('https://api.github.com/repos/My-Portfolioo/Mon-portfolio/contents/excel-projets');
        const files = await response.json();
        const container = document.getElementById('excel-grid');
        if (!container) return;
        container.innerHTML = '';
        files.forEach(file => {
            if (file.name !== '.keep') {
                const card = document.createElement('div');
                card.className = 'excel-card';
                card.setAttribute('data-aos', 'zoom-in');
                card.innerHTML = `
                    <i class="fas fa-file-excel"></i>
                    <h3>${file.name.replace('.xlsx', '').replace('.xls', '')}</h3>
                    <p><a href="${file.download_url}" download>Télécharger</a></p>
                `;
                container.appendChild(card);
            }
        });
    } catch (error) {
        console.log('Pas de fichiers Excel trouvés');
    }
}
document.addEventListener('DOMContentLoaded', loadExcelFiles);
