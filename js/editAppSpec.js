describe('makeEditable', function() {

  var scope,
    compiled,
    element,
    textToEdit,
    html;

  beforeEach(module("editApp"));
  beforeEach(inject(function($rootScope, $compile) {
  
   var html = "";
   html = '<div makeEditable>' + textToEdit + '</div>';
   
   scope = $rootScope.$new();
   textToEdit = '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel temporibus quis doloribus a, aspernatur sit quidem consequatur eos saepe blanditiis assumenda, iusto eaque molestiae possimus consectetur nemo quod eius numquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta incidunt laboriosam, numquam, at ducimus obcaecati omnis minus doloremque, nesciunt modi dolorem temporibus facere saepe molestias ipsam qui similique vero cumque.</p>';
   compiled = $compile(html);
   element = compiled(scope);
   scope.$digest();
  
  }));
 
  it("should initially contain one input button", function() {

   // this works  
    //expect(element.find('input').length).toEqual(0);

    //not passing
    //expect(element.find('input').attr('value')).toEqual('Edit');

        //scope.editable = false;
        //scope.$digest();

    /* In the code above.... I was planning to test for a change in the button values. 
      I was planning to change the value of scope.editable, run scope.$digest 
      and then check that the value had changed to save. I haven't been able
       to work with the input aside from checking the length. */

  });

  it("should render the element with contenteditable = false", function() {

    //expect(element.find('button').attr('ng-click')).toBeTruthy();
    //expect(element.find('button').attr('ng-click');
    //expect(element.find('span').attr('contenteditable')).toBeFalsy();
    //expect(element.find('span').attr('contenteditable')).toBeTruthy();
    //expect(element.find('span').text()).toContain(textToEdit);
  });   

  it("should render the element with contenteditable equal to true", function() {
   
    scope.editable = true;

    scope.$digest();

    expect(element.find('span').attr('contenteditable')).toEqual('true');

  });

});