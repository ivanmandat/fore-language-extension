# ITreeControl.OnCompareItems

ITreeControl.OnCompareItems
-


# ITreeControl.OnCompareItems


## Синтаксис


OnCompareItems(Sender: Object; Args: [ITreeControlCompareEventArgs](../ITreeControlCompareEventArgs/ITreeControlCompareEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие.


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnCompareItems наступает
 при сравнении двух элементов во время пользовательской сортировки элементов.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1 и компонента TreeList с наименованием
 TreeList1. Свойству SortType компонента TreeList1 установлено значение
 Custom. Элементы во втором столбце содержат целочисленные значения.


			Sub TreeList1OnCompareItems(Sender: Object; Args: ITreeControlCompareEventArgs);

Var

    Nod1, Nod2: ITreeListNode;

Begin

    Nod1 := Args.LeftItem;

    Nod2 := Args.RightItem;

    If Integer.Parse(Nod1.ColumnText(1)) > Integer.Parse(Args.RightItem.ColumnText(1)) Then

        Args.Compare := -1;

    Else

        Args.Compare := 1;

    End If;

End Sub TreeList1OnCompareItems;


При выполнении события, элементы будут сортироваться в зависимости от
 значения элемента во втором столбце.


См. также:


[ITreeControl](ITreeControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
