# IMsValueAtRiskTransform.Portfolio

IMsValueAtRiskTransform.Portfolio
-


# IMsValueAtRiskTransform.Portfolio


## Синтаксис


Portfolio: [IMsFormulaTermInfo](../IMsFormulaTermInfo/IMsFormulaTermInfo.htm);


## Описание


Свойство Portfolio определяет
 терм, соответствующий переменной с данными «портфеля».


## Комментарии


«Портфель» содержит список организаций и количество финансовых инструментов,
 имеющихся у организаций. Переменная, содержащая информацию о портфеле,
 состоит из следующих измерений:


	- организации. Измерение должно быть указано в [IMsValueAtRiskTransform.OrganizationsDimension](IMsValueAtRiskTransform.OrganizationsDimension.htm);


	- инструменты. Измерение должно быть указано в [IMsValueAtRiskTransform.InstrumentsDimension](IMsValueAtRiskTransform.InstrumentsDimension.htm).


## Пример


Для выполнения примера в репозитории должны присутствовать справочники
 с идентификаторами:


	- DIM_INSTRUMENTS. Содержит список финансовых инструментов;


	- DIM_ORGANIZATIONS. Содержит список организаций.


Данные справочники используются для измерений переменных, описанных
 ниже.


В репозитории должен присутствовать контейнер моделирования с идентификатором
 MS_PRIMARY, содержащий модель с идентификатором M_VAR. В контейнере также
 должны присутствовать переменные с идентификаторами:


	- V_STOCKPRICES. Переменная финансовых инструментов. Содержит
	 измерение DIM_INSTRUMENTS;


	- V_PORTFOLIO. Переменная «портфеля». Содержит измерения DIM_INSTRUMENTS
	 и DIM_ORGANIZATIONS;


	- V_VALUEATRISK. Переменная, в которую будут выгружены результаты.
	 Содержит измерение DIM_ORGANIZATIONS.


Добавьте ссылки на системные сборки: Dimensions, Cubes, Metabase, Ms,
 Stat.


			Sub UserProc;

Var

    mb: IMetabase;

    pMsDescrKey: Integer;

    pModel: IMsModel;

    pTrans: IMsFormulaTransform;

    pInsStub, pPortStub, pVaRStub: IVariableStub;

    pOutVar, pPortVar, pInsVar: IMsFormulaTransformVariable;

    pOutSlice, pPortSlice, pInsSlice: IMsFormulaTransformSLice;

    pDimIns, pDimOrg: IDimensionModel;

    pInstIns, pInstOrg: IDimInstance;

    pSel: IDimSelection;

    pSelSet: IDimSelectionSet;

    pFactory: IDimSelectionSetFactory;

    pSelector: IMsFormulaTransformSelector;

    pFormula: IMsFOrmula;

    pVaR: IMsValueAtRiskTransform;

    pTerm: IMsFormulaTermInfo;

    pBT: IMsValueAtRiskBacktesting;

    coo: IMsFormulaTransformCoord;

    calc: IMsMethodCalculation;

    res: IMsValueAtRiskBacktestingResult;

    i: integer;

Begin

    mb := MetabaseClass.Active;

    pMsDescrKey := mb.ItemById("MS_PRIMARY").Key;

    pModel := mb.ItemByIdNamespace("M_VAR", pMsDescrKey).Edit As IMsModel;

    pTrans := pModel.Transform;

// Удаляем все переменные из модели

    pTrans.Inputs.Clear;

    pTrans.Outputs.Clear;

    pTrans.Series.Clear;

// Задаем периоды идентификации и прогнозирования

    pModel.Period.IdentificationStartDate := DateTime.ComposeDay(2000, 1, 1);

    pModel.Period.IdentificationEndDate := DateTime.ComposeDay(2000, 1, 10);

    pModel.Period.ForecastStartDate := DateTime.ComposeDay(2000, 1, 11);

    pModel.Period.ForecastEndDate := DateTime.ComposeDay(2000, 1, 20);

// Получаем переменные для модели VaR

    pInsStub := mb.ItemByIdNamespace("V_STOCKPRICES", pMsDescrKey).Bind As IVariableStub;

    pPortStub := mb.ItemByIdNamespace("V_PORTFOLIO", pMsDescrKey).Bind As IVariableStub;

    pVaRStub := mb.ItemByIdNamespace("V_VALUEATRISK", pMsDescrKey).Bind As IVariableStub;

// Получаем измерение финансовых инструментов

    pInstIns := mb.ItemById("DIM_INSTRUMENTS").Open(Null) As IDimInstance;

    pDimIns := pInstIns.Dimension;

// Получаем измерение организаций

    pInstOrg := mb.ItemById("DIM_ORGANIZATIONS").Open(Null) As IDimInstance;

    pDimOrg := pInstOrg.Dimension;

// Добавляем выходную переменную

    pOutVar := pTrans.Outputs.Add(pVaRStub);

// Получаем срез входной переменной

    pFactory := New DimSelectionSetFactory.Create;

    pSelSet := pFactory.CreateDimSelectionSet;

    pSel := pSelSet.Add(pInstOrg);

    pSel.SelectAll;

    pOutSlice := pOutVar.Slices.Add(pSelSet);

// Добавляем переменную «портфеля»

    pPortVar := pTrans.Inputs.Add(pPortStub);

