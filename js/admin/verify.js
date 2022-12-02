let item = localStorage.getItem("user");
if (item === null || JSON.parse(item).status !== 1){
    console.log(1)
    alert("请先登录")
    location.href = "/GymWebsite-main/admin/login.html"
}