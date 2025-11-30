# Пример создания компонента ScrollBar

Пример создания компонента ScrollBar
-


# Пример создания компонента ScrollBar


Для выполнения примера подключите библиотеку PP.js и таблицы визуальных стилей PP.css. Создадим вертикальную и горизонтальную полосу прокрутки.


<script type="text/javascript">


    var hScrollBar = new PP.Ui.ScrollBar({


        ParentNode: document.getElementById("scroll1")


    });


    hScrollBar.setSize(200, 16);


    hScrollBar.setDraggerSize(50);


    hScrollBar.updateSize();


    hScrollBar.setLeft(23);


    var vScrollBar = new PP.Ui.ScrollBar({


        ParentNode: document.getElementById("scroll2"),


        IsVertical: true


    });


    vScrollBar.setDraggerSize(50);


    vScrollBar.setTop(23);


    vScrollBar.setSize(16, 200);


    vScrollBar.updateSize();


</script>


После выполнения примера на html-странице будут размещены вертикальная и горизонтальная полоса прокрутки:


![](ScrollBar1.gif)


См. также:


[ScrollBar](ScrollBar.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
