# IDimensionModel.AttributeHierarchies

IDimensionModel.AttributeHierarchies
-


# IDimensionModel.AttributeHierarchies


## Синтаксис


AttributeHierarchies: [IDimAttributeHierarchies](../IDimAttributeHierarchies/IDimAttributeHierarchies.htm);


## Описание


Свойство AttributeHierarchies
 возвращает коллекцию альтернативных иерархий атрибутов справочника.


## Комментарии


В коллекцию попадают иерархии, атрибуты которых используются в качестве
 альтернативных иерархий.


## Пример


Для выполнения примера в репозитории предполагается наличие табличного
 справочника с идентификатором «DIM_SEP».


Добавьте ссылки на системные сборки: Dimensions, Metabase.


			Sub UserProc;

Var

    mb: IMetabase;

    dimmodel: IDimensionModel;

    attrhiearchy: IDimAttributeHierarchies;

    count: Integer;

Begin

    // Получим репозиторий

    mb := MetabaseClass.Active;

    // Получим структуру справочника

    dimmodel := mb.ItemById("DIM_SEP").Bind As IDimensionModel;

    // Получим коллекцию альтернативных иерархий атрибутов

    attrhiearchy := dimmodel.AttributeHierarchies;

    // Получим количество альтернативных иерархий

    count := attrhiearchy.Count;

    // Выведем количество в окно консоли

    Debug.WriteLine("Количество альтернативных иерархий = " + count.ToString);

End Sub UserProc;


После выполнения примера в окно консоли выведется количество альтернативных
 иерархий атрибутов указанного справочника.


См. также:


[IDimensionModel](IDimensionModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
