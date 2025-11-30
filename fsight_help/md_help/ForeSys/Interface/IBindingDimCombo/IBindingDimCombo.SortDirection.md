# IBindingDimCombo.SortDirection

IBindingDimCombo.SortDirection
-


# IBindingDimCombo.SortDirection


## Синтаксис


SortDirection: [DimComboSortDirection](../../Enums/DimComboSortDirection.htm);


## Описание


Свойство SortDirection определяет
 значение параметра «SORTDIRECTION»
 в [строке
 связи](../IBindingValue/IBindingValue.AsString.htm).


## Комментарии


Параметр «SORTDIRECTION» определяет
 вариант сортировки элементов справочника по наименованию.


Значение параметра задается в [строке
 связи](../IBindingValue/IBindingValue.AsString.htm) с помощью свойства SortDirection
 или вручную в формате:


SORTDIRECTION="VALUE"


Где:


	- VALUE. Значение параметра.


Описание значений параметра:


		 Значение
		 Описание


		 NONE
		 Сортировка элементов справочника не производится.


		 ASC
		 Сортировка элементов справочника производится в порядке возрастания
		 по алфавиту или текстовым значениям чисел.


		 DESC
		 Сортировка элементов справочника производится в порядке убывания
		 по алфавиту или текстовым значениям чисел.


Если параметр отсутствует, то элементы отображаются в том порядке, в
 каком они созданы в справочнике.


## Пример


Использование свойства приведено в примере для [IBindingDimCombo.Group](ibindingdimcombo.group.htm).


См. также:


[IBindingDimCombo](ibindingdimcombo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
