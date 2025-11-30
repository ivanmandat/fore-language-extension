# ITimeSeries.Changed

ITimeSeries.Changed
-


# ITimeSeries.Changed


## Синтаксис


Changed: Boolean;


## Описание


Свойство Changed
 возвращает признак наличия изменений в текущей точке ряда.


## Пример


В данном примере описан пользовательский метод. Ряд данных передается
 поточечно.


Добавьте ссылки на системные сборки: MathFin, Ms.


			Public Function UserFunc(Input: ITimeSeries): Double;

Begin

    Debug.WriteLine(Input.Changed);

    Return Math.Log10(Input.CurrentValue);

End Function UserFunc;


Метод возвращает натуральный логарифм ряда и выводит в окно консоли
 признак наличия изменений в текущей точке ряда.


См. также:


[ITimeSeries](ITimeSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
