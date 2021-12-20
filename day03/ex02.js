function filterHandler(event) {

    // const checkedFilter = document.querySelectorAll('.left input:checked')
    const checkedFilter = Array.from(document.querySelectorAll('.left input:checked'))

    // NodeList 가 아닌 Array의 함수 중에서 map을 사용한다
    // 객체의 배열이 있을 때, 객체의 특정 속성만 추출하여 새로운 간단한 배열로 반환한다
    const filter = checkedFilter.map(v => +v.value)
    console.log(filter)
    tbody.innerHTML = ''    // 내용 지우는 건 한번만 하고

    if(filter == 0) {
        arr.forEach(dto => {  
            const tr = convert(dto)
            tbody.appendChild(tr)
        })
        return
    }

    filter.forEach(e => {   // 체크된 조건 개수만큼 반복
        const filterArr = arr.filter(dto => e <= dto.age && dto.age < e + 10)
        
        filterArr.forEach(dto => {  // appendChild는 조건별로 여러번 수행하기
            const tr = convert(dto)
            tbody.appendChild(tr)
        })
    })
}

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