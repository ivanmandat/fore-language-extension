# IPrxReportOptions.SetDefaultHyperlinkFont

IPrxReportOptions.SetDefaultHyperlinkFont
-


# IPrxReportOptions.SetDefaultHyperlinkFont


## Синтаксис


SetDefaultHyperlinkFont;


## Описание


Метод SetDefaultHyperlinkFont
 устанавливает настройки оформления гиперссылок по умолчанию (подчеркнутый
 текст синего цвета).


## Пример


В рассматриваемом примере предполагается существование объекта Report
 типа IPrxReport.


			Sub UserProc;

Var

    MB: IMetabase;

    MOBj: IMetabaseObject;

    Report: IPrxReport;

    Options: IPrxReportOptions;

Begin

    MB := MetabaseClass.Active;

    MOBj := MB.ItemById("REPORT").Edit;

    Report := MOBj As IPrxReport;

    Options := Report.Options;

    Options.SetDefaultHyperlinkFont;

    MOBj.Save;

End Sub UserProc;


После выполнения примера для гиперссылок будет применено оформление
 по умолчанию.


См. также:


[IPrxReportOptions](IPrxReportOptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
