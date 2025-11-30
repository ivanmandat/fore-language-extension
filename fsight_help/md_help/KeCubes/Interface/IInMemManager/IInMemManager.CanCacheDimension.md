# IInMemManager.CanCacheDimension

IInMemManager.CanCacheDimension
-


# IInMemManager.CanCacheDimension


## Синтаксис


CanCacheDimension(DimensionObj: [IMetabaseObject](KeSom.chm::/Interface/IMetabaseObject/IMetabaseObject.htm)):
 Boolean;


## Параметры


DimensionObj. Справочник репозитория.


## Описание


Метод CanCacheDimension осуществляет
 проверку на возможность кеширования данных указанного справочника.


## Комментарии


Метод возвращает значение True,
 если данные справочника могут быть кешированы и False,
 если справочник не поддерживает кеширование.


Кеширование не поддерживают следующие виды справочников:


	- Календарный справочник ([ICalendarDimension](KeDims.chm::/interface/ICalendarDimension/ICalendarDimension.htm));


	- Составное измерение виртуального куба ([ICompoundDimension](KeDims.chm::/interface/ICompoundDimension/ICompoundDimension.htm));


	- Сценарное измерение контейнера моделирования ([IMsScenarioDimension](KeMs.chm::/Interface/IMsScenarioDimension/IMsScenarioDimension.htm)).


См. также:


[IInMemManager](IInMemManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
