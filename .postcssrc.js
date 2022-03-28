// ESM (기존 가져오기 내보내기 방식)
// nodejs 환경에서 동작하는 방식으로 nodejs는 CommonJS방식을 사용함

// import) import autoprefixer from 'autoprefixer' 과 동일
// const autoprefixer = require('autoprefixer')

// export)
/*  exports {
 *  plugins: [autoprefixer],
 *  }; 과 동일
 */
// module.exports = {
//   plugins: [
//     autoprefixer
//   ]
// }

// 변수에 따로 담지 않고 배열 안에서 바로 실행
module.exports = {
  plugins: [require("autoprefixer")],
};
