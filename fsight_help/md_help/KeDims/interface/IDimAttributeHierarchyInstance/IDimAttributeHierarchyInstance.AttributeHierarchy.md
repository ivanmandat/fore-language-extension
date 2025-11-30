# IDimAttributeHierarchyInstance.AttributeHierarchy

IDimAttributeHierarchyInstance.AttributeHierarchy
-


# IDimAttributeHierarchyInstance.AttributeHierarchy


## Синтаксис


AttributeHierarchy: [IDimAttributeHierarchy](../IDimAttributeHierarchy/IDimAttributeHierarchy.htm);


## Описание


Свойство AttributeHierarchy
 возвращает данные альтернативной иерархии атрибута.


## Комментарии


Для получения коллекции данных альтернативной иерархии справочника используйте
 [IDimInstance.AttributeHierarchies](../IDimInstance/IDimInstance.AttributeHierarchies.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие табличного справочника
 с идентификатором «DIM_SEP», альтернативная иерархия которого состоит
 из 2-х уровней.


Добавьте ссылки на системные сборки: Dimensions, Metabase.


			Sub UserProc;

Var

    mb: IMetabase;

    diminstance: IDimInstance;

    attrhierarchy: IDimAttributeHierarchy;

    attrhierarchies: IDimAttributeHierarchiesInstance;

    attrhierinstance: IDimAttributeHierarchyInstance;

    attrhierinstance1: IDimAttributeHierarchyInstance;

    id, name: string;

Begin

    // Получим репозиторий

    mb := MetabaseClass.Active;

    // Получим данные справочника

    diminstance := mb.ItemById("DIM_SEP").Open(Null) As IDimInstance;

    // Получим данные альтернативной иерархии

    attrhierinstance := diminstance.AttributeHierarchies.HierarchyItem(0);

    // Получим альтернативную иерархию

    attrhierarchy := attrhierinstance.AttributeHierarchy;

    // Получим идентификатор альтернативной иерархии и выведем в окно консоли

    id := attrhierarchy.Id;

    Debug.WriteLine("Идентификатор альтернативной иерархии = " + id);

    // Получим данные коллекции альтернативных иерархий

    attrhierarchies := diminstance.AttributeHierarchies;

    // Получим альтернативную иерархию по уровню атрибута

    attrhierinstance1 := attrhierarchies.FindByAttributeLevel(2, 2);

        If attrhierinstance1 <> Null Then

            // Выведем наименование альтернативной иерархии в окно консоли

                name := attrhierinstance1.Name;

                    Debug.WriteLine("Наименование альтернативной иерархии = " + name) Else

                        Debug.WriteLine("Альтернативная иерархия не найдена = " + name)

                            End If;

End Sub UserProc;


После выполнения примера в окно консоли выведется идентификатор и наименование
 полученных альтернативных иерархий.


См. также:


[IDimAttributeHierarchyInstance](IDimAttributeHierarchyInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
