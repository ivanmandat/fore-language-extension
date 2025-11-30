# CellPicker.clearSelection

CellPicker.clearSelection
-


# CellPicker.clearSelection


## Синтаксис


clearSelection();


## Описание


Метод clearSelection отменяет выделение ячеек.


## Пример


Для выполнения примера создадим компонент [CellPicker](../../Components/CellPicker/CellPicker.htm) (см. «[Конструктор CellPicker](constructor_cellpicker.htm)») с наименованием «CP». Добавим обработчик события [SelectionChanged](CellPicker.SelectionChanged.htm):


CP.SelectionChanged.add(function (sender, args) {


        for (var i = 5; i < args.RowCount; i++)


        {


            CP.clearSelection();


        }


    });


После выполнения примера при наведении курсора на ячейки последней (шестой) строки выделение будет исчезать.


См. также:


[CellPicker](cellpicker.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
