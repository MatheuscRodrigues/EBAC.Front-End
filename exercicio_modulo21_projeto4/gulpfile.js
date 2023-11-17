const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'))
const imageMin = require('gulp-imagemin')

//Configuraçãoi da Importação dos arquivos
function styles() {
    return gulp.src('./src/styles/*.scss') //Buscou todos arquivos scss na pasta destino
        .pipe(sass({outputStyle: 'compressed'})) //Realizou a transformação para CSS junto com a compressão do mesmo
        .pipe(gulp.dest('./dist/css')); //Criou o arquivo CSS no destino informado 
}

function images() {
    return gulp.src('./src/images/**/*') 
        .pipe(imageMin())
        .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.parallel(styles, images);

//Função watch para acompanhar modificações em tempo real
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}