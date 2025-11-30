# IEaxDataAreaSliceProperties.GetDimensionNamingAttributes

IEaxDataAreaSliceProperties.GetDimensionNamingAttributes
-


# IEaxDataAreaSliceProperties.GetDimensionNamingAttributes


## Синтаксис


GetDimensionNamingAttributes(DimKey: Integer): Array;


## Параметры


DimKey. Ключ измерения.


## Описание


Метод GetDimensionNamingAttributes
 возвращает [отметку
 атрибутов измерения](UiSelection.chm::/Selection/Element_Names.htm) в виде массива по ключу измерения.


## Комментарии


Свойство актуально, если свойство [IEaxDataAreaSliceProperties.MultipleAttributesEnabled](IEaxDataAreaSliceProperties.MultipleAttributesEnabled.htm)
 принимает значение True.


Для установки отметки атрибутов измерения по его ключу используйте [IEaxDataAreaSliceProperties.SetDimensionNamingAttributes](IEaxDataAreaSliceProperties.SetDimensionNamingAttributes.htm).


## Пример


Использование метода приведено в примере для [IEaxDataAreaSliceProperties.MultipleAttributesSeparator](IEaxDataAreaSliceProperties.MultipleAttributesSeparator.htm).


См. также:


[IEaxDataAreaSliceProperties](IEaxDataAreaSliceProperties.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
