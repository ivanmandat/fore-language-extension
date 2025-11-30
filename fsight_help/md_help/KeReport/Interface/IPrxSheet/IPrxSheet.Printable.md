# IPrxSheet.Printable

IPrxSheet.Printable
-


# IPrxSheet.Printable


## Синтаксис


Printable: Boolean;


## Описание


Свойство Printable определяет,
 будет ли лист выведен на печать вместе с книгой.


## Комментарии


При значении True – лист выводится
 на печать, при значении False
 - нет.


Свойство по умолчанию имеет значение True.
 Значение данного свойства влияет на печать, а также на экспорт в
 форматы pdf и rtf.


Если для листа данное свойство установлено в False,
 то:


	- при печати всей книги печать данного листа не происходит, но
	 можно произвести печать данного листа отдельно от всей книги;


	- при экспорте отчета в форматы pdf и rtf экспорт данного листа
	 не происходит;


	- при предпросмотре листа в окне «[Предварительный просмотр](UiNav.chm::/GUI/Object_preview.htm)»
	 в списке листов будет доступен только данный лист;


	- при предпросмотре других листов в окне «[Предварительный просмотр](UiNav.chm::/GUI/Object_preview.htm)»
	 в списке листов будет отсутствовать данный лист;


	- при печати только этого листа в окне «[Печать](UiReport.chm::/desktop/Reports/OperationReport/UiReport_Reports_Operation_Print.htm)»
	 в раскрывающемся списке «Вывести на печать» недоступен вариант печати
	 «Весь отчет».


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    Sheet: IPrxSheet;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("REPORT").Edit;

    Report := MObj As IPrxReport;

    Sheet := Report.ActiveSheet;

    Sheet.Printable := False;

    MObj.Save;

End Sub UserProc;


После выполнения примера для активного листа регламентного отчета будет
 отключена опция «Печатать лист вместе с книгой». Идентификатор регламентного
 отчета - «Report».


См. также:


[IPrxSheet](IPrxSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
