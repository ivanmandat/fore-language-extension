# IRubricatorDictionaryLookup.WhereIsEmpty

IRubricatorDictionaryLookup.WhereIsEmpty
-


# IRubricatorDictionaryLookup.WhereIsEmpty


## Синтаксис


WhereIsEmpty: [TriState](ForeSys.chm::/Enums/TriState.htm);


## Описание


Свойство WhereIsEmpty определяет,
 участвуют ли в поиске записи, для которых установлен признак пустоты.


## Комментарии


Допустимые значения:


	- TriState.OnOption.
	 Поиск производится только среди пустых записей;


	- TriState.OffOption.
	 Поиск производится только среди непустых записей;


	- TriState.Undefined.
	 Значение по умолчанию. Поиск производится по всем записям.


## Пример


Использование метода приведено в примере для [IRubricator.HasEmptyAttribute](../IRubricator/IRubricator.HasEmptyAttribute.htm).


См. также:


[IRubricatorDictionaryLookup](IRubricatorDictionaryLookup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
