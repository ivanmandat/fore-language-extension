# Расчет модели

Расчет модели
-


# Расчет модели


Для выполнения примера предполагается наличие в репозитории контейнера
 моделирования с идентификатором KONT_MODEL. В контейнере содержится модель
 MODEL_1, настроенная на расчет с использованием метода универсального
 тренда.


Добавьте ссылки на системные сборки: Metabase, Ms, Stat.


			Sub UserProc;

Var

    MB: IMetabase;

    Model: IMsModel;

    Trans: IMsFormulaTransform;

    TransVar: IMsFormulaTransformVariable;

    Tree: IMsFormulaTransformSlicesTree;

    Selector: IMsFormulaTransformSelector;

    CurveEst: IMsCurveEstimationTransform;

    Coo: IMsFormulaTransformCoord;

    Calc: IMsMethodCalculation;

    Period: IMsModelPeriod;

    Result: IMsModelCalculationResult;

    SmCurve: ISmCurveEstimation;

    Ar: Array Of double;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    //Расчитываемая модель

    Model := MB.ItemByIdNamespace("MODEL_1", MB.ItemById("KONT_MODEL").Key).Bind As IMsModel;

    Trans := Model.Transform;

    TransVar := Trans.Outputs.Item(0);

    Tree := TransVar.SlicesTree(TransVar);

    Selector := Trans.CreateSelector;

    Selector.Slice := Tree.CreateSlice(1);

    CurveEst := Trans.Transform(Selector).Method As IMsCurveEstimationTransform;

    //Координата, по которой производится расчет

    Coo := Trans.CreateCoord(TransVar);

    Calc := Trans.CreateCalculation;

    //Установка периодов идентификации и прогнозирования

    Period := Calc.Period;

    Period.IdentificationStartDate := Trans.Period.IdentificationStartDate;

    Period.IdentificationEndDate := Trans.Period.IdentificationEndDate;

    Period.ForecastStartDate := Trans.Period.ForecastStartDate;

    Period.ForecastEndDate := Trans.Period.ForecastEndDate;

    //Расчет модели с использованием лучшей формы зависимости

    Result := CurveEst.Execute(Calc, Coo);

    SmCurve := Result.StatMethod As ISmCurveEstimation;

    Debug.WriteLine("Сглаженный ряд");

    Ar := SmCurve.DependenceForms.Item(0).Fitted;

    For i := 0 To Ar.Length - 1 Do

        Debug.WriteLine(Ar[i]);

    End For;

    Debug.WriteLine("Прогноз");

    Ar := SmCurve.DependenceForms.Item(0).Forecast.Value;

    For i := 0 To Ar.Length - 1 Do

        Debug.WriteLine(Ar[i]);

    End For

End Sub UserProc;


После выполнения примера будет осуществлен расчет модели. В консоль
 среды разработки будут выведены значения сглаженного ряда и прогноза,
 полученные в результате расчета.


См. также:


[Примеры](KeMs_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
