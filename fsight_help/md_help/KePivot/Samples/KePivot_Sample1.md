# Создание экспресс-отчета

Создание экспресс-отчета
-


# Создание экспресс-отчёта


Ниже представлен пример создания нового экспресс-отчета с настройкой
 отображения данных. Для выполнения примера предполагается наличие в репозитории
 куба с идентификатором CUBE.


			Sub UserProc;

Var

    MB: IMetabase;

    CrInfo: IMetabaseObjectCreateInfo;

    Expr: IEaxAnalyzer;

    Cube: ICubeInstance;

    Pivot: IPivot;

    Totals: IPivotEvaluatorTotals;

    HighItem: IPivotHighlightItem;

    HeaderSettings: IEaxDataAreaCellStyle;

    Styles: IEaxGrid;

    Style: ITabCellStyle;

    TabStyle: ITabCellStyle;

Begin

    MB := MetabaseClass.Active;

    CrInfo := MB.CreateCreateInfo;

    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_EXPRESSREPORT;

    CrInfo.Id := "NEWEXPRESS";

    CrInfo.Parent := MB.Root;

    Expr := MB.CreateObject(CrInfo).Edit As IEaxAnalyzer;

    //Куб, для которого строится экспресс-отчет

    Cube := MB.ItemById("CUBE").Open(Null) As ICubeInstance;

    Expr.OpenCube(Cube);

    Pivot := Expr.Pivot;

    //Итоги

    Totals := Pivot.Evaluator.Totals;

    Totals.RowTypes := PivotEvaluatorElementType.Sum + PivotEvaluatorElementType.Max;

    Totals.IncludeOwner := True;

    Totals.TreatEmptyAsZero := False;

    //Подсветка данных в диапазоне [100;200]

    HighItem := Pivot.Highlight.Add;

    HighItem.ConditionType := PivotHighlightType.NLAandNGB;

    HighItem.ConditionValueA := 100;

    HighItem.ConditionValueB := 200;

    HighItem.Area := PivotFilterArea.Table;

    HighItem.Enabled := True;

    //Настройка стилей отображения

    Styles := Expr.Grid;

    HeaderSettings := Styles.ViewSettings.GetViewSettings(Pivot As IDataAreaHeaderSettingsBase) As IEaxDataAreaCellStyle;

    //Стиль отображения итоговых значений

    Style := HeaderSettings.Data;

    Style.HorizontalAlignment := TabFormatAlignment.Center;

    Style.BackgroundBrush := New GxSolidBrush.Create(GxColor.FromName("LightGray"));

    Style.Font.Color := GxColor.FromName("Red");

    //Стиль отображения подсвеченных ячеек

    TabStyle := Styles.Style.HighlightedStyle;

    TabStyle.BackgroundBrush := New GxSolidBrush.Create(GxColor.FromName("Yellow"));

    TabStyle.Font.Bold := TriState.OnOption;

    TabStyle.Font.Color := GxColor.FromName("Blue");

    (Expr As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в корневом каталоге репозитория для указанного
 куба будет создан новый экспресс-отчет. В таблице с данными по столбцам
 будут отображаться итоги: сумма значений и максимальное значение. Значения,
 находящиеся в диапазоне [100;200], будут подсвечены синим цветом на желтом
 фоне.


См. также:


[Примеры](KePivot_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
