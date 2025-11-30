# IMsMethodSeries.AddFactor

IMsMethodSeries.AddFactor
-


# IMsMethodSeries.AddFactor


## Синтаксис


AddFactor: [IMsFormulaTermInfo](../IMsFormulaTermInfo/IMsFormulaTermInfo.htm);


## Описание


Свойство AddFactor определяет добавленный фактор.


## Комментарии


Добавляемый фактор используется для корректировки прогноза. Он не включаются в сгенерированное наименование модели.


По умолчанию добавляемый фактор отсутствует.


AddFactor может применяться в следующих моделях:


-
[ARIMA](../IMsArimaTransform/IMsArimaTransform.htm);


-
[Регрессия на панельных данных](../IMsPooledModelTransform/IMsPooledModelTransform.htm);


-
[Векторная модель коррекции ошибок](../IMsECMEquation/IMsECMEquation.htm);


-
[Детерминированное уравнение](../IMsDeterministicTransform/IMsDeterministicTransform.htm);


-
[Линейная регрессия](../IMs2SLSTransform/IMs2SLSTransform.htm) (оценка методом инструментальных переменных);


-
[Линейная регрессия](../IMsLinearRegressionTransform/IMsLinearRegressionTransform.htm) (метод оценки МНК);


-
[Грей-метод](../IMsGreyForecastTransform/IMsGreyForecastTransform.htm);


-
[Модель коррекции ошибок](../IMsCointegrationEquationTransform/IMsCointegrationEquationTransform.htm). Добавленный фактор задается для [каждого уравнения](../IMsECMEquation/IMsECMEquation.htm) в модели, а не для всей модели в целом;


-
[Нелинейная регрессия](../IMsNonLinearRegressionTransform/IMsNonLinearRegressionTransform.htm);


-
[Тренд с подбором функциональной зависимости](../IMsCurveEstimationTransform/IMsCurveEstimationTransform.htm);


-
[Экспоненциальное сглаживание](../IMsExponentialSmoothingTransform/IMsExponentialSmoothingTransform.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера моделирования с идентификатором «CONT_MODEL», содержащим модель (детерминированное уравнение) с идентификатором «MODEL». Также в контейнере должна присутствовать переменная с идентификатором «VAR_ADD».


Добавьте ссылки на системные сборки «Metabase», «Ms», «Cubes».


			Sub UserProc;

Var

    mb: IMetabase;

    ContModelKey: Integer;

    Model: IMsModel;

    Variable: IVariableStub;

    Transform: IMsFormulaTransform;

    Formula: IMsFormula;

    Method: IMsDeterministicTransform;

    Series: IMsMethodSeries;

    TransVar: IMsFormulaTransformVariable;

    Term: IMsFormulaTermInfo;

    Slice: IMsFormulaTransformSlice;

Begin

    mb := MetabaseClass.Active;

    ContModelKey := mb.ItemById("CONT_MODEL").Key;

    Model := mb.ItemByIdNamespace("MODEL", ContModelKey).Edit As IMsModel;

    Variable := MB.ItemByIdNamespace("VAR_ADD", ContModelKey).Bind As IVariableStub;

    Transform := Model.Transform;

    Formula := Transform.FormulaItem(0);

    Method := Formula.Method As IMsDeterministicTransform;

    Series := Method.Series;

    TransVar := Transform.Inputs.Add(Variable);

    Term := Transform.CreateTermInfo;

    Slice := TransVar.Slices.Add(Null);

    Term.Slice := Slice;

    Series.AddFactor := Term;

    (Model As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера для корректировки прогноза в модели детерминированного уравнения будет использоваться добавляемый фактор «VAR_ADD».


См. также:


[IMsMethodSeries](IMsMethodSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
