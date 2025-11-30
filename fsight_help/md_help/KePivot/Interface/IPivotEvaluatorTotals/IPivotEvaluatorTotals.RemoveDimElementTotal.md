# IPivotEvaluatorTotals.RemoveDimElementTotal

IPivotEvaluatorTotals.RemoveDimElementTotal
-


# IPivotEvaluatorTotals.RemoveDimElementTotal


## Синтаксис


RemoveDimElementTotal(DimKey: Integer; [Element:
 Integer = -1]): [Boolean](../../Enums/PivotEvaluatorElementType.htm);


## Параметры


DimKey. Ключ измерения, для
 элемента которого настраивается расчёт собственного итога.


Element. Индекс элемента измерения.


## Описание


Метод RemoveDimElementTotal
 сбрасывает расчёт собственного итога у элементов указанного измерения.


## Комментарии


Если параметр Element не определён
 или передаётся его значение по умолчанию, то сбрасываются итоги у всех
 элементов измерения. При указании параметра Element
 расчёт собственного типа итогов сбросится только у указанного элемента.


Метод возвращает признак успешного сброса настроек расчёта итогов у
 элементов измерения.


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта с идентификатором REPORT. В отчёт добавлен источник, на базе которого
 создан срез и добавлена таблица данных, включен расчёт каких-либо итогов.
 Также для элементов измерения, расположенного в шапке, настроен расчёт
 собственных типов итогов.


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase,
 Pivot, Report.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Report: IPrxReport;

	    DataArea: IEaxDataArea;

	    Pivot: IPivot;

	    Totals: IPivotEvaluatorTotals;

	Begin

	    Mb := MetabaseClass.Active;

	    // Открытие отчёта на редактирование

	    Report := Mb.ItemById("REPORT").Edit As IPrxReport;

	    // Получение основы построения среза аналитической области данных

	    DataArea := Report.DataArea;

	    Pivot := (DataArea.Slices.Item(0) As IEaxDataAreaPivotSlice).Pivot;

	    // Итоги

	    Totals := Pivot.Evaluator.Totals;

	    // Сброс собственных итогов у элементов измерения

	    Totals.RemoveDimElementTotal(Pivot.TopHeader.Dim(0).Key);

	    // Сохранение изменений

	    Report.MetabaseObject.Save;

	End Sub UserProc;


При выполнении примера у всех элементов измерения, расположенного в
 шапке, будет сброшен расчёт собственных итогов.


См. также:


[IPivotEvaluatorTotals](IPivotEvaluatorTotals.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
