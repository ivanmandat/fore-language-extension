# IMetabaseObjectCache.Put

IMetabaseObjectCache.Put
-


# IMetabaseObjectCache.Put


## Синтаксис


Put(Instance: [IMetabaseObjectInstance](../IMetabaseObjectInstance/IMetabaseObjectInstance.htm));


## Параметры


Instance - экземпляр объекта, который необходимо поместить в кеш.


## Описание


Метод Put создает новую запись в кеше и помещает туда указанный экземпляр объекта.


## Комментарии


В кеше создаются записи для объектов, открытых с различными значениями параметров. Если в кеше объекта существует запись для таких же параметров, которые были использованы для получения экземпляр объекта Instance, то при выполнении метода Put эта запись будет обновлена.


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного отчета с идентификатором «Report_1».


			Sub UserProc;

Var

    MB: IMetabase;

    MDesc: IMetabaseObjectDescriptor;

    Cache: IMetabaseObjectCache;

    Params: IMetabaseObjectParamValues;

Begin

    MB := MetabaseClass.Active;

    MDesc := MB.ItemById("Report_1");

    Params := MDesc.Params.CreateEmptyValues;

    Params.FindById("Param_1").Value := 2000;

    Params.FindById("Param_2").Value := 2003;

    Cache := MDesc.Cache;

    Cache.Put(MDesc.Open(Params));

End Sub UserProc;


После выполнения примера в кеше регламентного отчета будет создана новая запись.


См. также:


[IMetabaseObjectCache](IMetabaseObjectCache.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
