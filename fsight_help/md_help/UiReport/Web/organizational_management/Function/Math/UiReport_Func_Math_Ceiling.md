# Ceiling: Регламентный отчёт, веб-приложение

Ceiling: Регламентный отчёт, веб-приложение
-


# Ceiling


## Синтаксис


Ceiling(Value, Precision)


## Параметры


Value. Округляемое значение;


Precision. Кратное, до которого
 требуется округлить.


Примечание.
 В качестве параметра можно указывать как непосредственно число, так и
 адрес ячейки, в которой оно располагается.


## Описание


Возвращает результат округления с избытком до ближайшего целого числа,
 кратного значению точности.


## Пример


		 Формула
		 Результат
		 Описание


		 =Ceiling(-2.1, -0.5)
		 -2,5
		 Округляет число -2,5 до ближайшего числа, кратного -0,5.


		 =Ceiling(B6,C6)
		 2
		 Округляет число, расположенное в ячейке B6, до ближайшего числа
		 кратного значению, расположенному в ячейке C6. Ячейка B6 содержит
		 число 1,1, C6 - 1,1.


		 =Ceiling(5.8, -0.1)
		 #ЧИСЛО!
		 Возвращает ошибку, т.к. числа 5,8 и -0,1 имеют разные
		 знаки.


См. также:


[Мастер функций](../../UiReport_Organizational_master_function.htm)
 │ [Математические
 функции](UiReport_Func_math.htm) │ [Even](UiReport_Func_Math_Even.htm)
 │ [Floor](UiReport_Func_Math_Floor.htm)
 │ [Int](UiReport_Func_Math_Int.htm) │
 [MRound](UiReport_Func_Math_MRound.htm)
 │ [Odd](UiReport_Func_Math_Odd.htm)
 │ [Round](UiReport_Func_Math_Round.htm)
 │ [RoundDown](UiReport_Func_Math_RoundDown.htm)
 │ [RoundUp](UiReport_Func_Math_RoundUp.htm)
 │ [Trunc](UiReport_Func_Math_Trunc.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
