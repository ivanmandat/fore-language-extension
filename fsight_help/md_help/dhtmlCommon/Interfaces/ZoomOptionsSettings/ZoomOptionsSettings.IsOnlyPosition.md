# ZoomOptionsSettings.IsOnlyPosition

ZoomOptionsSettings.IsOnlyPosition
-


# ZoomOptionsSettings.IsOnlyPosition


## Синтаксис


IsOnlyPosition: boolean;


## Описание


Свойство IsOnlyPosition определяет
 способ применения заданного значения масштаба средствами CSS.


## Комментарии


Допустимые значения:


	- true.
	 Масштаб применяется через поле zoom, например - zoom: 0.5;


Примечание.
 Поле zoom не поддерживается в браузере Mozilla Firefox.


	- false.
	 По умолчанию. Масштаб применяется через поле transform, например -
	 transform: scale(0.5).


Значение свойства задается в конструкторе [ZoomOptions](../../Classes/PP/ZoomOptions/Constructor_ZoomOptions.htm)
 или с помощью метода setIsOnlyPosition,
 а возвращается с помощью метода getIsOnlyPosition.


Значение масштаба, заданное в поле zoom или transform, должно совпадать
 со значением метода [ZoomOptions.setZoom](ZoomOptionsSettings.Zoom.htm)
 или свойства [Zoom](ZoomOptionsSettings.Zoom.htm) в конструкторе
 [ZoomOptions](../../Classes/PP/ZoomOptions/Constructor_ZoomOptions.htm).
 Также значение свойства (true
 или false) должно совпадать со
 значением метода [ZoomOptions.setIsCssZoom](ZoomOptionsSettings.IsCssZoom.htm)
 или свойства [IsCssZoom](ZoomOptionsSettings.IsCssZoom.htm)
 в конструкторе ZoomOptions.


## Пример


Использование свойства приведено в примере для [ZoomOptionsSettings.Zoom](ZoomOptionsSettings.Zoom.htm).


См. также:


[ZoomOptionsSettings](ZoomOptionsSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
