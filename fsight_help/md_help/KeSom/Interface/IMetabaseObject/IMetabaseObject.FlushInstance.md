# IMetabaseObject.FlushInstance

IMetabaseObject.FlushInstance
-


# IMetabaseObject.FlushInstance


## Синтаксис


		FlushInstance(Value: [IMetabaseObjectParamValues](../IMetabaseObjectParamValues/IMetabaseObjectParamValues.htm)):
		 Boolean;


## Параметры


Value. Значения параметров
 объекта.


## Описание


Метод FlushInstance осуществляет
 очистку кешированных данных объекта по заданным значениям параметров.


## Комментарии


FlushInstance возвращает
 значение True, если очистка
 кеша прошла успешно.


Использование данного метода увеличивает производительность при работе
 с объектами, имеющими параметры, например: куб, управляющий параметрами
 своих измерений. Если используется метод FlushInstance,
 то при открытии куба возможна очистка кеша по выбранному измерению, а
 не по всем. Для очистки кеша данных объекта по всем измерениям используйте
 метод [IMetabaseObject.FlushInstances](IMetabaseObject.FlushInstances.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории параметрического
 табличного справочника с идентификатором «OBJ_TBL_DICT». Первый параметр
 данного справочника должен быть вещественного типа.


Добавьте ссылку на системную сборку Metabase.


					Sub UserSub;

		   Var

		       Mb: IMetabase;

		       Obj: IMetabaseObject;

		       ParamVals: IMetabaseObjectParamValues;

		   Begin

		       Mb := MetabaseClass.Active;

		       Obj := Mb.ItemById("OBJ_TBL_DICT").Bind;

		       ParamVals := Obj.Params.CreateEmptyValues;

		       ParamVals.Item(0).Value := 66;

		       Obj.FlushInstance(ParamVals);

		End Sub UserSub;


После выполнения примера кеш табличного справочника будет очищен только
 по первому параметру.


См. также:


[IMetabaseObject](IMetabaseObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
