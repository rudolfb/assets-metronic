Package.describe({
    name: 'rudolf:assets-metronic',
    version: '1.0.29',
    // Brief, one-line summary of the package.
    summary: 'Base javascript files for using metronic in a meteor client app',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/rudolfb/assets-metronic',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

function getFilesFromFolder(folder) {

    // The folder could be a windows folder or Linux folder.
    // The fs npm module requires the correct path separator for

    // local imports
    var _ = Npm.require("underscore");
    var fs = Npm.require("fs");
    var path = Npm.require("path");
    // helper function, walks recursively inside nested folders and return absolute filenames
    function walk(folder) {
        var filenames = [];
        // get relative filenames from folder
        var folderContent = fs.readdirSync(folder);
        // iterate over the folder content to handle nested folders
        _.each(folderContent, function (filename) {
            // build absolute filename
            // var absoluteFilename = folder + path.sep + filename;
            var absoluteFilename = folder + '/' + filename;
            // get file stats
            var stat = fs.statSync(absoluteFilename);
            if (stat.isDirectory()) {
                // directory case => add filenames fetched from recursive call
                filenames = filenames.concat(walk(absoluteFilename));
            }
            else {
                // file case => simply add it
                filenames.push(absoluteFilename);
            }
        });
        return filenames;
    }

    // launch initial walk
    var result = walk(folder);
    return result;
}

Package.onUse(function (api) {
    api.versionsFrom('1.0');
    api.use(['jquery'], 'client');

    api.export(['Metronic', 'Layout'], 'client');

    api.addFiles('theme_rtl/assets/global/plugins/jquery-migrate.min.js', 'client');
    api.addFiles('theme_rtl/assets/global/plugins/jquery-ui/jquery-ui.min.js', 'client');
    api.addFiles('theme_rtl/assets/global/plugins/bootstrap/js/bootstrap.min.js', 'client');
    api.addFiles('theme_rtl/assets/global/plugins/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js', 'client');
    api.addFiles('theme_rtl/assets/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js', 'client');
    api.addFiles('theme_rtl/assets/global/plugins/jquery.blockui.min.js', 'client');
    api.addFiles('theme_rtl/assets/global/plugins/jquery.cokie.min.js', 'client');
    api.addFiles('theme_rtl/assets/global/plugins/uniform/jquery.uniform.min.js', 'client');
    api.addFiles('theme_rtl/assets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js', 'client');
    api.addFiles('theme_rtl/assets/global/scripts/metronic.js', 'client');
    api.addFiles('theme_rtl/assets/admin/layout4/scripts/layout.js', 'client');


    var clientFiles = [];

     // -----------------------------------------------------------------------------------------------

     // Additional files for *bootstrap.min.js*
     clientFiles = getFilesFromFolder("theme_rtl/assets/global/plugins/bootstrap/css");
     console.log(clientFiles);
     console.log();
     // api.addFiles(clientFiles, "public/assets/metronic/theme_rtl/assets/global/plugins/bootstrap/css", {isAsset: true});
     api.addFiles(clientFiles, 'client', {isAsset: true});

     clientFiles = getFilesFromFolder("theme_rtl/assets/global/plugins/bootstrap/fonts");
     console.log(clientFiles);
     console.log();
     // api.addFiles(clientFiles, "public/assets/metronic/theme_rtl/assets/global/plugins/bootstrap/fonts", {isAsset: true});
     api.addFiles(clientFiles, 'client', {isAsset: true});

     // -----------------------------------------------------------------------------------------------

     // Additional files for *fontawesome*
     clientFiles = getFilesFromFolder("theme_rtl/assets/global/plugins/font-awesome/css");
     console.log(clientFiles);
     console.log();
     // api.addFiles(clientFiles, "public/assets/metronic/theme_rtl/assets/global/plugins/font-awesome/css", {isAsset: true});
     api.addFiles(clientFiles, 'client', {isAsset: true});

     clientFiles = getFilesFromFolder("theme_rtl/assets/global/plugins/font-awesome/fonts");
     console.log(clientFiles);
     console.log();
     // api.addFiles(clientFiles, "public/assets/metronic/theme_rtl/assets/global/plugins/font-awesome/fonts", {isAsset: true});
     api.addFiles(clientFiles, 'client', {isAsset: true});

     // -----------------------------------------------------------------------------------------------

     // Additional files for *bootstrap-switch.min.js*
     clientFiles = getFilesFromFolder("theme_rtl/assets/global/plugins/bootstrap-switch/css");
     console.log(clientFiles);
     console.log();
     // api.addFiles(clientFiles, "public/assets/metronic/theme_rtl/assets/global/plugins/bootstrap-switch/css", {isAsset: true});
     api.addFiles(clientFiles, 'client', {isAsset: true});

     // -----------------------------------------------------------------------------------------------

     // Additional files for *metronic.js*
     clientFiles = getFilesFromFolder("theme_rtl/assets/global/css");
     console.log(clientFiles);
     console.log();
     // api.addFiles(clientFiles, "public/assets/metronic/theme_rtl/assets/global/css", {isAsset: true});
     api.addFiles(clientFiles, 'client', {isAsset: true});

     clientFiles = getFilesFromFolder("theme_rtl/assets/global/img");
     console.log(clientFiles);
     console.log();
     // api.addFiles(clientFiles, "public/assets/metronic/theme_rtl/assets/global/img", {isAsset: true});
     api.addFiles(clientFiles, 'client', {isAsset: true});

     // -----------------------------------------------------------------------------------------------

     // Additional files for *layout.js*
     clientFiles = getFilesFromFolder("theme_rtl/assets/admin/layout4/css");
     console.log(clientFiles);
     console.log();
     // api.addFiles(clientFiles, "public/assets/metronic/theme_rtl/assets/admin/layout4/css", {isAsset: true});
     api.addFiles(clientFiles, 'client', {isAsset: true});

     clientFiles = getFilesFromFolder("theme_rtl/assets/admin/layout4/img");
     console.log(clientFiles);
     console.log();
     // api.addFiles(clientFiles, "public/assets/metronic/theme_rtl/assets/admin/layout4/img", {isAsset: true});
     api.addFiles(clientFiles, 'client', {isAsset: true});

     // -----------------------------------------------------------------------------------------------


});

Package.onTest(function (api) {
    // No tests yet. Probably none necessary.
    // api.use('tinytest');
    // api.use('rudolf:assets-metronic');
    // api.addFiles('assets-metronic-tests.js');
});
