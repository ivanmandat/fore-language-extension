# IControl.OnMouseWheel

IControl.OnMouseWheel
-


# OnMouseWheel


## Синтаксис


OnMouseWheel(Sender: Object; Args: [IMouseWheelEventArgs](../IMouseWheelEventArgs/IMouseWheelEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие.


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnMouseWheel наступает
 при вращении колеса мыши, если компонент находится в фокусе.


## Комментарии


События, связанные с курсором мыши, происходят в следующем порядке:


	- [OnMouseEnter](IControl.OnMouseEnter.htm)


	- [OnMouseMove](IControl.OnMouseMove.htm)


	- [OnMouseHover](IControl.OnMouseHover.htm) / [OnMouseDown](IControl.OnMouseDown.htm)
	 / OnMouseWheel


	- [OnMouseUp](IControl.OnMouseUp.htm)


	- [OnMouseLeave](IControl.OnMouseLeave.htm)


 Примечание.
 В Windows 10 событие OnMouseWheel
 наступает при вращении колеса мыши непосредственно в области компонента
 и не зависит от наличия фокуса на компоненте.


См. также:


[IControl](IControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
