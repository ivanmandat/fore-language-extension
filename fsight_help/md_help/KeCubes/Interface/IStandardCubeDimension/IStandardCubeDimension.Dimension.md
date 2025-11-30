# IStandardCubeDimension.Dimension

IStandardCubeDimension.Dimension
-


# IStandardCubeDimension.Dimension


## Синтаксис


Dimension: [IDimensionModel](KeDims.chm::/interface/IDimensionModel/IDimensionModel.htm);


## Описание


Свойство Dimension возвращает
 структуру справочника репозитория, являющегося измерением в кубе.


## Комментарии


Интерфейс [IDimensionModel](KeDims.chm::/interface/IDimensionModel/IDimensionModel.htm)
 описывает общую структуру любого справочника репозитория. Для получения
 специфических свойств необходимо, в зависимости от типа справочника, привести
 значение свойства Dimension к
 одному из следующих интерфейсов:


	- [ICalendarDimension](KeDims.chm::/interface/ICalendarDimension/ICalendarDimension.htm).
	 Календарный справочник;


	- [ICustomDimension](KeDims.chm::/interface/ICustomDimension/ICustomDimension.htm).
	 Конструируемый справочник, лежащий в основе локального измерения фактов
	 стандартного куба или вычисляемого куба;


	- [IStandardDimension](KeDims.chm::/interface/IStandardDimension/IStandardDimension.htm).
	 Табличный справочник;


	- [IUserDimension](KeDims.chm::/interface/IUserDimension/IUserDimension.htm).
	 Вычисляемый справочник;


	- [IRdsDictionary](KeRds.chm::/Interface/IRdsDictionary/IRdsDictionary.htm).
	 Справочник НСИ;


	- [IRdsCompoundDictionary](KeRds.chm::/Interface/IRdsCompoundDictionary/IRdsCompoundDictionary.htm).
	 Составной справочник НСИ.


## Пример


Пример использования приведен в описании свойства [ICustomDimension.Tree](KeDims.chm::/interface/ICustomDimension/ICustomDimension.Tree.htm).


См. также:


[IStandardCubeDimension](IStandardCubeDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
