# ITimeSeries.TermInfo

ITimeSeries.TermInfo
-


# ITimeSeries.TermInfo


## Синтаксис


TermInfo: [IMsFormulaTermInfo](../IMsFormulaTermInfo/IMsFormulaTermInfo.htm);


## Описание


Свойство TermInfo
 возвращает параметры терма.


## Пример


В данном примере описан пользовательский метод. Ряд данных передается
 поточечно.


Добавьте ссылки на системные сборки: MathFin, Ms.


			Public Function UserFunc(Input: ITimeSeries): Double;

Begin

    If Input.TermInfo.Lag = "0"

        Then Return Math.Log10(Input.CurrentValue);

        Else Return Double.Nan

    End If;

End Function UserFunc;


Метод возвращает натуральный логарифм ряда, если его лаг равен нулю.


См. также:


[ITimeSeries](ITimeSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
