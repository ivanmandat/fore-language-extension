# ScrollBar.MovedScroll

ScrollBar.MovedScroll
-


# ScrollBar.MovedScroll


## Синтаксис


MovedScroll: function (sender,args)


## Параметры


sender. Источник события;


args. Информация
 о событии.


## Описание


Событие MovedScroll наступает
 после перемещения ползунка по полосе прокрутки.


## Пример


Для выполнения примера подключите ссылки на библиотеку PP.js и таблицы
 визуальных стилей PP.css. Создадим компонент [ScrollBar](ScrollBar.htm).
 Добавим обработчик события MovedScroll:


<script type="text/javascript">
    var hScrollBar = new PP.Ui.ScrollBar({
        ParentNode: document.getElementById("scroll1")
    });
    hScrollBar.setSize(200, 16);
    hScrollBar.setDraggerSize(30);
    hScrollBar.updateSize();
    hScrollBar.MovedScroll.add(function (sender, args) {
        alert("Позиция: " + hScrollBar.getValue());
    });
</script>
После выполнения примера на html-странице будет размещена полоса прокрутки.
 После изменении позиции ползунка при помощи кнопок прокрутки или перетаскивания
 на экран будет выведено сообщение с информацией о текущей позиции ползунка
 на полосе прокрутки.


См. также:


[ScrollBar](ScrollBar.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
