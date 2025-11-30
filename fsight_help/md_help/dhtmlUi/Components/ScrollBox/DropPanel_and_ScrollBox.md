# Созданиe раскрывающейся панели с полосами прокрутки

Созданиe раскрывающейся панели с полосами прокрутки
-


# Созданиe раскрывающейся панели с полосами прокрутки


Для выполнения примера в теге HEAD должны быть добавлены ссылки на библиотеку PP.js и таблицы визуальных стилей PP.css. Чтобы на панели появились полосы прокрутки, размеры содержимого должны превышать размеры панели. Создадим компонент [DropPanel](../DropPanel/DropPanel.htm) с полосами прокрутки:


<body>


<!--Размещаем кнопку, которая раскрывает панель-->


<div id="btn1"></div>


    <script type="text/javascript">


            var drop = new PP.DropPanel({//Создаем раскрывающуюся панель


               //Задаем содержимое панели - текстовую область с указанными размерами


                Content: "<div style='width: 250px; height: 700px'><b>ScrollBox in DropPanel</b><br/>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. </div>"});


            drop.setWidth(150);//Ширина панели


            drop.setHeight(200);//Высота панели


            var btn = new PP.Button({//Создаем кнопку


                 ParentNode: document.getElementById("btn1"),//Идентификатор в теге div


                 Content: "Show DropPanel"


            });


//Добавляем обработчик события Click для кнопки:


          btn.Click.add(function(sender, args)


          {


             drop.show(10, 30, true); //Раскрытие панели


          });


    </script>


</body>


После выполнения примера на html-странице появится кнопка «Show DropPanel». При нажатии на кнопку раскроется панель с расположенными справа и снизу полосами прокрутки:


![](ScrollBox2.gif)


Чтобы полосы прокрутки были слева и сверху, для свойства [IsRTL](../../Classes/Control/Control.IsRTL.htm) установите значение true


См. также:


[ScrollBox](ScrollBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
