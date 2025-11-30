# IMetabaseObjectCacheItem.Refresh

IMetabaseObjectCacheItem.Refresh
-


# IMetabaseObjectCacheItem.Refresh


## Синтаксис


Refresh;


## Описание


Метод Refresh осуществляет обновление записи в кеше объекта.


## Комментарии


При выполнении данного метода экземпляр объекта, хранящийся в данной записи кеша, будет заменен на экземпляр объекта, полученный путем открытия последней версии объекта с параметрами [ParamValues](IMetabaseObjectCacheItem.ParamValues.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного отчета с идентификатором «Report_1». Регламентный отчет имеет два параметра «Param_1» и «Param_2».


			Sub UserProc;

Var

    MB: IMetabase;

    MDesc: IMetabaseObjectDescriptor;

    Cache: IMetabaseObjectCache;

    CacheItem: IMetabaseObjectCacheItem;

    Params: IMetabaseObjectParamValues;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    MDesc := MB.ItemById("Report_1");

    Params := MDesc.Params.CreateEmptyValues;

    Params.FindById("Param_1").Value := 2000;

    Params.FindById("Param_2").Value := 2003;

    Cache := MDesc.Cache;

    For i := 0 To Cache.Count - 1 Do

        CacheItem := Cache.Item(i);

        If Params.EqualTo(CacheItem.ParamValues) Then

            CacheItem.Refresh;

        End If;

    End For;

End Sub UserProc;


При выполнении примера в кеше объекта будет осуществлен поиск записи, созданной для объекта с указанными значениями параметров. Если запись в кеше найдена, то она будет обновлена.


См. также:


[IMetabaseObjectCacheItem](IMetabaseObjectCacheItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
