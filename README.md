## assets-metronic

Base javascript files for using the [Metronic](http://keenthemes.com/metronic/) Bootstrap admin theme in a Meteor client application.

## Metronic

**Note**: I am neither an employee of Keenthemes, nor am I affiliated with Keenthemes, just a user with a valid license.

Template Name: 	Metronic - Responsive Admin Dashboard Template build with Twitter Bootstrap 3.3.2
Version: 		3.6.3
Author: 		KeenThemes

Website: 		http://www.keenthemes.com/

Contact: 		support@keenthemes.com

Follow: 		http://twitter.com/keenthemes

Like: 			http://facebook.com/keenthemes

Purchase: 		http://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes

License: 		You must have a valid license purchased only from themeforest(the above link) in order to legally use the theme for your project.

## Usage

**This package is currently being actively developed and there will definitely be many changes in this package.**

[Metronic](http://keenthemes.com/metronic/) is not free. You need to buy a license in order to use [Metronic](http://keenthemes.com/metronic/) for your project. 

The package exports the objects "Metronic" (metronic.js) and "Layout" (layout.js). In your Meteor app you can call the public methods available in these objects, e.g.

    Metronic.setAssetsPath('assets/metronic/theme_rtl/assets/').

This package includes bootstrap3, so it is not necessary to include the package in your Meteor project. Reason: the current Meteor Bootstrap packages come with CSS files included. Metronic has it's own versions for the Bootstrap CSS files, one for Left-to-Right orientation and one for Right-to-Left orientation.

Note: the default assets folder defined in the default metronic.js file is not valid in the context of a Meteor application and needs to be changed before initializing Metronic and the Layout.

    Template.AdminApplicationLayout.onRendered ->
        Metronic.setAssetsPath('assets/metronic/theme_rtl/assets/')
        Metronic.init()
        Layout.init()


metronic.js:

Before:

    var assetsPath = '../../assets/';
    
After:

    var assetsPath = 'assets/metronic/theme_rtl/assets/';

## Publishing this package

In order to publish this package the following npm packages need to be installed:

 - underscore
 - path
 - fs


    npm install -g underscore path fs

The **package.js** uses a technique described [here](http://stackoverflow.com/questions/20793505/meteor-package-api-add-files-add-entire-folder) to add entire folder contents recursively to a package.

http://stackoverflow.com/questions/20793505/meteor-package-api-add-files-add-entire-folder

One needs to add some 'css' and 'img' assets from the Metronic source folder into the public folder of the Meteor project. Metronic has different CSS files for Left-to-Right and Right-to-Left orientation, so if your app needs to support dynamic switching of the screen orientation you will need to do some extra work in your app.

If a new version of Metronic is published, the files in the Metronic appropriate folders in this package need to be updated, and the package republished. This package uses the "theme_rtl" version of the Metronic template, as this theme contains Left-to-Right as well as Right-to-Left CSS files. Normally all that is required to update the template to a newer version is to overwrite the existing folder with the new files provided by Metronic. Metronic publish a changelog which documents the changes between versions:

http://keenthemes.com/metronic/changelog/

By default the files Metronic supplies cannot be used directly in Meteor as is. The following two files need to be modified to increase the scope of the Metronic and Layout objects so that the objects are visible outside of their respective files and have a global scope.

    theme_rtl/assets/global/scripts/metronic.js
    theme_rtl/assets/admin/layout4/scripts/layout.js
    
In both files the **var** needs to be removed from the function: 

Before:

    var Metronic = function() {
    var Layout = function() {
  
After:

    Metronic = function() {
    Leyout = function() {
  
http://stackoverflow.com/questions/27509125/global-variables-in-meteor

https://www.discovermeteor.com/blog/javascript-for-meteor/

It is possible to put all the assets into this package, but perhaps it would be better from a performance point of view to host the assets on an external CDN or dedicated web server and not inside the Meteor app.

If I do decide to put all the assets into the package, the following link contains useful information regarding the referencing of asset files inside of a package:

https://forums.meteor.com/t/package-addfiles-with-a-specific-folder-name/3338

Short version:
api.addFiles(['css/file1.css', 'css/file2.css'], 'client', {isAsset: true});
URL:
/packages/rudolf_assets-metronic/css/file1.css
/packages/rudolf_assets-metronic/css/file2.css

## ToDo
1. Need to remove the hard coded reference to layout4 in the package. The user needs to be able to choose which layout they want to use.
2. Perhaps I can give the user an option to dynamically choose the layout they want to use. The Javascript layout file would need to be loaded dynamically before the Metronic.init(). If I don't do this here, the problem of load-order rears it's ugly head.
3. The custom.css files need to be extracted from the package. These need to be defined in the Meteor project.
4. For some unknown reason if I reference assets in the package via **/package/rudolf_assets-meronic/theme_rtl/assets/global/plugins/font-awesome/css/font-awesome.min.css** then the icons of fontawesome are not loaded. No idea why. For the moment I will ignore the CSS files in the package and reference these directly in the public folder of my project.
