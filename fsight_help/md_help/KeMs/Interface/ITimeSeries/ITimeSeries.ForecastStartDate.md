# ITimeSeries.ForecastStartDate

ITimeSeries.ForecastStartDate
-


# ITimeSeries.ForecastStartDate


## Синтаксис


ForecastStartDate: [DateTime](ForeSys.chm::/Class/DateTime/DateTime.htm);


## Описание


Свойство ForecastStartDate
 возвращает для ряда дату начала периода прогноза.


## Пример


В данном примере описан пользовательский метод. Ряд данных передается
 целиком.


Добавьте ссылки на системные сборки: MathFin, Ms.


	Public Function UserFunc(Input: ITimeSeries; Output: ITimeSeries);

	Var

	    I, First: Integer;

	Begin

	    First := Input.DateToIndex(Input.ForecastStartDate);

	    For I := Input.StartIndex To Input.EndIndex Do

	        If Input.DateToIndex(Input.ForecastStartDate) <= I Then

	            Output(I) := Input(First - 1);

	        End If;

	    End For;

	End Function UserFunc;


Метод возвращает прогнозные значения ряда, которые повторяют последнее
 значение ряда в ретроспективном периоде.


См. также:


[ITimeSeries](ITimeSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
