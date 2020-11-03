$('#materialIndeterminate2').prop('indeterminate', true);
Disabled state
Add the disabled boolean attribute to the <input> element and then the custom indicator and label description will be automatically styled and blocked.

A disabled <input> element is unusable and un-clickable.

Default checkbox
Default unchecked disabled
Default checked disabled
HTML
<!-- Default unchecked disabled -->
<div class="custom-control custom-checkbox">
  <input type="checkbox" class="custom-control-input" id="defaultUncheckedDisabled2" disabled>
  <label class="custom-control-label" for="defaultUncheckedDisabled2">Default unchecked disabled</label>
</div>

<!-- Default checked disabled -->
<div class="custom-control custom-checkbox">
  <input type="checkbox" class="custom-control-input" id="defaultCheckedDisabled2" checked disabled>
  <label class="custom-control-label" for="defaultCheckedDisabled2">Default checked disabled</label>
</div>
Material checkbox 
To provide a proper cursor styling for the material checkbox, in addition to setting the disabled attribute you’ll also need to add the .disabled class to the <label> element.



HTML
<!-- Material unchecked disabled -->
<div class="form-check">
  <input type="checkbox" class="form-check-input" id="materialUncheckedDisabled2" disabled>
  <label class="form-check-label" for="materialUncheckedDisabled2">Material unchecked disabled</label>
</div>

<!-- Material checked disabled -->
<div class="form-check">
  <input type="checkbox" class="form-check-input" id="materialCheckedDisabled" checked="checked2" disabled>
  <label class="form-check-label" for="materialCheckedDisabled2">Material checked disabled</label>
</div>
Inline
Default checkboxes
Group default checkboxes or radios on the same horizontal row by adding the .custom-control-inline class to any parent element of the <input> element.


1
 
2
 
3
HTML
<!-- Default inline 1-->
<div class="custom-control custom-checkbox custom-control-inline">
  <input type="checkbox" class="custom-control-input" id="defaultInline1">
  <label class="custom-control-label" for="defaultInline1">1</label>
</div>

<!-- Default inline 2-->
<div class="custom-control custom-checkbox custom-control-inline">
  <input type="checkbox" class="custom-control-input" id="defaultInline2">
  <label class="custom-control-label" for="defaultInline2">2</label>
</div>

<!-- Default inline 3-->
<div class="custom-control custom-checkbox custom-control-inline">
  <input type="checkbox" class="custom-control-input" id="defaultInline3">
  <label class="custom-control-label" for="defaultInline3">3</label>
</div>
Material checkboxes 
Group material checkboxes or radios on the same horizontal row by adding the .form-check-inline class to any parent element of the <input> element.


 
 
HTML
<!-- Material inline 1 -->
<div class="form-check form-check-inline">
  <input type="checkbox" class="form-check-input" id="materialInline1">
  <label class="form-check-label" for="materialInline1">1</label>
</div>

<!-- Material inline 2 -->
<div class="form-check form-check-inline">
    <input type="checkbox" class="form-check-input" id="materialInline2">
    <label class="form-check-label" for="materialInline2">2</label>
</div>

<!-- Material inline 3 -->
<div class="form-check form-check-inline">
    <input type="checkbox" class="form-check-input" id="materialInline3">
    <label class="form-check-label" for="materialInline3">3</label>
</div>
Introduction
Checked state
Indeterminate state
Disabled state
Inline
