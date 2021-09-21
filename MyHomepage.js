function applyStyle(n) {
    let sheet = document.getElementsByTagName('link');
    sheet[0].href = `style${n}.css`;
}

applyStyle(1);