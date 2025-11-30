# MouseClickEventArgs.Create

MouseClickEventArgs.Create
-


# MouseClickEventArgs.Create


## Синтаксис


Create(Button: Integer; ShiftState: Integer; Point: [IPoint](../../Interface/IPoint/IPoint.htm));


## Параметры


Button - код кнопки мыши, которая нажата, либо отпущена.


ShiftState - код состояния вспомогательных клавиш, таких как SHIFT, ALT и CTRL, во время выполнения действий мышью. Для установки значения используйте перечислимый тип [ShiftState](../../Enums/ShiftState.htm).


Point - координаты курсора мыши в клиентской части компонента.


## Описание


Конструктор Create создает аргумент события, возникающего, когда была нажата или отпущена кнопка мыши.


См. также:


[MouseClickEventArgs](MouseClickEventArgs.htm)


[ShiftState](../../Enums/ShiftState.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
