# IPivotParetoSettingsItem.Threshold

IPivotParetoSettingsItem.Threshold
-


# IPivotParetoSettingsItem.Threshold


## Синтаксис


Threshold: Double;


## Описание


Свойство Threshold определяет
 пороговое значение, относительно которого будет производиться отбор значений
 ячеек.


## Комментарии


Свойство актуально, если свойство [IPivotParetoSettingsItem.Display](IPivotParetoSettingsItem.Display.htm)
 принимает значение True.


В зависимости от типа отбора значений, заданного в свойстве [IPivotParetoSettingsItem.Kind](IPivotParetoSettingsItem.Kind.htm), в свойстве
 Threshold допустимы следующие
 значения:


	- процент отбора в виде десятичной дроби, если свойство [IPivotParetoSettingsItem.Kind](IPivotParetoSettingsItem.Kind.htm) принимает
	 значение [PivotParetoKind.Percent](../../Enums/PivotParetoKind.htm);


	- целое число, определяющее количество значений, если свойство
	 [IPivotParetoSettingsItem.Kind](IPivotParetoSettingsItem.Kind.htm)
	 принимает значение [PivotParetoKind.Count](../../Enums/PivotParetoKind.htm).
	 Если задано вещественное число, то оно будет округлено до ближайшего
	 целого значения;


	- вещественное число, являющееся границей суммы отбираемых значений,
	 если свойство [IPivotParetoSettingsItem.Kind](IPivotParetoSettingsItem.Kind.htm)
	 принимает значение [PivotParetoKind.Sum](../../Enums/PivotParetoKind.htm).


По умолчанию для параметров анализа по столбцам свойству Threshold
 установлено значение «0,2», по строкам -«0,8».


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором «EXPRESS», содержащего таблицу.


Добавьте ссылки на системные сборки: Express, Metabase, Pivot.


			Sub UserProc;

Var

    Metabase: IMetabase;

    Analyzer: IEaxAnalyzer;

    Pivot: IPivot;

    ColumnSettings: IPivotParetoSettings;

    BottomSettings: IPivotParetoSettingsItem;

    TopSettings: IPivotParetoSettingsItem;

Begin

    // Получим репозиторий

    Metabase := MetabaseClass.Active;

    // Получим экспресс-отчёт

    Analyzer := Metabase.ItemById("EXPRESS").Edit As IEaxAnalyzer;

    // Получим таблицу экспресс-отчета

    Pivot := Analyzer.Pivot;

    // Будем применять распределение к столбцам

    ColumnSettings := Pivot.Pareto.ColumnsSettings;

    // Включим анализ для первого столбца

    ColumnSettings.Enabled := True;

    ColumnSettings.ElementIndex := 0;

    ColumnSettings.OtherAggregation := PivotEvaluatorElementType.Avg;

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

    // Сохраним изменения

    (Analyzer As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера к первому столбцу таблицы экспресс-отчета будет
 применен анализ «Первые/Последние» в соответствии с заданными параметрами:


	- будут отображены две ячейки с минимальными значениями;


	- будут отображены две ячейки с максимальными значениями;


	- по всем остальным данным будет рассчитано среднее значение.


См. также:


[IPivotParetoSettingsItem](IPivotParetoSettingsItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
