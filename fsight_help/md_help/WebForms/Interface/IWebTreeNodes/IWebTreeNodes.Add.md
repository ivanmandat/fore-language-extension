# IWebTreeNodes.Add

IWebTreeNodes.Add
-


# IWebTreeNodes.Add


## Синтаксис


Add(Node: [IWebTreeNode](../IWebTreeNode/IWebTreeNode.htm);
 Text: String; Mode: [WebInsertMode](../../Enums/WebInsertMode.htm)):
 [IWebTreeNode](../IWebTreeNode/IWebTreeNode.htm);


## Параметры


Node. Вершина, на уровне которой
 будет создана новая вершина.


Text. Текст вершины.


Mode. Режим вставки вершины.


## Описание


Метод Add создаёт в дереве новую
 вершину с заданным текстом.


## Комментарии


Параметр Node является обязательным.
 Новая вершина добавляется на том же уровне, на котором расположена вершина
 Node.


## Пример


Для выполнения примера в репозитории предполагается наличие веб-формы
 и расположенного на ней компонента TreeCombo с наименованием TreeCombo1.
 Указанная процедура установлена в качестве обработчика события OnShow
 для веб-формы.


	Sub TESTWebFormOnShow;

	Var

	    Nodes: IWebTreeNodes;

	    Node: IWebTreeNode;

	Begin

	    TreeCombo1.BeginUpdate;

	    Nodes := TreeCombo1.Nodes;

	    Nodes.Clear;

	    Node := Nodes.AddToRoot("Root");

	    Nodes.AddChild(Node, "First");

	    Nodes.AddChild(Node, "Two");

	    Nodes.Add(Nodes.FirstNode, "---", WebInsertMode.InsertBefore);

	    Nodes.FirstNode.Selected := True;

	    TreeCombo1.EndUpdate;

	End Sub TESTWebFormOnShow;


При запуске веб-формы в компоненте TreeCombo1 будет сформирован список
 элементов и выбран первый элемент.


См. также:


[IWebTreeNodes](IWebTreeNodes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
