describe("Component: Home", function () {

	var $componentController,vm;

	beforeEach(module('oss'));

	beforeEach(inject(function(_$componentController_){
		$componentController = _$componentController_;
		bindings = {};
		vm = $componentController('ossHome', null, bindings);
	}));

	it("should have an onInit function", function () {
		expect(vm.$onInit).toEqual(jasmine.any(Function));
	});

	it("should have mapStateToThis function", function () {
		expect(vm.mapStateToThis).toEqual(jasmine.any(Function));
	});
});