# ICustomDimTree.Owner

ICustomDimTree.Owner
-


# ICustomDimTree.Owner


## Синтаксис


Owner(PrimaryKey: Variant): Variant;


## Параметры


PrimaryKey. Первичный
 ключ элемента.


## Описание


Свойство Owner определяет первичный
 ключ элемента-владельца для указанного элемента.


## Комментарии


Первичным ключом элементов являются значения, установленные по атрибуту
 [Primary](../ICustomDimAttributes/ICustomDimAttributes.Primary.htm).
 Если элемент необходимо переместить в корень дерева, то для элемента в
 свойстве Owner необходимо установить
 значение Null.


См. также:


[ICustomDimTree](ICustomDimTree.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
