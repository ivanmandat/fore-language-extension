# IMs2SLSTransform.Coefficients

IMs2SLSTransform.Coefficients
-


# IMs2SLSTransform.Coefficients


## Синтаксис


		Coefficients(Coord: [IMsFormulaTransformCoord](../IMsFormulaTransformCoord/IMsFormulaTransformCoord.htm)):
		 Array;


## Параметры


Coord.
 Срез моделируемой переменной, для которого осуществляется расчёт.


## Описание


Свойство Coefficients определяет
 массив значений коэффициентов уравнения модели.


## Комментарии


Если в уравнении присутствует константа, то значение константы указывается
 в последнем элементе массива. Для сохранения коэффициентов необходимо
 данному свойству присвоить массив значений, для сброса коэффициентов -
 присвоить значение Null.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MODEL_SPACE. В данном контейнере создана
 модель с идентификатором New_2SLS, использующая для расчёта метод линейной
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

		    SLS: IMs2SLSTransform;

		    Calc: IMsModelCalculation;

		    Coord: IMsFormulaTransformCoord;

		    Coef: Array Of Double;

		    i: Integer;

		Begin

		    MB := MetabaseClass.Active;

		    MObj := MB.ItemByIdNamespace("New_2SLS", MB.ItemById("MODEL_SPACE").Key).Edit;

		    Model := MObj As IMsModel;

		    Trans := Model.Transform;

		    VarTrans := Trans.Outputs.Item(0);

		    Tree := VarTrans.SlicesTree(VarTrans);

		    Slice := Tree.CreateSlice(1);

		    Selector := Trans.CreateSelector;

		    Selector.Slice := Slice;

		    Formula := Trans.Transform(Selector);

		    SLS := Formula.Method As IMs2SLSTransform;

		    Calc := Model.CreateCalculation;

		    Calc.Period.IdentificationStartDate := DateTime.ComposeDay(1990, 01, 01);

		    Calc.Period.IdentificationEndDate := DateTime.ComposeDay(2000, 12, 31);

		    Calc.Period.ForecastStartDate := DateTime.ComposeDay(2001, 01, 01);

		    Calc.Period.ForecastEndDate := DateTime.ComposeDay(2010, 01, 01);

		    Coord := Trans.CreateCoord(VarTrans);

		    //Идентификация нового уравнения

		    SLS.Identify(Calc As IMsMethodCalculation, Coord);

		    //Получаем расчитанные коэффициенты

		    Coef := SLS.Coefficients(Coord);

		    //Если не сохранены - сохраняем

		    If Not SLS.IsCoefficientsSaved(Coord) Then

		        SLS.Coefficients(Coord) := Coef;

		    End If;

		    //Выводим в консоль

		    For i := 0 To Coef.Length - 1 Do

		        Debug.WriteLine(Coef[i]);

		    End For;

		    MObj.Save;

		End Sub UserProc;


В результате выполнения примера будут рассчитаны новые коэффициенты
 уравнения. Значения коэффициентов будут сохранены и выведены в окно консоли
 среды разработки.


См. также:


[IMs2SLSTransform](IMs2SLSTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
