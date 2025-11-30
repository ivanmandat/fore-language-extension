# IDependenceForm.Errors

IDependenceForm.Errors
-


# IDependenceForm.Errors


## Синтаксис


Errors: String;


## Описание


Свойство Errors возвращает сообщение
 обо всех ошибках и предупреждениях для формы зависимости.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    trend: SmCurveEstimation;

    d0: Double;

    status, i: Integer;

    ar, factor: Array Of Double;

    Forms: IDependenceForms;

    Dep: IDependenceForm;

Begin

    trend := New SmCurveEstimation.Create;

    ar := New Double[25];

    ar[00] := 4110;

    ar[01] := 4280;

    ar[02] := 4459;

    ar[03] := 4545;

    ar[04] := 4664;

    ar[05] := 4861;

    ar[06] := 5195;

    ar[07] := 5389;

    ar[08] := 5463;

    ar[09] := 5610;

    ar[10] := 5948;

    ar[11] := 6218;

    ar[12] := 6521;

    ar[13] := 6788;

    ar[14] := 7222;

    ar[15] := 7486;

    ar[16] := -7832;

    ar[17] := 8153;

    ar[18] := 8468;

    ar[19] := 9054;

    ar[20] := 9499;

    ar[21] := 9866;

    ar[22] := 10217;

    ar[23] := 10763;

    ar[24] := 10683;

    trend.Explained.Value := ar;

    factor := New Double[20];

    For i := 0 To factor.Length - 1 Do

        factor[i] := i*i + i*21;

    End For;

    trend.Explanatory.Serie.Value := factor;

    trend.ModelPeriod.LastPoint := 20;

    trend.ForecastLastPoint := 30;

    trend.SeasonalComponent.Mode := SeasonalityType.additive;

    trend.SeasonalComponent.Cycle := 4;

    status := trend.Execute;

    If status <> 0 Then

        Debug.WriteLine(trend.Errors);

    Else

        Forms := trend.DependenceForms;

        For i := 0 To Forms.Count - 1 Do

            Dep := Forms.Item(i);

            If Dep.Failed Then

                Debug.WriteLine(Dep.DisplayName + ": " + "Ошибка. " + Dep.Errors);

            Else

                d0 := Dep.CriterionValue;

                Debug.WriteLine(Dep.DisplayName + ": " + d0.ToString);

            End If;

        End For;

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены значения критериев
 моделей или сообщения об ошибке:


Выполнение модуля начато


Линейная: 0.238395392542944


Квадратичная: 0.238439433589831


Полиномиальная: 0.24398213916649


Составная: Ошибка. Объясняемый ряд или его сезонная
 корректировка не могут содержать значения разных знаков или равные нулю
 значения


Уравнение роста: Ошибка. Объясняемый ряд или его
 сезонная корректировка не могут содержать отрицательных или равных нулю
 значений


Логарифмическая: 0.234589809314515


Гиперболическая: Ошибка. Объясняемый ряд или его
 сезонная корректировка не могут содержать отрицательных или равных нулю
 значений


Экспоненциальная: Ошибка. Объясняемый ряд или его
 сезонная корректировка не могут содержать значения разных знаков или равные
 нулю значения


Обратная: 0.229687257655624


Степенная: Ошибка. Объясняемый ряд или его сезонная
 корректировка не могут содержать значения разных знаков или равные нулю
 значения


Логистическая: 0.17831506972174


Квадратный корень: 0.237355188405712


Логарифмически-параболическая: Ошибка. Объясняемый
 ряд или его сезонная корректировка не могут содержать отрицательных или
 равных нулю значений


Выполнение модуля завершено


См. также:


[IDependenceForm](IDependenceForm.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
