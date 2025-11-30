# ListView.OnCompareItems

ListView.OnCompareItems
-


# ListView.OnCompareItems


## Синтаксис


OnCompareItems(Sender: Object; Args: [IListViewCompareEventArgs](../../Interface/IListViewCompareEventArgs/IListViewCompareEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие.


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnCompareItems наступает
 при сравнении двух элементов, во время сортировки в колонке компонента.


## Пример


			Sub ListView1OnCompareItems(Sender: Object; Args: IListViewCompareEventArgs);

Var

    It1, It2: IListViewItem;

Begin

    It1 := Args.LeftItem;

    It2 := Args.RightItem;

    If It1.Text.Length < It2.Text.Length Then

        Args.Compare := 1;

    Else

        Args.Compare := -1;

    End If;

End Sub ListView1OnCompareItems;


При выполнении события, элементы будут сортироваться в зависимости от
 длины значения элемента.


См. также:


[ListView](ListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
