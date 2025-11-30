# IMsArimaTransform.AutoCorrelation

IMsArimaTransform.AutoCorrelation
-


# IMsArimaTransform.AutoCorrelation


## Синтаксис


		AutoCorrelation(Calculation: [IMsMethodCalculation](../IMsMethodCalculation/IMsMethodCalculation.htm);

		                Coord:
		 [IMsFormulaTransformCoord](../IMsFormulaTransformCoord/IMsFormulaTransformCoord.htm);

		                Var
		 ACF: Array;

		                Var
		 PACF: Array;

		                Var
		 QStatistics: Array;

		                Var
		 Probability: Array);


## Параметры


Calculation. Параметры расчёта
 модели;


Coord. Срез моделируемой переменной,
 для которого осуществляется расчёт;


ACF. Вещественный массив со
 значениями автокорреляционной функции;


PACF. Вещественный массив
 со значениями частной автокорреляционной функции;


QStatistics. Вещественный
 массив со значениями q-статистики Льюнга-Бокса;


Probability. Вещественный
 массив со значениями вероятности q-статистики Льюнга-Бокса.


## Описание


Метод AutoCorrelation осуществляет
 автокорреляционный анализ модели.


## Комментарии


После выполнения метода результаты анализа будут содержать параметры
 ACF, PACF, QStatistics и Probablity.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором CONT_MODEL. В контейнере присутствует
 модель ARIMA с идентификатором MODEL.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Model: IMsModel;

		    Transform: IMsFormulaTransform;

		    VarTrans: IMsFormulaTransformVariable;

		    Tree: IMsFormulaTransformSlicesTree;

		    Slice: IMsFormulaTransformSlice;

		    Selector: IMsFormulaTransformSelector;

		    Formula: IMsFormula;

		    Arima: IMsArimaTransform;

		    Coord: IMsFormulaTransformCoord;

		    Calc: IMsModelCalculation;

		    acf, pacf, qs, prob: Array Of Double;

		    Sub PrintArray(a: Array Of Double);

		    Var

		        i: Integer;

		    Begin

		        For i := 0 To a.Length - 1 Do

		            Debug.WriteLine(a[i]);

		        End For;

		    End Sub PrintArray;

		Begin

		    MB := MetabaseClass.Active;

		    Model := MB.ItemByIdNamespace("MODEL", MB.ItemById("CONT_MODEL").Key).Bind As IMsModel;

		    Transform := Model.Transform;

		    VarTrans := Transform.Outputs.Item(0);

		    Tree := VarTrans.SlicesTree(VarTrans);

		    Slice := Tree.CreateSlice(1);

		    Selector := Transform.CreateSelector;

		    Selector.Slice := Slice;

		    Formula := Transform.Transform(Selector);

		    Arima := Formula.Method As IMsArimaTransform;

		    Coord := Transform.CreateCoord(VarTrans);

		    Calc := Model.CreateCalculation;

		    Calc.Period.IdentificationStartDate := DateTime.ComposeDay(2000, 01, 01);

		    Calc.Period.IdentificationEndDate := DateTime.ComposeDay(2005, 12, 31);

		    Calc.Period.ForecastStartDate := DateTime.ComposeDay(2006, 01, 01);

		    Calc.Period.ForecastEndDate := DateTime.ComposeDay(2010, 12, 31);

		    Arima.AutoCorrelation(Calc As IMsMethodCalculation, Coord, acf, pacf, qs, prob);

		    Debug.WriteLine("---- Автокорреляционная функция ----");

		    PrintArray(acf);

		    Debug.WriteLine("---- Частная автокорреляционная функция ----");

		    PrintArray(pacf);

		    Debug.WriteLine("---- q-статистика Льюнга-Бокса ----");

		    PrintArray(qs);

		    Debug.WriteLine("---- вероятность q-статистики ----");

		    PrintArray(prob);

		End Sub UserProc;


В результате выполнения примера результаты автокорреляционного анализа
 модели будут выведены в окно консоли.


См. также:


[IMsArimaTransform](IMsArimaTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
