# ScrollBar.getIsMoved

ScrollBar.getIsMoved
-


# ScrollBar.getIsMoved


## Синтаксис


getIsMoved ();


## Описание


Метод getIsMoved определяет
 признак передвижения ползунка по полосе прокрутки.


## Комментарии


Метод getIsMoved возвращает
 true, если ползунок находится
 в движении. Если ползунок стоит на месте, возвращает false.


## Пример


Для выполнения примера подключите ссылки на библиотеку PP.js и таблицы
 визуальных стилей PP.css. Создадим полосу прокрутки с наименованием «hScrollBar».
 Добавим обработчик события MoveScroll
 для полосы прокрутки:


    <div id="scroll1"></div>
    <div id="label1"></div>
    <script type="text/javascript">
        var hScrollBar = new PP.Ui.ScrollBar({ // полоса прокрутки
            ParentNode: document.getElementById("scroll1")
        });
        //Размер полосы прокрутки и ее ползунка:
        hScrollBar.setSize(200, 16);
        hScrollBar.setDraggerSize(30);
        hScrollBar.updateSize();
        //Добавляем заголовок
        var label = new PP.Ui.Label({
            ParentNode: "label1",
        Content: "Value"
        });
        label.setTop(30);
        //Добавляем обработчик события MoveScroll:
        hScrollBar.MoveScroll.add(function (sender, args) {
            //Отображение в заголовке текущей позиции ползунка:
            if (hScrollBar.getIsMoved() == true) { label.setContent(hScrollBar.getValue()) };
        });
</script>
После выполнения примера на html-странице будет размещен экземпляр компонента
 [ScrollBar](../../Components/ScrollBar/ScrollBar.htm). При
 передвижении бегунка мышью в заголовке будет отображена текущая позиция
 ползунка.


![](../../Components/ScrollBar/ScrollBar4.gif)


См. также:


[ScrollBar](ScrollBar.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
