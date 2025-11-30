# IPrxReportExporter.ExportHyperlinkOpenURLAction

IPrxReportExporter.ExportHyperlinkOpenURLAction
-


# IPrxReportExporter.ExportHyperlinkOpenURLAction


## Синтаксис


ExportHyperlinkOpenURLAction: Boolean;


## Описание


Свойство ExportHyperlinkOpenURLAction
 определяет, будут ли экспортированы гиперссылки при экспорте отчета в
 формат PPTX (*.pptx) и HTML (*.html).


## Комментарии


Допустимые значения:


	- True. Значение по умолчанию.
	 Текст отчета будет экспортирован вместе с гиперссылками;


	- False. Текст отчета
	 будет экспортирован без гиперссылок.


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором REGULAR_REPORT.


Добавьте ссылки на системные сборки: Metabase, Report.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Report: IPrxReport;

		    Exp: IPrxReportExporter;

		Begin

		    // Получаем текущий репозиторий

		    MB := MetabaseClass.Active;

		    // Получаем регламентный отчет

		    Report := MB.ItemById("REGULAR_REPORT").Bind As IPrxReport;

		    // Определяем экспортируемый отчёт

		    Exp := New PrxReportExporter.Create;

		    Exp.Report := Report;

		    // Определяем возможность экспорта гиперссылок

		    Exp.ExportHyperlinkOpenURLAction := False;

		    // Экспортируем отчет в файл

		    Exp.ExportToFile("C:\Отчет.pptx", "pptx");

		End Sub UserProc;


В результате выполнения примера регламентный отчет будет экспортирован
 в файл «Отчет.pptx», при этом результирующий файл не будет содержать гиперссылок.


См. также:


[IPrxReportExporter](IPrxReportExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
