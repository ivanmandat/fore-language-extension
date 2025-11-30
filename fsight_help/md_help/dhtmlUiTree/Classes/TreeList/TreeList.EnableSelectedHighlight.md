# TreeList.EnableSelectedHighlight

TreeList.EnableSelectedHighlight
-


# TreeList.EnableSelectedHighlight


## Синтаксис


EnableSelectedHighlight: Boolean


## Описание


Свойство EnableSelectedHighlight определяет, возможна ли подсветка выделенных вершин дерева.


## Комментарии


Если для свойства установлено значение true, значит доступна подсветка выделенных вершин дерева. По умолчанию установлено значение false.


По умолчанию установлено значение false.


Чтобы подсветка применялась, нужно для свойства [TreeNode.Highlighted](../TreeNode/TreeNode.Highlighted.htm) установить значение true. Цвет и шрифт подсветки определяются в свойствах [TreeList.SelectedHighlightColor](TreeList.SelectedHighlightColor.htm) и [TreeList.SelectedHighlightFont](TreeList.SelectedHighlightFont.htm) соответственно.


## Пример


Для выполнения примера предполагается наличие на странице компонента [TreeList](../../Components/TreeList/TreeList.htm) с наименованием «treeListSett» (см. пример события [TreeList.NodeUnHovered](TreeList.NodeUnHovered.htm)). На странице должны быть элементы DIV с идентификаторами «but1» и «but2». Добавим две кнопки:


var but1 = new PP.Ui.Button(
{
    ParentNode: document.getElementById("but1"),
    Content: "Select by keys",
    Click: function ()
    {
        treeList.expandToKeyNode("n2");//раскрываем дерево до вершины с ключом "n2"
        treeList.setMultiSelect(true);//разрешаем множественную отметку вершин
        treeList.setSelectedByKeys(["n1", "n2"]);//массив ключей выделенных вершин
    }
});
var but2 = new PP.Ui.Button(
{
    ParentNode: document.getElementById("but2"),
    Content: "Highlight",
    Click: function ()
    {
        for (var i = 0; i < treeList.getSelectedNodesCount(); i++)
        {
            treeList.getSelectedNodes()[i].setHighlighted(true)//устанавливаем подсветку для выбранных вершин
        };
        treeList.setSelectedHighlightColor("#00BFFF");//цвет подсветки
        treeList.setSelectedHighlightFont(new PP.Font(//шрифт текста подсвеченных вершин
        {
            IsItalic: true//курсив
        }));
    }
});

После выполнения примера при нажатии на кнопку «Select by keys» дерево будет раскрыто до вершины с ключом n2, будут выделены вершины с ключами n1 и n2. При нажатии на кнопку «Highlight» к выделенным вершинам будет применена подсветка.


См. также:


[TreeList](TreeList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
