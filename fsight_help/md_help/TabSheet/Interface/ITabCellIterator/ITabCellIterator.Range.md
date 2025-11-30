# ITabCellIterator.Range

ITabCellIterator.Range
-


# ITabCellIterator.Range


## Синтаксис


Range: [ITabRange](../ITabRange/ITabRange.htm);


## Описание


Свойство Range задает диапазон
 ячеек для итератора.


## Пример


Для выполнения примера создайте форму, приведенную в примере для метода
 [ITabCellIterator.Next](ITabCellIterator.Next.htm). Разместите
 на форме кнопку «Button3», добавьте следующий обработчик события щелчка мыши
 по кнопке:


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Begin

    iter.Range := tab.Cells(1, 1, 4, 4);

End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку будет определен новый
 диапазон для ранее созданного итератора с наименованием «iter».


См. также:


[ITabCellIterator](ITabCellIterator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
