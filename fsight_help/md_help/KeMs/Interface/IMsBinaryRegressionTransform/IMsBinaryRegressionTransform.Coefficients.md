# IMsBinaryRegressionTransform.Coefficients

IMsBinaryRegressionTransform.Coefficients
-


# IMsBinaryRegressionTransform.Coefficients


## Синтаксис


		Coefficients(Coord: [IMsFormulaTransformCoord](../IMsFormulaTransformCoord/IMsFormulaTransformCoord.htm)):
		 Array;


## Параметры


Coord. Срез моделируемой переменной,
 для которого осуществляется расчёт.


## Описание


Свойство Coefficients
 определяет массив значений коэффициентов уравнения модели.


## Комментарии


Если в уравнении присутствует константа,
 то значение константы указывается в последнем элементе массива. Для сохранения
 коэффициентов необходимо данному свойству присвоить массив значений, для
 сброса коэффициентов - присвоить значение Null.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором CONT_MODEL. В контейнере содержится модель
 с идентификатором BINREG, использующая для расчёта метод бинарной регрессии.


Добавьте ссылки на системные сборки: Metabase, Ms, Stat.


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

		    Binary: IMsBinaryRegressionTransform;

		    Calc: IMsModelCalculation;

		    Coord: IMsFormulaTransformCoord;

		    Coef: Array Of Double;

		    i: Integer;

		Begin

		    MB := MetabaseClass.Active;

		    MObj := MB.ItemByIdNamespace("BinReg", MB.ItemById("CONT_MODEL").Key).Edit;

		    Model := MObj As IMsModel;

		    Trans := Model.Transform;

		    VarTrans := Trans.Outputs.Item(0);

		    Tree := VarTrans.SlicesTree(VarTrans);

		    Slice := Tree.CreateSlice(1);

		    Selector := Model.Transform.CreateSelector;

		    Selector.Slice := Slice;

		    Formula := Model.Transform.Transform(Selector);

		    Binary := Formula.Method As IMsBinaryRegressionTransform;

		    Binary.HasConstant := True;

		    Calc := Model.CreateCalculation;

		    Calc.Period.IdentificationStartDate := DateTime.ComposeDay(2000, 01, 01);

		    Calc.Period.IdentificationEndDate := DateTime.ComposeDay(2006, 12, 31);

		    Calc.Period.ForecastStartDate := DateTime.ComposeDay(2007, 01, 01);

		    Calc.Period.ForecastEndDate := DateTime.ComposeDay(2010, 12, 31);

		    Coord := Trans.CreateCoord(VarTrans);

		    //идентификация нового уравнения

		    Binary.Identify(Calc As IMsMethodCalculation, Coord);

		    //получаем рассчитанные коэффициенты

		    Coef := Binary.Coefficients(Coord);

		    //если не сохранены - сохраняем

		    If Not Binary.IsCoefficientsSaved(Coord) Then

		        Binary.Coefficients(Coord) := Coef;

		    End If;

		    //выводим в консоль

		    For i := 0 To Coef.Length - 1 Do

		        Debug.WriteLine(Coef[i]);

		    End For;

		    MObj.Save;

		End Sub UserProc;


В результате выполнения примера будут изменены параметры модели и рассчитаны
 новые коэффициенты уравнения. Несохраненные значения коэффициентов будут
 сохранены и выведены в окно консоли.


См. также:


[IMsBinaryRegressionTransform](IMsBinaryRegressionTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
