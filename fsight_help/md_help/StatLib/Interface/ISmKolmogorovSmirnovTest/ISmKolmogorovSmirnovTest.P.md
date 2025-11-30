# ISmKolmogorovSmirnovTest.P

ISmKolmogorovSmirnovTest.P
-


# ISmKolmogorovSmirnovTest.P


## Синтаксис


P: Double;


## Описание


Свойство P возвращает вероятность,
 связанную с полученным значением [D](ISmKolmogorovSmirnovTest.D.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    can : Array[16] Of Double;

    met : SmKolmogorovSmirnovTest;

    status : Integer;

Begin

    can[00] := 6209 ;

    can[01] := 6385 ;

    can[02] := 6752 ;

    can[03] := 6837 ;

    can[04] := 6495 ;

    can[05] := 6907 ;

    can[06] := 7349 ;

    can[07] := 7213 ;

    can[08] := 7061 ;

    can[09] := 7180 ;

    can[10] := 7132 ;

    can[11] := 7137 ;

    can[12] := 7473 ;

    can[13] := 7722 ;

    can[14] := 8088 ;

    can[15] := 8516 ;

    met := New SmKolmogorovSmirnovTest.Create;

    met.Sample1.Value := can;

    met.Distribution := KStestDistributionType.Poisson;

    met.Hypothesis := KStestHypothesisType.NotEqual;

    met.SuppliedParameters := True;

    met.Parameter1 := 3;

    status := met.Execute;

    If status = 0 Then

        Debug.WriteLine("Oтклонение (D): "+ met.D.ToString);

        Debug.WriteLine("Стандартизованная статистика(Z): "+ met.Z.ToString);

        Debug.WriteLine("Вероятность (P): " + met.P.ToString);

    Else

        Debug.WriteLine(met.Errors);

    End If;

End Sub UserProc;


Будет произведена проверка гипотезы о том, что выборка имеет распределение
 Пуассона. В качестве альтернативной гипотезы выбрана гипотеза H1 о том,
 что данные не могут быть случайной выборкой распределения Пуассона. После
 выполнения примера в окно консоли будут выведены результаты теста:


Выполнение модуля начато


Oтклонение (D): 0.9375


Стандартизованная статистика(Z): 3.75


Вероятность (P): 1.0842021724855e-19


Выполнение модуля завершено


Выборка не имеет распределения Пуассона.


См. также:


[ISmKolmogorovSmirnovTest](ISmKolmogorovSmirnovTest.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
