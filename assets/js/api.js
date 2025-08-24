async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/rafaelcloud83/portfolio/main/data/profile.json';
    const fetching = await fetch(url);
    return await fetching.json();
}