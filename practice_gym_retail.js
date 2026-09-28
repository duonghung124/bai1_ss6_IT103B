let orderCode = "";
let isValidOrder = false;

const prices = {
    SHAKER: 120000,
    GLOVES: 180000,
    STRAP: 150000
};

do {
    console.log("\n========== GYM FITNESS ==========");
    console.log("1. Nhập và chuẩn hóa mã đơn hàng");
    console.log("2. Tính tiền và in hóa đơn");
    console.log("3. Thoát chương trình");
    console.log("=================================");

    let choice = prompt("Nhập lựa chọn: ");

    switch (choice) {
        case "1":
            orderCode = prompt("Nhập mã đơn hàng: ");

            orderCode = orderCode.trim().toUpperCase();

            if (orderCode.length < 8) {
                console.log("Mã đơn hàng phải có ít nhất 8 ký tự!");
                isValidOrder = false;
                break;
            }

            if (!orderCode.startsWith("GYM-")) {
                console.log("Mã đơn hàng phải bắt đầu bằng GYM-!");
                isValidOrder = false;
                break;
            }

            orderCode = orderCode.slice(4);

            if (orderCode.length < 4) {
                console.log("Phần mã đơn hàng không hợp lệ!");
                isValidOrder = false;
                break;
            }

            isValidOrder = true;

            console.log("Mã đơn hàng hợp lệ!");
            console.log("Mã đã chuẩn hóa: GYM-" + orderCode);
            break;

        case "2":
            if (!isValidOrder) {
                console.log("Vui lòng nhập mã đơn hàng hợp lệ trước!");
                break;
            }

            let orderItems = prompt(
                "Nhập phụ kiện (SHAKER/GLOVES/STRAP), cách nhau bằng dấu phẩy: "
            );

            orderItems = orderItems.trim().toUpperCase();

            let items = orderItems.split(",");
            let total = 0;
            let validItems = [];

            for (let i = 0; i < items.length; i++) {
                let item = items[i].trim();

                if (prices[item]) {
                    validItems.push(item);
                    total += prices[item];
                } else {
                    console.log("Sản phẩm không hợp lệ: " + item);
                }
            }

            if (validItems.length === 0) {
                console.log("Không có sản phẩm hợp lệ để tính tiền!");
                break;
            }

            let vip = prompt("Khách có thẻ VIP không? (Y/N): ");
            vip = vip.trim().toUpperCase();

            let discount = 0;

            if (vip === "Y") {
                discount = total * 0.1;
            }

            let finalTotal = total - discount;

            console.log("\n" + "-".repeat(40));
            console.log("          GYM FITNESS");
            console.log("        HÓA ĐƠN BÁN LẺ");
            console.log("-".repeat(40));

            console.log("Mã đơn: " + ("GYM-" + orderCode));

            console.log("-".repeat(40));
            console.log(
                "Sản phẩm".padEnd(15) +
                "SL".padStart(5) +
                "Tiền".padStart(15)
            );
            console.log("-".repeat(40));

            for (let i = 0; i < validItems.length; i++) {
                let item = validItems[i];
                let productName = "";

                if (item === "SHAKER") {
                    productName = "Bình lắc";
                }

                if (item === "GLOVES") {
                    productName = "Găng tay";
                }

                if (item === "STRAP") {
                    productName = "Dây kéo lưng";
                }

                console.log(
                    productName.padEnd(15) +
                    "1".padStart(5) +
                    prices[item].toLocaleString("vi-VN").padStart(15)
                );
            }

            console.log("-".repeat(40));
            console.log(
                "Tạm tính".padEnd(20) +
                total.toLocaleString("vi-VN").padStart(20)
            );

            console.log(
                "Giảm giá VIP".padEnd(20) +
                discount.toLocaleString("vi-VN").padStart(20)
            );

            console.log(
                "THANH TOÁN".padEnd(20) +
                finalTotal.toLocaleString("vi-VN").padStart(20)
            );

            console.log("-".repeat(40));
            console.log("Cảm ơn quý khách!");
            console.log("-".repeat(40));

            break;

        case "3":
            console.log("Đã thoát chương trình.");
            break;

        default:
            console.log("Lựa chọn không hợp lệ! Vui lòng chọn 1, 2 hoặc 3.");
    }

} while (choice !== "3");