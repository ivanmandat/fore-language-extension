# TreeList.sort

TreeList.sort
-


# TreeList.sort


## Синтаксис


sort (column: Number, method: [PP.SortDirection](dhtmlCommon.chm::/Enums/SortDirection.htm),
 property: String, recursive: Boolean);


## Параметры


column. Номер столбца, по которому
 будет осуществляться сортировка;


method. Способ
 сортировки, элемент перечисления [PP.SortDirection](dhtmlCommon.chm::/Enums/SortDirection.htm);


property. Свойство
 [вершины](../TreeNode/TreeNode.htm), по которому будет производиться
 сортировка;


recursive. Определяет,
 будет ли осуществляться сортировка дочерних элементов. По умолчанию установлено
 true, то есть будет.


## Описание


Метод sort осуществляет сортировку
 элементов дерева по столбцу.


## Комментарии


Для работы метода необходимо, чтобы была включена возможность сортировки,
 то есть для свойства [TreeList.EnableSortColumns](TreeList.EnableSortColumns.htm)
 должно быть установлено значение true.


Сортировка происходит при нажатии на заголовок столбца. При сортировке
 по убыванию появляется пиктограмма ![](../../Components/TreeList/treelist17.gif), по
 возрастанию - ![](../../Components/TreeList/treelist18.gif).


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [TreeList](../../Components/TreeList/TreeList.htm) с наименованием
 «treeListSett» (см. «[Пример
 создания компонента TreeList](../../Components/TreeList/TreeList_example.htm)»). Добавим кнопку, при нажатии на которую
 будет осуществляться сортировка дерева по убыванию по первому столбцу:


    var but1 = new PP.Ui.Button(
    {
        ParentNode: document.getElementById("but1"),
        Content: "Sort",
        Click: function ()
        {
            treeListSett.setEnableSortColumns(true);//включаем возможность сортировки по столбцам
            treeListSett.collapseAll();//сворачиваем все вершины дерева
          treeListSett.sort(0, PP.Ui.TreeListSort.desc, 'Checked', true); //сортировка по убыванию по первому столбцу, при сортировке будет учитываться значение совйства TreeNode.Checked: в начале будут вершины с установленным флажком; сортировка с рекурсией: производится и в свернутых дочерних вершинах
            //выводим в консоль параметры сортировки
            console.log("Сортируемая колонка: " + treeListSett.getSortColumn() + "; Метод сортировки: " + treeListSett.getSortMethod() + "; Свойство: " + treeListSett.getSortProperty() + "; С рекурсией: " + treeListSett.getSortRecursive());
        }
    })

После выполнения примера при нажатии на кнопку «Sort» будет включена
 возможность сортировки по столбцам и будет осуществлена сортировка элементов
 первого столбца по убыванию, с рекурсией и с учетом свойства [TreeNode.Checked](../TreeNode/TreeNode.Checked.htm).


В консоль будет выведены параметры сортировки:


Сортируемая колонка: 0; Метод сортировки:
 2; Свойство: Checked; С рекурсией: true


См. также:


[TreeList](TreeList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
