describe('makeEditable', function() {

  var scope,
    compiled,
    element,
    textToEdit,
    html;

  beforeEach(module("editApp"));
  beforeEach(inject(function($rootScope, $compile) {

   var textToEdit = '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel temporibus quis doloribus a, aspernatur sit quidem consequatur eos saepe blanditiis assumenda, iusto eaque molestiae possimus consectetur nemo quod eius numquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta incidunt laboriosam, numquam, at ducimus obcaecati omnis minus doloremque, nesciunt modi dolorem temporibus facere saepe molestias ipsam qui similique vero cumque.</p>';
   var html = "";
   html += '<div makeEditable><input ng-init="editable=false" type="button" value="Edit" ng-click="editable=true" ng-show="!editable"><input type="button" value="Save" ng-click="editable=false" ng-show="editable"><span contenteditable="{{editable}}" ng-class="{ \'editable\': editable}">' + textToEdit + '</span></div>';
   scope = $rootScope.$new();
   compiled = $compile(html);
   element = compiled(scope);
   scope.$digest();
  
  }));
 
  it("should contain two buttons", function() {
  
    expect(element.find('input').length).toEqual(2);

    expect(element.find('input').attr('value')).toEqual('Edit');

  });

  it("span element's contenteditable attribute should equal true when the editable variable changes to true", function() {

    expect(element.find('span').attr('contenteditable')).toEqual('false');
      
    scope.editable = true;

    scope.$digest();

    expect(element.find('span').attr('contenteditable')).toEqual('true');

  });  

});