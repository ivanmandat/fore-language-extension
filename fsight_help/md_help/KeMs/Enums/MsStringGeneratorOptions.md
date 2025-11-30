# MsStringGeneratorOptions

MsStringGeneratorOptions
-


# MsStringGeneratorOptions


## Описание


Перечисление MsStringGeneratorOptions
 содержит дополнительные настройки, используемые для генерации наименований
 моделей.


Используется следующим свойством:


	- [IMsStringGenerator.AdvancedOptions](../Interface/IMsStringGenerator/IMsStringGenerator.AdvancedOptions.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 Default_. Стандартное
		 наименование с применением экранирования символов.


		 1
		 ExpandArimaName. Расширенное
		 наименование для модели ARIMA.


		 2
		 ScreenNames. Стандартное
		 наименование с символами, применяемыми для экранирования.


		 4
		 AddTermBraces. Стандартное
		 наименование с фигурными скобками для наименований термов.


		 8
		 NoAttributes. Наименования
		 термов без используемых в них атрибутов.


		 16
		 EmptyAsX. Используется
		 в ядре платформы, не предназначено для использования в прикладном
		 коде.


		 32
		 HideY. Наименование
		 без левой части уравнения (Актуально для нелинейной регрессии).


		 64
		 InnerText. Наименование
		 на основании внутренних представлений термов.


		 256
		 ShortMode. Укороченное
		 наименование.


## Комментарии


ExpandArimaName. Используя расширенное
 наименование и свойство [IMsStringGenerator.Coord](../Interface/IMsStringGenerator/IMsStringGenerator.Coord.htm)
 можно получить идентифицированное уравнение для модели ARIMA.


Для экранирования символов применяется символ «\».


Пример для модели детерминированного уравнения. В наименовании экранируется
 символ «{»:


	- Default_. FC_COMM_26!Af{ghanistan[t]
	 = Albania|BCA[t] * 2


	- ScreenNames. FC_COMM_26!Af\{ghanistan[t]
	 = Albania|BCA[t] * 2


	- AddTermBraces. {FC_COMM_26!Af{ghanistan[t]}
	 = {Albania|BCA[t]} * 2


	- HideY.
	 {Albania|BCA[t]} * 2


См. также:


[Перечисления
 сборки Ms](KeMs_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
