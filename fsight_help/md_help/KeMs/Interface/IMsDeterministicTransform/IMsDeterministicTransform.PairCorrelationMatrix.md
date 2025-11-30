# IMsDeterministicTransform.PairCorrelationMatrix

IMsDeterministicTransform.PairCorrelationMatrix
-


# IMsDeterministicTransform.PairCorrelationMatrix


## Синтаксис


		PairCorrelationMatrix(Calculation: [IMsMethodCalculation](../IMsMethodCalculation/IMsMethodCalculation.htm);
		 Coord: [IMsFormulaTransformCoord](../IMsFormulaTransformCoord/IMsFormulaTransformCoord.htm)):
		 Array;


## Параметры


Calculation. Параметры расчёта
 модели;


Coord. Срез модели, по которому
 осуществляется расчёт.


## Описание


Свойство PairCorrelationMatrix
 возвращает матрицу корреляции факторов модели.


## Комментарии


Параметры Calculation и Coord не могут принимать значение
 Null.


Массив, содержащий значения факторов, возвращает свойство [IMsDeterministicTransform.FactsMatrix](IMsDeterministicTransform.FactsMatrix.htm).


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

		    nCount: Integer;

		    term: IMsFormulaTerm;

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

		    matrix := determ.PairCorrelationMatrix(calculation, coord);

		    nCount := determ.Operands.Count;

		    Debug.IndentSize := 15;

		    Debug.Indent;

		    For i := 0 To nCount - 1 Do

		        If i = 0 Then

		            term := determ.Result;

		        Else

		            term := determ.Operands.Item(i - 1);

		        End If;

		        Debug.Write(term.TermToText);

		    End For;

		    Debug.WriteLine("");

		    Debug.Unindent;

		    Debug.IndentSize := 5;

		    For i := 0 To nCount - 1 Do

		        If i = 0 Then

		            term := determ.Result;

		        Else

		            term := determ.Operands.Item(i - 1);

		        End If;

		        Debug.Write(term.TermToText);

		        Debug.Indent;

		        For j := matrix.GetLowerBound(1) To matrix.GetUpperBound(1) Do

		            Debug.Write(matrix[j, i]);

		        End For;

		        Debug.Unindent;

		        Debug.WriteLine("");

		    End For;

		End Sub UserProc;


В результате выполнения примера в окно консоли будет выведена матрица
 корреляции факторов модели детерминированного уравнения.


См. также:


[IMsDeterministicTransform](IMsDeterministicTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
