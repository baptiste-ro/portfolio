const divProjets = document.querySelector('#divProjets');

let projets;

document.addEventListener('DOMContentLoaded', loadProjects);

function loadProjects(event) {
    fetch('https://baptiste-ro.github.io/portfolio/json/Projets.json')
        .then(data => data.json())
        .then(projects => {

            divProjets.innerHTML = '';

            projects.forEach(project => {
                divProjets.innerHTML += `<a href="${project.url}" target="_blank" class="sm:py-5 py-10 flex flex-col sm:flex-row gap-6 group-hover:opacity-60 hover:!opacity-100 transition-opacity">
                                            <div class="h-full bg-gray-700 rounded-lg aspect-video sm:h-[150px]">
                                                <img src="${project.imageURL} data-image-component="true" alt="${project.altImage}" class="w-full h-full object-cover rounded-lg aspect-video" width="1920" height="1080" loading="lazy" decoding="async">
                                            </div>
                                            <div>
                                                <div class="flex items-center gap-1 mb-2">
                                                    <h2 class="font-medium">${project.titre}</h2>
                                                </div>
                                                <div>
                                                    <span class="opacity-60">· ${project.date}</span>
                                                </div>
                                                <div class="opacity-60">
                                                    <p>${project.description}</p>
                                                </div>
                                            </div>
                                        </a>`
            });
        })
        .catch(error => console.error("❌ Erreur lors du chargement des projets :", error));
}