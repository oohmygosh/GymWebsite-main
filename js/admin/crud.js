function delById(id) {
    let members = getMembers();
    for (let index in members) {
        if (members[index].id === id) {
            // delete members[index]
            members.splice(index,1)
            reloadData("members",members)
            return true
        }
    }
    return false
}

function saveMember(member){
    let members = getMembers();
    if (member.id === undefined){
        member.id = -1
    }
    let index
    for (index in members){
        if (members[index].id === member.id) {
            members[index] = member
            reloadData("members",members)
            return
        }
    }
    member.id = (parseInt(index) + 2)
    members.push(member)
    reloadData("members",members)
}

function getMember(id) {
    let members = getMembers();
    return members[id - 1]
}

function getMembers() {
    return JSON.parse(localStorage.getItem("members"))
}

function reloadData(key,value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function modifyField(db, key, value) {
    let data = JSON.parse(localStorage.getItem(db));
    data[key] = value
    reloadData(db,data)
}

function logout() {
    modifyField("user","status",0)
    return true
}