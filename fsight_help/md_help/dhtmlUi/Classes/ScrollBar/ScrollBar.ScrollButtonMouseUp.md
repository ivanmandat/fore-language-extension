# ScrollBar.ScrollButtonMouseUp

ScrollBar.ScrollButtonMouseUp
-


# ScrollBar.ScrollButtonMouseUp


## Синтаксис


ScrollButtonMouseUp : function (sender,args)


## Параметры


sender. Источник события;


args. Информация
 о событии;


## Описание


Событие ScrollButtonMouseUp
 наступает при отжатии кнопки мыши, после нажатия кнопки перемещения ползунка
 по полосе прокрутки.


## Пример


Для выполнения примера подключим ссылки на библиотеку PP.js и таблицы
 визуальных стилей PP.css. Создадим три одинаковые полосы прокрутки с наименованиями
 «hScrollBar», «vScrollBar» и «zScrollBar». Добавим обработчики событий
 ScrollButtonMouseUp и ScrollButtonMouseDown
 для полосы прокрутки с наименованием «hScrollBar»:


    <div id="scroll1"></div>
    <div id="scroll2"></div>
    <div id="scroll3"></div>
    <script type="text/javascript">
        var hScrollBar = new PP.Ui.ScrollBar({ //1-ая полоса прокрутки
            ParentNode: document.getElementById("scroll1")
        });
        //Размер 1-ой полосы прокрутки и ее ползунка :
        hScrollBar.setSize(200, 16);
        hScrollBar.setDraggerSize(30);
        hScrollBar.updateSize();
        var vScrollBar = new PP.Ui.ScrollBar({ //2-ая полоса прокрутки
            ParentNode: document.getElementById("scroll2")
        });
        //Размер 2-ой полосы прокрутки и ее ползунка :
        vScrollBar.setDraggerSize(30);
        vScrollBar.setTop(30);
        vScrollBar.setSize(200, 16);
        vScrollBar.updateSize();
        var zScrollBar = new PP.Ui.ScrollBar({ //3-я полоса прокрутки
            ParentNode: document.getElementById("scroll3")
        });
        //Размер 3-й полосы прокрутки и ее ползунка :
        zScrollBar.setDraggerSize(30);
        zScrollBar.setTop(50);
        zScrollBar.setSize(200, 16);
        zScrollBar.updateSize();
        //Добавляем обработчик события ScrollButtonMouseDown:
        hScrollBar.ScrollButtonMouseDown.add(function (sender, args) {
            //Передвижение ползунка второй полосы прокрутки в позицию ползунка первой полосы прокрутки, при нажатии на кнопку перемещения ползунка:
            vScrollBar.setValue(hScrollBar.getValue());
        });
        //Добавляем обработчик события ScrollButtonMouseUp:
        hScrollBar.ScrollButtonMouseUp.add(function (sender, args) {
            //Передвижение ползунка третьей полосы прокрутки в позицию ползунка первой полосы прокрутки, при отжатии кнопки перемещения ползунка:
            zScrollBar.setValue(hScrollBar.getValue());
        });
</script>
После выполнения примера на html-странице будут размещены 3 экземпляра
 компонента [ScrollBar](../../Components/ScrollBar/ScrollBar.htm).
 При нажатии кнопки передвижения ползунка компонента с наименованием «hScrollBar»
 ползунки второго и третьего компонента займут позиции начала и конца пути
 первого ползунка .


До нажатия на кнопку:


![](../../Components/ScrollBar/ScrollBar2.gif)


После нажатия на кнопку:


![](../../Components/ScrollBar/ScrollBar3.gif)


См. также:


[ScrollBar](ScrollBar.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
