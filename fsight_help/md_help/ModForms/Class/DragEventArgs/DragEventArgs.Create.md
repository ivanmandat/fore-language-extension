# DragEventArgs.Create

DragEventArgs.Create
-


# DragEventArgs.Create


## Синтаксис


Create(AllowedEffect: [DragDropEffects](../../Enums/DragDropEffects.htm); Data: Variant; KeyState: Integer; Point: [IPoint](../../Interface/IPoint/IPoint.htm); Effect: [DragDropEffects](../../Enums/DragDropEffects.htm));


## Параметры


AllowedEffect - вид курсора при текущем выполнении Drag&Drop.


Data - объект, перетаскивание которого осуществляется.


KeyState - состояние клавиш SHIFT, CTRL, ALT, а также состояние кнопок мыши.


Point - координаты курсора мыши в клиентской части компонента.


Effect - тип перетаскивания.


## Описание


Конструктор Create создает аргумент событий, происходящих при перетаскивании объектов с использованием механизма Drag&Drop.


См. также:


[DragEventArgs](DragEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
