# IControl.OnMouseDown

IControl.OnMouseDown
-


# OnMouseDown


## Синтаксис


OnMouseDown(Sender: Object; Args: [IMouseClickEventArgs](../IMouseClickEventArgs/IMouseClickEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие.


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnMouseDown наступает,
 если указатель находится в области компонента и была нажата любая кнопка
 мыши.


## Комментарии


События, связанные с курсором мыши, происходят в следующем порядке:


	- [OnMouseEnter](IControl.OnMouseEnter.htm)


	- [OnMouseMove](IControl.OnMouseMove.htm)


	- [OnMouseHover](IControl.OnMouseHover.htm) / OnMouseDown / [OnMouseWheel](IControl.OnMouseWheel.htm)


	- [OnMouseUp](IControl.OnMouseUp.htm)


	- [OnMouseLeave](IControl.OnMouseLeave.htm)


См. также:


[IControl](IControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
