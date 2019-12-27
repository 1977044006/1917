var gulp = require('gulp');
var load = require('gulp-load-plugins')();

gulp.task('animateCssCopyToDist',function(){
    return gulp.src('./css/animate.css')
    	.pipe(gulp.dest('./dist/css'))
});

gulp.task('swiperCssCopyToDist',function(){
    return gulp.src('./css/swiper.css')
    	.pipe(gulp.dest('./dist/css'))
});
gulp.task('swiperJsCopyToDist',function(){
    return gulp.src('./js/swiper.js')
    	.pipe(gulp.dest('./dist/js'))
});

gulp.task('jqueryJsCopyToDist',function(){
    return gulp.src('./js/jquery*.js')
    	.pipe(gulp.dest('./dist/js'))
});

gulp.task('commonCssCopyToDist',function(){
    return gulp.src('./css/common.css')
    .pipe(gulp.dest('./dist/css'))
    .pipe(load.connect.reload())
});

gulp.task('concatCss',function (){//合并压缩css
    return gulp.src(['./css/*.css','!./css/animate.css','!./css/swiper.css','!./css/common.css'])//读取文件
    .pipe(load.concat('index.css'))//合并文件
    .pipe(load.minifyCss())//压缩文件
    .pipe(gulp.dest('./dist/css'))//写入dist/css目录
    .pipe(load.connect.reload())
});
gulp.task('sass',function(){   //sass
    return gulp.src('./sass/*.scss')
    .pipe(load.sass())
    .pipe(gulp.dest('./css'))
});
gulp.task('concatJs',function (){//合并压缩js
    return gulp.src(['./js/**','!./js/jquery*.js','!./js/swiper.js'])
    .pipe(load.babel({presets: ['@babel/preset-env']}))
    //.pipe(load.concat('index.js'))
    .pipe(load.uglify())
    .pipe(gulp.dest('./dist/js'))
    .pipe(load.connect.reload())
});
gulp.task('uglifyJq',function (){//压缩jq
    return gulp.src(['./js/jquery*.js'])
    .pipe(load.uglify())
    .pipe(load.rename('jquery.1.8.3.mim.js'))
    .pipe(gulp.dest('./dist/js'));
});
gulp.task('minifyHtml',function (){//压缩html
    return gulp.src('./*.html')
    .pipe(load.minifyHtml())
    .pipe(gulp.dest('./dist'))
    .pipe(load.connect.reload())
});
gulp.task('iconCopyToDist',function(){  //压缩icon
    return gulp.src('./icon/download/font_1575705_urxq65n1aek/*.*')
    .pipe(gulp.dest('./dist/icon'))
    .pipe(load.connect.reload())
});

gulp.task('c_card',function(){  //c_card.js
    return gulp.src('./js/c_card.js')
    .pipe(gulp.dest('./dist/js'))
    .pipe(load.connect.reload())
});


gulp.task('dataCopyToDist',function(){  //压缩icon
    return gulp.src('./data/*.*')
    .pipe(gulp.dest('./dist/data'))
    .pipe(load.connect.reload())
});
gulp.task('imagemin',function (){//压缩图片
     return gulp.src('./img/**')
     //.pipe(load.imagemin())
     .pipe(gulp.dest('./dist/img'))
     .pipe(load.connect.reload())
});
gulp.task('es62es5',function (){//es6 to es5
    return gulp.src(['./js/*.js','!./js/jquery*.js'])
    .pipe(load.babel({presets: ['@babel/preset-env']}))
    .pipe(gulp.dest('./js'))
});
gulp.task('reload',function (cb){// 自动刷新
    load.connect.server({
        root: './dist',//根目录
        livereload: true
    });
    cb();
});

gulp.task('watchs',function (cb){
    gulp.watch('./sass/*.scss',gulp.series('sass'));
    gulp.watch('./css/*.css',gulp.series('concatCss'));
    gulp.watch('./css/common.css',gulp.series('commonCssCopyToDist'));
    gulp.watch('./js/*.js',gulp.series('concatJs'));

    gulp.watch('./js/*.js',gulp.series('c_card'));

    gulp.watch('./*.html',gulp.series('minifyHtml'));
    gulp.watch('./img/*.*',gulp.series('imagemin'));
    gulp.watch('./icon/*.*',gulp.series('iconCopyToDist'));
    gulp.watch('./data/*.*',gulp.series('dataCopyToDist'));
    cb();
});

gulp.task('start',gulp.series('reload','watchs'));

gulp.task('build',gulp.parallel(// 打包
    gulp.series('animateCssCopyToDist'),
    gulp.series('swiperCssCopyToDist', 'swiperJsCopyToDist'),
    gulp.series('jqueryJsCopyToDist','iconCopyToDist','dataCopyToDist','c_card'),
    gulp.series('commonCssCopyToDist'),
    gulp.series('sass','concatCss'),
    gulp.series('concatJs'),  //,'uglifyJq'
    gulp.series('minifyHtml'),
    gulp.series('imagemin')
));