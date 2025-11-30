# IMsScenarioTreeEntry.MoveToParent

IMsScenarioTreeEntry.MoveToParent
-


# IMsScenarioTreeEntry.MoveToParent


## Синтаксис


MoveToParent(Parent: [IMsScenarioTreeEntries](../IMsScenarioTreeEntries/IMsScenarioTreeEntries.htm);
 Index: Integer);


## Параметры


Parent. Родительское дерево
 сценариев;


Index. Позиция в которую необходимо
 переместить элемент.


## Описание


Метод MoveToParent
 осуществляет перемещение элемента дерева сценариев.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 моделирования с идентификатором OBJ_CONT.


			Sub UserProc;

Var

    MB: IMetabase;

    ModelSpace: IMsModelSpace;

    Tree: IMsScenarioTreeEntries;

    TreeEntries: IMsScenarioTreeEntry;

Begin

    Mb := MetabaseClass.Active;

    ModelSpace := Mb.ItemById("OBJ_CONT").Edit As IMsModelSpace;

    Tree := ModelSpace.ScenarioTree;

    TreeEntries := Tree.Item(Tree.Count - 1);

    TreeEntries.MoveToParent(Tree, 0);

    (ModelSpace As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера последний элемент дерева сценариев будет перемещен
 в начальную позицию.


См. также:


[IMsScenarioTreeEntry](IMsScenarioTreeEntry.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
