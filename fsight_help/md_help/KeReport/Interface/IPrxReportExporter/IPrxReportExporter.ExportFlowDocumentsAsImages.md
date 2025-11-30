# IPrxReportExporter.ExportFlowDocumentsAsImages

IPrxReportExporter.ExportFlowDocumentsAsImages
-


# IPrxReportExporter.ExportFlowDocumentsAsImages


## Синтаксис


ExportFlowDocumentsAsImages: Boolean;


## Описание


Свойство ExportFlowDocumentsAsImages
 определяет возможность экспорта текстового блока в виде изображения в
 формате XLSX(*.xlsx).


## Комментарии


Допустимые значения:


	- True. Текстовый блок
	 экспортируется в виде изображения;


	- False. Значение по умолчанию.
	 Текстовый блок экспортируется в виде надписи.


## Пример


Для выполнения примера предполагается наличие регламентного отчёта с
 идентификатором REGULAR_REPORT, в который добавлен текстовый блок.


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

		    // Определяем возможность экспорта текстового блока в виде изображения

		    Exp.ExportFlowDocumentsAsImages := True;

		    // Экспортируем отчет в файл

		    Exp.ExportToFile("C:\Отчет.xlsx", "xlsx");

		End Sub UserProc;


В результате выполнения примера регламентный отчет будет экспортирован
 в файл «Отчет.xlsx», при этом результирующий файл будет содержать изображение.


См. также:


[IPrxReportExporter](IPrxReportExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
