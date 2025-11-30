# IEaxDataSources.Clear

IEaxDataSources.Clear
-


# IEaxDataSources.Clear


## Синтаксис


Clear;


## Описание


Метод Clear осуществляет удаление
 всех источников из коллекции источников данных экспресс-отчёта.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором EXPRESS_REPORT.


Добавьте ссылки на системные сборки: Express, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Expr: IEaxAnalyzer;

	    ExpDs: IEaxDataSources;

	    Res: String;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("EXPRESS_REPORT").Edit;

	    Expr := MObj As IEaxAnalyzer;

	    ExpDs := Expr.DataSources;

	    ExpDs.Clear;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера, будут удалены все источники из коллекции источников
 данных экспресс-отчёта.


См. также:


[IEaxDataSources](IEaxDataSources.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
