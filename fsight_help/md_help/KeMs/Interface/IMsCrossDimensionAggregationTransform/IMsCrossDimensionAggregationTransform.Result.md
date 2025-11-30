# IMsCrossDimensionAggregationTransform.Result

IMsCrossDimensionAggregationTransform.Result
-


# IMsCrossDimensionAggregationTransform.Result


## Синтаксис


		Result: [IMsFormulaTerm](../IMsFormulaTerm/IMsFormulaTerm.htm);


## Описание


Свойство Result возвращает терм,
 соответствующий моделируемой переменной.


## Комментарии


Для получения термов, используемых для составления выражения агрегации,
 используйте свойство [IMsCrossDimensionAggregationTransform.Options](IMsCrossDimensionAggregationTransform.Options.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS, содержащего модель расширенной агрегации
 с идентификатором MODEL_AGGREGATION.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    msDescr: IMetabaseObjectDescriptor;

		    Model: IMsModel;

		    Transform: IMsFormulaTransform;

		    Formula: IMsFormula;

		    Aggr: IMsCrossDimensionAggregationTransform;

		    i: Integer;

		    strsGen: IMsFormulaStringGenerator;

		Begin

		    // Получаем текущий репозиторий

		    mb := MetabaseClass.Active;

		    // Получаем модель

		    msDescr := mb.ItemById("MS");

		    Model := mb.ItemByIdNamespace("MODEL_AGGREGATION", msDescr.Key).Bind As IMsModel;

		    // Получаем параметры модели

		    Transform := Model.Transform;

		    Formula := Transform.FormulaItem(0);

		    Aggr := Formula.Method As IMsCrossDimensionAggregationTransform;

		    strsGen := Formula.CreateStringGenerator;

		    strsGen.ShowFullVariableNames := True;

		    // Выводим информацию о модели в окно консоли

		    Debug.WriteLine("Выражение агрегации: " + strsGen.Execute);

		    Debug.WriteLine("Термы, использованные в выражении агрегации:");

		    Debug.Indent;

		    For i := 0 To Aggr.Operands.Count - 1 Do

		        Debug.WriteLine(Aggr.Operands.Item(0).TermToText);

		    End For;

		    Debug.Unindent;

		    Debug.WriteLine("Терм, соответствующий моделируемой переменной: " + Aggr.Result.TermToText);

		End Sub UserProc;


В результате выполнения примера в окно консоли будет выведена информация
 о выражении агрегации, о термах, использованных в выражении и терме, соответствующем
 моделируемой переменной.


См. также:


[IMsCrossDimensionAggregationTransform](IMsCrossDimensionAggregationTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
