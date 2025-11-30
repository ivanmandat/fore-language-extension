# IControl.OnMouseLeave

IControl.OnMouseLeave
-


# OnMouseLeave


## Синтаксис


OnMouseLeave(Sender: Object; Args: [IEventArgs](ForeSys.chm::/Interface/IEventArgs/IEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие.


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnMouseLeave наступает
 в момент выхода курсора мыши за пределы области компонента.


## Комментарии


События, связанные с курсором мыши, происходят в следующем порядке:


	- [OnMouseEnter](IControl.OnMouseEnter.htm)


	- [OnMouseMove](IControl.OnMouseMove.htm)


	- [OnMouseHover](IControl.OnMouseHover.htm) / [OnMouseDown](IControl.OnMouseDown.htm)
	 / [OnMouseWheel](IControl.OnMouseWheel.htm)


	- [OnMouseUp](IControl.OnMouseUp.htm)


	- OnMouseLeave


См. также:


[IControl](IControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
