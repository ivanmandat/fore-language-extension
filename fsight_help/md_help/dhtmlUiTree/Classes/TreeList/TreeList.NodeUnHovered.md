# TreeList.NodeUnHovered

TreeList.NodeUnHovered
-


# TreeList.NodeUnHovered


## Синтаксис


NodeUnHovered: function(sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии. Доступный аргумент: Node
 - вершина, с которой был снят признак того, что на нее наведен курсор.


## Описание


Событие NodeUnHovered наступает,
 когда с вершины снимается признак того, что на нее наведен курсор.


## Комментарии


При наведении курсора на вершину генерируется событие [TreeList.NodeHovered](TreeList.NodeHovered.htm).


## Пример


Для выполнения примера в теге HEAD подключите ссылки на библиотеку компонентов
 PP.js и таблицы визуальных стилей PP.css. Добавьте в теге BODY элемент
 DIV с идентификатором «treelist2». На одном уровне со страницей должен
 содержаться файл с наименованием «treeImagesIcons.png».


var treeList = new PP.Ui.TreeList(
{
    ParentNode: document.getElementById("treelist2"),
    Width: 300,
    Height: 100,
    ImageList: new PP.ImageList(
    {
        Source: "treeImagesIcons.png",
        IconHeight: 20,
        IconWidth: 18
    }),
    Columns: [
    {
        Caption: "Country",
        Width: 100,
        MinWidth: 10
    }],
    Nodes: [
    {
        Text: "Europe",
        Key: "n1",
        Columns: [],
        Nodes: [
        {
            Text: "France",
            Key: "n2",
            Nodes: [
            {
                Text: "Paris",
                Key: "n3"
            }]
        }]
    }]
});
treeList.NodeUnHovered.add(function (sender, args)
{
    treeList.getNodeByKey("n1").expand();
    treeList.getNodeByKey("n1").setImageIndex(1);
    treeList.getNodeByKey("n2").toggle()
    console.log(args)
});

После выполнения примера на html-странице будет размещен компонент [TreeList](../../Components/TreeList/TreeList.htm) со столбцом
 с заголовком «Country» и тремя вершинами. При наведении курсора на одну
 из вершин и перевода курсора на другую вершину пиктограмма вершины с наименованием
 «Europe» изменится , будет раскрыт список дочерних элементов вершины.
 Для вершины «France» будет выполняться метод [toogle](../TreeNode/TreeNode.toggle.htm),
 то есть при нажатии на пиктограмму первой вершины будет сворачиваться/разворачиваться
 список элементов вершины «France».


 См. также:


[TreeList](TreeList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
