angular.module('app').controller('ManifestController',function($scope,storage,Vendor,ticker){
	
	function updateManifest(){
		var vendorData = storage.data.settings

		if(!vendorData)
			return

		//vendorData.products = storage.data.products
		$scope.manifest = (new Vendor(vendorData)).manifest
	}

	$scope.$on('ticker.rates',function(){
		updateManifest()
	})

	$scope.$on('storage.save',function(){
		updateManifest()
	})

	$scope.areSettingsComplete = storage.data.settings
	$scope.areProductsComplete = storage.data.products && storage.data.products.length>0


	if($scope.areSettingsComplete && $scope.areProductsComplete && ticker.isSet)
		updateManifest()

})