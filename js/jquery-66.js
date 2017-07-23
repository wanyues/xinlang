function fnTab(obj,even){
		var oBox=document.getElementsByClassName(obj);
		var aInp=oBox.getElementsByTagName('input');
		var aDiv=oBox.getElementsByTagName('div');
		for(var i=0;i<aInp.length;i++){
			
			aInp[i].index=i;
			
			aInp[i][even]=function(){
				
				for(var i=0;i<aInp.length;i++){
					aInp[i].className='';
					aDiv[i].className='';
				}
				
				this.className='active';
				//alert(this.index);
				aDiv[this.index].className='show';	
			};	
		}
	}	