function sendEmail() {
    let name = document.getElementById("account_name").value;
    let phone = document.getElementById("account_phone").value;
    let graduationSystem = document.getElementById("doi_tuong").value;
    let regisBranch = document.getElementById("nganh_dang_ky").value;
    if (name === '' || phone === '' || graduationSystem === 'none' || regisBranch === 'none') {
        alert('Vui lòng điền đầy đủ thông tin');
        return;
    }
    let email = 'trananhhaonuce@gmail.com'
    let subject = "Bạn " + name + " đã đăng ký đào tạo từ xa ngành " + regisBranch;
    let body = "Họ và tên: " + name + "\n" +
        "Số điện thoại: " + phone + "\n" +
        "Hệ tốt nghiệp: " + graduationSystem + "\n" +
        "Ngành đăng ký: " + regisBranch
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://be-neu-elearning.onrender.com/send-email');
    xhr.setRequestHeader('Content-Type', 'application/json')
    alert("Chúng tôi đã tiếp nhận thông tin. Chúng tôi sẽ liên lạc với bạn trong giây lát")
    xhr.onload = () => {
        if (xhr.status !== 200) {
            alert('Error sending email')
        }
    }

    xhr.send(JSON.stringify({name, email, subject, body} ))
}
