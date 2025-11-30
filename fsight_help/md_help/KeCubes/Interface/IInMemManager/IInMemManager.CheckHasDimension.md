# IInMemManager.CheckHasDimension

IInMemManager.CheckHasDimension
-


# IInMemManager.CheckHasDimension


## Синтаксис


CheckHasDimension(DimensionObj: [IMetabaseObject](KeSom.chm::/Interface/IMetabaseObject/IMetabaseObject.htm)):
 Boolean;


## Параметры


DimensionObj.
 Справочник репозитория.


## Описание


Метод CheckHasDimension проверяет
 наличие кешированных данных для указанного справочника репозитория.


## Комментарии


Метод возвращает значение True,
 если в кеше имеются кешированные данные справочника и False,
 если справочник еще не был кеширован. Для кешировния используйте метод
 [PrepareDimension](IInMemManager.PrepareDimension.htm).


## Пример


Пример использования приведён в описании метода [IInMemManager.GetDimension](IInMemManager.GetDimension.htm).


См. также:


[IInMemManager](IInMemManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
