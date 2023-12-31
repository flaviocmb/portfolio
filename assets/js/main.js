/**
 *
 * Gerenciar o HTML
 *
 *
 */

function updateProfileInfo(profileData) {
  const photo = document.getElementById("profile.photo");
  // photo.src = profileData.photo;
  photo.alt = profileData.name;

  const name = document.getElementById("profile.name");
  name.innerText = profileData.name;

  const job = document.getElementById("profile.job");
  job.innerText = profileData.job;

  const location = document.getElementById("profile.location");
  location.innerText = profileData.location;

  const phone = document.getElementById("profile.phone");
  phone.innerText = profileData.phone;

  const email = document.getElementById("profile.email");
  email.innerText = profileData.email;
}

function updateSoftSkills(profileData) {
  const softSkills = document.getElementById("profile.skills.softskills");
  softSkills.innerHTML = profileData.skills.softSkills
    .map((skill) => `<li>${skill}</li>`)
    .join("");
}

function updateHardSkills(profileData) {
  const hardSkills = document.getElementById("profile.skills.hardskills");
  hardSkills.innerHTML = profileData.skills.hardSkills
    .map(
      (skill) =>
        `<li><img src="${skill.src}" alt="${skill.name}" title="${skill.name}"></li>`
    )
    .join("");
}

function updateLanguages(profileData) {
  const languages = document.getElementById("profile.languages");
  languages.innerHTML = profileData.languages
    .map((language) => `<li>${language}`)
    .join("");
}

function updatePortfolio(profileData) {
  const portfolio = document.getElementById("profile.portfolio");
  portfolio.innerHTML = profileData.portfolio
    .map((project) => {
      return `
            <li>
                <span class="portfolio-title ${
                  project.github ? 'github' : ""
                }">${project.name}</span>
                <a href="${project.url}" target="_blank">${project.url}</a>
                <div>
                  <a href="${project.url2 ? project.url2 : ''}" target="_blank">${project.url2 ? project.url2 : ''}</a>
                  <span id="texto-adicional">${project.textoAdicional ? project.textoAdicional : ''}</span>
                </div>
            </li>
        `;
    }).join('');
}

function updateProExperience(profileData) {
    const proExperience = document.getElementById('profile.professionalExperience');
    proExperience.innerHTML = profileData.professionalExperience.map(experience => {
        return `
            <li>
                <p class="experience-title">${experience.name}</p>
                <p class="experience-period">${experience.period}</p>
                <p class="experience-description">${experience.description}</p>
            </li>
        `;
    }).join('')
}

function updateCertification(profileData) {
    const certification = document.getElementById('profile.certification');
    console.log(certification);
    certification.innerHTML = profileData.certification.map(cert => {
      return `
            <li>
                <p class="certification-title">${cert.name}</p>
                <a href="${cert.url}" target="_blank">${cert.url}</a>
            </li>
      `;
    }).join('');
}

//função imediatamente invocada
(async () => {
  const profileData = await fetchProfileData();
  updateProfileInfo(profileData);
  updateSoftSkills(profileData);
  updateHardSkills(profileData);
  updateLanguages(profileData);
  updatePortfolio(profileData);
  updateProExperience(profileData);
  updateCertification(profileData);
})();
