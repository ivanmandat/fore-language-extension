# IMsLinearRegressionTransform.PDLStatCoefficients

IMsLinearRegressionTransform.PDLStatCoefficients
-


# IMsLinearRegressionTransform.PDLStatCoefficients


## Синтаксис


PDLStatCoefficients(Coord: [IMsFormulaTransformCoord](../IMsFormulaTransformCoord/IMsFormulaTransformCoord.htm);
 Index: Integer): [IMsPDLCoefficients](../IMsPDLCoefficients/IMsPDLCoefficients.htm);


## Параметры


Coord. Срез моделируемой переменной,
 для которого осуществляется расчет;


Index. Индекс лаговой переменной.


## Описание


Свойство PDLStatCoefficients
 возвращает коэффициенты для лаговых переменных.


## Комментарии


Перед получением коэффициентов они должны быть идентифицированы. Для
 этого используйте [IMsStochasticMethod.Identify](../IMsStochasticMethod/IMsStochasticMethod.Identify.htm).


## Пример


Для выполнения примера предполагается наличие контейнера моделирования
 с идентификатором CONT_MODEL. Контейнер содержит модель линейной регрессии
 (оценка МНК) с идентификатором MODEL, содержащей несколько факторов. Добавьте
 ссылки на системные сборки: Metabase, Ms, Stat.


			Sub UserProc;

Var

    mb: IMetabase;

    ContModelDescr: IMetabaseObjectDescriptor;

    ModelObj: IMetabaseObject;

    pModel: IMsModel;

    pTransform: IMsFormulaTransform;

    pFormula: IMsFormula;

    pRegress: IMsLinearRegressionTransform;

    Term: IMsCompositeFormulaTerm;

    pPDLTerm: IMsPDLTermOptions;

    pVar: IMsFormulaTransformVariable;

    pCalc: IMsMethodCalculation;

    pCoord: IMsFormulaTransformCoord;

    PDLCoeff: IMsPDLCoefficients;

Begin

    mb := MetabaseClass.Active;

    ContModelDescr := mb.ItemById("CONT_MODEL");

    ModelObj := mb.ItemByIdNamespace("MODEL", ContModelDescr.Key).Edit;

    pModel := ModelObj As IMsModel;

    pTransform := pModel.Transform;

    pFormula := pTransform.FormulaItem(0);

    pRegress := pFormula.Method As IMsLinearRegressionTransform;

    Term := pRegress.Explanatories.Item(0);

    pPDLTerm := Term.CustomOptions As IMsPDLTermOptions;

    pPDLTerm.IsPDLTerm := True;

    pPDLTerm.LagLengthK := 3;

    pPDLTerm.PolinomialDegreeP := 1;

    pPDLTerm.PDLConstraint := PDLConstraintType.Both;

    ModelObj.Save;

    pCalc := pTransform.CreateCalculation;

    pCalc.Period.IdentificationStartDate := DateTime.ComposeDay(2000, 1, 1);

    pCalc.Period.IdentificationEndDate := DateTime.ComposeDay(2010, 12, 31);

    pCalc.Period.ForecastStartDate := DateTime.ComposeDay(2011, 1, 1);

    pCalc.Period.ForecastEndDate := DateTime.ComposeDay(2015, 12, 31);

    pVar := pTransform.Outputs.Item(0);

    pCoord := pTransform.CreateCoord(pVar);

    pRegress.Identify(pCalc, pCoord);

    PDLCoeff := pRegress.PDLStatCoefficients(pCoord, 0);

    Debug.WriteLine("Сумма коэффициентов: " + PDLCoeff.EstimatesSum.ToString);

    Debug.WriteLine("Сумма стандартных ошибок: " + PDLCoeff.StdErrSum.ToString);

    Debug.WriteLine("Сумма t-статистик: " + PDLCoeff.TStatSum.ToString);

End Sub UserProc;


После выполнения примера первый регрессор модели будет преобразован
 в лаговую переменную. Для переменной будут заданы лаг, степень полинома
 и тип ограничения. Модель будет сохранена, её коэффициенты будут идентифицированы,
 в окно консоли будут выведены коэффициенты созданной лаговой переменной.


См. также:


[IMsLinearRegressionTransform](IMsLinearRegressionTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
