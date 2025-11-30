# IDynamicInstance.CreateBlocksInstance

IDynamicInstance.CreateBlocksInstance
-


# IDynamicInstance.CreateBlocksInstance


## Синтаксис


CreateBlocksInstance: [IDimBlocksInstance](../IDimBlocksInstance/IDimBlocksInstance.htm);


## Описание


Метод CreateBlocksInstance возвращает
 коллекцию экземпляров блоков справочника.


## Пример


Для выполнения примера предполагается наличие в репозитории табличного
 справочника НСИ с настроенной динамической загрузкой элементов и с идентификатором
 «DYNDIM».


Добавьте ссылки на системные сборки: Dimensions и Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    Dim: IDynamicInstance;

    BlocksInst: IDimBlocksInstance;

Begin

    MB := MetabaseClass.Active;

    Dim := MB.ItemById("DYNDIM").Open(Null) As IDynamicInstance;

    // Получим коллекцию экземпляров блоков справочника

    BlocksInst := Dim.CreateBlocksInstance;

    // Выведем размер коллекции

    Debug.WriteLine("Блоков в справочнике: " + BlocksInst.Count.ToString);

End Sub UserProc;


В результате выполнения примера в окно консоли будет выведен размер
 коллекции блоков справочника.


См. также:


[IDynamicInstance](IDynamicInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
