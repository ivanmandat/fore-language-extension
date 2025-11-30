# IMsMetaModelVisualController.AutoCorrelation

IMsMetaModelVisualController.AutoCorrelation
-


# IMsMetaModelVisualController.AutoCorrelation


## Синтаксис


AutoCorrelation(EntryKey: Integer;

    Period: [IMsModelPeriod](../IMsModelPeriod/IMsModelPeriod.htm);

    Var ACF: Array;

    Var PACF: Array;

    Var QStatistics: Array;

    Var Probability: Array;

    Var StandardError: Double): String;


## Параметры


EntryKey. Параметры расчета
 модели;


Period. Период расчёта;


ACF. Вещественный массив со
 значениями автокорреляционной функции;


PACF. Вещественный массив
 со значениями частной автокорреляционной функции;


QStatistics. Вещественный
 массив со значениями q-статистики Льюнга-Бокса;


Probability. Вещественный
 массив со значениями вероятности q-статистики Льюнга-Бокса;


StandardError. Значение стандартной ошибки.


## Описание


Метод AutoCorrelation выполняет
 автокорреляционный анализ переменной.


## Комментарии


Если анализ выполнен успешно, то в параметры ACF,
 PACF, QStatistics,
 Probablity и StandardError
 будут выгружены результаты расчёта; в обратном случае метод вернет
 текст ошибки.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором «MS», содержащего задачу моделирования
 с идентификатором «PROBLEM». Данная задача должна содержать внутреннюю
 метамодель.


Добавьте ссылки на системные сборки «Metabase», «Ms».


	// Выполнение автокорреляционного анализа

	Sub UserAutoCorrelation;

	Var

	    mb: IMetabase;

	    MsObj: IMetabaseObjectDescriptor;

	    Problem: IMsProblem;

	    Period: IMsModelPeriod;

	    Meta: IMsMetaModel;

	    MetaVisual: IMsMetaModelVisualController;

	    VarKey, i: Integer;

	    ChainEn: IMsCalculationChainEntries;

	    ACF, PACF, QStatistics, Probability: Array Of Double;

	    StandardError: Double;

	Begin

	    mb := MetabaseClass.Active;

	    // Получаем контейнер моделирования

	    MsObj := mb.ItemById("MS");

	    // Получаем задачу моделирования

	    Problem := mb.ItemByIdNamespace("PROBLEM", MsObj.Key).Bind As IMsProblem;

	    // Получаем метамодель

	    Meta := Problem.MetaModel;

	    // Получаем период расчёта

	    Period := (Problem.Details As IMsProblemDetails).Period;

	    // Получаем 1-ю свободную переменную

	    ChainEn := Meta.CalculationChain;

	    VarKey := -1; i := 0;

	    Repeat

	        If ChainEn.Item(i).Type = MsCalculationChainEntryType.Variable Then

	            VarKey := ChainEn.Item(i).Key;

	        End If;

	        i := i + 1;

	    Until (VarKey = -1) Or (i <> ChainEn.Count);

	    // Если переменная найдена, то выполняем автокорреляционный анализ

	    If VarKey <> -1 Then

	        MetaVisual := Meta.VisualController;

	        Debug.WriteLine(MetaVisual.AutoCorrelation(VarKey, Period, ACF, PACF, QStatistics, Probability, StandardError));

	        Debug.WriteLine("Значения автокорреляционной функции");

	        PrintArray(ACF);

	        Debug.WriteLine("Значения частной автокорреляционной функции");

	        PrintArray(PACF);

	        Debug.WriteLine("Значения q - статистики Льюнга-Бокса");

	        PrintArray(QStatistics);

	        Debug.WriteLine("Значения вероятности q - статистики Льюнга-Бокса");

	        PrintArray(Probability);

	        Debug.WriteLine("Значение стандартной ошибки автокорреляционной функции");

	        Debug.WriteLine(StandardError);

	    End If;

	End Sub UserAutoCorrelation;


	// Процедура вывода данных

	Sub PrintArray(arr: Array Of Double);

	Var i: Integer;

	Begin

	    For i := 0 To arr.Length - 1 Do

	        Debug.WriteLine(arr[i]);

	    End For;

	    Debug.WriteLine("");

	End Sub PrintArray;


Результат выполнения примера: если метамодель содержит переменные, то
 для первой переменной будет выполнен автокорреляционный анализ и результаты
 будут выведены в окно консоли.


См. также:


[IMsMetaModelVisualController](IMsMetaModelVisualController.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
