# ISummaryStatistics.MAE

ISummaryStatistics.MAE
-


# ISummaryStatistics.MAE


## Синтаксис


MAE: Double;


## Описание


Свойство MAE возвращает среднее
 абсолютных величин остатков.


## Комментарии


Под средней абсолютной ошибкой понимается среднее модулей отклонений
 исходных значений зависимой переменной от модельных.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    LinearR: SmLinearRegress;

    can, fr: Array[9] Of Double;

    res, i: Integer;

    Con: IIntercept;

    ss: ISummaryStatistics;

Begin

    LinearR := New SmLinearRegress.Create;

    For i := 0 To 8 Do

        can[i] := 1230 + i * 302;

        fr[i] := 579.5 + i * 9.4;

    End For;

    // Задаем параметры модели

    LinearR.Explained.Value := can;

    LinearR.Explanatories.Add.Value := fr;

    Con := LinearR.ModelCoefficients.Intercept;

    con.Mode := InterceptMode.ManualEstimate;

    con.Estimate := 35.7;

    // Выполняем расчёт

    res := LinearR.Execute;

    ss := LinearR.SummaryStatistics;

    Debug.Write("Среднее
 абсолютных величин остатков: ");

    Debug.WriteLine(ss.MAE);

    Debug.Write("Максимальная
 абсолютная величина остатков: ");

    Debug.WriteLine(ss.MaxAE);

    Debug.Write("McFadden R-квадрат: ");

    Debug.WriteLine(ss.McFaddenRsquared);

    Debug.Write("Среднее зависимой переменной: ");

    Debug.WriteLine(ss.MD);

    Debug.Write("Среднее остатков: ");

    Debug.WriteLine(ss.ME);

    Debug.Write("Среднее квадратов остатков: ");

    Debug.WriteLine(ss.MSE);

    Debug.Write("Корень из среднего квадратов остатков: ");

    Debug.WriteLine(ss.SqMSE);

    Debug.Write("Число итераций, за которое было получено решение: ");

    Debug.WriteLine(ss.NumOfIter);

End Sub UserProc;


После выполнения примера в окно консоли будут выведены рассчитанные
 статистические характеристики.


См. также:


[ISummaryStatistics](ISummaryStatistics.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
