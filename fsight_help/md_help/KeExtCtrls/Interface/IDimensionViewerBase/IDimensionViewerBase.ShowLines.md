# IDimensionViewerBase.ShowLines

IDimensionViewerBase.ShowLines
-


# IDimensionViewerBase.ShowLines


## Синтаксис


ShowLines: Boolean;


## Описание


Свойство ShowLines определяет,
 будут ли отображаться соединительные линии между вершинами и их потомками.


## Комментарии


Допустимые значения:


	- True. По умолчанию.
	 Соединительные линии между вершинами и их потомками будут отображаться;


	- False. Соединительные
	 линии между вершинами и их потомками будут скрыты.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и компонента MetaAtrributesBreadCrumb
 с наименованием «MetaAtrributesBreadCrumb1». «MetaAtrributesBreadCrumb1»
 подключен к какой-либо базе данных временных рядов.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    DV: IDimensionViewerBase;

	Begin

	    DV := MetaAttributesBreadcrumb1.DimensionViewer;

	    //Скроем соединительную линию между вершиной и потомками

	    DV.ShowLines := False;

	    //Скроем кнопки сворачивания и разворачивания всех элементов деревьев

	    DV.ShowRoot := False;

	    DV.ShowButtons := False;

	    //Скроем всплывающие подсказки при наведении указателя мыши на элементы

	    DV.ShowHints := False;

	    //Отобразим наименования столбцов

	    MetaAttributesBreadcrumb1.ShowColumnHeaders := True;

	    //Скроем кнопку вызова меню заголовков столбцов

	    DV.ShowHeaderButton := False;

	    //При щелчке по элементу будет выделен только сам элемент, а не вся строка

	    DV.RowSelect := False;

	    //Разрешим щелчок по заголовку столбца

	    DV.ColumnClick := True;

	End Sub Button1OnClick;


При нажатии на кнопку в раскрывающемся списке компонента «MetaAtrributesBreadCrumb1»
 будут настроены различные элементы визуального интерфейса.


См. также:


[IDimensionViewerBase](IDimensionViewerBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
