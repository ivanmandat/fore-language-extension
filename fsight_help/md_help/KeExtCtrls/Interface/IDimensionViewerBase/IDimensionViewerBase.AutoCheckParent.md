# IDimensionViewerBase.AutoCheckParent

IDimensionViewerBase.AutoCheckParent
-


# IDimensionViewerBase.AutoCheckParent


## Синтаксис


AutoCheckParent: Boolean;


## Описание


Свойство AutoCheckParent определяет,
 будет ли у флажков родительских вершин дерева автоматически устанавливаться
 неопределенное состояние, если отмечены не все дочерние элементы.


## Комментарии


Допустимые значения:


	- True. При выделении
	 дочерних вершин, для родительской вершины автоматически будет устанавливаться
	 неопределенное состояние. При отметке родительской вершины - автоматически
	 будут выделяться все дочерние;


	- False. По умолчанию.
	 Все вершины отмечаются независимо друг от друга.


Для работы свойства AutoCheckParent
 необходимо, чтобы свойству [IDimensionViewerBase.Checkboxes](IDimensionViewerBase.Checkboxes.htm)
 было установлено значение True.


См. также:


[IDimensionViewerBase](IDimensionViewerBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
