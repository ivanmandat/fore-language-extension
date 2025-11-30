# ITabView.SelectionMovementDirection

ITabView.SelectionMovementDirection
-


# ITabView.SelectionMovementDirection


## Синтаксис


SelectionMovementDirection : [TabSelectionMovementDirection](../../Enums/TabSelectionMovementDirection.htm);


## Описание


Свойство SelectionMovementDirection определяет направление перехода выделения после нажатия клавиши ENTER.


## Комментарии


По умолчанию SelectionMovementDirection установлено значение Down. При нажатии клавиш SHIFT+ENTER выделение перемещается в противоположном направлении относительно SelectionMovementDirection. Если выделено несколько ячеек, то при вводе значений выделение перемещается внутри выделенного диапазона. Если SelectionMovementDirection задано значение None, то после нажатия ENTER выделение остается на месте.


См. также:


[ITabView](ITabView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
