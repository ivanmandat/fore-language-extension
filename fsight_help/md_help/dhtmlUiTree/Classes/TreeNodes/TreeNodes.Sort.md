# TreeNodes.Sort

TreeNodes.Sort
-


# TreeNodes.Sort


## Синтаксис


getSort();


setSort (column, method, property, recursive);


## Параметры


column. Номер колонки;


method. Способ сортировки,
 элемент перечисления [PP.SortDirection](dhtmlCommon.chm::/Enums/SortDirection.htm);


property. Имя свойства, по
 которому будет производиться сортировка (только для первого столбца);


recursive. Если установлено
 true (по умолчанию), сортировка
 будет применяться ко всем дочерним ветвям, их установки будут сброшены,
 если false - дочерние ветви могут
 иметь собственные способы сортировки.


## Описание


Свойство Sort определяет способ
 сортировки для выбранного столбца.


## Комментарии


Сортировка происходит при нажатии на заголовок столбца. При сортировке
 по убыванию появляется пиктограмма ![](../../Components/TreeList/treelist17.gif), по
 возрастанию - ![](../../Components/TreeList/treelist18.gif).


## Пример


Для выполнения примера [создайте
 компонент TreeList](../../Components/TreeList/TreeList_example.htm) с наименованием «treeList». Добавим кнопку, при
 нажатии на которую устанавливается сортировка по возрастанию по второму
 столбцу:


function
 sort()


 {


    treeList.getNodes().setSort(1,
 PP.SortDirection.asc)


 }


var but
 = new PP.Ui.Button(


 {


    ParentNode: "but1",


    Content: "Sort"


 });


but.Click.add(sort);


После выполнения примера на html-странице будет размещена кнопка «Sort»,
 при нажатии на которую будет установлена сортировка по возрастанию по
 значениям второго столбца.


См. также:


[TreeNodes](TreeNodes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
