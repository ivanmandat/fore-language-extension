# ZoomOptionsSettings.IsCssZoom

ZoomOptionsSettings.IsCssZoom
-


# ZoomOptionsSettings.IsCssZoom


## Синтаксис


IsCssZoom: boolean;


## Описание


Свойство IsCssZoom определяет
 признак масштабирования визуального компонента с помощью поля zoom или
 transform, заданного в CSS.


## Комментарии


Допустимые значения:


	- true.
	 Масштабирование визуального компонента задаётся с помощью поля zoom;


Примечание.
 Поле zoom не поддерживается в браузере Mozilla Firefox.


	- false.
	 По умолчанию. Масштабирование визуального компонента задаётся с помощью
	 поля transform.


Значение свойства задается в конструкторе [ZoomOptions](../../Classes/PP/ZoomOptions/Constructor_ZoomOptions.htm)
 или с помощью метода setIsCssZoom,
 а возвращается с помощью метода getIsCssZoom.


В зависимости от используемого значения свойства в CSS должно быть задано
 соответствующее поле: zoom или transform. Также значение свойства (true или false)
 должно совпадать со значением метода [ZoomOptions.setIsOnlyPosition](ZoomOptionsSettings.IsOnlyPosition.htm)
 или свойства [IsOnlyPosition](ZoomOptionsSettings.IsOnlyPosition.htm)
 в конструкторе [ZoomOptions](../../Classes/PP/ZoomOptions/Constructor_ZoomOptions.htm).


## Пример


Использование свойства приведено в примере для [ZoomOptionsSettings.Zoom](ZoomOptionsSettings.Zoom.htm).


См. также:


[ZoomOptionsSettings](ZoomOptionsSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
