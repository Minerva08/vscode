function convert(dto) {
    const tr = document.createElement('tr')
    // 내용 완성하세요

    for(key in dto) { // 객체의 속성 개수만큼 반복
        const td = document.createElement('td')
        tr.appendChild(td)
        td.innerText = dto[key]
    }
    return tr
}