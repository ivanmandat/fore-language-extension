# ISmKolmogorovSmirnovTest.Sample2

ISmKolmogorovSmirnovTest.Sample2
-


# ISmKolmogorovSmirnovTest.Sample2


## Синтаксис


Sample2: [ISlSerie](../ISlSerie/ISlSerie.htm);


## Описание


Свойство Sample2 определяет
 второй рассматриваемый ряд.


## Комментарии


На случай двух выборок не требуется задание типа распределения и его
 параметров.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    can : Array[16] Of Double;

    fra : Array[18] Of Double;

    met : SmKolmogorovSmirnovTest;

    status : Integer;

Begin

    can[00] := 6209 ; fra[00] := 4110 ;

    can[01] := 6385 ; fra[01] := 4280 ;

    can[02] := 6752 ; fra[02] := 4459 ;

    can[03] := 6837 ; fra[03] := 4545 ;

    can[04] := 6495 ; fra[04] := 4664 ;

    can[05] := 6907 ; fra[05] := 4861 ;

    can[06] := 7349 ; fra[06] := 5195 ;

    can[07] := 7213 ; fra[07] := 5389 ;

    can[08] := 7061 ; fra[08] := 5463 ;

    can[09] := 7180 ; fra[09] := 5610 ;

    can[10] := 7132 ; fra[10] := 5948 ;

    can[11] := 7137 ; fra[11] := 6218 ;

    can[12] := 7473 ; fra[12] := 6521 ;

    can[13] := 7722 ; fra[13] := 6788 ;

    can[14] := 8088 ; fra[14] := 7222 ;

    can[15] := 8516 ; fra[15] := 7486 ;

    fra[16] := 7832 ;

    fra[17] := 8941 ;

    met := New SmKolmogorovSmirnovTest.Create;

    met.Sample1.Value := can;

    met.Sample2.Value := fra;

    met.Hypothesis := KStestHypothesisType.NotEqual;

    status := met.Execute;

    If status = 0 Then

        Debug.WriteLine("Oтклонение (D): "+ met.D.ToString);

        Debug.WriteLine("Стандартизованная статистика(Z): "+ met.Z.ToString);

        Debug.WriteLine("Вероятность (P): " + met.P.ToString);

    Else

        Debug.WriteLine(met.Errors);

    End If;

End Sub UserProc;


В данном примере распределение одной выборки сравнивается с распределением
 второй выборки и решается имеют выборки одинаковое или разное распределение.
 После выполнения примера в окно консоли будут выведены результаты теста:


Выполнение модуля начато


Oтклонение (D): 0.611111111111111


Стандартизованная статистика(Z): 0.209972971674973


Вероятность (P): 0.0013513067694656


Выполнение модуля завершено


Выборки имеют разное распределение.


См. также:


[ISmKolmogorovSmirnovTest](ISmKolmogorovSmirnovTest.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
