# IMsVariableTest.Type

IMsVariableTest.Type
-


# IMsVariableTest.Type


## Синтаксис


Type: [MsVariableTestType](../../Enums/MsVariableTestType.htm);


## Описание


Свойство Type возвращает тип описательной статистики.


## Комментарии


Для настройки параметров расчёта статистики используйте свойство [IMsVariableTest.Settings](IMsVariableTest.Settings.htm).


## Пример


Пример является функцией, которая рассчитывает описательную статистику и возвращает результаты расчёта. Входной параметр функции: Test - объект, предназначенный для расчёта описательной статистики.


Для выполнения примера добавьте ссылку на системную сборку «Ms».


			Function VariableTest(Test: IMsVariableTest): IMsVariableTestResults;

Var

    DF: IMsDFTestSettings;

    Johansen: IMsJohansenTestSettings;

    Granger: IMsGrangerTestSettings;

    PairCorr: IMsPairCorrelationTestSettings;

Begin

    Select Case Test.Type

        Case MsVariableTestType.DF:

            DF := Test.Settings As IMsDFTestSettings;

            DF.AutoRegressionOrder := 2;

            Debug.WriteLine("Расширенный тест Дики-Фуллера");

        Case MsVariableTestType.Granger:

            Granger := Test.Settings As IMsGrangerTestSettings;

            Granger.ConfidenceLevel := 0.1;

            Debug.WriteLine("Тест Гранжера");

        Case MsVariableTestType.Johansen:

            Johansen := Test.Settings As IMsJohansenTestSettings;

            Johansen.AutoRegressionOrder := "2";

            Debug.WriteLine("Тест Йохансена");

        Case MsVariableTestType.PairCorrelation:

            PairCorr := Test.Settings As IMsPairCorrelationTestSettings;

            PairCorr.BalancedSample := False;

            Debug.WriteLine("Парные коэффициенты корреляции");

    End Select;

    Return Test.Execute;

End Function VariableTest;


Результат выполнения примера: изменены параметры описательной статистики, выполнен её расчёт и в окно консоли выведено наименование рассчитанной статистики. Пользователю возвращены результаты расчёта.


См. также:


[IMsVariableTest](IMsVariableTest.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
