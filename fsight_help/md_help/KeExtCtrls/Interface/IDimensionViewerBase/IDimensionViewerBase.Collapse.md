# IDimensionViewerBase.Collapse

IDimensionViewerBase.Collapse
-


# IDimensionViewerBase.Collapse


## Синтаксис


Collapse(Node: Integer; [Recursively: Boolean =
 False]);


## Параметры


Node. Вершина, иерархия потомков
 которой будет свернута;


Recursively. Признак рекурсивного
 сворачивания иерархии потомков.


## Описание


Метод Collapse сворачивает иерархии
 потомков дерева указанной вершины.


## Комментарии


Допустимые значения параметра Recursively:


	- True. Происходит сворачивание
	 всей иерархии всех потомков;


	- Flase. Происходит сворачивание
	 иерархии только выбранного элемента.


Для разворачивания иерархии потомков дерева указанной вершины используйте
 метод [IDimensionViewerBase.Expand](IDimensionViewerBase.Expand.htm).


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

	    //Сворачивание иерархии дочерних элементов

	    DV.Collapse(0, True);

	End Sub Button1OnClick;


При нажатии на кнопку в раскрывающемся списке компонента «MetaAtrributesBreadCrumb1»
 будет свернута иерархия дочерних элементов у элемента с индексом «0».


См. также:


[IDimensionViewerBase](IDimensionViewerBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
