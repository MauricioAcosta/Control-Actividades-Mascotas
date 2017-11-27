mainApp.controller('MainController', ['$scope', '$http', ($scope, $http) => {

    $scope.baseURL = 'https://secretmeanstack.herokuapp.com/';
    // 'https://secretmeanstack.herokuapp.com/'
    // 'http://localhost:2020/'
    document.getElementById("image").src = './img/no_image.png'

    $scope.binding = {};
    $scope.user = {};
    $scope.status = false;

    $http.get('/api/user').then((result) => {
        $scope.user = result.data;
    }, (err) => {
        alert(JSON.stringify(err))
    });

    document.getElementById("files").onchange = function () {

        var reader = new FileReader();

        reader.onload = function (e) {
            // get loaded data and render thumbnail.
            document.getElementById("image").src = e.target.result;
        };

        // read the image file as a data URL.
        reader.readAsDataURL(this.files[0]);
    };

    $scope.edit = function (item) {
        $scope.binding = item;
        $scope.status = true;
    }
    $scope.editSave = function (item) {

        $http.put('/api/user/' + item._id, $scope.binding).then((result) => {
            window.location.reload();
        }, (err) => {
            alert(JSON.stringify(err))
        });
    }
    $scope.delete = function (id) {
        $http.delete('/api/user/' + id).then((result) => {
            window.location.reload();
        }, (err) => {
            alert(JSON.stringify(err))
        });
    }

    $scope.login = function(){
        alert('OK');
    }

}])