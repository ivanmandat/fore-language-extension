# ITreeListColumn.SortAscending

ITreeListColumn.SortAscending
-


# ITreeListColumn.SortAscending


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
 по которому осуществляется сортировка](../ITreeControl/ITreeControl.SortColumn.htm), [тип
 сортировки](../ITreeControl/ITreeControl.SortType.htm) и [признак
 включенной сортировки](../ITreeControl/ITreeControl.Sorted.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1 и компонента TreeList с наименованием
 TreeList1.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Begin

    TreeList1.SortType := ControlSortType.Text;

    TreeList1.SortColumn := 0;

    TreeList1.Sorted := True;

    TreeList1.Columns.Item(TreeList1.SortColumn).SortAscending := False;

End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку для компонента TreeList1
 будет установлена сортировка по значениям первого столбца. Значения будут
 отсортированы по убыванию.


См. также:


[ITreeListColumn](ITreeListColumn.htm)
 | [ITreeControl.SortColumn](../ITreeControl/ITreeControl.SortColumn.htm)
 | [ITreeControl.Sorted](../ITreeControl/ITreeControl.Sorted.htm)
 | [ITreeControl.SortType](../ITreeControl/ITreeControl.SortType.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
