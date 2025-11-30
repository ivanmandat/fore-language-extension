# MsTermTextFormat

MsTermTextFormat
-


# MsTermTextFormat


## Описание


Перечисление MsTermTextFormat
 используется для определения формата представления наименования терма.


Используется следующими свойствами:


	- [IMsCompositeFormulaTerm.FormatExpressionText](../Interface/IMsCompositeFormulaTerm/IMsCompositeFormulaTerm.FormatExpressionText.htm);


	- [IMsFormulaTermInfo.FormatText](../Interface/IMsFormulaTermInfo/IMsFormulaTermInfo.FormatText.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 None. Значение по умолчанию.


		 1
		 Brackets. Наименование
		 терма без скобок.


		 2
		 DataSource. Наименование
		 терма с указанием источника данных.


		 4
		 Time. Наименование
		 терма с указанием лага.


		 8
		 Inversions. Наименование
		 с указанием начального преобразования терма и его периода.


		 16
		 Screened. Наименование
		 терма без информации о преобразовании, лаге, источнике данных
		 и с символами экранирования.


		 32
		 NoAttribute. Наименование
		 терма без используемых в нем атрибутов.


		 64
		 EmptyAsX. Используется
		 в ядре платформы, не предназначено для использования в прикладном
		 коде.


		 239
		 Pure. Полное наименование
		 терма без символов экранирования.


		 255
		 All. Полное наименование
		 терма с символами экранирования.


		 256
		 InnerText. Внутреннее
		 представление терма, используемое в формулах.


		 512
		 AttributeName. В наименовании
		 терма указывается название атрибута, а не его значение.


		 4096
		 AlgoFormat. Полное
		 наименование терма с символами экранирования и разделением значений
		 в терме пробелами (используется в алгоритмах расчёта).


## Комментарии


Для применения нескольких параметров форматирования указывайте необходимые
 значения перечисления MsTermTextFormat
 через «Or».


Для экранирования символов применяется символ «\».


Существует терм со следующими параметрами:


	- способ начального преобразования - разность логарифмов;


	- период, на котором осуществляется начальное преобразование -
	 соответствующий период предыдущего года;


	- значение лага для терма - «2».


Наименование терма, возвращаемое свойством [IMsFormulaTermInfo.TermText](../Interface/IMsFormulaTermInfo/IMsFormulaTermInfo.TermText.htm):
 {dlogYoY(TEST_COPY1!Afghanistan|BCA[t+2], 3)}.


Ниже представлено наименование данного терма после применения форматирования:


	- Brackets: Afghanistan|BCA


	- DataSource: TEST_COPY1!Afghanistan|BCA


	- Inversions: dlogYoY(TEST_COPY1!Afghanistan|BCA[t+2],
	 3)


	- Time: Afghanistan|BCA[t+2]


	- All: {dlogYoY(TEST_COPY1!Afghanistan|BCA[t+2],
	 3)}


	- DataSource Or Time:
	 TEST_COPY1!Afghanistan|BCA[t+2]


	- Screened. Afghanistan|BCA


	- Pure. {dlogYoY(TEST_COPY1!Afghanistan|BCA[t+2],
	 3)}


См. также:


[Перечисления сборки Ms](KeMs_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
