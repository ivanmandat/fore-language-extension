# IInMemManager.PrepareDimension

IInMemManager.PrepareDimension
-


# IInMemManager.PrepareDimension


## Синтаксис


PrepareDimension(DimensionObj: [IMetabaseObject](KeSom.chm::/Interface/IMetabaseObject/IMetabaseObject.htm));


## Параметры


DimensionObj.
 Справочник репозитория.


## Описание


Метод PrepareDimension кеширует
 данные указанного справочника.


## Комментарии


При кешировании справочников в кеш помещается информация об элементах
 (значения различных атрибутов справочника). Если в кеше уже имеются кешированные
 данные справочника, то они будут обновлены.


## Пример


Для выполнения примера предполагается наличие в репозитории справочника
 с идентификатором «D_FACTS».


Добавьте ссылки на системные сборки: Cubes, Dimensions. Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    InMem: IInMemManager;

	Begin

	    Mb := MetabaseClass.Active;

	    InMem := New InMemManager.Create;

	    If InMem.UseCachedDimensions Then

	        InMem.PrepareDimension(Mb.ItemById("D_FACTS").Bind);

	    End If;

	End Sub UserProc;


При выполнении примера в кеш будут добавлены данные указанного справочника.


См. также:


[IInMemManager](IInMemManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
