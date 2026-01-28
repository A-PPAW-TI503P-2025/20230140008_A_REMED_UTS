const authorize = (requiredRole) => {
    return (req, res, next) => {
        const userRole = req.headers['x-user-role'];

        if (!userRole) {
            return res.status(401).json({ message: "Akses ditolak. Header x-user-role tidak ada." });
        }

        if (userRole !== requiredRole) {
            return res.status(403).json({ message: `Akses ditolak. Anda bukan ${requiredRole}.` });
        }

        next();
    };
};

module.exports = authorize;