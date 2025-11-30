# TreeList.selectLevel

TreeList.selectLevel
-


# TreeList.selectLevel


## Синтаксис


selectLevel (level, fireEvents)


## Параметры


level. Номер уровня (нумерация с 0) или вершина, находящаяся на уровне, который необходимо выделить;


fireEvents. Определяет, будет ли при вызове метода наступать событие [TreeList.SelectionChanging](TreeList.SelectionChanging.htm).


## Описание


Метод selectLevel выбирает все вершины указанного уровня.


## Пример


Для выполнения примера предполагается наличие на странице компонента [TreeList](../../Components/TreeList/TreeList.htm) с наименованием «treeLisSett» (см. «[Пример создания компонента TreeList](../../Components/TreeList/TreeList_example.htm)»). Добавьте элементы DIV с идентификаторами «but1» и «but2». Добавим кнопки, при нажатии на которые устанавливается и снимается отметка с указанного уровня:


    var but1 = new PP.Ui.Button(
    {
        ParentNode: document.getElementById("but1"),
        Content: "Select level",
        Click: function ()
        {
            //разрешаем множественную отметку
            treeLisSett.setMultiSelect(true);
            treeList.selectLevel(treeList.getNodeByIndex(2))
        }
    });
    var but2 = new PP.Ui.Button(
    {
        ParentNode: document.getElementById("but2"),
        Content: "Deselect level",
        Click: function ()
        {
            //разрешаем снятие отметки со всех вершин дерева
            treeLisSett.setEmptySelection(true);
            treeLisSett.deSelectLevel(treeList.getNodeByIndex(2))
        }
    });

После выполнения пример при нажатии на кнопку «Select level» будет установлена отметка для всех вершин дерева, находящихся на том же уровне, что и вершина с индексом 2.


При нажатии на кнопку «Deselect level» будет снята отметка со всех элементов выделенного уровня.


Примечание. Если для свойства EmptySelection не установить значение true, то при снятии отметки со всего уровня будет оставаться один выделенный элемент - последний.


См. также:


[TreeList](TreeList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
