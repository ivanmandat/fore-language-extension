# ITreeControl.Sort

ITreeControl.Sort
-


# ITreeControl.Sort


## Синтаксис


Sort([Column: [ITreeListColumn](../ITreeListColumn/ITreeListColumn.htm)
 = Null;][Direction: [SortDirection](foresys.chm::/enums/sortdirection.htm)
 = 0]);


## Параметры


Column. Cтолбец,
 по которому необходимо осуществить сортировку. Если параметр не указан,
 то осуществляется сортировка по столбцу, указанному в свойстве [SortColumn](ITreeControl.SortColumn.htm);


Direction. Направление сортировки,
 которое будет установлено в столбце. Если параметр не указан, то будет
 установлена сортировка по возрастанию значений.


## Описание


Метод Sort осуществляет сортировку
 элементов указанного столбца в заданном направлении.


## Комментарии


Метод Sort актуален, когда для
 свойства [Sorted](ITreeControl.Sorted.htm) установлено значение
 True, а для свойства [SortType](ITreeControl.SortType.htm)
 не установлено значение None.


## Пример


Для выполнения примера необходимо наличие формы и расположенных на ней
 кнопки с наименованием «Button1» и компонента TreeList с наименованием
 «TreeList1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    TreeList1.SortType := ControlSortType.Text;

	    TreeList1.Sorted := True;

	    TreeList1.Sort(TreeList1.Columns.Item(0), SortDirection.Descending);

	End Sub Button1OnClick;


При нажатии на кнопку элементы будут отсортированы по убыванию. Сортировка
 будет осуществлена по первому столбцу.


См. также:


[ITreeControl](ITreeControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
