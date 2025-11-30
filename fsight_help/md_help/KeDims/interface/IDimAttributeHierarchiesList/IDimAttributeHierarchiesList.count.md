# IDimAttributeHierarchiesList.Count

IDimAttributeHierarchiesList.Count
-


# IDimAttributeHierarchiesList.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 альтернативных иерархий в списке.


## Комментарии


Для получения альтернативной иерархии используйте [IDimAttributeHierarchiesList.Item](IDimAttributeHierarchiesList.Item.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие табличного справочника
 с идентификатором «DIM_SEP», содержащего два уровня иерархий.


Добавьте ссылки на системные сборки: Dimensions, Metabase.


			Sub UserProc;

Var

    mb: IMetabase;

    dimension: IDimensionModel;

    attribute: IDimAttribute;

    attributes: IDimAttributes;

    hierarchies: IDimAttributeHierarchiesList;

    count: Integer;

    attrhierarchy1: IDimAttributeHierarchy;

    attrhierarchy2: IDimAttributeHierarchy;

    attrhierarchy3: IDimAttributeHierarchy;

    attrhierarchy4: IDimAttributeHierarchy;

    attrhierarchies: IDimAttributeHierarchies;

    id, name, name1: string;

    key: integer;

Begin

    // Получим репозиторий

    mb := MetabaseClass.Active;

    // Получим справочник

    dimension := mb.ItemById("DIM_SEP").Edit As IDimensionModel;

    // Получим атрибуты справочника

    attributes := dimension.Attributes;

    // Получим атрибут «Name»

    attribute := attributes.FindById("NAME");

    // Получим иерархии атрибута

    hierarchies := attribute.Hierarchies;

    // Получим коллекцию иерархий справочника

    attrhierarchies := dimension.AttributeHierarchies;

    // Получим количество иерархий

    count := hierarchies.Count;

    // Выведем в окно консоли количество иерархий атрибута

    Debug.WriteLine("Количество иерархий = " + count.ToString);

    // Получим первую иерархию

    attrhierarchy1 := hierarchies.Item(0);

    //Выведем в окно консоли идентификатор первой иерархии

    id := attrhierarchy1.Id;

    Debug.WriteLine("Идентификатор первой иерархии = " + id);

    // Найдем иерархию по идентификатору

    attrhierarchy2 := hierarchies.FindById("ATTR_HIER_SOURCE10");

        If attrhierarchy2 <> Null Then

            // Выведем в окно консоли ключ иеррахии

                key := attrhierarchy2.Key;

                    Debug.WriteLine("Ключ иерархии = " + key.ToString) Else

                        Debug.WriteLine("Не найдено иерархии с таким идентификатором")

                            End If;

    // Найдем иерархию по ключу

    attrhierarchy3 := hierarchies.FindByKey(3);

        If attrhierarchy3 <> Null Then

            // Выведем в окно консоли наименование атрибута, содержащего иерархию

                name := attrhierarchy3.Name;

                    Debug.WriteLine("Наименование атрибута, содержащего иерархию = " + name) Else

                        Debug.WriteLine("Не найдено иерархии с таким ключом")

                            End If;

    // Найдем иерархию на втором уровне

    attrhierarchy4 := hierarchies.FindByLevel(2);

        If attrhierarchy4 <> Null Then

            // Выведем в окно консоли наименование атрибута, содержащего иерархию

                name1 := attrhierarchy4.Name;

                    Debug.WriteLine("Наименование атрибута, содержащего иерархию = " + name1) Else

                        Debug.WriteLine("Не найдено иерархии на данном уровне")

                            End If;

End Sub UserProc;


После выполнения примера в окно консоли будет выведена следующая информация:


	- количество альтернативных иерархий;


	- идентификатор первой иерархии в списке;


	- ключ иерархии, найденной по идентификатору;


	- наименование атрибута, содержащего найденную иерархию по ключу;


	- наименование атрибута, содержащего иерархию, найденную на втором
	 уровне.


См. также:


[IDimAttributeHierarchiesList](IDimAttributeHierarchiesList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
