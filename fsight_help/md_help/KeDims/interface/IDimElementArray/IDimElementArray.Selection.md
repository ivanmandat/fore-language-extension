# IDimElementArray.Selection

IDimElementArray.Selection
-


# IDimElementArray.Selection


## Синтаксис


Selection: [IDimSelection](../IDimSelection/IDimSelection.htm);


## Описание


Метод Selection создает отметку
 справочника, состоящую из элементов массива.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием "Button1" компонента UiDimension
 с наименованием "UiDimension1" и каких либо компонентов, использующих
 данные компонента "UiDimension1".


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Dimen: IDimInstance;

	    Elem: IDimElements;

	    ElemArr: IDimElementArray;

	    Selection: IDimSelection;

	Begin

	    Dimen := UiDimension1.DimInstance;

	    Elem := Dimen.Elements;

	    ElemArr := Elem.Children(0);

	    Selection := ElemArr.Selection;

	    UiDimension1.Selection := Selection;

	End Sub Button1OnClick;


После выполнения примера в компоненте "UiDimension1" будет
 установлена отметка элемента с индексом "0" и всех его дочерних
 объектов.


См. также:


[IDimElementArray](IDimElementArray.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
