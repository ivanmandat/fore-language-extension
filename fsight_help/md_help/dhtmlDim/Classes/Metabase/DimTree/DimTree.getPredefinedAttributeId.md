# DimTree.getPredefinedAttributeId

DimTree.getPredefinedAttributeId
-


# DimTree.getPredefinedAttributeId


## Синтаксис


getPredefinedAttributeId(id: String);


## Параметры


id. Предустановленное значение
 идентификатора.


## Описание


Метод getPredefinedAttributeId
 возвращает идентификатор атрибута по предустановленному значению идентификатора.


## Комментарии


Если не указано предустановленное значение, то метод возвращает значение
 «NAME».


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 DimCombo с наименованием «dimCombo» (см. «[Пример
 размещения компонента DimCombo](../../../Components/Metabase/DimCombo/DimCombo_Example.htm)»). Получим идентификатор по предустановленному
 значению «Order»:


// Получим представление дерева
tree = dimCombo.getTreeView();
// Получаем идентификатор по предустановленному значению
console.log("Идентификатор предустановленного значения Ident: " + tree.getPredefinedAttributeId("Ident"));
В результате в консоль будет выведен идентификатор по предустановленному
 значению «Ident»:


Идентификатор предустановленного значения Ident:
 ID


См. также:


[DimTree](DimTree.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
