# IPrxReport.LoadFromFile

IPrxReport.LoadFromFile
-


# IPrxReport.LoadFromFile


## Синтаксис


LoadFromFile(FileName: String);


## Параметры


FileName - путь и наименование
 файла регламентного отчета.


## Описание


Метод LoadFromFile загружает
 регламентный отчет из файла, передаваемого посредством параметра FileName.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Report: IPrxReport;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("Report").Edit;

	    Report := MObj As IPrxReport;

	    Report.LoadFromFile("c:\Report.ppreport");

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в регламентный отчет с идентификатором «Report»
 будут вставлены листы из файла «Report.ppreport».


См. также:


[IPrxReport](IPrxReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
