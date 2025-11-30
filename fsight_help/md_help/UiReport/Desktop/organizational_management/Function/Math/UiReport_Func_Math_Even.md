# Even: Регламентный отчёт, настольное приложение

Even: Регламентный отчёт, настольное приложение
-


# Even


[Мастер функций](../../UiReport_Organizational_master_function.htm)
 для функции Even выглядит следующим
 образом:


![](Even_m.gif)


## Синтаксис


Even(Value)


## Параметры


Value. Округляемое значение.


Примечание.
 В качестве параметра можно указывать как непосредственно число, так и
 адрес ячейки, в которой оно располагается.


## Описание


Возвращает результат округления числа до ближайшего четного целого.


## Пример


		 Формула
		 Результат
		 Описание


		 =Even(2.6)
		 4
		 Округляет число 2,6 до ближайшего четного целого.


		 =Even(B6)
		 -6
		 Округляет число, расположенное в ячейке B6, до ближайшего четного
		 целого. Ячейка B6 содержит число -5.


См. также:


[Мастер функций](../../UiReport_Organizational_master_function.htm)
 │ [Математические
 функции](UiReport_Func_math.htm) │ [Ceiling](UiReport_Func_Math_Ceiling.htm)
 │ [Floor](UiReport_Func_Math_Floor.htm)
 │ [Int](UiReport_Func_Math_Int.htm)
 │ [MRound](UiReport_Func_Math_MRound.htm)
 │ [Odd](UiReport_Func_Math_Odd.htm)
 │ [Round](UiReport_Func_Math_Round.htm)
 │ [RoundDown](UiReport_Func_Math_RoundDown.htm)
 │ [RoundUp](UiReport_Func_Math_RoundUp.htm)
 │ [Trunc](UiReport_Func_Math_Trunc.htm)
 │ [IMath.Even](MathLib.chm::/Interface/IMath/IMath.Even.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
