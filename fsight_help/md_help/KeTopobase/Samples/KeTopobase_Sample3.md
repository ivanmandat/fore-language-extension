# Подключение карты в экспресс-отчет

Подключение карты в экспресс-отчет
-


# Подключение карты в экспресс-отчет


Для выполнения примера предполагается наличие в репозитории экспресс-отчета
 с идентификатором «ExpReport» и карты с идентификатором «New_Map_1».


			Sub SetTopobase;

Var

    MB: IMetabase;

    Analyzer: IEaxAnalyzer;

    DataArea: IEaxDataArea;

    Slice: IEaxDataAreaSlice;

Begin

    // Получим репозиторий

    MB := MetabaseClass.Active;

    // Получим экспресс-отчет

    Analyzer := MB.ItemById("ExpReport").Edit As IEaxAnalyzer;

    // Получим область данных

    DataArea := Analyzer.DataArea;

    // Получим срез данных

    Slice := DataArea.Slices.Item(0);

    // Определим топооснову

    Slice.Topobase := MB.ItemById("New_Map_1").Bind As ITopobase;

    Analyzer.MapChart.Visible := True;

    // Сохраним изменения

    (Analyzer As IMetabaseObject).Save;

End Sub SetTopobase;


После выполнения примера для экспресс-отчета будет установлена карта.
 Данная карта будет отображаться при открытии отчета.


См.также:


[Примеры](KeTopobase_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
