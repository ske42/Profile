
import Mails from _Mails.js;
import Phone from  _Phones.js

export default class Handler{

function Html_Form_Handler()
{
	var form = $("form")[0];
	console.log(form);
	var data = {};
	var fild;
	var fildId;
	for(i=0; i<(form.elements.length)-1; i++)
	{
		alert();
         fild = form.elements[i].value;
         console.log(fild);
         fildId = form.elements[i].id;
         data
         {
         	from: fildId,
         	value: fild
         }
   	};
   	return data;
}

}