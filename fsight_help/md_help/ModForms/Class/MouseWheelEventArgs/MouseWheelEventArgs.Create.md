# MouseWheelEventArgs.Create

MouseWheelEventArgs.Create
-


# MouseWheelEventArgs.Create


## Синтаксис


Create(ShiftState: Integer; WheelDelta: Integer; Point: [IPoint](../../Interface/IPoint/IPoint.htm));


## Параметры


ShiftState - код состояния вспомогательных клавиш, таких как SHIFT, ALT и CTRL, во время выполнения действий мышью. Для установки значения используйте перечислимый тип [ShiftState](../../Enums/ShiftState.htm).


WheelDelta - изменение положения колесика мыши.


Point - координаты курсора мыши в клиентской части компонента.


## Описание


Конструктор Create создает аргумент события, возникающего во время прокрутки колеса мыши.


См. также:


[MouseWheelEventArgs](MouseWheelEventArgs.htm)


[ShiftState](../../Enums/ShiftState.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
