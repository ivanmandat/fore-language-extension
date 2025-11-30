# IEaxObject.IsLoaded

IEaxObject.IsLoaded
-


# IEaxObject.IsLoaded


## Синтаксис


IsLoaded: Boolean;


## Описание


Свойство IsLoaded определят,
 будет ли загружаться объект аналитической области.


## Комментарии


Свойство актуально, если установлена отложенная загрузка листов аналитической
 области: у свойства [IEaxDataArea.DelayedLoad](../IEaxDataArea/IEaxDataArea.DelayedLoad.htm)
 установлено значение True.


Допустимые значения:


	- True. Объект будет загружаться.
	 Значение по умолчанию для объектов на активном листе;


	- False. Объект не будет
	 загружаться. Значение по умолчанию для объектов на неактивном листе.


## Пример


Использование свойства приведено в примере для [IEaxDataAreaSource.IsLoaded](../IEaxDataAreaSource/IEaxDataAreaSource.IsLoaded.htm).


См. также:


[IEaxObject](IEaxObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
