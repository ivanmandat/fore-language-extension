# IVZBaseFormatter.FormatByParam

IVZBaseFormatter.FormatByParam
-


# IVZBaseFormatter.FormatByParam


## Синтаксис


FormatByParam(Value: String, param: Variant, DefaultFormat:
 String): String;


## Параметры


Value. Исходная строка;


param. Объект для подстановки
 текстового эквивалента его значения в исходную строку;


DefaultFormat. Формат данных
 по умолчанию.


## Описание


Метод FormatByParam заменяет
 элемент формата в указанной строке текстовым эквивалентом значения указанного
 объекта.


## Комментарии


Для пузырькового дерева [IVZBubbleTree](../IVZBubbleTree/IVZBubbleTree.htm)
 в исходной строке могут быть использованы следующие объекты (параметры):
 Name (наименование пузырька), SizeTitle (наименование размерного показателя),
 SizeValue (значение размерного показателя), ColorTitle (наименование цветового
 показателя), ColorValue (значение цветового показателя), TextTitle (наименование
 текстового показателя), TextValue (значение текстового показателя), ChildsCount
 (количество дочерних элементов у пузырька).


Для плоского дерева [IVZTreeMap](../IVZTreeMap/IVZTreeMap.htm)
 в исходной строке могут быть использованы следующие объекты (параметры):
 Name (наименование пузырька), SizeTitle (наименование размерного показателя),
 SizeValue (значение размерного показателя), HeightTitle (наименование
 высотного показателя), HeightValue (значение высотного показателя ), ColorTitle
 (наименование цветового показателя), ColorValue (значение цветового показателя),
 TextTitle (наименование текстового показателя), TextValue (значение текстового
 показателя), ChildsCount (количество дочерних элементов у пузырька).


## Пример


Использование свойства приведено в примере для [IVZBaseFormatter.Format](IVZBaseFormatter.Format.htm).


См. также:


[IVZBaseFormatter](IVZBaseFormatter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
