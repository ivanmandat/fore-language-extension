# TreeList.beginUpdate

TreeList.beginUpdate
-


# TreeList.beginUpdate


## Синтаксис


beginUpdate ();


## Описание


Метод beginUpdate отключает
 перерисовку дерева, пока не будет вызван [endUpdate](TreeList.endUpdate.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [TreeList](../../Components/TreeList/TreeList.htm) с наименованием
 «treeListSett» (см. пример события [TreeList.NodeUnHovered](TreeList.NodeUnHovered.htm)).
 На странице должны быть элементы DIV с идентификаторами «but1» и «but2».
 Добавим две кнопки:


var but1 = new PP.Ui.Button(
{
    ParentNode: document.getElementById("but1"),
    Content: "begin update",
    Click: function ()
    {
        treeListSett.beginUpdate();//компонент будет перерисован после нажатия на кнопку «end update»
        treeListSett.expandAll();//раскрытие всех вершин
    }
});
var but2 = new PP.Ui.Button(
{
    ParentNode: document.getElementById("but2"),
    Content: "end update",
    Click: function ()
    {
     treeListSett.endUpdate();//перерисовка компонента: раскрытие всех вершин
    }
});
После выполнения примера при нажатии на кнопку «begin update» изменений
 не произойдет. После нажатия на кнопку «end update» будут развернуты все
 вершины дерева.


См. также:


[TreeList](TreeList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
