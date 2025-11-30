# ITreeList.NodesFilter

ITreeList.NodesFilter
-


# ITreeList.NodesFilter


## Синтаксис


NodesFilter (Filter: String);


## Параметры


Filter. Искомая строка.


## Описание


Метод NodesFilter определяет
 текст, по которому будут фильтроваться вершины.


## Комментарии


Для определения режима построения дерева отфильтрованных элементов используйте
 свойство [ITreeList.FilterStyle](ITreeList.FilterStyle.htm).


## Пример


Для выполнения примера разместите на форме компоненты Button и TreeList
 с идентификаторами Button1 и TreeList1 соответственно.


Добавьте ссылки на системные сборки: ExtCtrls, Forms.


Пример является обработчиком события OnClick для компонента Button1.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    TreeList1.FilterStyle := TreeComboFilterStyle.ShowNearestParent;

	    TreeList1.NodesFilter("Пункт");

	End Sub Button1OnClick;


После нажатия на кнопку в компоненте TreeList1 будут отображены найденные
 элементы с ближайшим родительским элементом, содержащие текст «Пункт».


См. также:


[ITreeList](ITreeList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
