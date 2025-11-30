# ScrollBar.scrollBy

ScrollBar.scrollBy
-


# ScrollBar.scrollBy


## Синтаксис


scrollBy (value, percent, fireEvent);


## Параметры


value. Расстояние на которое
 будет перемещен ползунок от его текущей позиции;


percent. Определяет, какое
 значение задано в параметре value:
 true - процентное, false
 - абсолютное. По умолчанию задается абсолютное значение в пикселях;


fireEvent.  Определяет,
 генерируется ли при выполнении метода событие [ScrollBar.MoveScroll](ScrollBar.MoveScroll.htm).
 Если установлено значение true,
 событие будет генерироваться. По умолчанию событие не генерируется.


## Описание


Метод scrollBy перемещает ползунок
 на определенное расстояние от его текущей позиции.


## Пример


Для выполнения примера в теге <head> добавьте ссылки на библиотеку
 PP.js и визуальные стили PP.css. Создадим полосу прокрутки.


<script type="text/javascript">
    var hScrollBar = new PP.Ui.ScrollBar({
        ParentNode: document.getElementById("scroll1")
   });
    hScrollBar.setSize(200, 16);
    hScrollBar.setDraggerSize(20);
    hScrollBar.updateSize();
    hScrollBar.setValue(20, false);
    hScrollBar.scrollBy(30, true);
</script>
После выполнения примера на html-странице будет размещена полоса прокрутки,
 ползунок которой расположен в центре.


См. также:


[ScrollBar](ScrollBar.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
