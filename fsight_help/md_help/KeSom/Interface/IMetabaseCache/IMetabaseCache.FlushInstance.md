# IMetabaseCache.FlushInstance

IMetabaseCache.FlushInstance
-


# IMetabaseCache.FlushInstance


## Синтаксис


FlushInstance(Key: Integer; Values: [IMetabaseObjectParamValues](../IMetabaseObjectParamValues/IMetabaseObjectParamValues.htm)):
 Boolean;


## Параметры


Key. Ключ объекта репозитория.


Values. Значения параметров
 объекта.


## Описание


Метод FlushInstance очищает
 кеш объекта репозитория по его ключу и заданным значениям параметров.


## Комментарии


Метод возвращает значение True,
 если очистка кеша прошла успешно.


Использование данного метода увеличивает производительность при работе
 с объектами, имеющими параметры, например: куб, управляющий параметрами
 своих измерений. Если используется метод FlushInstance,
 то при открытии куба возможна очистка кеша по выбранному измерению, а
 не по всем.


## Пример


Для выполнения примера предполагается наличие в репозитории параметрического
 табличного справочника с идентификатором «OBJ_TBL_DICT». Первый параметр
 данного справочника должен быть вещественного типа. Также необходимо добавить
 ссылку на системную сборку «Metabase».


			    Sub UserSub;

    Var

        Mb: IMetabase;

        Cache: IMetabaseCache;

        Obj: IMetabaseObject;

        ParamVals: IMetabaseObjectParamValues;

    Begin

        Mb := MetabaseClass.Active;

        Cache := Mb.Cache;

        Obj := Mb.ItemById("OBJ_TBL_DICT").Bind;

        ParamVals := Obj.Params.CreateEmptyValues;

        ParamVals.Item(0).Value := 66;

        Cache.FlushInstance(Obj.Key, ParamVals);

    End Sub UserSub;


После выполнения примера в кеше репозитория будет очищен кеш табличного
 справочника только по первому параметру.


См. также:


[IMetabaseCache](IMetabaseCache.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
