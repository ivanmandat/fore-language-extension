# IPrxReportExporter.BreakIntoLayouts

IPrxReportExporter.BreakIntoLayouts
-


# IPrxReportExporter.BreakIntoLayouts


## Синтаксис


BreakIntoLayouts: Boolean;


## Описание


Свойство BreakIntoLayouts определяет
 необходимость разбивать лист на печатные страницы при экспорте в формат
 RTF (*.rtf).


## Комментарии


Допустимые значения:


	- True. Значение по умолчанию.
	 Экспортируемые листы будут разбиты на печатные страницы;


	- False. Экспортируемые
	 листы не будут разбиты на печатные страницы. Если при этом на листе
	 имеются сквозные строки, то для этих строк будет установлен флаг «повторять
	 как заголовок на каждой странице». Область ячеек до сквозных строк
	 будет экспортирована как отдельная таблица.


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчета с идентификатором «Report_1».


Добавьте ссылки на системные сборки «Metabase», «Report».


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IPrxReport;

    Exp: IPrxReportExporter;

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("Report_1").Bind As IPrxReport;

    Exp := New PrxReportExporter.Create;

    Exp.Report := Report;

    Exp.BreakIntoLayouts := True;

    Exp.ExportToFile("C:\" + Report.Name + ".rtf", "rtf");

End Sub UserProc;


При выполнении примера будет произведен экспорт отчета в файл в формате
 RTF. При экспорте лист будет разбит на печатные страницы.


См. также:


[IPrxReportExporter](IPrxReportExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
