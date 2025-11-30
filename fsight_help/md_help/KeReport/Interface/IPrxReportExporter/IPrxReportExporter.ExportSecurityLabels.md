# IPrxReportExporter.ExportSecurityLabels

IPrxReportExporter.ExportSecurityLabels
-


# IPrxReportExporter.ExportSecurityLabels


## Синтаксис


ExportSecurityLabels: Boolean;


## Описание


Свойство ExportSecurityLabels
 определяет разрешение на экспорт штампа маркировки в формат RTF (*.rtf).


## Комментарии


По умолчанию свойство имеет значение True,
 что разрешает экспорт штампа маркировки в формат RTF (*.rtf). Штамп маркировки
 выводится при экспорте и печати, если свойство [IMetabasePolicy.AlwaysPrintDocumentLabel](KeSom.chm::/Interface/IMetabasePolicy/IMetabasePolicy.AlwaysPrintDocumentLabel.htm)
 установлено в True или:


	- включен [мандатный
	 доступ](Admin.chm::/04_SecurityPolicy/Admin_PermSep_M.htm) или [доступ по
	 уровням безопасности](Admin.chm::/04_SecurityPolicy/Security_levels.htm);


	- включена [маркировка
	 документов при экспорте и печати](Admin.chm::/03_Admin/Admin_MandatAccessParam.htm);


	- задан [штамп
	 маркировки](Admin.chm::/04_SecurityPolicy/Editor_of_Politicy/Admin_MandatAccess_Marking.htm).


При значении False свойство
 отключает экспорт штампа маркировки в формат RTF (*.rtf).


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором «REGULAR_REPORT».


Добавьте ссылки на системные сборки: Metabase, Report.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Security: IMetabaseSecurity;

		    Report: IPrxReport;

		    Exp: IPrxReportExporter;

		Begin

		    MB := MetabaseClass.Active;

		    Security:= MB.Security;

		    // Задаем использование штампа независимо от настроек

		    Security.Policy.AlwaysPrintDocumentLabel := True;

		    // Применяем заданные настройки политики

		    Security.Apply;

		    // Получаем регламентный отчет

		    Report := MB.ItemById("REGULAR_REPORT").Bind As IPrxReport;

		    // Создаем объект для экспорта

		    Exp := New PrxReportExporter.Create;

		    Exp.Report := Report;

		    // Отключаем вывод штампа в RTF

		    Exp.ExportSecurityLabels := False;

		    // Отключаем экспорт разрывов страниц

		    Exp.ExportBreaksRtf := False;

		    // Экспорт отчета в формат RTF

		    Exp.ExportToFile("C:\Отчет.rtf","rtf");

		End Sub UserProc;


При выполнении примера будет включен вывод штампа маркировки независимо
 от настроек, регламентный отчет экспортирован в файл «Отчет.rtf». В результирующем
 файле не будет отображен штамп маркировки.


См. также:


[IPrxReportExporter](IPrxReportExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
