# IDimensionViewerColumn.SortAscending

IDimensionViewerColumn.SortAscending
-


# IDimensionViewerColumn.SortAscending


## Синтаксис


SortAscending: Boolean;


## Описание


Свойство SortAscending определяет
 направление сортировки.


## Комментарии


Если свойству установлено значение True,
 то сортировка осуществляется по возрастанию, иначе - по убыванию.


Свойство актуально, если установлены все необходимые для сортировки
 свойства: [столбец,
 по которому осуществляется сортировка](../IDimensionViewer/IDimensionViewer.SortColumn.htm), [тип
 сортировки](../IDimensionViewer/IDimensionViewer.SortType.htm) и [признак
 включенной сортировки](../IDimensionViewer/IDimensionViewer.Sorted.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента DimensionTree с наименованием
 «DimensionTree1» и компонента UiDimension, являющегося источником данных
 для «DimensionTree1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    DimensionTree1.SortType := ControlSortType.Text;

	    DimensionTree1.SortColumn := 0;

	    DimensionTree1.Sorted := True;

	    DimensionTree1.Columns.Item(DimensionTree1.SortColumn).SortAscending := False;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку для компонента «DimensionTree1»
 будет установлена сортировка по значениям первого столбца. Значения будут
 отсортированы по убыванию.


См. также:


[IDimensionViewerColumn](IDimensionViewerColumn.htm)
 | [IDimensionViewer.SortColumn](../IDimensionViewer/IDimensionViewer.SortColumn.htm)
 | [IDimensionViewer.Sorted](../IDimensionViewer/IDimensionViewer.Sorted.htm)
 | [IDimensionViewer.SortType](../IDimensionViewer/IDimensionViewer.SortType.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
