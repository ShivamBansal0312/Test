var gearPage = document.getElementById('GearPage');
    if (null != gearPage) {
        gearPage.parentNode.removeChild(gearPage);
        document.title = "Error";
    }
