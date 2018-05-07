var app = angular.module("myTree", []);

app.controller("myCtrl", function($scope){
	$scope.user = {};
	$scope.wasSubmitted = false;

	$scope.submit = function(){
		$scope.wasSubmitted = true;
	}
});

app.controller("termsConsCtrl", function($scope){
	var toggl = false;

	$scope.activateTC = function(){
		if(toggl == true)
			toggl = false;
		else
			toggl = true;

		if(toggl == true)
			$scope.msg = "This is the T&C";
		else
			$scope.msg = "";
	}
});

app.directive("pwVerify", function(){
	return {
			  restrict: 'A',
			  require: 'ngModel',
			  link: function(scope, currentEl, attrs, ctrl){
				//Get element if name = ngCompare attributes
				var compareField = document.getElementsByName(attrs.ngCompare)[0]; //attrs.ngCompare = password
				//Convert the element to object
				compareEl = angular.element(compareField);

				//Current field key up
				currentEl.on('keyup', function(){
			  console.log(scope.myForm);
				    //If value not empty
				    if (currentEl.val() != "") {
					  //Compare and assign the result to a variable
					  var isMatch = currentEl.val() === compareEl.val();
					  //Set the validity follow by the compare result
					  ctrl.$setValidity('compare', isMatch);
					  //$digest loop to check the status in watchers
					  scope.$digest();
				    }
				});

				//Compare field key up
				compareEl.on('keyup', function(){
				    if (compareEl.val() != "") {
					  var isMatch = currentEl.val() === compareEl.val();
					  ctrl.$setValidity('compare', isMatch);
					  scope.$digest();
				    }
				});
			  }
		    };
});
			/*
			scope.$watch(attrs['pwVerify'], function(errMsg){
				element[0].setCustomValidity(errMsg);
				mCtrl.$setValidity('pwVerify', errMsg ? false : true);
			});
			*/
			/*
			if(!ngModel) return;

			scope.$watch(attrs.ngModel, function(){
				check();
			});

			attrs.$observe("pwVerify", function(myPassword){
				check();
			});

			var check = function(){
				var valueOne = $scope.uPassword;
				var valueTwo = $scope.cPassword;
				ngModel.$setValidity("pwVerify", valueOne === valueTwo);
			};
			*/
			/*
			function myValidation(value){
				var verified = false;
				var valueOne = $scope.uPassword;
				var valueTwo = $scope.cPassword;

				if (valueOne === valueTwo){
					mCtrl.$setValidity('match', true);
					verified = true;
				} else {
					mCtrl.$setValidity('match', false);
				}
				return value;
			}
			mCtrl.$parsers.push(myValidation);
			*/
