// 함수 작성은 여기서


function filterHandler(event) {
    // 클릭할 때마다 선택되어 있는 필터 항목만 가져온다
    const checkedFilter = document.querySelectorAll('.left input:checked')
    
    // 조건식을 조금 더 상세하게 만들어보자
    const ob = {}   // 서로 다른 두 조건을 묶어서 filter함수에 전달하기 위한 객체
    checkedFilter.forEach(e => ob[e.name] = e.value)

    const filterArr = arr.filter(dto => {
        let flag = true
        const flag1 = +ob.ageFilter <= dto.age && dto.age < +ob.ageFilter + 10
        const flag2 = ob.genderFilter == dto.gender

        if(ob.ageFilter != undefined)        flag = flag && flag1
        if(ob.genderFilter != undefined)     flag = flag && flag2
        return flag
    })

    tbody.innerHTML = ''
    filterArr.forEach(dto => {
        const tr = convert(dto)
        tbody.appendChild(tr)
    })
}