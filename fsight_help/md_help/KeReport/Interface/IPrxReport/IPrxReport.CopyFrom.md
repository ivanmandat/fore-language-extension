# IPrxReport.CopyFrom

IPrxReport.CopyFrom
-


# IPrxReport.CopyFrom


## Синтаксис


CopyFrom(Source: [IPrxReport](IPrxReport.htm));


## Параметры


Source - регламентный отчет,
 из которого необходимо скопировать листы.


## Описание


Метод CopyFrom удаляет все имеющиеся
 в регламентном отчете листы, источники данных, элементы управления и подключенные
 модули и копирует листы из источника, передаваемого посредством параметра
 Source.


## Пример


Для выполнения примера добавьте ссылки на системные сборки «Metabase»
 и «Report».


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Report, Report1: IPrxReport;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("Report").Edit;

	    Report := MObj As IPrxReport;

	    Report1 := MB.ItemById("Report1").Bind As IPrxReport;

	    Report.CopyFrom(Report1);

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в регламентный отчет с идентификатором «Report» будут скопированы листы
 из регламентного отчета с идентификатором «Report1».


См. также:


[IPrxReport](IPrxReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
