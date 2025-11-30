# IExAnalyzerExporter.BulkSettings

IExAnalyzerExporter.BulkSettings
-


# IExAnalyzerExporter.BulkSettings


## Синтаксис


BulkSettings: [IEaxBulkSettings](../IEaxBulkSettings/IEaxBulkSettings.htm);


## Описание


Свойство BulkSettings возвращает
 параметры пакетного экспорта экспресс-отчета.


## Комментарии


По умолчанию пакетный экспорт производится в разные файлы. Для экспорта
 в один файл используйте методы [IExAnalyzerExporter.StartBatchCommand](IExAnalyzerExporter.StartBatchCommand.htm),
 [IExAnalyzerExporter.FinishBatchCommand](IExAnalyzerExporter.FinishBatchCommand.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчета
 с идентификатором EXPRESS_REPORT. Отчет содержит несколько листов, источники
 которых имеют минимум одно общее фиксированное измерение.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Exp: IEaxAnalyzer;

	    Exporter: IExAnalyzerExporter;

	    BulkSetting: IEaxBulkSettings;

	    SelSet: IDimSelectionSet;

	Begin

	    MB := MetabaseClass.Active;

	    Exp := MB.ItemById("EXPRESS_REPORT").Bind As IEaxAnalyzer;

	    Exporter := New ExAnalyzerExporter.Create;

	    Exporter.ExAnalyzer := Exp;

	    // Отметка фиксированных измерений

	    SelSet := Exp.BulkSelectionSet;

	    SelSet.Item(0).SelectAll;

	    // Параметры выполнения пакетного экспорта

	    BulkSetting := Exporter.BulkSettings;

	    BulkSetting.Enabled := True;

	    BulkSetting.SelectionSet := SelSet;

	    // Экспорт

	    Exporter.StartBatchCommand("c:\" + Exp.Name + ".XLS", "XLS");

	    Exporter.ExportToFile("", "XLS");

	    Exporter.FinishBatchCommand;

	End Sub UserProc;


После выполнения примера будет осуществлен пакетный экспорт листов экспресс-отчета.
 Варианты отчетов будут сформированы по всем элементам первого фиксированного
 измерения. Экспорт производится в один файл.


См. также:


[IExAnalyzerExporter](IExAnalyzerExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
