# IFinance.FvSchedule

IFinance.FvSchedule
-


# IFinance.FvSchedule


## Синтаксис


FvSchedule(Principal: Double; Schedule: Array): Double;


## Параметры


		 Параметры
		 Описание
		 Ограничения


		 Principal
		 Стоимость инвестиций на текущий момент.


		 Schedule
		 Массив переменных процентных ставок.
		 Необходимо использовать массив типа [Double](Fore.chm::/03_dataTypes/Fore_DataTypes.htm).


## Описание


Метод FvSchedule возвращает
 будущую стоимость первоначальной основной суммы после применения ряда
 (плана) ставок сложных процентов.


## Комментарии


Для получения будущей стоимости инвестиции при условии периодических
 равных платежей и постоянной процентной ставки используйте метод [IFinance.Fv](IFinance.Fv.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку MathFin.


					Sub UserProc;

		Var

		    r: Double;

		    Arr: Array[3] Of Double;

		Begin

		    Arr[0] := 0.01;

		    Arr[1] := 0.15;

		    Arr[2] := 0.25;

		    r := Finance.FvSchedule(800, Arr);

		    Debug.WriteLine(r);

		End Sub UserProc;


В результате выполнения примера в окно консоли будет выведена будущая
 стоимость первоначальной основной суммы, равная «1161.5».


См. также:


[IFinance](IFinance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
