# MRound: Регламентный отчёт, веб-приложение

MRound: Регламентный отчёт, веб-приложение
-


# MRound


## Синтаксис


MRound(Value, Precision)


## Параметры


Value. Округляемое значение;


Precision. Кратное, до которого
 требуется округлить.


Примечание.
 В качестве параметра можно указывать как непосредственно число, так и
 адрес ячейки, в которой оно располагается.


## Описание


Возвращает число, округленное с желаемой точностью.


## Комментарии


Округление производится, если остаток от деления числа на точность больше
 или равен половине точности.


## Пример


		 Формула
		 Результат
		 Описание


		 =MRound(4.65,0.1)
		 4,7
		 Округляет число 4,65 до ближайшего числа кратного 0,1.


		 =MRound(B6, C6)
		 -27,0000
		 Округляет число в ячейке B6 до ближайшего числа кратного значению,
		 расположенному в ячейке C6. Ячейка B6 содержит число -26,3, C6
		 содержит число -3.


См. также:


[Мастер функций](../../UiReport_Organizational_master_function.htm)
 │ [Математические
 функции](UiReport_Func_math.htm) │ [Ceiling](UiReport_Func_Math_Ceiling.htm)
 │ [Even](UiReport_Func_Math_Even.htm)
 │ [Floor](UiReport_Func_Math_Floor.htm)
 │ [Int](UiReport_Func_Math_Int.htm)
 │ [Odd](UiReport_Func_Math_Odd.htm)
 │ [Round](UiReport_Func_Math_Round.htm)
 │ [RoundDown](UiReport_Func_Math_RoundDown.htm)
 │ [RoundUp](UiReport_Func_Math_RoundUp.htm)
 │ [Trunc](UiReport_Func_Math_Trunc.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
