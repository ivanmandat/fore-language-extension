# IDtTextProvider.DelimitedColumnDelimiter

IDtTextProvider.DelimitedColumnDelimiter
-


# IDtTextProvider.DelimitedColumnDelimiter


## Синтаксис


DelimitedColumnDelimiter: String;


## Описание


Свойство DelimitedColumnDelimiter
 определяет символ, используемый в качестве разделителя полей в текстовом
 файле.


## Комментарии


По умолчанию свойству установлено значение ",".


В качестве значений данного свойства допустимы следующие значения:


	- ,


	- ;


	- .


	- :


	- |


	- {Табуляция} - код #9


	- {Возврат каретки} - код #13


	- {Перевод строки} - код #10


	- {Возврат каретки}{Перевод строки} - #13+#10


	- Любой другой символ, либо сочетание символов, по желанию
	 пользователя.


## Пример


Использование свойства приведено в примере для [IDtTextProvider.AllowMuchColumnDelimiter](IDtTextProvider.AllowMuchColumnDelimiter.htm).


См. также:


[IDtTextProvider](IDtTextProvider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
