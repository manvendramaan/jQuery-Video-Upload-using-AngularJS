var demo = angular.module('demo', ['blueimp.fileupload'])

demo.controller('ConfigController', [
    '$scope', '$http', '$filter', '$window', 'fileUpload',
    function ($scope, $http, fileUpload) {
        $scope.options = {
            url: 'https://upload.wistia.com/',
            type: 'POST',
            formData: [{
                name: 'api_password',
                value: '0fe9e58a82c7b54381b480fa1d4a986389b2c8deb81e11461d9fa80b61219bb4'
            }],
            acceptFileTypes: /(\.|\/)(mp4|avi|ogg)$/i,
        };

        $scope.fileuploaded = false;

        $scope.proccess = function(file) {
            $scope.fileuploaded = true;
            file.$processing();
        }

        $scope.upload = function(file){
            file.$submit().then(function(success) {
                console.log(success);
                $scope.video = success;
                $scope.uploaded = true;
            }, function(err) {
                console.log('err\n',err);
            });
        }

    }
])
