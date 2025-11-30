# IMsCrossDimensionAggregationTransform.Operands

IMsCrossDimensionAggregationTransform.Operands
-


# IMsCrossDimensionAggregationTransform.Operands


## Синтаксис


		Operands: [IMsFormulaTermList](../IMsFormulaTermList/IMsFormulaTermList.htm);


## Описание


Свойство Operands возвращает
 коллекцию термов, используемых для составления выражения агрегации.


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором FC. В контейнере моделирования данной
 базы должна присутствовать модель с идентификатором MODEL_AGGR, рассчитываемая
 методом расширенной агрегации.


Добавьте ссылки на системные сборки: Cubes, Metabase, Ms.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    Rubr: IRubricator;

		    msDescr: IMetabaseObjectDescriptor;

		    Model: IMsModel;

		    Transform: IMsFormulaTransform;

		    Formula: IMsFormula;

		    Aggr: IMsCrossDimensionAggregationTransform;

		    i: Integer;

		    strsGen: IMsFormulaStringGenerator;

		Begin

		    mb := MetabaseClass.Active;

		    Rubr := mb.ItemById("FC").Bind As IRubricator;

		    msDescr := Rubr.ModelSpace;

		    Model := mb.ItemByIdNamespace("MODEL_AGGR",msDescr.Key).Bind As IMsModel;

		    Transform := Model.Transform;

		    Formula := Transform.FormulaItem(0);

		    Aggr := Formula.Method As IMsCrossDimensionAggregationTransform;

		    strsGen := Formula.CreateStringGenerator;

		    strsGen.ShowFullVariableNames:= True;

		    Debug.WriteLine("Выражение агрегации: " + strsGen.Execute);

		    Debug.WriteLine("Термы, использованные в выражении агрегации:");

		    For i := 0 To Aggr.Operands.Count- 1 Do

		        Debug.WriteLine(" " + Aggr.Operands.Item(0).TermToText);

		    End For;

		    Debug.WriteLine("Терм, содержащий результаты агрегации: " + Aggr.Result.TermToText);

		End Sub UserProc;


В результате выполнения примера в окно консоли будет выведена информация
 о выражении агрегации, о термах, использованных в выражении, и терме,
 содержащем результаты агрегации. Например:


Выражение агрегации: Countries in transition for
 publication|National Account[t] = Сумма(BCA[t] / BCI[t] + NGDP[t])


Термы, использованные в выражении агрегации:


  BCA[t]


  BCI[t]


  NGDP[t]


Терм, содержащий результаты агрегации: Countries
 in transition for publication|National Account[t]


См. также:


[IMsCrossDimensionAggregationTransform](IMsCrossDimensionAggregationTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
