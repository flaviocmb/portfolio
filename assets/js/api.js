/**
 * 
 * Concentra o código de consumo da API.
 * 
 */


async function fetchProfileData() {

    // const url = 'https://raw.githubusercontent.com/digitalinnovationone/js-developer-portfolio/main/data/profile.json';
    const url = 'https://raw.githubusercontent.com/flaviocmb/portfolio/main/assets/data/profile.json';
    const response = await fetch(url);
    const profileData = await response.json();
    return profileData;

}