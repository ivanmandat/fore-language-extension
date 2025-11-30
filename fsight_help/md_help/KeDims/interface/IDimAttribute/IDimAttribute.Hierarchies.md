# IDimAttribute.Hierarchies

IDimAttribute.Hierarchies
-


# IDimAttribute.Hierarchies


## Синтаксис


Hierarchies: [IDimAttributeHierarchiesList](../IDimAttributeHierarchiesList/IDimAttributeHierarchiesList.htm);


## Описание


Свойство Hierarchies возвращает
 коллекцию иерархий атрибута.


## Комментарии


Для определения, используется ли атрибут в качестве альтернативной иерархии,
 используйте [IDimAttribute.HasHierarchy](IDimAttribute.HasHierarchy.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие табличного
 справочника с идентификатором «DIM_SEP», содержащего атрибут с идентификатором
 «NAME».


Добавьте ссылки на системные сборки: Dimensions, Metabase.


			Sub UserProc;

Var

    mb: IMetabase;

    dimension: IDimensionModel;

    attribute: IDimAttribute;

    attributes: IDimAttributes;

    hierarchies: IDimAttributeHierarchiesList;

    count: Integer;

Begin

    // Получим репозиторий

    mb := MetabaseClass.Active;

    // Получим справочник

    dimension := mb.ItemById("DIM_SEP").Edit As IDimensionModel;

    // Получим атрибуты справочника

    attributes := dimension.Attributes;

    // Получим атрибут «Name»

    attribute := attributes.FindById("NAME");

    // Проверим, используется ли
 атрибут в качестве альтернативной иерархии

    If attribute.HasHierarchy Then

        Debug.WriteLine("Атрибут используется
 в качестве альтернативной иерархии")

            Else

        Debug.WriteLine("Атрибут не
 используется в качестве альтернативной иерархии");

    End If;

    // Получим иерархии атрибута

    hierarchies := attribute.Hierarchies;

    // Получим количество иерархий

    count := hierarchies.Count;

    // Выведем количество
 иерархий в окно консоли

    Debug.WriteLine("Количество
 иерархий = " + count.ToString);

End Sub UserProc;


После выполнения примера в окно консоли выведется информация о том,
 используется ли атрибут в качестве альтернативной иерархии, а также выведется
 количество его альтернативных иерархий.


См. также:


[IDimAttribute](IDimAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
