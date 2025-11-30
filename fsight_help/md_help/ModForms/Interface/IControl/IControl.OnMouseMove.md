# IControl.OnMouseMove

IControl.OnMouseMove
-


# OnMouseMove


## Синтаксис


OnMouseMove(Sender: Object; Args: [IMouseEventArgs](../IMouseEventArgs/IMouseEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие.


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnMouseMove наступает
 при перемещении курсора мыши над компонентом.


## Комментарии


События, связанные с курсором мыши, происходят в следующем порядке:


	- [OnMouseEnter](IControl.OnMouseEnter.htm)


	- OnMouseMove


	- [OnMouseHover](IControl.OnMouseHover.htm) / [OnMouseDown](IControl.OnMouseDown.htm)
	 / [OnMouseWheel](IControl.OnMouseWheel.htm)


	- [OnMouseUp](IControl.OnMouseUp.htm)


	- [OnMouseLeave](IControl.OnMouseLeave.htm)


См. также:


[IControl](IControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