// Получаем срез «портфеля»

    pSelSet.Clear;

    pSel := pSelSet.Add(pInstIns);

    pSel.SelectAll;

    pSel := pSelSet.Add(pInstOrg);

    pSel.SelectAll;

    pPortSlice := pPortVar.Slices.Add(pSelSet);

//  Добавляем переменную финансовых инструментов

    pInsVar := pTrans.Inputs.Add(pInsStub);

//  Получаем срез финансовых инструментов

    pSelSet.Clear;

    pSel := pSelSet.Add(pInstIns);

    pSel.SelectAll;

    pInsSlice := pInsVar.Slices.Add(pSelSet);

// Задаем метод расчета модели

    pSelector := pTrans.CreateSelector;

    pSelector.Slice := pOutSlice;

    pSelector.Level := DimCalendarLevel.Day;

    pFormula := pTrans.Transform(pSelector);

    pFormula.Kind := MsFormulaKind.ValueAtRisk;

    pModel.Kind := MsModelKind.ValueAtRisk;

    pFormula.Level := DimCalendarLevel.Day;

    pVaR := pFormula.Method As IMsValueAtRiskTransform;

// Задаем измерения инструментов и организаций

    pVaR.InstrumentsDimension := pDimIns;

    pVaR.OrganizationsDimension := pDimOrg;

// Задаем «портфель»

    pTerm := pTrans.CreateTermInfo;

    pTerm.Slice := pPortSlice;

    pVaR.Portfolio := pTerm;

// Задаем «финансовые инструменты»

    pTerm := pTrans.CreateTermInfo;

    pTerm.Slice := pInsSlice;

    pVaR.StockPrices := pTerm;

// Задаем выходную переменную

    pTerm := pTrans.CreateTermInfo;

    pTerm.Slice := pOutSlice;

    pVaR.ValueAtRisk := pTerm;

// Указываем метод расчета VaR

    pVaR.MethodType := MsValueAtRiskMethodType.MonteCarlo;

// Указываем значимость доверительных границ

    pVaR.ConfidenceLevel := 0.05;

// Задаем метод обработки пропусков

    pVaR.UseFillGaps := True;

    pVaR.MissingData.Method := MissingDataMethod.SampleAverage;

// Используем логарифмическую доходность и гипотезу о нулевом среднем

    pVaR.LogarithmicProfit := True;

    pVaR.ZeroMean := True;

// Задаем горизонт прогнозирования

    pVaR.ForecastingHorizon := 1;

// Настраиваем параметры метода «Монте-Карло»:

// Используем факторизацию Холецкого

    pVaR.UseCholeskyFactorization := True;

// Задаем распределение для финансовых инструментов

    For i := 0 To pInstIns.Elements.Count - 1 Do

        pVaR.InstrumentDistribution(i) := MsValueAtRiskDistributionType.Uniform;

    End For;

// Задаем бэктестинг VaR

    pBT := pVaR.Backtesting;

    pBT.Enabled := True;

    pBT.Observations := 10;

// Задаем параметры расчёта

    coo := ptrans.CreateCoord(pTrans.Outputs.Item(0));

    calc := pTrans.CreateCalculation;

    calc.Period.IdentificationStartDate := pModel.Period.IdentificationStartDate;

    calc.Period.IdentificationEndDate:=pModel.Period.IdentificationEndDate;

    calc.Period.ForecastStartDate := pModel.Period.ForecastStartDate;

    calc.Period.ForecastEndDate := pModel.Period.ForecastEndDate;

// Рассчитываем модель

    pVaR.Execute(calc, coo);

// Выводим результаты

    For i := 0 To pInstOrg.Elements.Count - 1 Do

        res := pBT.Result(i);

        Debug.WriteLine("=====Организация: " + pInstOrg.Elements.Name(i) + "=======");

        If res <> Null Then

            Debug.WriteLine("Уровень достоверности = " + res.ActualConfidenceLevel.ToString);

            Debug.WriteLine("Средний непокрытый риск = " + res.AverageUncoveredRisk.ToString);

            Debug.WriteLine("Средний неиспользованный риск = " + res.AverageUnusedRisk.ToString);

            Debug.WriteLine("Бинарная функция потерь = " + res.BinaryLossFunction.ToString);

            Debug.WriteLine("Множитель, обеспечивающий покрытие = " + res.CoveringFactor.ToString);

            Debug.WriteLine("Квадратичная функция потерь = " + res.QuadraticLossFunction.ToString);

            Select Case res.TrafficLight

                Case MsValueAtRiskTrafficLight.Green: Debug.WriteLine("Светофор = Зеленый");

                Case MsValueAtRiskTrafficLight.Yellow: Debug.WriteLine("Светофор = Желтый");

                Case MsValueAtRiskTrafficLight.Red: Debug.WriteLine("Светофор = Красный");

            End Select;

            Debug.WriteLine("Корреляция VaR и реальных убытков = " + res.VaRLossCorrelation.ToString);

        Else

            Debug.WriteLine("Результат для огранизации " + i.ToString + " пуст!");

        End If;

    End For;

    (pModel As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера будет создана модель Value-At-Risk. Заданы
 параметры её расчета методом «Монте-Карло». Результаты расчёта модели
 будут выведены в окно консоли.


См. также:


[IMsValueAtRiskTransform](IMsValueAtRiskTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
