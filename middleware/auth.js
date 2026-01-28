// File: D:\Remidi UTS PAW\middleware\auth.js
const authorize = (requiredRole) => {
    return (req, res, next) => {
        const userRole = req.headers['x-user-role']; // 

        if (!userRole) {
            return res.status(401).json({ message: "Akses ditolak. Header x-user-role tidak ada." });
        }

        if (userRole !== requiredRole) { // [cite: 55, 56]
            return res.status(403).json({ message: `Akses ditolak. Khusus role: ${requiredRole}` });
        }

        next();
    };
};

module.exports = authorize; // Pastikan ada baris ini!