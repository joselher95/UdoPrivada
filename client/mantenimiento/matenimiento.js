angular
  .module('privadas')
  .controller('MantenimientoCtrl', MantenimientoCtrl);
 
function MantenimientoCtrl($scope, $meteor, $reactive, $state, $stateParams, toastr) {
	$reactive(this).attach($scope);	

	this.user_id = $stateParams.id;
	//this.condomino = {};
	
	this.subscribe('mantenimientos', () =>{
		return [ {idusuario: this.user_id } ]
	});   
	
	this.helpers({
	  mantenimientos : () => {
		  return Mantenimientos.find();
	  }
	});

	/*
		
	this.condomino = $meteor.object(Condominos, {nombreUsuario: Meteor.user().username}).subscribe("condominos");
	
	$scope.condomino = $scope.$meteorCollection(function (){
    	return Condominos.find({nombreUsuario: Meteor.user().username});
	}).subscribe("condominos");
	*/
	
};