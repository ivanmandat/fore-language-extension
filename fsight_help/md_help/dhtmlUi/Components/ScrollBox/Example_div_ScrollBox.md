# Добавление полос прокрутки к содержимому тега div

Добавление полос прокрутки к содержимому тега div
-


# Добавление полос прокрутки к содержимому тега div


Для выполнения примера в теге HEAD должны быть добавлены ссылки на библиотеку
 PP.js и таблицы визуальных стилей PP.css. Добавим на html-страницу область
 с полосами прокрутки:


<body>


<!--Размещаем компонент
 ScrollBox и указываем его параметры-->


<div id="scrollholder1">


<!--Размещаем внутри
 компонента ScrollBox область с текстом, указываем ее размеры-->


        <div
 style='width: 300px; height: 700px'>


            <b>ScrollBox
 in DIV</b><br/>


            But
 I must explain to you how all this mistaken idea of denouncing pleasure
 and


            praising
 pain was born and I will give you a complete account of the system, and


            expound
 the actual teachings of the great explorer of the truth, the master-builder


            of
 human happiness. No one rejects, dislikes, or avoids pleasure itself,
 because


            it
 is pleasure, but because those who do not know how to pursue pleasure
 rationally


            encounter
 consequences that are extremely painful. Nor again is there anyone who


            loves
 or pursues or desires to obtain pain of itself, because it is pain, but
 because


            occasionally
 circumstances occur in which toil and pain can procure him some great


            pleasure.


        </div>


</div>


    <script type="text/javascript">


        var
 ScrBox= new PP.Ui.ScrollBox({//Создаем компонент
 ScrollBox


            ParentNode:
 document.body,


            Content:
 document.getElementById("scrollholder1"),


            Width:
 258,


            Height:
 355


        });


    </script>


</body>


После выполнения примера на html-странице будет размещена текстовая
 область с полосами прокрутки:


![](ScrollBox1.gif)


См. также:


[ScrollBox](ScrollBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
