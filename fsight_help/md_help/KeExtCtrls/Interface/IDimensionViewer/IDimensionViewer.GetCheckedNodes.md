# IDimensionViewer.GetCheckedNodes

IDimensionViewer.GetCheckedNodes
-


# IDimensionViewer.GetCheckedNodes


## Синтаксис


GetCheckedNodes([WithIndeterminate: Boolean = False]):
 [IDimSelection](KeDims.chm::/interface/IDimSelection/IDimSelection.htm);


## Параметры


WithIndeterminate. Необязательный
 параметр, определяющий, будут ли включаться в коллекцию элементы, имеющие
 промежуточную отметку флага ([CheckState](IDimensionViewer.CheckState.htm)=Indeterminate).
 По умолчанию элементы с промежуточным состоянием отметки флага в коллекцию
 не включаются.


## Описание


Метод GetCheckedNodes возвращает
 коллекцию элементов, для которых установлена отметка флага.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» компонента DimensionTree с наименованием
 «DimensionTree1» и компонента UiDimension, являющегося источником данных
 для «DimensionTree1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    CheckedElem: IDimSelection;

	    i: Integer;

	Begin

	    CheckedElem := DimensionTree1.GetCheckedNodes(True);

	    i := CheckedElem.SelectedCount;

	End Sub Button1OnClick;


При нажатии на кнопку, будет получена коллекция элементов компонента
 «DimensionTree1», имеющих отметку флага. Элементы имеющие промежуточное
 состояние отметки флага также включаются в коллекцию. В переменной «i»
 будет содержаться количество элементов в полученной коллекции.


См. также:


[IDimensionViewer](IDimensionViewer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
