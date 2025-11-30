# ITsCalculationContext.UserData

ITsCalculationContext.UserData
-


# ITsCalculationContext.UserData


## Синтаксис


UserData: [ITsUserData](../ITsUserData/ITsUserData.htm);


## Описание


Свойство UserData возвращает
 пользовательские данные, связанные с методом расчёта.


## Комментарии


Пользовательские данные метода будут доступны при использовании метода
 блоком функции в алгоритме расчёта показателей.


## Пример


Ниже приведён пример пользовательского метода, который может использоваться
 в блоке функций алгоритма расчёта показателей. Метод может выполняться
 циклично.


Добавьте ссылки на системные сборки: Transform.


			Public Function CalcFunction(Paramarray arr: array Of Variant): Variant;

Const BREAK_ITERATION = 10; // Возможное условие прерывания выполнения

Var

    pContext: ITsCalculationContext;

    pUserData: ITsUserData;

    CurrentIteration: Integer;

    MaxIteration: Integer = -1;

Begin

    // Контекст метода расёчта и пользовательские данные

    pContext := TsCalculation.Current;

    pUserData := pContext.UserData;

    // Проверяем условия выполнения

    If pUserData.Contains("CURRENT_ITERATION") Then

        CurrentIteration := pUserData.Data("CURRENT_ITERATION") As Integer;

        Debug.Write("Циклический расчет. ");

        Debug.Write("Итерация: " + CurrentIteration.ToString);

        If pUserData.Contains("MAX_ITERATION") Then

            MaxIteration := pUserData.Data("MAX_ITERATION") As Integer;

            Debug.WriteLine(" из " + MaxIteration.ToString);

        End If;

        If CurrentIteration = 1 Then

            Debug.WriteLine("Интервал между итерациями: " + (pUserData.Data("ITERATION_INTERVAL") As Integer).ToString + " секунд");

        End If;

        If CurrentIteration = BREAK_ITERATION Then

            pUserData.Data("BREAK_CYCLE") := True;

            Debug.WriteLine("Сработало условие выхода из цикла.");

        Elseif CurrentIteration = MaxIteration Then

            pUserData.Data("BREAK_CYCLE") := True;

            Debug.WriteLine("Достигнута максимальная итерация.");

        Else

            pUserData.Data("BREAK_CYCLE") := False;

        End If;

    End If;

    Return Null;

End Function CalcFunction;


При выполнении метод осуществляется проверка наличия и считывание пользовательских
 данных. В зависимости от значений считанных значений параметров осуществляется
 продолжение выполнения или завершение метода.


См. также:


[ITsCalculationContext](ITsCalculationContext.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
