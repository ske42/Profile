import Fild from "_Fild.js";
//have filds 
//number - phone number
// main - true if user said that it is main number
export default class Phone extends Fild
{
	constructor(id,value="",type,main=false)
	{
		super(id,value);
        var r_re_for_mobilesPhone = /[\(+7)8]\d{10}/
        var r_re_for_homePhone = /\d{6}/
        if(value.match(r_re_for_homePhone)||
        	value.match(r_re_for_mobilesPhone)) //check if there is correct phone number
        {
            this.number = value;
            this.type = type;
         }
        
        this.main = main;

	}
}
	