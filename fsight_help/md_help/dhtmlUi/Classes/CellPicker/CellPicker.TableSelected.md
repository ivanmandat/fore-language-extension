# CellPicker.TableSelected

CellPicker.TableSelected
-


# CellPicker.TableSelected


## Синтаксис


TableSelected: function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие TableSelected наступает после выбора количества строк и столбцов в таблице.


## Пример


Для выполнения примера создайте компонент [CellPicker](../../Components/CellPicker/CellPicker.htm) (см. «[Конструктор CellPicker](constructor_cellpicker.htm)») с наименованием «CP». Добавим обработчик события TableSelected:


CP.TableSelected.add(function (sender, args) {


        alert(args.RowCount + "x" + args.ColumnCount);


    });


После выбора количества строк и столбцов в таблице, то есть после выделения ячеек и при щелчке мыши, на экран будет выведено сообщение с информацией о количестве строк и столбцов в таблице.


См. также:


[CellPicker](cellpicker.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
