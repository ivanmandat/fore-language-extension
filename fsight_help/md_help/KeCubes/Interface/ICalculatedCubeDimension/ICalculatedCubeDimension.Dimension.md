# ICalculatedCubeDimension.Dimension

ICalculatedCubeDimension.Dimension
-


# ICalculatedCubeDimension.Dimension


## Синтаксис


Dimension: [IDimensionModel](kedims.chm::/interface/idimensionmodel/idimensionmodel.htm);


## Описание


Свойство Dimension возвращает
 структуру справочника, лежащего в основе измерения вычисляемого куба.


## Комментарии


Свойство Dimension возвращает
 общую информацию о структуре справочника. В зависимости от типа справочника,
 значение свойства можно привести к одному из интерфейсов, содержащих специфические
 свойства соответствующего типа справочников:


	- [ICalendarDimension](KeDims.chm::/interface/ICalendarDimension/ICalendarDimension.htm).
	 Календарный справочник;


	- [IStandardDimension](KeDims.chm::/interface/IStandardDimension/IStandardDimension.htm).
	 Табличный справочник;


	- [IUserDimension](KeDims.chm::/interface/IUserDimension/IUserDimension.htm).
	 Вычисляемый справочник;


	- [ICustomDimension](KeDims.chm::/interface/ICustomDimension/ICustomDimension.htm).
	 Измерение фактов;


	- [IRdsDictionary](KeRds.chm::/Interface/IRdsDictionary/IRdsDictionary.htm).
	 Справочник НСИ;


	- [IRdsCompoundDictionary](KeRds.chm::/Interface/IRdsCompoundDictionary/IRdsCompoundDictionary.htm).
	 Составной справочник НСИ.


Также значение свойства Dimension
 можно привести к интерфейсу [IMetabaseObject](KeSom.chm::/Interface/IMetabaseObject/IMetabaseObject.htm)
 или [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm)
 для получения информации о справочнике как объекте репозитория. Проверку
 типа справочника можно организовать по идентификатору класса, который
 возвращает свойство [IMetabaseObjectDescriptor.ClassId](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.ClassId.htm).


См. также:


[ICalculatedCubeDimension](ICalculatedCubeDimension.htm)
 | [Просмотр информации о структуре
 вычисляемого куба](../../Samples/CalcCubeInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
