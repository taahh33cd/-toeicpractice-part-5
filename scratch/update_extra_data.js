const fs = require('fs');
const path = require('path');

const targetFile = path.resolve('data/questions.js');

const extraData = {
  "q0536": {
    "translation": "Nhóm nghiên cứu đã phân tích bộ dữ liệu.",
    "core_vocabulary": [
      { "word": "analyze", "type": "v.", "meaning": "phân tích" },
      { "word": "dataset", "type": "n.", "meaning": "bộ dữ liệu" }
    ]
  },
  "q0537": {
    "translation": "Công trình xây dựng đã dừng lại ngay lập tức.",
    "core_vocabulary": [
      { "word": "construction", "type": "n.", "meaning": "việc xây dựng/công trình" },
      { "word": "immediately", "type": "adv.", "meaning": "ngay lập tức" }
    ]
  },
  "q0538": {
    "translation": "Sự tăng trưởng doanh thu có vẻ ổn định.",
    "core_vocabulary": [
      { "word": "revenue", "type": "n.", "meaning": "doanh thu" },
      { "word": "steady", "type": "adj.", "meaning": "ổn định" }
    ]
  },
  "q0539": {
    "translation": "Quản lý xem dự án đã hoàn thành.",
    "core_vocabulary": [
      { "word": "consider", "type": "v.", "meaning": "xem xét/coi là" },
      { "word": "complete", "type": "adj.", "meaning": "hoàn thành" }
    ]
  },
  "q0540": {
    "translation": "Nhân viên hải quan đã đóng dấu vào tờ đơn.",
    "core_vocabulary": [
      { "word": "customs agent", "type": "n.", "meaning": "nhân viên hải quan" },
      { "word": "stamp", "type": "v.", "meaning": "đóng dấu" }
    ]
  },
  "q0541": {
    "translation": "Tỷ lệ lạm phát đã giảm.",
    "core_vocabulary": [
      { "word": "inflation rate", "type": "n.", "meaning": "tỷ lệ lạm phát" },
      { "word": "decrease", "type": "v.", "meaning": "giảm" }
    ]
  },
  "q0542": {
    "translation": "Mô hình kinh tế có vẻ bị lỗi/khiếm khuyết.",
    "core_vocabulary": [
      { "word": "economic model", "type": "n.", "meaning": "mô hình kinh tế" },
      { "word": "flawed", "type": "adj.", "meaning": "có lỗi/khiếm khuyết" }
    ]
  },
  "q0543": {
    "translation": "Họ đã bổ nhiệm cô ấy làm chuyên gia kinh tế trưởng.",
    "core_vocabulary": [
      { "word": "appoint", "type": "v.", "meaning": "bổ nhiệm" },
      { "word": "chief economist", "type": "n.", "meaning": "chuyên gia kinh tế trưởng" }
    ]
  },
  "q0544": {
    "translation": "Phần mềm đã cập nhật các hồ sơ.",
    "core_vocabulary": [
      { "word": "update", "type": "v.", "meaning": "cập nhật" },
      { "word": "record", "type": "n.", "meaning": "hồ sơ/bản ghi" }
    ]
  },
  "q0545": {
    "translation": "Chuỗi cung ứng đã bị sụp đổ.",
    "core_vocabulary": [
      { "word": "supply chain", "type": "n.", "meaning": "chuỗi cung ứng" },
      { "word": "collapse", "type": "v.", "meaning": "sụp đổ" }
    ]
  },
  "q0546": {
    "translation": "Các quy định an toàn có vẻ nghiêm ngặt.",
    "core_vocabulary": [
      { "word": "safety regulation", "type": "n.", "meaning": "quy định an toàn" },
      { "word": "rigorous", "type": "adj.", "meaning": "nghiêm ngặt" }
    ]
  },
  "q0547": {
    "translation": "Sự trì hoãn đã làm các nhà đầu tư lo lắng.",
    "core_vocabulary": [
      { "word": "delay", "type": "n.", "meaning": "sự trì hoãn" },
      { "word": "investor", "type": "n.", "meaning": "nhà đầu tư" },
      { "word": "nervous", "type": "adj.", "meaning": "lo lắng" }
    ]
  },
  "q0548": {
    "translation": "Chuyên viên phân tích đã tối ưu hóa câu truy vấn.",
    "core_vocabulary": [
      { "word": "analyst", "type": "n.", "meaning": "chuyên viên phân tích" },
      { "word": "optimize", "type": "v.", "meaning": "tối ưu hóa" }
    ]
  },
  "q0549": {
    "translation": "Ứng dụng đã bị treo đột ngột.",
    "core_vocabulary": [
      { "word": "application", "type": "n.", "meaning": "ứng dụng" },
      { "word": "unexpectedly", "type": "adv.", "meaning": "một cách bất ngờ/đột ngột" }
    ]
  },
  "q0550": {
    "translation": "Nhà kho vẫn còn trống.",
    "core_vocabulary": [
      { "word": "warehouse", "type": "n.", "meaning": "nhà kho" },
      { "word": "remain", "type": "v.", "meaning": "vẫn còn" },
      { "word": "empty", "type": "adj.", "meaning": "trống/rỗng" }
    ]
  },
  "q0551": {
    "translation": "Ban giám đốc đã chỉ định anh ấy làm lập trình viên trưởng.",
    "core_vocabulary": [
      { "word": "board", "type": "n.", "meaning": "ban giám đốc" },
      { "word": "name", "type": "v.", "meaning": "chỉ định/bổ nhiệm" }
    ]
  },
  "q0552": {
    "translation": "Kiến trúc sư đã sửa lại bản thiết kế.",
    "core_vocabulary": [
      { "word": "architect", "type": "n.", "meaning": "kiến trúc sư" },
      { "word": "revise", "type": "v.", "meaning": "sửa đổi/xem lại" },
      { "word": "blueprint", "type": "n.", "meaning": "bản thiết kế" }
    ]
  },
  "q0553": {
    "translation": "Cuộc đàm phán đã kết thúc thành công.",
    "core_vocabulary": [
      { "word": "negotiation", "type": "n.", "meaning": "sự đàm phán" },
      { "word": "conclude", "type": "v.", "meaning": "kết thúc" },
      { "word": "successfully", "type": "adv.", "meaning": "một cách thành công" }
    ]
  },
  "q0554": {
    "translation": "Chi phí vận chuyển cao.",
    "core_vocabulary": [
      { "word": "transport cost", "type": "n.", "meaning": "chi phí vận chuyển" }
    ]
  },
  "q0555": {
    "translation": "Nhóm nghiên cứu thấy phần mềm dễ sử dụng/trực quan.",
    "core_vocabulary": [
      { "word": "intuitive", "type": "adj.", "meaning": "trực quan/dễ sử dụng" }
    ]
  },
  "q0556": {
    "translation": "Nhà thầu đã đặt hàng vật liệu.",
    "core_vocabulary": [
      { "word": "contractor", "type": "n.", "meaning": "nhà thầu" },
      { "word": "material", "type": "n.", "meaning": "vật liệu" }
    ]
  },
  "q0557": {
    "translation": "Nhà máy mới đã khai trương hôm nay.",
    "core_vocabulary": [
      { "word": "factory", "type": "n.", "meaning": "nhà máy" },
      { "word": "open", "type": "v.", "meaning": "khai trương/mở cửa" }
    ]
  },
  "q0558": {
    "translation": "Dự báo tài chính có vẻ khả quan.",
    "core_vocabulary": [
      { "word": "financial forecast", "type": "n.", "meaning": "dự báo tài chính" },
      { "word": "positive", "type": "adj.", "meaning": "khả quan/tích cực" }
    ]
  },
  "q0559": {
    "translation": "Cô ấy đã giữ cho cơ sở dữ liệu được an toàn.",
    "core_vocabulary": [
      { "word": "database", "type": "n.", "meaning": "cơ sở dữ liệu" },
      { "word": "secure", "type": "adj.", "meaning": "an toàn/bảo mật" }
    ]
  },
  "q0560": {
    "translation": "Quản lý đã lên lịch cuộc họp.",
    "core_vocabulary": [
      { "word": "schedule", "type": "v.", "meaning": "lên lịch" },
      { "word": "meeting", "type": "n.", "meaning": "cuộc họp" }
    ]
  }
};

let content = fs.readFileSync(targetFile, 'utf8');
const questionsData = eval(content.replace('window.questionsData =', ''));

questionsData.forEach(q => {
  if (extraData[q.id]) {
    q.translation = extraData[q.id].translation;
    q.core_vocabulary = extraData[q.id].core_vocabulary;
  }
});

fs.writeFileSync(targetFile, 'window.questionsData = ' + JSON.stringify(questionsData, null, 2) + ';', 'utf8');
console.log('Successfully updated translation and vocabulary for Test 8!');
