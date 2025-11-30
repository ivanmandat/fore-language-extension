# IMsDimCustomLinker.ResolveLink

IMsDimCustomLinker.ResolveLink
-


# IMsDimCustomLinker.ResolveLink


## Синтаксис


		ResolveLink(Source: [IMsDimIteratorDimension](../IMsDimIteratorDimension/IMsDimIteratorDimension.htm);


		            Destination:
		 [IMsDimIteratorDimension](../IMsDimIteratorDimension/IMsDimIteratorDimension.htm);


		            CurrentSelection:
		 [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm);


		            Var
		 SkipCustomLink: Boolean): Array;


## Параметры


Source. Управляющее измерение;


Destination. Управляемое измерение;


CurrentSelection. Текущая отметка
 по управляющим измерениям;


SkipCustomLink. Признак использования
 пользовательского связывания.


## Описание


Метод ResolveLink реализует
 пользовательскую связь и возвращает массив элементов в управляемом измерении.


## Комментарии


Допустимые значения параметра SkipCustomLink:


	- True. Не применять пользовательское
	 связывание;


	- False. Применять пользовательское
	 связывание.


## Пример


Использование метода приведено в примере для [IMsDimIteratorLinks.CustomLinker](../IMsDimIteratorLinks/IMsDimIteratorLinks.CustomLinker.htm).


См. также:


[IMsDimCustomLinker](IMsDimCustomLinker.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
