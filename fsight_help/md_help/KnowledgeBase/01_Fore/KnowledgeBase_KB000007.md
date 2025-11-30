# Использование максимальных и минимальных значений системных типов

Использование максимальных и минимальных значений системных типов
-


# Использование максимальных и минимальных значений системных типов


	Номер статьи: KB000007


## Общие сведения


	Связанные блоки:


		- [Fore](Fore.chm::/Fore_Title.htm)


## Описание


	При анализе прикладного кода было выявлено использование пользовательских
	 значений в качестве обозначения границ минимального значения. Это
	 может быть причиной получения неправильных результатов при выполнении
	 функции, подобных описанной ниже:


		Public Function min_r(q: Array Of Double): Variant;

		Var

		    min: Double;

		    i: Integer;

		Begin

		    min := -99999999;

		    For i := 0 To q.Length - 1 Do

		        If q[i] > min Then

		            min := q[i];

		        End If;

		    End For;

		    Return min;

		End Function min_r;


	Для получения минимальных/максимальных значений для различных типов
	 данных используйте свойства MinValue
	 и MaxValue:


			 Минимальное значение типа данных
			 Максимальное значение типа данных


			 [Currency](foresys.chm::/class/currency/currency.minvalue.htm)
			 [Currency](foresys.chm::/class/currency/currency.maxvalue.htm)


			 [DateTime](foresys.chm::/class/datetime/datetime.minvalue.htm)
			 [DateTime](foresys.chm::/class/datetime/datetime.maxvalue.htm)


			 [Decimal](foresys.chm::/class/decimal/decimal.minvalue.htm)
			 [Decimal](foresys.chm::/class/decimal/decimal.maxvalue.htm)


			 [Double](foresys.chm::/class/double/double.minvalue.htm)
			 [Double](foresys.chm::/class/double/double.maxvalue.htm)


			 [Integer](foresys.chm::/class/integer/integer.minvalue.htm)
			 [Integer](foresys.chm::/class/integer/integer.maxvalue.htm)


			 [TimeSpan](foresys.chm::/class/timespan/timespan.minvalue.htm)
			 [TimeSpan](foresys.chm::/class/timespan/timespan.maxvalue.htm)


## Пример


	Корректный способ обозначения границ минимального значения:


		Public Function min_r(q: Array Of Double): Variant;

		Var

		    min: Double;

		    i: Integer;

		Begin

		    min := Double.MinValue;

		    For i := 0 To q.Length - 1 Do

		        If q[i] > min Then

		            min := q[i];

		        End If;

		    End For;

		    Return min;

		End Function min_r;


См. также:


[База
 знаний разработчиков](../KnowledgeBase_Intro.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
