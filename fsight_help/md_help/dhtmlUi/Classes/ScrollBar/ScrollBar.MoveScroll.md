# ScrollBar.MoveScroll

ScrollBar.MoveScroll
-


# ScrollBar.MoveScroll


## Синтаксис


MoveScroll: function (sender,args)


## Параметры


sender. Источник события;


args. Информация
 о событии.


## Описание


Событие MoveScroll наступает
 при перемещении ползунка по полосе прокрутки.


## Пример


Для выполнения примера подключите ссылки на библиотеку PP.js и таблицы
 визуальных стилей PP.css. Создадим две одинаковые полосы прокрутки с наименованиями
 «hScrollBar» и «vScrollBar». Добавьте обработчик события MoveScroll
 для полосы прокрутки с наименованием «hScrollBar»:


    <script type="text/javascript">
        var hScrollBar = new PP.Ui.ScrollBar({ //1-ая полоса прокрутки
            ParentNode: document.getElementById("scroll1")
        });
        //Размер 1-ой полосы прокрутки и ее ползунка :
        hScrollBar.setSize(200, 16);
        hScrollBar.setDraggerSize(30);
        hScrollBar.updateSize();
        var vScrollBar = new PP.Ui.ScrollBar({//2-ая полоса прокрутки
            ParentNode: document.getElementById("scroll2")
        });
        //Размер 2-ой полосы прокрутки и ее ползунка :
        vScrollBar.setDraggerSize(30);
        vScrollBar.setTop(23);
        vScrollBar.setSize(200, 16);
        vScrollBar.updateSize();
        //Добавляем обработчик события MoveScroll:
        hScrollBar.MoveScroll.add(function (sender, args) {
            //Передвижение ползунка второй полосы прокрутки в позицию ползунка первой полосы прокрутки:
            vScrollBar.scrollTo(hScrollBar.getValue());
        });
</script>
После выполнения примера на html-странице будут размещены 2 экземпляра
 компонента [ScrollBar](../../Components/ScrollBar/ScrollBar.htm).
 При передвижении ползунка компонента с наименованием «hScrollBar»
 ползунок второго компонента будет перемещен на такое же расстояние.


См. также:


[ScrollBar](ScrollBar.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
