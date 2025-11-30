# IQuery.SubstituteAllParamsInQuery

IQuery.SubstituteAllParamsInQuery
-


# IQuery.SubstituteAllParamsInQuery


## Синтаксис


SubstituteAllParamsInQuery:
 Boolean;


## Описание


Свойство SubstituteAllParamsInQuery
 определяет, будут ли подставляться все значения параметров в тело запроса
 при его [выполнении](uinavobj.chm::/Query/Query.htm#view).


## Комментарии


Допустимые значения:


	- True. В момент выполнения
	 запроса все значения параметров подставляются в тело запроса вместо
	 [наименований
	 параметров](UiNavObj.chm::/Query/Master/parameters.htm) соответствующих SQL-литералов, заданных
	 при формировании [текста
	 запроса](UiNavObj.chm::/Query/Master/UiDb_relational_query_master_Property.htm). Время выполнения запроса зависит от используемых
	 типов данных параметров и может сократиться;


	- False. По умолчанию.
	 В момент выполнения запроса те значения параметров, которые являются
	 массивами, подставляются в тело запроса, а остальные значения передаются
	 через [параметры](UiNavObj.chm::/Query/Master/parameters.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории [запроса](UiNavObj.chm::/Query/query.htm)
 c идентификатором QUERY. В запросе должны содержаться [параметры](UiNavObj.chm::/Query/Master/parameters.htm)
 и [текст
 запроса](UiNavObj.chm::/Query/Master/UiDb_relational_query_master_Property.htm), в котором используются данные параметры.


Добавьте ссылки на системные сборки: Db, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Query: IQuery;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим запрос

	    MObj := Mb.ItemById("QUERY").Edit;

	    Query := MObj As IQuery;

	    // Проверим, учитываются ли параметры при выполнении запроса

	    If Query.ParamsCheck Then

	        // Определим подстановку всех значения параметров в момент выполнения запроса

	        Query.SubstituteAllParamsInQuery := True;

	        // Сохраним изменения

	        MObj.Save;

    End If;

	End Sub UserProc;


В результате выполнения примера все значения параметров будут подставляться
 в тело запроса в момент его [выполнения](uinavobj.chm::/Query/Query.htm#view),
 вследствие чего время выполнения запроса сократится.


См. также:


[IQuery](IQuery.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
