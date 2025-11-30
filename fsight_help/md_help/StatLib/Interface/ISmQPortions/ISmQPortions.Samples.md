# ISmQPortions.Samples

ISmQPortions.Samples
-


# ISmQPortions.Samples


## Синтаксис


Samples: Array;


## Описание


Свойство Samples определяет
 исходную выборку. Для данной выборки будет произведен расчет медианы,
 квартилей, процентилей и децилей.


## Комментарии


Индексация массива с исходной выборкой должна начинаться с нуля.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


	Sub UserProc;

	Var

	    SQ: SmQPortions;

	    can, y: Array Of Double;

	    res, i: Integer;

	    m: Double;

	Begin

	    SQ := New SmQPortions.Create;

	    can := New Double[16];

	    can[00] := 6209;

	    can[01] := 6385;

	    can[02] := 6752;

	    can[03] := 6837;

	    can[04] := 6495;

	    can[05] := 6907;

	    can[06] := 7349;

	    can[07] := 7213;

	    can[08] := 7061;

	    can[09] := 7180;

	    can[10] := 7132;

	    can[11] := 7137;

	    can[12] := 7473;

	    can[13] := 7722;

	    can[14] := 8088;

	    can[15] := 8516;

	    SQ.Samples := can;

	    res := SQ.Execute;

	    If res <> 0 Then

	        Debug.WriteLine(SQ.Errors);

	        Else

	            Debug.WriteLine("== Медиана ==");

	            m := SQ.Median;

	            Debug.WriteLine(m);

	            Debug.WriteLine("== Децили ==");

	            y := SQ.Deciles;

	            For i := 0 To y.Length - 1 Do

	                m := y[i];

	                Debug.WriteLine(i.ToString + " " + m.ToString);

	            End For;

	            Debug.WriteLine("== Квартили ==");

	            y := SQ.Quartiles;

	            For i := 0 To y.Length - 1 Do

	                m := y[i];

	                Debug.WriteLine(i.ToString + " " + m.ToString);

	            End For;

	            Debug.WriteLine("== Процентили ==");

	            y := SQ.Procentiles;

	            For i := 0 To y.Length - 1 Do

	                m := y[i];

	                Debug.WriteLine(i.ToString + " " + m.ToString);

	            End For;

	    End If;

	End Sub UserProc;


После выполнения примера в окно консоли будут выведены медиана, децили,
 квартили, процентили.


См. также:


[ISmQPortions](ISmQPortions.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
