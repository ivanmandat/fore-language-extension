# IDimensionViewerBase.AutoExpandDepth

IDimensionViewerBase.AutoExpandDepth
-


# IDimensionViewerBase.AutoExpandDepth


## Синтаксис


AutoExpandDepth: Integer;


## Описание


Свойство AutoExpandDepth определяет
 номер уровня измерения, который будет автоматически разворачиваться при
 открытии раскрывающегося списка компонента.


## Комментарии


Если указанное значение свойства превышает количество уровней измерений,
 то будут развернуты все уровни.


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

	    //Уровень, иерархия которого будет развернута

	    DV.AutoExpandDepth := 1;

	    //Элемент, который будет сфокусирован

	    DV.FocusedElement := 10;

	End Sub Button1OnClick;


При нажатии на кнопку для компонента «MetaAtrributesBreadCrumb1» будут
 определены параметры открытия раскрывающегося списка. При открытии будет
 развернуты первый уровень элементов и сфокусирован элемент с индексом
 «10».


См. также:


[IDimensionViewerBase](IDimensionViewerBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
