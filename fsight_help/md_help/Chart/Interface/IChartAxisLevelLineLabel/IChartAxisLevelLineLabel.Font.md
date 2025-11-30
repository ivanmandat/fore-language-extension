# IChartAxisLevelLineLabel.Font

IChartAxisLevelLineLabel.Font
-


# IChartAxisLevelLineLabel.Font


## Синтаксис


Font: [IGxFont](ModDrawing.chm::/Interface/IGxFont/IGxFont.htm);


## Описание


Свойство Font определяет шрифт
 подписи.


## Комментарии


Для задания цвета шрифта используйте свойство [IChartAxisLevelLineLabel.FontColor](IChartAxisLevelLineLabel.FontColor.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчета с идентификатором «REG_REPORT_LABEL».
 Отчет содержит только диаграмму.


Добавьте ссылки на системные сборки: Chart, Drawing, Metabase, Report,
 Tab.


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IPrxReport;

    Tab: ITabSheet;

    Chart: IChart;

    LevelLs: IChartAxisLevelLines;

    LevelLine: IChartAxisLevelLine;

    LineLabel: IChartAxisLevelLineLabel;

    Pen: IGxPen;

Begin

    // Получаем доступ к репозиторию

    MB := MetabaseClass.Active;

    // Получаем доступ к регламентному отчету

    Report := MB.ItemById("REG_REPORT_LABEL").Edit As IPrxReport;

    // Получаем таблицу регламентного отчета

    Tab := (Report.Sheets.Item(0) As IPrxTable).TabSheet;

    // Получаем диаграмму

    Chart := Tab.Objects.Item(0).Extension As IChart;

    // Добавляем линию уровня

    Pen := New GxPen.CreateSolid(GxColor.FromKnownColor(GxKnownColor.Red), 0.40);

    LevelLs := Chart.AxisY.LevelLines;

    LevelLs.Add(0, Pen);

    LevelLine := LevelLs.Item(0);

    // Задаем функцию, по которой строится линия уровня

    LevelLine.ValueFunction := ChartAxisLevelLineFunctionType.Median;

    // Выводим значение функции в окно консоли

    Debug.WriteLine(LevelLine.CalculatedValue);

    // Добавляем подпись линии уровня

    LineLabel := LevelLine.Label;

    // Определяем видимость подписи линии уровня

    LineLabel.Visible := True;

    //Задаем новые параметры подписи линии уровня

    LineLabel.Font := New GxFont.Create("Arial", 14, GxFontStyle.BoldItalic, GxUnit.Point);

    LineLabel.FontColor := New GxColor.CreateRGB(255, 0, 0);

    LineLabel.MaskText := "Тип функции - %Computation; " + "Значение  - %Value";

    // Сохраняем изменения в отчете

    (Report As IMetabaseObject).Save;

End Sub UserProc;


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
