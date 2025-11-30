# IMsX11Result.B1

IMsX11Result.B1
-


# IMsX11Result.B1


## Синтаксис


		B1: [ITimeSeries](../ITimeSeries/ITimeSeries.htm);


## Описание


Свойство B1 возвращает ряд после
 априорной корректировки или исходный ряд.


## Комментарии


С помощью данного интерфейса также доступно получение:


	- [IMsX11Result.D10](IMsX11Result.D10.htm). Сезонная
	 составляющая исходного ряда;


	- [IMsX11Result.D11](IMsX11Result.D11.htm). Сезонная
	 корректировка;


	- [IMsX11Result.D12](IMsX11Result.D12.htm). Тренд-циклическая
	 компонента;


	- [IMsX11Result.D13](IMsX11Result.D13.htm). Нерегулярная
	 компонента.


Метод X11 поддерживается только в ОС Windows.


## Пример


Приведен пользовательский метод расчета, возвращающий прогнозные значения
 для какого-либо прогнозного метода расчета.


Добавьте ссылки на системные сборки: Ms, Stat.


					Public Function X11Result(Result: Variant): ITimeSeries;

		Var

		    X11Res: IMsX11Result;

		    Series: ITimeSeries;

		Begin

		    X11Res := Result As IMsX11Result;

		    // Выводим наименование метода

		    Debug.WriteLine("Наименование метода: " + X11Res.BaseMethod.Name);

		    Debug.WriteLine("");

		    // Получаем ряд после априорной корректировки или исходный ряд и выводим его в окно консоли

		    Series := X11Res.B1;

		    Debug.WriteLine("Ряд после априорной корректировки или исходный ряд");

		    Print(Series);

		    // Получаем сезонную составляющую исходного ряда и выводим её в окно консоли

		    Series := X11Res.D10;

		    Debug.WriteLine("Сезонная составляющая исходного ряда");

		    Print(Series);

		    // Получаем сезонную корректировку и выводим её в окно консоли

		    Series := X11Res.D11;

		    Debug.WriteLine("Сезонная корректировка");

		    Print(Series);

		    // Получаем тренд-циклическую компоненту и выводим её в окно консоли

		    Series := X11Res.D12;

		    Debug.WriteLine("Тренд-циклическая компонента");

		    Print(Series);

		    // Получаем нерегулярную компоненту и выводим её в окно консоли

		    Series := X11Res.D13;

		    Debug.WriteLine("Нерегулярная компонента");

		    Print(Series);

		    // Возвращаем прогнозный ряд

		    Return X11Res.Fitted;

		End Function X11Result;


		// Процедура вывода значений ряда в окно консоли

		Sub Print(Series: ITimeSeries);

		Var

		    i: Integer;

		    d: DateTime;

		Begin

		    Debug.Indent;

		    For i := Series.StartIndex To Series.EndIndex Do

		        d := Series.IndexToDate(i);

		        Debug.WriteLine(CultureInfo.Current.FormatShortDate(d) + ": " + Series.Item(i));

		    End For;

		    Debug.Unindent;

		    Debug.WriteLine("");

		End Sub Print;


В результате выполнения примера в окно консоли будут выведены результаты
 расчета метода «X11».


Данный пользовательский метод может быть использован в [детерминированном
 уравнении](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/Specification/4_Deterministic_equation/uimodelling_model_specification_deter.htm), в [калькуляторе](UiDw.chm::/Workbook/CalculatedSeries/UiDw_cs_Calculator.htm)
 в анализе временных рядов и в [редакторе выражения](UiNav.chm::/GUI/ExpressionEditor.htm).
 Например, использование пользовательского метода в детерминированном уравнении:


IMSX11RESULT_B1.X11Result(x11(X1, Null, MsOutputSeriesType.B1,
 SeasonalityType.Multiplicative))


Где:


	- IMSX11RESULT_B1. Идентификатор
	 модуля, в котором содержится пользовательский метод;


	- X11Result. Название
	 пользовательского метода;


	- x11. Метод расчета «[X11](../IModelling/IModelling.X11.htm)»;


	- X1. Фактор модели.


См. также:


[IMsX11Result](IMsX11Result.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
