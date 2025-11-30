# IControl.OnMouseEnter

IControl.OnMouseEnter
-


# OnMouseEnter


## Синтаксис


OnMouseEnter(Sender: Object; Args: [IMouseEventArgs](../IMouseEventArgs/IMouseEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие;


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnMouseEnter наступает
 в момент входа курсора мыши в область компонента.


## Комментарии


События, связанные с курсором мыши, происходят в следующем порядке:


	- OnMouseEnter


	- [OnMouseMove](IControl.OnMouseMove.htm)


	- [OnMouseHover](IControl.OnMouseHover.htm) / [OnMouseDown](IControl.OnMouseDown.htm)
	 / [OnMouseWheel](IControl.OnMouseWheel.htm)


	- [OnMouseUp](IControl.OnMouseUp.htm)


	- [OnMouseLeave](IControl.OnMouseLeave.htm)


См. также:


[IControl](IControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
