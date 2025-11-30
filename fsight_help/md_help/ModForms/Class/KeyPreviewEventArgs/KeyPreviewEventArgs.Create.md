# KeyPreviewEventArgs.Create

KeyPreviewEventArgs.Create
-


# KeyPreviewEventArgs.Create


## Синтаксис


Create(Key: Integer; ShiftState: Integer);


## Параметры


Key - код клавиши клавиатуры.


ShiftState - код нажатия вспомогательных клавиш (SHIFT, ALT и CTRL). Для установки значения используйте перечислимый тип [ShiftState](../../Enums/ShiftState.htm). Если использование вспомогательных клавиш не требуется, необходимо в качестве значения передавать "0".


## Описание


Конструктор Create создает аргумент события [OnKeyPreview](../../Interface/IControl/IControl.OnKeyPreview.htm).


См. также:


[KeyPreviewEventArgs](KeyPreviewEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
