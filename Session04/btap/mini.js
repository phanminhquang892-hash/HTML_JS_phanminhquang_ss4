
let loginAttempts = 0;
let isAuthenticated = false;

while (loginAttempts < 3) {
  let username = prompt("Nhập tài khoản:");
  let password = prompt("Nhập mật khẩu:");

  if (username === "admin" && password === "12345") {
    alert("Đăng nhập thành công!");
    isAuthenticated = true;
    break;
  } else {
    loginAttempts++;

    let remain = 3 - loginAttempts;

    if (username !== "admin" && password !== "12345") {
      alert(`Sai tài khoản và mật khẩu! Còn ${remain} lần`);
    } else if (username !== "admin") {
      alert(`Sai tài khoản! Còn ${remain} lần`);
    } else {
      alert(`Sai mật khẩu! Còn ${remain} lần`);
    }
  }
}

if (!isAuthenticated) {
  alert("Tài khoản đã bị khóa!");
  throw new Error("Kết thúc chương trình");
}

let choice;

do {
  choice = +prompt(`
========= MENU =========
1. Phân loại mã số sách
2. Thiết kế sơ đồ kho sách
3. Dự toán phí bảo trì sách
4. Tìm mã số sách may mắn
5. Thoát
========================
Nhập lựa chọn (1-5):
`);

  switch (choice) {

    case 1:
      alert("Nhập mã sách (nhập 0 để kết thúc)");

      let total = 0;
      let even = 0;
      let odd = 0;
      while (true) {
        let code = +prompt("Nhập mã sách:");

        if (isNaN(code)) {
          alert("Vui lòng nhập số!");
          continue;
        }

        if (code === 0) break;

        total++;

        if (code % 2 === 0) {
          even++;
        } else {
          odd++;
        }
      }
      console.log("=== PHÂN LOẠI MÃ SÁCH ===");
      console.log("Tổng số mã:", total);
      console.log("Số mã chẵn (Sách khoa học):", even);
      console.log("Số mã lẻ (Sách nghệ thuật):", odd);
      break;

    case 2:
      let rows = +prompt("Nhập số hàng:");
      let cols = +prompt("Nhập số cột:");

      if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
        alert("Dữ liệu không hợp lệ!");
        break;
      }
      console.log("=== SƠ ĐỒ KHO SÁCH ===");
      for (let i = 1; i <= rows; i++) {
        let line = "";
        for (let j = 1; j <= cols; j++) {
          if (i === j) {
            line += `[${i}-${j} Kệ ưu tiên] `;
          } else {
            line += `[${i}-${j}] `;
          }
        }
        console.log(line);
      }
      break;

    case 3:
      let quantity = +prompt("Nhập số lượng sách:");
      let cost = +prompt("Nhập phí bảo trì 1 cuốn:");
      let years = +prompt("Nhập số năm dự toán:");

      if (isNaN(quantity) || isNaN(cost) || isNaN(years) ||
        quantity <= 0 || cost <= 0 || years <= 0) {
        alert("Dữ liệu không hợp lệ!");
        break;
      }
      console.log("=== DỰ TOÁN PHÍ BẢO TRÌ ===");
      for (let y = 1; y <= years; y++) {
        let totalCost = quantity * cost;
        console.log(`Năm ${y}: ${totalCost.toFixed(0)} VNĐ (Đơn giá: ${cost.toFixed(0)}/cuốn)`);
        cost *= 1.1;
      }
      break;

    case 4:
      let n = +prompt("Bạn muốn kiểm tra các mã sách từ 1 đến bao nhiêu? (Nhập N): ");
      if (isNaN(n) || n <= 0) {
        alert("Dữ liệu không hợp lệ!");
        break;
      }
      let count = 0;
      let list = "";

      for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 !== 0) {
          count++;
          list += i + " ";
        }
      }
      console.log("=== MÃ SÁCH MAY MẮN ===");
      console.log("Danh sách mã:", list);
      console.log("Tổng số mã:", count);
      break;

    case 5:
      alert("Hệ thống đang đăng xuất...");
      break;

    default:
      alert("Lựa chọn không hợp lệ!");
  }

} while (choice !== 5);
