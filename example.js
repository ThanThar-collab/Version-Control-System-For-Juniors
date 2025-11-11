print("This is in feature/day2 branch")
// example code
function isAuthenticated(req, _res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN
    if (!token) {
        throw new errors_1.UnauthorizedError('Access token is required');
    }
    try {
        const decoded = (0, jwt_1.verifyAccessToken)(token);
        
    }
    catch (error) {
        throw new errors_1.UnauthorizedError('Invalid or expired token');
    }
}