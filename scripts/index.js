window.onload=function(){
	var ROW=15;
	var width=(600-ROW)/ROW+'px';
	var el,el2;
	var panduan=function(id,dic){
		var x=Number(id.split('_')[0]);
		var y=Number(id.split('_')[1]);
		var hang=1;
		var tx,ty;
		tx=x;ty=y;
		while( dic[ tx+'_'+(ty+1)] ){hang++;ty++;};
		tx=x;ty=y;
		while( dic[ tx+'_'+(ty-1)] ){hang++;ty--;};
		if(hang>=5)return true; 

		
		var lie=1;
		tx=x;ty=y;
		while( dic[ (tx-1)+'_'+ty] ){lie++;tx--;};
		tx=x;ty=y;
		while( dic[ (tx+1)+'_'+ty ] ){lie++;tx++;};
		if(lie>=5)return true;

		var zx=1;
		tx=x;ty=y;
		while( dic[ (tx-1)+'_'+(ty+1)] ){zx++;ty++;tx--;};
		tx=x;ty=y;
		while( dic[ (tx+1)+'_'+(ty-1)] ){zx++;ty--;tx++;};
		if(zx>=5)return true;



		var yx=1;
		tx=x;ty=y;
		while( dic[ (tx-1)+'_'+(ty-1)] ){yx++;ty--;tx--;};
		tx=x;ty=y;
		while( dic[ (tx+1)+'_'+(ty+1)] ){yx++;ty++;tx++};
		if(yx>=5)return true;

		return false;



	};
	// --------------------------画方格----------------------
	var sence=document.getElementById('sence');
	for(var i=0;i<ROW;i++){
			el=document.createElement('div');
			el.style.position='absolute';
			el.style.top=(600/ROW)/2+(600/ROW)*i+'px';
			el.style.width='600px';
			el.style.height='1px';
			el.style.background='black';
			sence.appendChild(el);

			el2=document.createElement('div');
			el2.style.width='1px';
			el2.style.height='600px';
			el2.style.background='black';
			el2.style.position='absolute';
			el2.style.left=(600/ROW)/2+(600/ROW)*i+'px';
			sence.appendChild(el2);
	}

	
	// -------------------画块-------------------------------------
	for(var i=0;i<ROW;i++){
		for(var j=0;j<ROW;j++){
			var child=document.createElement('div');
			child.setAttribute('class','block');
			child.setAttribute('id',i+'_'+j);
			child.style.width=width;
			child.style.height=width;
			sence.appendChild(child);
		}
	}

	var blocks=document.getElementsByClassName('block');
	var kaiguan=true;
	var dict1={};
	var dict2={};

		for(var i=0;i<blocks.length;i++){
			
			 blocks[i].onclick=function(){
			 	if(this.hasAttribute('aa')){return;}
				if(kaiguan){
					// this.style.background='white';
					this.style.boxShadow='0 0 5px #0a3b09';
					this.style.backgroundImage='url(./img/bai.jpg)';

					kaiguan=false;
					var id=this.getAttribute('id');
					dict1[id]=true;
					if(panduan(id,dict1)){
						alert('白色赢了！');
					}

				}else{
					// this.style.background='black';
					this.style.boxShadow='0 0 5px #0a3b09';
					this.style.backgroundSize='cover';

					this.style.backgroundImage='url(./img/hei.jpg)';
					kaiguan=true;
					var id=this.getAttribute('id');
					dict2[id]=true;
					if(panduan(id,dict2)){
						alert('黑色赢了！');
					}
				}
				this.setAttribute('aa','true');
			};		
		}
	

	


ROW=15;
	var width=(600-ROW)/ROW+'px';
	var el,el2;
	// 画方格
	var sence=document.getElementById('sence');
	for(var i=0;i<ROW;i++){
		el=document.createElement('div');
		el.style.position='absolute';
		el.style.top=(600/ROW)/2+(600/ROW)*i+'px';
		el.style.width='600px';
		el.style.height='1px';
		el.style.background='black';
		sence.appendChild(el);

		el2=document.createElement('div');
		el2.style.position='absolute';
		el2.style.left=(600/ROW)/2+(600/ROW)*i+'px';
		el2.style.width='1px';
		el2.style.height='600px';
		el2.style.background='black';
		sence.appendChild(el2);
	}
	var panduan=function(id,dic){
		var x=id.split('_')[0];
		var y=id.split('_')[1];
		var tx,ty;
		tx=x;ty=y;
		var hang=1;
		while(dic[tx+'_'+ty+1]){hang++;ty++};
		tx=x;ty=y;
		while(dic[tx+'_'+ty-1]){hang++,ty--};
		if(hang>=5)return true;

		var lie=1;
		tx=x;ty=y;
		while(dic[tx+1+'_'+ty]){lie++;tx++};
		tx=x;ty=y;
		while(dic[tx-1+'_'+ty]){lie++;tx--};
		if(lie>=5)return true;

		var zuo=1;
		tx=x;ty=y;
		while(dic[tx+1+'_'+ty-1]){zuo++;tx++;ty--};
		tx=x;ty=y;
		while(dic[tx-1+'_'+ty+1]){zuo++;tx--;ty++};
		if(zuo>=5)return true;

		var you=1;
		tx=x;ty=y;
		while(dic[tx+1+'_'+ty+1]){you++;ty++;tx++};
		tx=x;ty=y;
		while(dic[tx-1+'_'+ty-1]){you++;tx--;ty--};
		if(you>=5)return true;




	}

	for(var i=0;i<ROW;i++){
		for(var j=0;j<ROW;j++){
			var child=document.createElement('div');
			child.setAttribute('class','block');
			child.setAttribute('id',i+'_'+j);
			child.style.width=width;
			child.style.height=width;
			sence.appendChild(child);
		}
	}

	var blocks=document.getElementsByClassName('block');
	var dict1={},dict2={},kaiguan=true;
	for(var i=0;i<blocks.length;i++){
		blocks[i].onclick=function(){
			if(this.hasAttribute('aa')){return;}
			if(kaiguan){
				this.style.boxShadow='0 0 5px #0a3b09';
				this.style.backgroundImage='url(./img/bai.jpg)';
				kaiguan=false;
				this.style.backgroundSize='cover';
				var id=this.getAttribute('id');
				dict1[id]=true;
				if(panduan(id,dict1)){
					alert('白色赢了！');
				}
			}else{
				this.style.boxShadow='0 0 5px #0a3b09';
				this.style.backgroundImage='url(./img/hei.jpg)';
				kaiguan=true;
				this.style.backgroundSize='cover';
				var id=this.getAttribute('id');
				dict2[id]=true;
				if(panduan(id,dict2)){
					alert('黑色赢了！');
				}
			}
			this.setAttribute('aa','true');
		};
		
		
	}
	


	

};