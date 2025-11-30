# IMs2SLSTransform.PairCorrelationMatrix

IMs2SLSTransform.PairCorrelationMatrix
-


# IMs2SLSTransform.PairCorrelationMatrix


## Синтаксис


		PairCorrelationMatrix(Calculation: [IMsMethodCalculation](../IMsMethodCalculation/IMsMethodCalculation.htm);
		 Coord: [IMsFormulaTransformCoord](../IMsFormulaTransformCoord/IMsFormulaTransformCoord.htm)):
		 Array;


## Параметры


Calculation. Настройки, необходимые
 для расчёта модели;


Coord. Срез моделируемой переменной,
 для которого осуществляется расчёт.


## Описание


Свойство PairCorrelationMatrix
 возвращает вещественный массив, содержащий корреляционную матрицу.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MODEL_SPACE. В данном контейнере создана
 модель с идентификатором NEW_2SLS, использующая для расчёта метод линейной
 регрессии (оценка методом инструментальных переменных).


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    MObj: IMetabaseObject;

		    Model: IMsModel;

		    Trans: IMsFormulaTransform;

		    VarTrans: IMsFormulaTransformVariable;

		    Tree: IMsFormulaTransformSlicesTree;

		    Slice: IMsFormulaTransformSlice;

		    Selector: IMsFormulaTransformSelector;

		    Formula: IMsFormula;

		    SLS2: IMs2SLSTransform;

		    Calc: IMsModelCalculation;

		    Coord: IMsFormulaTransformCoord;

		    PairArr: Array Of Double;

		    i, j: Integer;

		Begin

		    MB := MetabaseClass.Active;

		    MObj := MB.ItemByIdNamespace("New_2SLS", MB.ItemById("MODEL_SPACE").Key).Edit;

		    Model := MObj As IMsModel;

		    Trans := Model.Transform;

		    VarTrans := Trans.Outputs.Item(0);

		    Tree := VarTrans.SlicesTree(VarTrans);

		    Slice := Tree.CreateSlice(1);

		    Selector := Model.Transform.CreateSelector;

		    Selector.Slice := Slice;

		    Formula := Model.Transform.Transform(Selector);

		    SLS2 := Formula.Method As IMs2SLSTransform;

		    Calc := Model.CreateCalculation;

		    Calc.Period.IdentificationStartDate := DateTime.ComposeDay(1990, 01, 01);

		    Calc.Period.IdentificationEndDate := DateTime.ComposeDay(2000, 12, 31);

		    Calc.Period.ForecastStartDate := DateTime.ComposeDay(2001, 01, 01);

		    Calc.Period.ForecastEndDate := DateTime.ComposeDay(2010, 12, 31);

		    Coord := Trans.CreateCoord(VarTrans);

		    //идентификация уравнения

		    SLS2.Identify(Calc As IMsMethodCalculation, Coord);

		    PairArr := SLS2.PairCorrelationMatrix(Calc As IMsMethodCalculation, Coord);

		    For i := 0 To PairArr.GetUpperBound(1) Do

		        For j := 0 To PairArr.GetUpperBound(2) Do

		            Debug.Write(String.Format("{0,6:F}", PairArr[i, j]));

		        End For;

		        Debug.WriteLine("");

		    End For;

		    MObj.Save;

		End Sub UserProc;


В результате выполнения примера осуществляется идентификация коэффициентов
 уравнения модели и в окно консоли будет выведена корреляционная матрица.


См. также:


[IMs2SLSTransform](IMs2SLSTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
