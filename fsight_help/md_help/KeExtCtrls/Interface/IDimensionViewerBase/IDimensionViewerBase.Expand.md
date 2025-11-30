# IDimensionViewerBase.Expand

IDimensionViewerBase.Expand
-


# IDimensionViewerBase.Expand


## Синтаксис


Expand(Node: Integer; [Recursively: Boolean = false
 ]);


## Параметры


Node. Вершина, иерархия потомков
 которой будет развернута;


Recursively. Признак рекурсивного
 разворачивания иерархии потомков.


## Описание


Метод Expand разворачивает иерархии
 потомков дерева указанной вершины.


## Комментарии


Допустимые значения параметра Recursively:


	- True. Происходит разворачивание
	 всей иерархии всех потомков;


	- Flase. Происходит разворачивание
	 иерархии только выбранного элемента.


Для сворачивания иерархии потомков дерева указанной вершины используйте
 метод [IDimensionViewerBase.Collapse](IDimensionViewerBase.Collapse.htm).


Для определения уровня измерения, который будет автоматически разворачиваться
 при открытии раскрывающейся области компонента, используйте свойство [IDimensionViewerBase.AutoExpandDepth](IDimensionViewerBase.AutoExpandDepth.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и компонента MetaAtrributesBreadCrumb
 наименованием «MetaAtrributesBreadCrumb1». «MetaAtrributesBreadCrumb1»
 подключен к какой-либо базе данных временных рядов.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    DV: IDimensionViewerBase;

	Begin

	    DV := MetaAttributesBreadcrumb1.DimensionViewer;

	    //Разворачивание иерархии дочерних элементов

	    DV.Expand(0, True);

	End Sub Button1OnClick;


При нажатии на кнопку в раскрывающемся списке компонента «MetaAtrributesBreadCrumb1»
 будет свернута иерархия дочерних элементов у элемента с индексом «0».


См. также:


[IDimensionViewerBase](IDimensionViewerBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
