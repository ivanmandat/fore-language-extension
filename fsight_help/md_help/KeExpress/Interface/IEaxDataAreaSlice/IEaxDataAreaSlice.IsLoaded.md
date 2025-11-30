# IEaxDataAreaSlice.IsLoaded

IEaxDataAreaSlice.IsLoaded
-


# IEaxDataAreaSlice.IsLoaded


## Синтаксис


IsLoaded: Boolean;


## Описание


Свойство IsLoaded возвращает
 признак, загружен ли источник данных.


## Комментарии


Свойство актуально, если установлена отложенная загрузка листов аналитической
 области: у свойства [IEaxDataArea.DelayedLoad](../IEaxDataArea/IEaxDataArea.DelayedLoad.htm)
 установлено значение True.


Допустимые значения:


	- True. Срез будет загружаться.
	 Значение по умолчанию для срезов на активном листе;


	- False. Срез не будет
	 загружаться. Значение по умолчанию для срезов на неактивном листе.


## Пример


Использование свойства приведено в примере для [IEaxDataAreaSource.IsLoaded](../IEaxDataAreaSource/IEaxDataAreaSource.IsLoaded.htm).


См. также:


[IEaxDataAreaSlice](IEaxDataAreaSlice.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
