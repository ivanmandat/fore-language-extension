# IDimensionViewerBase.MakeVisible

IDimensionViewerBase.MakeVisible
-


# IDimensionViewerBase.MakeVisible


## Синтаксис


MakeVisible(Node: Integer; [SetFocus: Boolean =
 False ]);


## Параметры


Node. Вершина, которую необходимо
 сделать видимой;


SetFocus. Признак необходимости
 передать фокус элементу.


## Описание


Метод MakeVisible осуществляет
 прокрутку дерева элементов таким образом, чтобы указанный элемент попал
 в видимую область компонента.


## Комментарии


Допустимые значения параметра SetFocus:


	- True. Элемент будет
	 сфокусирован;


	- Flase. Фокус не будет
	 передан элементу, для которого осуществляется прокрутка дерева.


См. также:


[IDimensionViewerBase](IDimensionViewerBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
