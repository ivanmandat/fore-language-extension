# IDimAttributeHierarchies.AddHierarchy

IDimAttributeHierarchies.AddHierarchy
-


# IDimAttributeHierarchies.AddHierarchy


## Синтаксис


AddHierarchy(Dimension: [IDimensionModel](../IDimensionModel/IDimensionModel.htm);

             Attribute:
 [IDimAttribute](../IDimAttribute/IDimAttribute.htm);

            [LevelKey:
 Integer = -1]): [IDimAttributeHierarchy](../IDimAttributeHierarchy/IDimAttributeHierarchy.htm);


## Параметры


Dimension. Структура справочника;


Attribute. Атрибут справочника;


LevelKey. Уровень иерархии
 атрибута.


## Описание


Метод AddHierarchy добавляет
 альтернативную иерархию на основе заданного атрибута.


## Комментарии


Если в параметр LevelKey передать
 значение «-1», то альтернативная иерархия добавится в заданный атрибут,
 независимо от уровня.


## Пример


Для выполнения примера в репозитории необходимо наличие табличного справочника
 с идентификатором «DIM_SEP», содержащего атрибут с идентификатором «NAME».


Добавьте ссылки на системные сборки: Dimensions, Metabase.


			Sub UserProc;

Var

    mb: IMetabase;

    dimension: IDimensionModel;

    attribute: IDimAttribute;

    attributes: IDimAttributes;

    attrhierarchy: IDimAttributeHierarchy;

    attrhierarchy1: IDimAttributeHierarchy;

    attrhierarchies: IDimAttributeHierarchies;

    attributehierarchieslist: IDimAttributeHierarchiesList;

    count: Integer;

    id: String;

Begin

    // Получим репозиторий

    mb := MetabaseClass.Active;

    // Получим справочник

    dimension := mb.ItemById("DIM_SEP").Edit As IDimensionModel;

    // Получим коллекцию атрибутов справочника

    attributes := dimension.Attributes;

    // Получим атрибут «Name»

    attribute := attributes.FindById("NAME");

    // Получим коллекцию иерархий справочника

    attrhierarchies := dimension.AttributeHierarchies;

    // Добавим в коллекцию новую иерархию

    attrhierarchy := attrhierarchies.AddHierarchy(dimension, attribute, 1);

    // Найдем и выведем в окно консоли количество альтернативных иерархий

    // в списке по ключу атрибута

    attributehierarchieslist := attrhierarchies.FindByAttribute(3);

        If attributehierarchieslist <> Null Then

            count := attributehierarchieslist.Count;

                Debug.WriteLine

                    ("Количество альтернативных иерархий в списке  = " + count.ToString) Else

                        Debug.WriteLine("Альтернативные иерархии не найдены в списке")

                            End If;

    // Найдем и выведем в окно консоли идентификатор альтернативной иерархии

    // найденной по уровню атрибута

    attrhierarchy1 := attrhierarchies.FindByAttributeLevel(2, 2);

        If attrhierarchy1 <> Null Then

            id := attrhierarchy1.Id;

                Debug.WriteLine("Идентификатор иерархии = " + id) Else

                    Debug.WriteLine

                        ("Не найдено альтернативной иерархии по заданным параметрам = ")

                            End If;

    // Сохраним изменения

    (dimension As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в заданный атрибут добавится альтернативная
 иерархия, в окно консоли выведется количество альтернативных иерархий
 и идентификатор альтернативной иерархии.


См. также:


[IDimAttributeHierarchies](IDimAttributeHierarchies.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
