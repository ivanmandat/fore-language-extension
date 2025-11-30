# IPrxReportExporter.BulkSettings

IPrxReportExporter.BulkSettings
-


# IPrxReportExporter.BulkSettings


## Синтаксис


BulkSettings: [IPrxBulkSettings](../IPrxBulkSettings/IPrxBulkSettings.htm);


## Описание


Свойство BulkSettings возвращает
 параметры пакетного экспорта регламентного отчета.


## Комментарии


По умолчанию пакетный экспорт производится в разные файлы. Для экспорта
 в один файл используйте методы [StartBatchCommand](IPrxReportExporter.StartBatchCommand.htm),
 [FinishBatchCommand](IPrxReportExporter.FinishBatchCommand.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчета с идентификатором «Report_1». Для первых двух листов отчета создан
 общий элемент управления, который связан с измерением. Измерение расположено
 в фиксированной области среза.


			Sub UserProc;

Var

    MB: IMetabase;

    RegRep: IPrxReport;

    Exporter: IPrxReportExporter;

    BulkSetting: IPrxBulkSettings;

    SelSet: IPrxBulkSelectionSet;

Begin

    MB := MetabaseClass.Active;

    RegRep := MB.ItemById("Report_1").Bind As IPrxReport;

    Exporter := New PrxReportExporter.Create;

        Debug.WriteLine(Exporter.BulkSettings = Null);

    Exporter.Report := RegRep;

    //Отметка фиксированных измерений

    SelSet := RegRep.GetBulkSelectionSet("1-2");

    SelSet.Item(0).Selection.SelectAll;

    //Параметры выполнения пакетного экспорта

    BulkSetting := Exporter.BulkSettings;

    BulkSetting.Enabled := True;

    BulkSetting.SelectionSet := SelSet;

    //Экспорт

    Exporter.StartBatchCommand("c:\" + RegRep.Name + ".XLS", "XLS");

    Exporter.ExportToFile("", "XLS");

    Exporter.FinishBatchCommand;

End Sub UserProc;


После выполнения примера будет осуществлен пакетный экспорт двух листов
 регламентного отчета. Варианты отчетов будут сформированы по всем элементам
 фиксированного измерения. Экспорт производится в один файл.


См. также:


[IPrxReportExporter](IPrxReportExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
