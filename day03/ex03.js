function getData() {
    const arr = [
        {name: '이지은', age: 29, gender: '여성'},
        {name: '홍진호', age: 40, gender: '남성'},
        {name: '나단비', age:  7, gender: '여성'},
        {name: '해적왕', age: 18, gender: '남성'},
        {name: '이병건', age: 39, gender: '남성'},
    ]
    return arr
}

function getDom(data) {     // 데이터를 받아서 문자열 태그 형식으로 반환
    let dom = ''
    data.sort((a, b) => a.age > b.age ? 1 : -1)
    data.forEach(dto => {
        dom += `<tr><td>${dto.name}</td><td>${dto.age}</td><td>${dto.gender}</td></tr>`
    })
    return dom
}

function render(target, dom) {  // 대상과 dom을 받아서 대상에 dom을 그리기
    target.innerHTML = ''
    if(typeof dom == 'string')  target.innerHTML += dom
    else                        target.appendChild(dom)
}

function filterHandler(event) {
    const checkedFilterList = document.querySelectorAll('input:checked')
    const checkedFilterArray = Array.from(checkedFilterList).map(v => +v.value)

    if(checkedFilterArray == 0) {
        render(tbody, getDom(data))
        return
    }

    const filterArr = data.filter(dto => {
        const age = Math.floor(dto.age / 10) * 10
        return checkedFilterArray.includes(age)
    })
    render(tbody, getDom(filterArr))
}