// استدعاء الحزم
const express = require("express");
const app = express();
require("dotenv").config();
const dbConnection = require("./utils/db");
const cors = require("cors");

// السماح للفرونت بالاتصال بالباك
// استبدل <frontend-vercel-link> برابط الفرونت النهائي على Vercel
app.use(cors({
  origin: "https://update-final-project2-trks.vercel.app"
}));

// السماح للتطبيق بفهم JSON في الريكوست
app.use(express.json());

// هنا تضيف Routes لو عندك
// مثال:
// const userRoutes = require("./routes/userRoutes");
// app.use("/api/users", userRoutes);

// البورت
const PORT = process.env.PORT || 8000;

// تشغيل السيرفر
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  dbConnection(); 
});