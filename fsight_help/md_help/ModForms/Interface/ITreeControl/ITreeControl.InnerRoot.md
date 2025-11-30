# ITreeControl.InnerRoot

ITreeControl.InnerRoot
-


# ITreeControl.InnerRoot


## Синтаксис


InnerRoot: [ITreeListNodeBase](../ITreeListNodeBase/ITreeListNodeBase.htm);


## Описание


Свойство InnerRoot возвращает параметры внутренней корневой вершины дерева.


## Комментарии


Внутренняя корневая вершина является основой всего дерева. Она не отображается в дереве, ее непосредственными дочерними элементами являются элементы самого первого видимого уровня.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1» и компонента TreeList с наименованием «TreeList1».


			    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

    Var

        Root: ITreeListNodeBase;

    Begin

        Root := TreeList1.InnerRoot;

        Debug.WriteLine(Root.Count);

    End Sub Button1OnClick;


При нажатии на кнопку в консоль среды разработки будет выведено количество элементов, расположенных на самом верхнем уровне дерева компонента «TreeList1».


См. также:


[ITreeControl](ITreeControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
