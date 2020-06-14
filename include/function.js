        // 메뉴의 사진바꾸기 함수
        var imgArray = new Array();
        imgArray[0] = "include/food1.jpg";
        imgArray[1] = "include/food1-2.jpg";
        imgArray[2] = "include/food1-3.jpg";
        imgArray[3] = "include/food1-4.jpg";
        imgArray[4] = "include/food1-5.jpg";
        imgArray[5] = "include/food1-6.jpg";
        imgArray[6] = "include/food1-7.jpg";
        function showImage()
        {
            var imgNum = Math.round(Math.random()*6);
            var objImg = document.getElementById("introImg");
            objImg.src = imgArray[imgNum];
            setTimeout("showImage()", 3000);
        }
        // 메뉴 두 번째 사진 바꾸기 함수 필요 없을 듯...
        // var imgArray2 = new Array();
        // imgArray2[0] = "김치찌개.jpg";
        // imgArray2[1] = "냉면.jpg";
        // imgArray2[2] = "닭갈비.jpg";
        // imgArray2[3] = "돈까스.jpg";
        // imgArray2[4] = "돼지국밥.jpg";
        // imgArray2[5] = "된장찌개.jpg";
        // imgArray2[6] = "삼겹살.jpg";
        // function showImage2()
        // {
        //     var imgNum2 = Math.round(Math.random()*6);
        //     var objImg2 = document.getElementById("introImg2");
        //     objImg2.src = imgArray2[imgNum2];
        //     setTimeout("showImage2()", 3000);
        // }
        // 즐겨찾기 함수
        function bookmarksite(title,url)
        {
           // Internet Explorer
           if(document.all)
           {
              window.external.AddFavorite(url, title);
           }
           // Google Chrome
           else if(window.chrome)
           {
              alert("Ctrl+D키를 누르시면 즐겨찾기에 추가하실 수 있습니다.");
           }

           // Firefox
           else if (window.sidebar) // firefox
           {
              window.sidebar.addPanel(title, url, "");
           }

           // Opera
           else if(window.opera && window.print)
           { // opera
              var elem = document.createElement('a');
              elem.setAttribute('href',url);
              elem.setAttribute('title',title);
              elem.setAttribute('rel','sidebar');
              elem.click();
           }
           else if( window.external )
           {
              window.external.AddFavorite(url, title);
            }
        }
        //구현되지 않는 함수들
        function unknown()
		{
			alert("구현되지 않은 기능입니다.");
		}
        // 이상형 월드컵 함수
