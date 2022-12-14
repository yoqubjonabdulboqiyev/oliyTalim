"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TOKEN_TIME = exports.JWT_KEY = exports.USER_PORT = exports.ADMIN_PORt = exports.HOST = exports.DB_URL = void 0;
const tslib_1 = require("tslib");
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
dotenv_1.default.config();
const { env } = process;
exports.DB_URL = env.DB_URL || "mongodb://localhost:27018,localhost:27019,localhost:27020/oliyTalim";
exports.HOST = env.HOST;
exports.ADMIN_PORt = env.ADMIN_PORT;
exports.USER_PORT = env.USER_PORT;
exports.JWT_KEY = env.JWT_KEY;
exports.TOKEN_TIME = {
    expiresIn: env.TOKEN_TIME
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1vbi9jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDREQUE0QjtBQUc1QixnQkFBTSxDQUFDLE1BQU0sRUFBRSxDQUFBO0FBQ2YsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLE9BQU8sQ0FBQTtBQUVWLFFBQUEsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLElBQUkscUVBQXFFLENBQUU7QUFDOUYsUUFBQSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztBQUNoQixRQUFBLFVBQVUsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDO0FBQzVCLFFBQUEsU0FBUyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7QUFDMUIsUUFBQSxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztBQUN0QixRQUFBLFVBQVUsR0FBRztJQUN0QixTQUFTLEVBQUUsR0FBRyxDQUFDLFVBQVU7Q0FDNUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkb3RlbnYgZnJvbSBcImRvdGVudlwiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5cclxuZG90ZW52LmNvbmZpZygpXHJcbmNvbnN0IHsgZW52IH0gPSBwcm9jZXNzXHJcblxyXG5leHBvcnQgY29uc3QgREJfVVJMID0gZW52LkRCX1VSTCB8fCBcIm1vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTgsbG9jYWxob3N0OjI3MDE5LGxvY2FsaG9zdDoyNzAyMC9vbGl5VGFsaW1cIiA7XHJcbmV4cG9ydCBjb25zdCBIT1NUID0gZW52LkhPU1Q7XHJcbmV4cG9ydCBjb25zdCBBRE1JTl9QT1J0ID0gZW52LkFETUlOX1BPUlQ7XHJcbmV4cG9ydCBjb25zdCBVU0VSX1BPUlQgPSBlbnYuVVNFUl9QT1JUO1xyXG5leHBvcnQgY29uc3QgSldUX0tFWSA9IGVudi5KV1RfS0VZO1xyXG5leHBvcnQgY29uc3QgVE9LRU5fVElNRSA9IHtcclxuICAgIGV4cGlyZXNJbjogZW52LlRPS0VOX1RJTUVcclxufVxyXG5cclxuIl19