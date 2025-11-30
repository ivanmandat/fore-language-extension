# ScrollBar.scrollTo

ScrollBar.scrollTo
-


# ScrollBar.scrollTo


## Синтаксис


scrollTo (position, percent, fireEvent);


## Параметры


position. Расстояние от левого
 края полосы прокрутки до позиции, в которой будет размещен ползунок;


percent. Определяет, какое
 значение задано в параметре value:
 true - процентное, false
 - абсолютное. По умолчанию задается абсолютное значение в пикселях;


fireEvent.  Определяет,
 генерируется ли при выполнении метода событие [ScrollBar.MoveScroll](ScrollBar.MoveScroll.htm).
 Если установлено значение true,
 событие будет генерироваться. По умолчанию событие не генерируется.


## Описание


Метод scrollTo передвигает ползунок
 в установленную позицию.


## Пример


Для выполнения примера в теге <head> добавьте ссылки на библиотеку
 PP.js и визуальные стили PP.css. Создадим полосу прокрутки.


<script type="text/javascript">
    var hScrollBar = new PP.Ui.ScrollBar({
        ParentNode: document.getElementById("scroll1")
    });
    hScrollBar.setSize(200, 16);
    hScrollBar.setDraggerSize(50);
    hScrollBar.updateSize();
    hScrollBar.scrollTo(50);
</script>
После выполнения примера на html-странице будет размещена полоса прокрутки,
 ползунок которой смещен на 50 пикселей вправо.


См. также:


[ScrollBar](ScrollBar.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
