describe("Module: Home", function () {

	var $stateRegistry;

	beforeEach(module('oss'));

	beforeEach(inject(function(_$stateRegistry_){
		$stateRegistry = _$stateRegistry_;
	}));

	it("should have a home state", function () {
		expect($stateRegistry.states.home).toBeDefined();
	});
});