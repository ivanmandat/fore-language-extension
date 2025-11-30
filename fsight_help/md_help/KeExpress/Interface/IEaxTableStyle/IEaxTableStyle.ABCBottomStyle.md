# IEaxTableStyle.ABCBottomStyle

IEaxTableStyle.ABCBottomStyle
-


# IEaxTableStyle.ABCBottomStyle


## Синтаксис


ABCBottomStyle: [ITabCellStyle](TabSheet.chm::/Interface/ITabCellStyle/ITabCellStyle.htm);


## Описание


Свойство ABCBottomStyle определяет
 стиль ячеек с минимальными значениями столбца/строки при использовании
 анализа «[Первые/Последние](UiAnalyticalArea.chm::/Analysis/distribution.htm#distibution_firstlast)».


## Комментарии


Для определения стиля ячеек с максимальными значениями столбца/строки
 используйте свойство [IEaxTableStyle.ABCTopStyle](IEaxTableStyle.ABCTopStyle.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором EXPRESS_IPIVOTPARETOSETTENGSITEM, содержащего таблицу.


Добавьте ссылки на системные сборки: Drawing, Express, Metabase, Pivot,
 Tab.


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    Analyzer: IEaxAnalyzer;

	    Pivot: IPivot;

	    ColumnSettings: IPivotParetoSettings;

	    BottomSettings: IPivotParetoSettingsItem;

	    TopSettings: IPivotParetoSettingsItem;

	    Grid: IEaxGrid;

	    Style: IEaxTableStyle;

	    AbcTopStyle: ITabCellStyle;

	    AbcBottomStyle: ITabCellStyle;

	    TopBrush: GxSolidBrush;

	    BottomBrush: GxSolidBrush;

	    TopColor: IGxColor;

	    BottomColor: IGxColor;

	Begin

	    // Получим репозиторий

	    Metabase := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    Analyzer := Metabase.ItemById("EXPRESS_IPIVOTPARETOSETTENGSITEM").Edit As IEaxAnalyzer;

	    // Получим таблицу экспресс-отчета

	    Pivot := Analyzer.Pivot;

	    // Будем применять анализ 80/20 к столбцам

	    ColumnSettings := Pivot.Pareto.ColumnsSettings;

	    // Включим анализ только для первого столбца

	    ColumnSettings.Enabled := True;

	    ColumnSettings.ElementIndex := 0;

	    // Получим максимальные значения анализируемого столбца

	    TopSettings := ColumnSettings.TopSettings;

	    // Изменим тип расчета

	    TopSettings.Kind := PivotParetoKind.Count;

	    // Включим отображение ячеек с максимальными значениями

	    TopSettings.Display := True;

	    // Изменим количество отображаемых ячеек с максимальными значениями

	    TopSettings.Threshold := 2;

	    // Получим минимальные значения анализируемого столбца

	    BottomSettings := ColumnSettings.BottomSettings;

	    // Изменим тип расчета

	    BottomSettings.Kind := PivotParetoKind.Count;

	    // Включим отображение ячеек с минимальными значениями

	    BottomSettings.Display := True;

	    // Изменим количество отображаемых ячеек с минимальными значениями

	    BottomSettings.Threshold := 2;

	    // Получим таблицу данных отчета

	    Grid := Analyzer.Grid;

	    // Получим параметры оформления таблицы

	    Style := Grid.Style;

	    // Создадим и зададим зеленый цвет фона ячеек c максимальными значениями

	    AbcTopStyle := New TabCellStyle.Create;

	    TopColor := New GxColor.CreateRGB(0, 128, 0);

	    TopBrush := New GxSolidBrush.Create(TopColor);

	    AbcTopStyle.BackgroundBrush := TopBrush;

	    Style.ABCTopStyle := AbcTopStyle;

	    // Создадим и зададим красный цвет фона ячеек с минимальными значениями

	    AbcBottomStyle := New TabCellStyle.Create;

	    BottomColor := New GxColor.CreateRGB(255, 0, 0);

	    BottomBrush := New GxSolidBrush.Create(BottomColor);

	    AbcBottomStyle.BackgroundBrush := BottomBrush;

	    Style.ABCBottomStyle := AbcBottomStyle;

	    // Сохраним изменения

	    (Analyzer As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера к первому столбцу таблицы экспресс-отчета будет
 применен анализ «Первые/Последние» в соответствии с заданными параметрами:


	- будут отображены две ячейки с минимальными значениями;


	- будут отображены две ячейки с максимальными значениями;


	- цвет фона ячеек с максимальными значениями станет зеленым;


	- цвет фона ячеек с минимальными значениями станет красным.


См. также:


[IEaxTableStyle](IEaxTableStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
