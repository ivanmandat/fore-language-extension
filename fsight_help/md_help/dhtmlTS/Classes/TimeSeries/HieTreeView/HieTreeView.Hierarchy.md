# HieTreeView.Hierarchy

HieTreeView.Hierarchy
-


# HieTreeView.Hierarchy


## Синтаксис


Hierarchy: PP.TS.[MetaHierarchy](../MetaHierarchy/MetaHierarchy.htm);


## Описание


Свойство Hierarchy определяет
 текущее отображаемое измерение.


## Пример


Для выполнения примера предполагается наличие на *.html-странице компонента
 [MetaAttributeTree](../MetaAttributeTree/MetaAttributeTree.htm)
 с наименованием «maTree» (см. «[Конструктор
 MetaAttributeTree](../MetaAttributeTree/Constructor_MetaAttributeTree.htm)»). Скроем пустые ряды дерева:


hier = maTree.getHierarchy();


hier.setFilterMode("LightWeight");


maTree.refreshAll();


После выполнения примера в дереве будут скрыты пустые ряды.


См. также:


[HieTreeView](HieTreeView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
