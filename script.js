function onPageLoaded() {
    

    const splashes = [
        "True and Real!",
        "ferfer",
        "zuh",
        "guh",
        "CruxyMC is always right",
        "betamc.org"
    ]

    let splashnumber = Math.floor(Math.random() * splashes.length);

    splash = splashes[splashnumber]
    document.querySelector("#splashText").innerHTML = splash
}