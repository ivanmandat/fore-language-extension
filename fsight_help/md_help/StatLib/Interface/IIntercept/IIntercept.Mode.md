# IIntercept.Mode

IIntercept.Mode
-


# IIntercept.Mode


## Синтаксис


Mode: [InterceptMode](../../Enums/InterceptMode.htm);


## Описание


Свойство Mode определяет режим
 задания константы.


## Комментарии


Если:


	- Mode = InterceptMode.InterceptMode,
	 т.е. значение константы задаётся вручную, то используйте свойство
	 [IIntercept.Estimate](IIntercept.Estimate.htm)
	 для ввода значения константы;


	- Mode = InterceptMode.AutoEstimate,
	 т.е. значение константы оценивается автоматически, то после расчёта
	 метода используйте свойство [IIntercept.Estimate](IIntercept.Estimate.htm)
	 для получения значения константы.


## Пример


Для выполнения примера добавьте ссылку на системные сборки Stat, MathFin.


			Sub UserIntercept;

Var

    lr: ISmLinearRegress;

    Fact: Array[40] Of Double;

    Intercept: IIntercept;

    i: Integer;

    res: Integer;

Begin

    lr := New SmLinearRegress.Create;

    // Задаем значения объясняемого ряда

    For i := 0 To 39 Do

        Fact[i] := Math.RandBetween(-40, 40);

    End For;

    // Задаем объясняемый ряд

    lr.Explained.Value := Fact;

    // Получаем параметры константы в модели

    Intercept := lr.ModelCoefficients.Intercept;

    // Указыываем, что значение константы оценивается автоматически

    Intercept.Mode := InterceptMode.AutoEstimate;

    // Рассчитываем модель

    res := lr.Execute;

    Debug.WriteLine(lr.Errors);

    If (res = 0) Then

        // Выводим значение и коэффициенты константы

        Debug.WriteLine("Значение: " + Intercept.Estimate.ToString);

        Debug.WriteLine("Вероятность: " + Intercept.Probability.ToString);

        Debug.WriteLine("Стандартная ошибка: " + Intercept.StandardError.ToString);

        Debug.WriteLine(" t-статистика: " + Intercept.TStatistic.ToString);

    End If;

End Sub UserIntercept;


Результат выполнения примера: в окно консоли будут выведены значение
 и коэффициенты константы.


См. также:


[IIntercept](IIntercept.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
