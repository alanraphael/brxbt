const gulp = require('gulp');
const ts = require('gulp-typescript');
const JSON_FILES = ['src/*.json', 'src/**/*.json'];
const tsProject = ts.createProject('tsconfig.json');
const nodemon = require('nodemon');

gulp.task('scripts', () => {
    const tsResult = tsProject.src().pipe(tsProject());
    return tsResult.js.pipe(gulp.dest('dist'));
});

gulp.task('watch', ['scripts'], () => {
    gulp.watch('src/*.ts', ['scripts']);
    gulp.watch('src/**/*.ts', ['scripts']);
    gulp.watch('test/**/*.ts', ['scripts']);

    nodemon({
        script: 'dist/index.js',
        ext: 'js',
        env: {'NODE_ENV': 'development'}
    });
});

gulp.task('default', ['watch']);
