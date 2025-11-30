# IControl.OnMouseUp

IControl.OnMouseUp
-


# OnMouseUp


## Синтаксис


OnMouseUp(Sender: Object; Args: [IMouseClickEventArgs](../IMouseClickEventArgs/IMouseClickEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие.


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnMouseUp наступает
 при отпускании кнопки мыши, когда указатель находится в области компонента.


## Комментарии


События, связанные с курсором мыши, происходят в следующем порядке:


	- [OnMouseEnter](IControl.OnMouseEnter.htm)


	- [OnMouseMove](IControl.OnMouseMove.htm)


	- [OnMouseHover](IControl.OnMouseHover.htm) / [OnMouseDown](IControl.OnMouseDown.htm)
	 / [OnMouseWheel](IControl.OnMouseWheel.htm)


	- OnMouseUp


	- [OnMouseLeave](IControl.OnMouseLeave.htm)


См. также:


[IControl](IControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
