# IDependenceForm.Include

IDependenceForm.Include
-


# IDependenceForm.Include


## Синтаксис


Include: Boolean;


## Описание


Свойство Include определяет
 признак включения формы зависимости в расчеты.


## Комментарии


Если значение данного свойства True,
 то форма зависимости будет рассчитана, при значении False
 - нет.


По умолчанию свойство имеет значение True.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    trend: SmCurveEstimation;

    d0: Double;

    status, i: Integer;

    ar: Array Of Double;

    Forms: IDependenceForms;

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

    ar[16] := 7832;

    ar[17] := 8153;

    ar[18] := 8468;

    ar[19] := 9054;

    ar[20] := 9499;

    ar[21] := 9866;

    ar[22] := 10217;

    ar[23] := 10763;

    ar[24] := 10683;

    trend.Explained.Value := ar;

    trend.Explanatory.IsTrend := True;

    trend.ModelPeriod.LastPoint := 20;

    trend.ForecastLastPoint := 30;

    trend.SeasonalComponent.Mode := SeasonalityType.additive;

    trend.SeasonalComponent.Cycle := 4;

    Forms := trend.DependenceForms;

    Forms.Item(0).Include := False; // для Линейной формы зависимости никакие параметры рассчитаны не будут

    status := trend.Execute;

    If status <> 0 Then

        Debug.WriteLine(trend.Errors);

    Else

        For i := 0 To Forms.Count - 1 Do

            d0 := Forms.Item(i).CriterionValue;

            Debug.WriteLine(Forms.Item(i).DisplayName + ": " + d0.ToString);

        End For;

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены значения критериев
 моделей:


Выполнение модуля начато


Линейная: nan


Квадратичная: 0.998640353781097


Полиномиальная: 0.998686672768859


Составная: 0.99523315583646


Уравнение роста: 0.99523315583646


Логарифмическая: 0.757901354326158


Гиперболическая: 0.433696314338472


Экспоненциальная: 0.99523315583646


Обратная: 0.39338706623371


Степенная: 0.827009167454031


Логистическая: 0.193088557440221


Квадратный корень: 0.899302867141096


Логарифмически-параболическая: 0.99850526232148


Выполнение модуля завершено


См. также:


[IDependenceForm](IDependenceForm.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
