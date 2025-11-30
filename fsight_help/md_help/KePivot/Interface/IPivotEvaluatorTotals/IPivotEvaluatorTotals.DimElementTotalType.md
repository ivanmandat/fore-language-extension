# IPivotEvaluatorTotals.DimElementTotalType

IPivotEvaluatorTotals.DimElementTotalType
-


# IPivotEvaluatorTotals.DimElementTotalType


## Синтаксис


DimElementTotalType(DimKey: Integer; Element: Integer):
 [PivotEvaluatorElementType](../../Enums/PivotEvaluatorElementType.htm);


## Параметры


DimKey. Ключ измерения, для
 элемента которого настраивается расчёт собственного итога.


Element. Индекс элемента измерения.


## Описание


Свойство DimElementTotalType
 определяет собственный вид итога, который будет рассчитываться для указанного
 элемента измерения.


## Комментарии


Свойство актуально, если свойству [DimElementTotalEnabled](IPivotEvaluatorTotals.DimElementTotalEnabled.htm)
 установлено значение True. Также,
 в зависимости от расположения измерения с ключом DimKey,
 должен быть включен расчёт итогов по [строкам](IPivotEvaluatorTotals.RowTotalsEnabled.htm)/[столбцам](IPivotEvaluatorTotals.ColumnTotalsEnabled.htm).
 Значением собственного итога по элементу будут заменены все виды итогов,
 рассчитываемых по строкам/столбцам.


Для сброса расчёта собственного итога используйте метод [RemoveDimElementTotal](IPivotEvaluatorTotals.RemoveDimElementTotal.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта с идентификатором REPORT. В отчёт добавлен источник, на базе которого
 создан срез и добавлена таблица данных.


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase,
 Pivot, Report.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Report: IPrxReport;

	    DataArea: IEaxDataArea;

	    Pivot: IPivot;

	    Totals: IPivotEvaluatorTotals;

	    Dim: IDimInstance;

	Begin

	    Mb := MetabaseClass.Active;

	    // Открытие отчёта на редактирование

	    Report := Mb.ItemById("REPORT").Edit As IPrxReport;

	    // Получение основы построения среза аналитической области данных

	    DataArea := Report.DataArea;

	    Pivot := (DataArea.Slices.Item(0) As IEaxDataAreaPivotSlice).Pivot;

	    // Итоги

	    Totals := Pivot.Evaluator.Totals;

	    // Включение итогов по столбцам

	    Totals.ColumnTotalsEnabled := True;

	    Totals.ColumnTypes := PivotEvaluatorElementType.Avg;

	    // Включение отдельного итога для первого элемента измерения, расположенного в шапке

	    Dim := Pivot.TopHeader.Dim(0);

	    Totals.DimElementTotalEnabled(Dim.Key, 0) := True;

	    Totals.DimElementTotalType(Dim.Key, 0) := PivotEvaluatorElementType.Max;

	    // Сохранение изменений

	    Report.MetabaseObject.Save;

	End Sub UserProc;


При выполнении примера для среза аналитической области данных будет
 включен расчёт итогов по столбцам. Рассчитываемый тип итогов - среднее
 арифметическое. Для первого элемента измерения, расположенного в шапке,
 будет включен собственный тип итогов - максимальное значение.


См. также:


[IPivotEvaluatorTotals](IPivotEvaluatorTotals.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
