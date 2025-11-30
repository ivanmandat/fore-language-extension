# IEaxGridViewSettings.GetViewSettings

IEaxGridViewSettings.GetViewSettings
-


# IEaxGridViewSettings.GetViewSettings


## Синтаксис


GetViewSettings(Value: [IDataAreaHeaderSettingsBase](ForeSys.chm::/Interface/IDataAreaHeaderStyleSettingsBase/IDataAreaHeaderStyleSettingsBase.htm)):
 [IEaxGridHeaderProperties](../IEaxGridHeaderProperties/IEaxGridHeaderProperties.htm);


## Параметры


Value. Элемент заголовка, для
 которого необходимо получить настройки отображения.


## Описание


Свойство GetViewSettings возвращает
 настройки отображения для указанного элемента заголовка.


## Комментарии


В качестве значения параметра Value
 могут указываться следующие элементы:


	- заголовок измерения, описываемого интерфейсом [IPivotDimension](KePivot.chm::/Interface/IPivotDimension/IPivotDimension.htm);


	- заголовок уровня измерения, описываемого интерфейсом [IPivotDimensionLevel](KePivot.chm::/Interface/IPivotDimensionLevel/IPivotDimensionLevel.htm);


	- заголовок области данных, описываемый интерфейсом [IPivotHeader](KePivot.chm::/Interface/IPivotHeader/IPivotHeader.htm).


## Пример


Использование свойства приведено в примере для [IEaxGridHeaderProperties.AutoIndent](../IEaxGridHeaderProperties/IEaxGridHeaderProperties.AutoIndent.htm).


См. также:


[IEaxGridViewSettings](IEaxGridViewSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
