# IMetabaseObjectInstance.Flush

IMetabaseObjectInstance.Flush
-


# IMetabaseObjectInstance.Flush


## Синтаксис


Flush;


## Описание


Метод Flush осуществляет очистку
 кеша экземпляра объекта репозитория.


## Комментарии


Использование данного метода увеличивает производительность при работе
 с экземплярами объекта, открытого по определенному параметру.


## Пример


Для выполнения примера предполагается наличие в репозитории параметрического
 табличного справочника с идентификатором OBJ_TBL_DICT. Первый параметр
 данного справочника должен быть вещественного типа.


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Obj: IMetabaseObject;

	    ParamVals: IMetabaseObjectParamValues;

	    ObjI: IMetabaseObjectInstance;

	Begin

	    Mb := MetabaseClass.Active;

	    Obj := Mb.ItemById("OBJ_TBL_DICT").Bind;

	    ParamVals := Obj.Params.CreateEmptyValues;

	    ParamVals.Item(0).Value := 66;

	    ObjI := Obj.Open(ParamVals);

	    ObjI.Flush;

	End Sub UserProc;


После выполнения примера кеш табличного справочника будет очищен только
 по первому параметру.


См. также:


[IMetabaseObjectInstance](IMetabaseObjectInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
