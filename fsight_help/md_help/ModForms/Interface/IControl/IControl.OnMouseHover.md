# IControl.OnMouseHover

IControl.OnMouseHover
-


# OnMouseHover


## Синтаксис


OnMouseHover(Sender: Object; Args: [IMouseEventArgs](../IMouseEventArgs/IMouseEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие.


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnMouseHover наступает
 при задержке курсора мыши в области компонента.


## Комментарии


Данное событие генерируется, если курсор мыши находится в пределах области
 компонента размером 4*4 пикселя в течение 400 миллисекунд.


События, связанные с курсором мыши, происходят в следующем порядке:


	- [OnMouseEnter](IControl.OnMouseEnter.htm)


	- [OnMouseMove](IControl.OnMouseMove.htm)


	- OnMouseHover / [OnMouseDown](IControl.OnMouseDown.htm)
	 / [OnMouseWheel](IControl.OnMouseWheel.htm)


	- [OnMouseUp](IControl.OnMouseUp.htm)


	- [OnMouseLeave](IControl.OnMouseLeave.htm)


См. также:


[IControl](IControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
