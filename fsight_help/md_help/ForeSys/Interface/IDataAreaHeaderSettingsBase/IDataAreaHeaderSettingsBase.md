# IDataAreaHeaderSettingsBase

IDataAreaHeaderSettingsBase
-


# IDataAreaHeaderSettingsBase


Сборка: System;


## Описание


Интерфейс IDataAreaHeaderSettingsBase
 содержит базовые свойства различных заголовков в аналитической области
 данных.


## Иерархия наследования


IDataAreaHeaderSettingsBase


## Комментарии


Аналитическая область данных описывается интерфейсом [IEaxDataArea](KeExpress.chm::/Interface/IEaxDataArea/IEaxDataArea.htm).
 Настройки заголовков, описываемых интерфейсом IDataAreaHeaderSettingsBase,
 возвращает метод [IEaxGridViewSettings.GetViewSettings](KeExpress.chm::/Interface/IEaxGridViewSettings/IEaxGridViewSettings.GetViewSettings.htm).
 К типу IDataAreaHeaderSettingsBase
 могут быть приведены следующие элементы:


	- заголовок измерения, описываемого интерфейсом [IPivotDimension](KePivot.chm::/Interface/IPivotDimension/IPivotDimension.htm);


	- заголовок уровня измерения, описываемого интерфейсом [IPivotDimensionLevel](KePivot.chm::/Interface/IPivotDimensionLevel/IPivotDimensionLevel.htm);


	- заголовок области данных, описываемый интерфейсом [IPivotHeader](KePivot.chm::/Interface/IPivotHeader/IPivotHeader.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Owner](IDataAreaHeaderSettingsBase.Owner.htm)
		 Свойство Owner возвращает
		 объект-родитель настроек заголовка в области данных.


		 ![](../../Property_Image.gif)
		 [SettingKey](IDataAreaHeaderSettingsBase.SettingKey.htm)
		 Свойство SettingKey
		 возвращает ключ для связи с объектом-родителем настроек заголовка
		 в области данных.


См. также:


[Интерфейсы
 сборки System](../System_interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
