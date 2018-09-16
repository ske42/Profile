function Html_Form_Handler()
{
	var form = $("form")[0];
	console.log(form);
	var data = [];
	var fild;
	var fildId;
	for(i=0; i<4; i++)
	{
		alert();
         fild = form.elements[i].value;
         console.log(fild);
         fildId = form.elements[i].id;
         data.push({
         	from: fildId,
         	value: fild,
         });
   	};
   	//return data;
}