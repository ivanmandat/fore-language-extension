# ITabRange.EntireColumns

ITabRange.EntireColumns
-


# ITabRange.EntireColumns


## Синтаксис


EntireColumns: [ITabRange](ITabRange.htm);


## Описание


Свойство EntireColumn возвращает
 диапазон, состоящий только из столбцов, входящих в текущий диапазон.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента TabSheetBox
 и компонента UiTabSheet с наименованием
 «UiTabSheet1». «UiTabSheet1» установлен в качестве источника данных для
 компонента TabSheetBox.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    TSheet: ITabSheet;

	    TRange1, TRange2: ITabRange;

	Begin

	    TSheet := UiTabSheet1.TabSheet;

	    TRange1 := TSheet.View.Selection.Range;

	    TRange2 := TRange1.EntireColumns;

	End Sub Button1OnClick;


При нажатии на кнопку в переменной «TRange1» будет содержаться ссылка
 на диапазон, выделенный в текущий момент в таблице. В переменной «TRange2»
 будет ссылка на диапазон, состоящий из столбцов, входящих в диапазон «TRange1».


См. также:


[ITabRange](ITabRange.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
