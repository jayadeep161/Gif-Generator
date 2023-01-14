
        var text=document.querySelector('.form-control-lg');
        var search=document.querySelector('.btn-primary');
        var display=document.querySelector('.display');
        var count=0;
        function getText(){
            return text.value;
        }

        text.addEventListener('keyup',typo);

        function typo(){
            var txt=getText();
            searchgif(txt)
        }
        search.addEventListener('click',(e)=>{
            e.preventDefault();
            var txt=getText();
            searchgif(txt);
        });

        function searchgif(query){
            
            var APIKey='Sd0YoBw5qCEU9fk4XJyu30I0ivW8EcZi';
            var URL=`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${APIKey}&limit=14`;
            var xhr=new XMLHttpRequest();
            xhr.open('GET',URL,true);
            xhr.onload=function(){
                if(this.status==200){
                    var value=JSON.parse(this.response);
                    var arr=value.data;
                    display.innerHTML='';
                    for (var i in arr){
                        var img=document.createElement('img');
                        img.src=arr[i].images.fixed_height.url;
                        display.appendChild(img);
                    }
                }
            }
            xhr.send();
        }