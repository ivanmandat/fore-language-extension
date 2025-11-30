# ITreeControl.SortType

ITreeControl.SortType
-


# ITreeControl.SortType


## Синтаксис


SortType: [ControlSortType](../../Enums/ControlSortType.htm);


## Описание


Свойство SortType определяет
 тип сортировки для компонента.


## Комментарии


Если свойство SortType принимает
 значение None, то свойства [Sorted](ITreeControl.Sorted.htm), [SortColumn](ITreeControl.SortColumn.htm)
 и методы [SortDefault](ITreeControl.SortDefault.htm), [Sort](ITreeControl.Sort.htm)
 неактуальны. При установке значения Text
 будет производиться сортировка по тексту элементов. Если в компоненте
 добавлены числовые элементы, то сортировка осуществляется по ASCII-кодам
 чисел, а не по значениям чисел.


Для того, чтобы произвести пользовательскую сортировку, установите свойству
 SortType значение Custom.
 После этого сгенерируется событие OnCompareItems,
 в котором выполняется пользовательская процедура сортировки. Пример пользовательской
 процедуры сортировки приведен в описании события [OnCompareItems](ITreeControl.OnCompareItems.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и компонента TreeList с наименованием
 «TreeList1». В «TreeList1» создано не менее двух столбцов.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Begin

    TreeList1.SortType := ControlSortType.Text;

    TreeList1.SortColumn := 1;

    TreeList1.Sorted := True;

    TreeList1.SortDefault;

End Sub Button1OnClick;


При нажатии на кнопку будет произведена сортировка по возрастанию значений
 элементов, заданных во втором столбце.


См. также:


[ITreeControl](ITreeControl.htm) | [ITreeControl.SortColumn](ITreeControl.SortColumn.htm)
 | [ITreeControl.Sorted](ITreeControl.Sorted.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
