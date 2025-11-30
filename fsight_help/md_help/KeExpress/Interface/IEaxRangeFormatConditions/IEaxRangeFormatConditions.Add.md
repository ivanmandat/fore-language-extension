# IEaxRangeFormatConditions.Add

IEaxRangeFormatConditions.Add
-


# IEaxRangeFormatConditions.Add


## Синтаксис


Add(Conditions: [ITabFormatConditions](TabSheet.chm::/Interface/ITabFormatConditions/ITabFormatConditions.htm));


## Параметры


Conditions. Коллекция условных
 форматов.


## Описание


Метод Add добавляет элемент
 в коллекцию стилей условного форматирования таблицы.


## Комментарии


Каждый элемент коллекции является коллекцией условных форматов. Если
 параметр Conditions принимает
 значение Null, то добавления элемента
 в коллекцию не происходит.


После добавления элемента в коллекцию значение [IEaxRangeFormatConditions.Count](IEaxRangeFormatConditions.Count.htm)
 увеличивается на единицу.


## Пример


Использование метода приведено в примере для [IEaxTableStyle.RangeFormatConditions](../IEaxTableStyle/IEaxTableStyle.RangeFormatConditions.htm).


См. также:


[IEaxRangeFormatConditions](IEaxRangeFormatConditions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
