/**
 * 
 * Concentra o código de consumo da API.
 * 
 */


async function fetchProfileData() {

    // const url = 'https://raw.githubusercontent.com/digitalinnovationone/js-developer-portfolio/main/data/profile.json';
    const url = 'https://raw.githubusercontent.com/flaviocmb/codigos-javascript/main/19%20-%20Portf%C3%B3lio%20Profissional%20(CSS%20e%20JS)/assets/data/profile.json?token=GHSAT0AAAAAACH5U27NY4XYTB7CZIHTTL3UZJNDBJQ';
    const response = await fetch(url);
    const profileData = await response.json();
    return profileData;

}