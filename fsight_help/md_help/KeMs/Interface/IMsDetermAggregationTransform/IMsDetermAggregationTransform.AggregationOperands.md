# IMsDetermAggregationTransform.AggregationOperands

IMsDetermAggregationTransform.AggregationOperands
-


# IMsDetermAggregationTransform.AggregationOperands


## Синтаксис


		AggregationOperands: [IMsFormulaTermList](../IMsFormulaTermList/IMsFormulaTermList.htm);


## Описание


Свойство AggregationOperands
 возвращает коллекцию термов, используемых для составления выражения агрегации.


## Пример


Для выполнения примера в репозитории предполагается наличие модели с
 ключом «123456». Метод расчёта модели - агрегация (базовая), рассчитываемая
 как детерминированное уравнение.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    obj: IMetabaseObject;

		    Model: IMsModel;

		    Transform: IMsFormulaTransform;

		    Formula: IMsFormula;

		    DetermAggregation: IMsDetermAggregationTransform;

		    i: Integer;

		    Operands: IMsFormulaTermList;

		Begin

		    mb := MetabaseClass.Active;

		    Obj := Mb.Item(123456).Edit;

		    Model := Obj As IMsModel;

		    Transform := Model.Transform;

		    Formula := Transform.FormulaItem(0);

		    Formula.Kind := MsFormulaKind.DetermAggregation;

		    DetermAggregation := Formula.Method As IMsDetermAggregationTransform;

		    Operands := DetermAggregation.AggregationOperands;

		    Debug.WriteLine("Термы
		 выражения агрегации:");

		    For i := 0 To Operands.Count - 1 Do

		        Debug.WriteLine("  - " + Operands.Item(i).TermToText);

		    End For;

		    Operands := DetermAggregation.CompositionRelevanceOperands;

		    Debug.WriteLine("Термы
		 выражения расчета порога агрегации:");

		    For i := 0 To Operands.Count - 1 Do

		        Debug.WriteLine("  - " + Operands.Item(i).TermToText);

		    End For;

		    Operands := DetermAggregation.WeightsOperands;

		    Debug.WriteLine("Термы
		 выражения для задания весов агрегации:");

		    For i := 0 To Operands.Count - 1 Do

		        Debug.WriteLine("  - " + Operands.Item(i).TermToText);

		    End For;

		End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены термы
 выражения агрегации, термы выражения расчёта порога агрегации и термы
 выражения для задания весов агрегации.


См. также:


[IMsDetermAggregationTransform](IMsDetermAggregationTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
