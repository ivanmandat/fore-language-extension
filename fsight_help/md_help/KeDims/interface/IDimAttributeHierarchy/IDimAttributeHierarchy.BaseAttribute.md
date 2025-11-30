# IDimAttributeHierarchy.BaseAttribute

IDimAttributeHierarchy.BaseAttribute
-


# IDimAttributeHierarchy.BaseAttribute


## Синтаксис


BaseAttribute: [IDimAttribute](../IDimAttribute/IDimAttribute.htm);


## Описание


Свойство BaseAttribute определяет
 атрибут-оригинал, на уникальных значениях которого построена иерархия.


## Комментарии


Для определения количества уровней альтернативной иерархии атрибута-оригинала
 используйте [IDimAttributeHierarchy.Level](IDimAttributeHierarchy.Level.htm).


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

    attrhierarchy: IDimAttributeHierarchy;

    attrhierarchies: IDimAttributeHierarchies;

    dimindex: IDimIndex;

    id: string;

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

    // Найдем альтернативную иерархию по уровню

    attrhierarchy := attrhierarchies.FindByAttributeLevel(2, 2);

    // Зададим атрибут-оригинал, на значениях которого построена иерархия

    attrhierarchy.BaseAttribute := attribute;

    // Установим уровень иерархии

    attrhierarchy.Level := 2;

    // Получим индекс атрибута

    If attrhierarchy.AttributeIndex <> Null Then

        dimindex := attrhierarchy.AttributeIndex;

        id := dimindex.Id;

        Debug.WriteLine("Идентификатор индекса атрибута = " + id)

    Else

        Debug.WriteLine("В альтернативной иерархии не содержится индекс атрибута" + id)

    End If;

    // Сохраним изменения

    (dimension As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в альтернативной иерархии:


	- будет задан атрибут-оригинал, на значениях которого построена
	 иерархия;


	- будет задан уровень иерархии атрибута-оригинала;


	- в окно консоли выведется идентификатор индекса атрибута, если
	 он содержится в альтернативной иерархии.


См. также:


[IDimAttributeHierarchy](IDimAttributeHierarchy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
