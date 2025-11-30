# IMsExponentialSmoothingTransform.BestModelCoefficients

IMsExponentialSmoothingTransform.BestModelCoefficients
-


# IMsExponentialSmoothingTransform.BestModelCoefficients


## Синтаксис


		BestModelCoefficients: [IExponentialSmoothingParameters](StatLib.chm::/Interface/IExponentialSmoothingParameters/IExponentialSmoothingParameters.htm);


## Описание


Свойство BestModelCoefficients
 возвращает результаты автоподбора параметров экспоненциального сглаживания.


## Комментарии


Результаты доступны только после расчета метода.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS, содержащего модель с идентификатором
 MODEL_EXPLSM. Данная модель должна рассчитываться методом «Экспоненциальное
 сглаживание».


Добавьте ссылки на системные сборки: Metabase, Ms, Stat.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    msKey: Integer;

		    model: IMsModel;

		    method: IMsMethod;

		    exp: IMsExponentialSmoothingTransform;

		    transf: IMsFormulaTransform;

		    Coord: IMsFormulaTransformCoord;

		    Calc: IMsMethodCalculation;

		    res: IMsModelCalculationResult;

		    autoSearch: IExponentialSmoothingAutoSearch;

		    coef: IExponentialSmoothingParameters;

		    i: Integer;

		    explSerie: Array Of Double;

		Begin

		    // Получаем текущий репозиторий

		    mb := MetabaseClass.Active;

		    // Получаем ключ контейнера моделирования

		    msKey := mb.GetObjectKeyById("MS");

		    // Получаем модель

		    model := mb.ItemByIdNamespace("MODEL_EXPLSM", msKey).Bind As IMsModel;

		    // Получаем параметры метода расчета модели

		    transf := model.Transform;

		    method := transf.FormulaItem(0).Method;

		    exp := method As IMsExponentialSmoothingTransform;

		    coord := transf.CreateCoord(transf.Outputs.Item(0));

		    // Создаем объект для расчета метода

		    calc := transf.CreateCalculation;

		    calc.Period.IdentificationStartDate := transf.Period.IdentificationStartDate;

		    calc.Period.IdentificationEndDate := transf.Period.IdentificationEndDate;

		    calc.Period.ForecastStartDate := transf.Period.ForecastStartDate;

		    calc.Period.ForecastEndDate := transf.Period.ForecastEndDate;

		    calc.CurrentPoint := transf.Period.IdentificationStartDate;

		    // Выполняем расчет

		    res := exp.Execute(calc, Coord);

		    // Выводим результаты в окно консоли

		    If res.StatMethod.Status = 0 Then

		        autoSearch := exp.AutoSearch;

		        coef := exp.BestModelCoefficients;

		        Debug.WriteLine("Значения параметров:");

		        Debug.Indent;

		        Debug.Write("Альфа = " + coef.Alpha.ToString);

		        PrintInfo(autoSearch.AlphaSearch);

		        Debug.Write("Дельта = " + coef.Delta.ToString);

		        PrintInfo(autoSearch.DeltaSearch);

		        Debug.Write("Гамма = " + coef.Gamma.ToString);

		        PrintInfo(autoSearch.GammaSearch);

		        Debug.Write("Фи = " + coef.Phi.ToString);

		        PrintInfo(autoSearch.PhiSearch);

		        Debug.Unindent;

		    End If;

		    explSerie := exp.Explained.Serie(calc);

		    Debug.WriteLine("Значения моделируемого ряда:");

		    Debug.Indent;

		    For i := 0 To explSerie.Length - 1 Do

		        Debug.WriteLine(explSerie[i]);

		    End For;

		    Debug.Unindent;

		End Sub UserProc;


		Sub PrintInfo(AutoParam: Boolean);

		Begin

		    If AutoParam Then

		        Debug.WriteLine(" (рассчитано автоматически)");

		    Else

		        Debug.WriteLine(" (задано пользователем)");

		    End If;

		End Sub PrintInfo;


В результате выполнения примера в окно консоли будут выведены значения
 параметров и значения моделируемого ряда модели.


См. также:


[IMsExponentialSmoothingTransform](IMsExponentialSmoothingTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
