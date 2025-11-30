# IFreeTextComparer.WholeWord

IFreeTextComparer.WholeWord
-


# IFreeTextComparer.WholeWord


## Синтаксис


WholeWord: Boolean;


## Описание


Свойство WholeWord определяет,
 осуществлять ли сравнение только строки целиком.


## Комментарии


Допустимые значения:


	- True. Полнота строки
	 учитывается. Например, слова «Отчет» и «Отч» будут считаться
	 несовпадающими;


	- False. Значение по умолчанию.
	 Полнота строки не учитывается. Например, слова «Отчет» и «Отч»
	 будут считаться равными.


## Пример


Использование свойства приведено в примере для [IFreeTextComparer.MatchCase](IFreeTextComparer.MatchCase.htm).


См. также:


[IFreeTextComparer](IFreeTextComparer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
