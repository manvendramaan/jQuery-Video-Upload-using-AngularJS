var demo = angular.module('demo', ['blueimp.fileupload'])

demo.controller('ConfigController', [
    '$scope', '$http', '$filter', '$window', 'fileUpload',
    function ($scope, $http, fileUpload) {
        $scope.options = {
            url: 'https://upload.wistia.com/',
            type: 'POST',
            formData: [{
                name: 'api_password',
                value: 'PUT YOUR WISTIA API PASSWORD'
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
