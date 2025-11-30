# ITreeControl.Sorted

ITreeControl.Sorted
-


# ITreeControl.Sorted


## Синтаксис


Sorted: Boolean;


## Описание


Свойство Sorted определяет возможность
 сортировки по столбцу, указанному в свойстве [SortColumn](ITreeControl.SortColumn.htm)
 и в методе [Sort](ITreeControl.Sort.htm).


## Комментарии


Если свойству установлено значение True,
 сортировка осуществляется, иначе - не осуществляется.


Без использования свойства Sorted
 свойство [SortColumn](ITreeControl.SortColumn.htm) и метод
 [Sort](ITreeControl.Sort.htm) становятся неактуальными.


Свойство Sorted неактуально,
 если для свойства [SortType](ITreeControl.SortType.htm) установлено
 значение None.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1 и компонента TreeList с наименованием
 TreeList1.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Begin

    TreeList1.SortType := ControlSortType.Text;

    TreeList1.SortColumn := 0;

    TreeList1.Sorted := True;

End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку будет осуществлена сортировка
 элементов компонента TreeList1 по первому столбцу. Сортировка будет выполняться
 по алфавиту, поскольку для свойства [SortType](ITreeControl.SortType.htm)
 установлено значение Text.


См. также:


[ITreeControl](ITreeControl.htm)
 | [ITreeControl.SortColumn](ITreeControl.SortColumn.htm) |
 [ITreeControl.SortType](ITreeControl.SortType.htm) | [ITreeControl.Sort](ITreeControl.Sort.htm)
 | [ITreeControl.SortDefault](ITreeControl.SortDefault.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
