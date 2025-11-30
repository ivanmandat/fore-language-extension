# IDynamicInstance.CreateBlocks

IDynamicInstance.CreateBlocks
-


# IDynamicInstance.CreateBlocks


## Синтаксис


CreateBlocks: [IDimBlocks](../IDimBlocks/IDimBlocks.htm)


## Описание


Метод CreateBlocks возвращает
 коллекцию блоков справочника.


## Пример


Для выполнения примера предполагается наличие в репозитории табличного
 справочника НСИ с настроенной динамической загрузкой элементов и с идентификатором
 «DYNDIM».


Добавьте ссылки на системные сборки: Dimensions и Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    Dim: IDynamicInstance;

    Blocks: IDimBlocks;

Begin

    MB := MetabaseClass.Active;

    Dim := MB.ItemById("DYNDIM").Open(Null) As IDynamicInstance;

    // Получим коллекцию блоков справочника

    Blocks := Dim.CreateBlocks;

    // Выведем размер коллекции

    Debug.WriteLine("Блоков в справочнике: " + Blocks.Count.ToString);

End Sub UserProc;


В результате выполнения примера в окно консоли будет выведен размер
 коллекции блоков справочника.


См. также:


[IDynamicInstance](IDynamicInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
