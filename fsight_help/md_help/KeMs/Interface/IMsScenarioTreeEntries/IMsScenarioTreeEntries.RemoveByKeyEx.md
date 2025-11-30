# IMsScenarioTreeEntries.RemoveByKeyEx

IMsScenarioTreeEntries.RemoveByKeyEx
-


# IMsScenarioTreeEntries.RemoveByKeyEx


## Синтаксис


RemoveByKeyEx(EntryKey: Integer; Recursive: Boolean):
 Boolean;


## Параметры


EntryKey. Ключ элемента, который
 необходимо удалить;


Recursive. Определяет, выполнять
 ли рекурсивное удаление дочерних элементов. Допустимые значения:


	- True. Выполняется рекурсивное
	 удаление дочерних элементов, включая элементы, расположенные в дочерних
	 папках;


	- False. Удаляется только
	 элемент, ключ которого указан в параметре EntryKey.


## Описание


Метод RemoveByKeyEx удаляет
 из дерева сценариев элемент с возможностью рекурсивного удаления дочерних
 элементов.


## Комментарии


Если удаление выполнено успешно, то метод возвращает значение True, в противном случае - False.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором «MS». В данном контейнере моделирования
 должны присутствовать сценарии.


Добавьте ссылки на системные сборки: Metabase, Ms.


			Sub UserProc;

Var

    MB: IMetabase;

    MsObj: IMetabaseObject;

    ModelSpace: IMsModelSpace;

    Tree: IMsScenarioTreeEntries;

    Element: IMsScenarioTreeEntry;

    res: Boolean;

Begin

    // Получаем контейнер моделирования

    MB := MetabaseClass.Active;

    MsObj := MB.ItemById("MS").Edit;

    ModelSpace := MsObj As IMsModelSpace;

    // Получаем дерево сценариев

    Tree := ModelSpace.ScenarioTree;

    // Получаем первый элемент дерева

    Element := Tree.Item(0);

    // Выполняем рекурсивное удаление

    res := Tree.RemoveByKeyEx(Element.Key, True);

    // Выводим результаты удаления в окно консоли

    Debug.WriteLine("Удаление прошло успешно: " + res.ToString);

    // Сохраняем изменения

    MsObj.Save;

End Sub UserProc;


В результате выполнения примера будет выполнено рекурсивное удаление
 первого элемента дерева сценариев. Результаты удаления будут выведены
 в окно консоли.


См. также:


[IMsScenarioTreeEntries](IMsScenarioTreeEntries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
