# IQuery.ParamsCheck

IQuery.ParamsCheck
-


# IQuery.ParamsCheck


## Синтаксис


ParamsCheck: Boolean;


## Описание


Свойство ParamsCheck определяет,
 будут ли учитываться параметры при выполнении запроса.


## Комментарии


Если свойству установлено значение True,
 то значения параметров будут учитываться при выполнении запроса.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Query: IQuery;

	    Params: IMetabaseObjectParams;

	    ParamsVal: IMetabaseObjectParamValues;

	    DInst: IDatasetInstance;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := Mb.ItemById("Query_1").Edit;

	    Query := MObj As IQuery;

	    Query.ParamsCheck := False;

	    MObj.Save;

	    Params := MObj.Params;

	    ParamsVal := Params.CreateEmptyValues;

	    ParamsVal.Item(0).Value := "10";

	    DInst := MObj.Open(ParamsVal) As IDatasetInstance;

	    //...

	    // Работа с данными запроса

	    //...

	    DInst.Close;

	End Sub UserProc;


После выполнения примера для запроса с идентификатором Query_1 будет
 установлено игнорирование параметров запроса. Запрос будет выполнен без
 учета установленных параметров.


См. также:


[IQuery](IQuery.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
