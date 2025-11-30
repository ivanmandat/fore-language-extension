# IEaxDataAreaSliceProperties.SetDimensionNamingAttributes

IEaxDataAreaSliceProperties.SetDimensionNamingAttributes
-


# IEaxDataAreaSliceProperties.SetDimensionNamingAttributes


## Синтаксис


SetDimensionNamingAttributes(DimKey: Integer; Value:
 Array);


## Параметры


DimKey. Ключ измерения;


Value. Массив ключей атрибутов
 измерения.


## Описание


Метод SetDimensionNamingAttributes
 устанавливает [отметку
 атрибутов измерения](UiSelection.chm::/Selection/Element_Names.htm) по его ключу.


## Комментарии


Свойство актуально, если свойство [IEaxDataAreaSliceProperties.MultipleAttributesEnabled](IEaxDataAreaSliceProperties.MultipleAttributesEnabled.htm)
 принимает значение True.


Для получения отметки атрибутов измерения в виде массива по ключу измерения
 используйте [IEaxDataAreaSliceProperties.GetDimensionNamingAttributes](IEaxDataAreaSliceProperties.GetDimensionNamingAttributes.htm).


## Пример


Использование метода приведено в примере для [IEaxDataAreaSliceProperties.MultipleAttributesSeparator](IEaxDataAreaSliceProperties.MultipleAttributesSeparator.htm).


См. также:


[IEaxDataAreaSliceProperties](IEaxDataAreaSliceProperties.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
