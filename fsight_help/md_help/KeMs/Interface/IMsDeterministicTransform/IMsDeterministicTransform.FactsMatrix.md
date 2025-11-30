# IMsDeterministicTransform.FactsMatrix

IMsDeterministicTransform.FactsMatrix
-


# IMsDeterministicTransform.FactsMatrix


## Синтаксис


		FactsMatrix(Calculation: [IMsMethodCalculation](../IMsMethodCalculation/IMsMethodCalculation.htm);
		 Coord: [IMsFormulaTransformCoord](../IMsFormulaTransformCoord/IMsFormulaTransformCoord.htm)):
		 Array;


## Параметры


Calculation. Параметры расчёта
 модели;


Coord. Срез модели, по которому
 осуществляется расчёт.


## Описание


Свойство FactsMatrix возвращает
 массив, содержащий значения факторов модели.


## Комментарии


Параметры Calculation и Coord не могут принимать значение
 Null.


Массив, содержащий корреляцию факторов, возвращает свойство [IMsDeterministicTransform.PairCorrelationMatrix](IMsDeterministicTransform.PairCorrelationMatrix.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS, содержащего модель детерминированного
 уравнения с идентификатором MODELDETERM.


Добавьте ссылки на системные сборки: Matrix, Metabase, Ms.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    MsKey: Integer;

		    hModel: IMetabaseObjectDescriptor;

		    oModel: IMsModel;

		    trans: IMsFormulaTransform;

		    selector: IMsFormulaTransformSelector;

		    formula: IMsFormula;

		    output: IMsFormulaTransformVariable;

		    determ: IMsDeterministicTransform;

		    coord: IMsFormulaTransformCoord;

		    calculation: IMsMethodCalculation;

		    calcPeriod, modPeriod: IMsModelPeriod;

		    matrix: Array Of Double;

		    i, j: Integer;

		    nFactors: Integer;

		Begin

		    mb := metabaseClass.Active;

		    MsKey : = mb.ItemById("MS").Key;

		    hModel := mb.ItemByIdNamespace("MODEL_DETERM", MsKey);

		    oModel := hModel.Bind As IMsModel;

		    trans := oModel.Transform;

		    output := trans.Outputs.Item(0);

		    selector := trans.CreateSelector;

		    selector.Slice := output.Slices.Item(0);

		    formula := trans.Transform(selector);

		    determ := formula.Method As IMsDeterministicTransform;

		    coord := trans.CreateCoord(output);

		    calculation := trans.CreateCalculation;

		    calcPeriod := calculation.Period;

		    modPeriod := oModel.Period;

		    calcPeriod.ForecastEndDate := modPeriod.ForecastEndDate;

		    calcPeriod.ForecastStartDate := modPeriod.ForecastStartDate;

		    calcPeriod.IdentificationEndDate := modPeriod.IdentificationEndDate;

		    calcPeriod.IdentificationStartDate := modPeriod.IdentificationStartDate;

		    matrix := determ.FactsMatrix(calculation, coord);

		    nFactors := determ.Operands.Count;

		    For i := 0 To nFactors - 1 Do

		        Debug.WriteLine("Фактор: " + determ.Operands.Item(i).TermToText + ". Значения:");

		        For j := matrix.GetLowerBound(1) To matrix.GetUpperBound(1) Do

		            Debug.WriteLine("  " + matrix[j, i].ToString);

		        End For;

		    End For;

		End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены наименования
 факторов модели и их значения.


См. также:


[IMsDeterministicTransform](IMsDeterministicTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
