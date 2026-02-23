// Récupère automatiquement la liste des fichiers Excel depuis ton dépôt GitHub
async function loadExcelFiles() {
    try {
        // Appelle l'API GitHub pour lister les fichiers dans le dossier excel-projets
        const response = await fetch('https://api.github.com/repos/My-Portfolioo/Mon-portfolio/contents/excel-projets');
        const files = await response.json();
        
        // Récupère la section où afficher les fichiers
        const container = document.getElementById('excel-grid');
        if (!container) return;
        
        // Vide le conteneur (on va le remplir)
        container.innerHTML = '';
        
        // Pour chaque fichier trouvé, crée une carte
        files.forEach(file => {
            if (file.name !== '.keep') { // Ignore le fichier .keep
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

// Lance le chargement quand la page est prête
document.addEventListener('DOMContentLoaded', loadExcelFiles);
