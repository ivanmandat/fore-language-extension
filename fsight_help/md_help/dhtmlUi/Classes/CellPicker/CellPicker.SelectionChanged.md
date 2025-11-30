# CellPicker.SelectionChanged

CellPicker.SelectionChanged
-


# CellPicker.SelectionChanged


## Синтаксис


SelectionChanged: function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие SelectionChanged наступает при выборе ячеек.


## Пример


Для выполнения примера создайте компонент [CellPicker](../../Components/CellPicker/CellPicker.htm) (см. «[Конструктор CellPicker](constructor_cellpicker.htm)») с наименованием CP. Добавим обработчик события SelectionChanged:


CP.SelectionChanged.add(function (sender, args) {


        alert(args.RowCount + "x" + args.ColumnCount);


    });


После выполнения примера при наведении курсора на область компонента, то есть при выборе ячеек, на экран будет выведено сообщение с информацией о количестве строк и столбцов в выделяемой области.


См. также:


[CellPicker](cellpicker.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
