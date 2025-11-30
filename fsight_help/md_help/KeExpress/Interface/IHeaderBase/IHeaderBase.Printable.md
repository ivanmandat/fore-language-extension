# IHeaderBase.Printable

IHeaderBase.Printable
-


# IHeaderBase.Printable


## Синтаксис


Printable: Boolean;


## Описание


Свойство Printable определяет
 признак вывода на печать заголовка/колонтитула регламентного отчета.


## Комментарии


Допустимые значения:


	- True. По умолчанию.
	 Заголовок/колонтитул будет выводиться на печать;


	- False. Заголовок/колонтитул
	 не будет выводиться на печать.


## Пример


Использование свойства приведено в примере для .


Для выполнения примера в репозитории предполагается наличие


Добавьте ссылки на системные сборки: , .


При выполнении примера


В рассматриваемом примере предполагается существование объекта Report
 типа IPrxReport.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Report: IPrxReport;

	    Header: IPrxSheetHeaderBase;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("REPORT").Edit;

	    Report := MObj As IPrxReport;

	    Header := Report.Title As IPrxSheetHeaderBase;

	    Header.Printable := False;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера для регламентного отчета будет отключена опция
 «Печатать заголовок».


См. также:


[IHeaderBase](IHeaderBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
