# Настройка стилевого оформления области данных

Настройка стилевого оформления области данных
-


# Настройка стилевого оформления области данных


Рассмотрим пример создания и применения условного форматирования к области
 данных.


Для выполнения примера предполагается наличие в репозитории регламентного
 отчета с идентификатором «REPORT_INTRO», с размещенной на листе [областью
 данных](KeReport_Programming_DataArea.htm).


## Пример


Для выполнения примера добавьте ссылки на системные сборки Metabase,
 Report, Tab, Drawing.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    DI: IPrxDataIsland;

    Prop: IPrxDataIslandProperties;

    TabFormat: ITabFormatCondition;

    ValFormat: ITabFormatValues;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("REPORT_INTRO").Edit;

    Report := MObj As IPrxReport;

    DI := Report.DataIslands.Item(0).Edit;

    Prop := DI.Properties;

    TabFormat := Prop.FormatConditions.Add;

    TabFormat.Type := TabConditionType.Values;

    ValFormat := TabFormat.Details As ITabFormatValues;

    // Трехцветный градиент для форматирования ячеек:

    ValFormat.Style := TabFormatValuesStyle.ThreeColorScale;

    // Настройка минимального значения:

    ValFormat.MinValueType := TabFormatValueType.Lowest;

    ValFormat.MinValueColor := GxColor.FromName("Yellow");

    // Настройка среднего значения:

    ValFormat.MidValueType := TabFormatValueType.Percent;

    ValFormat.MidValue := 50;

    ValFormat.MidValueColor := GxColor.FromName("Green");

    // Настройка максимального значения:

    ValFormat.MaxValueType := TabFormatValueType.Highest;

    ValFormat.MaxValueColor := GxColor.FromName("Blue");

    DI.Save;

    MObj.Save;

End Sub UserProc;


В результате выполнения примера для области данных будет определено
 условное форматирование ячеек на основе их значений: стиль оформления
 - трехцветный градиент. Созданное условие форматирования будет сохранено
 для текущего отчета.


См. также:


[Общие
 принципы программирования с использованием сборки Report](KeReport_Programming.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
