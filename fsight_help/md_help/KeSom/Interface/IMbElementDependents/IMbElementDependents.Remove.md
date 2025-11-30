# IMbElementDependents.Remove

IMbElementDependents.Remove
-


# IMbElementDependents.Remove


## Синтаксис


Remove(Index: Integer): Boolean;


## Параметры


Index. Индекс записи зависимости
 элементов справочника НСИ от объектов репозитория.


## Описание


Метод Remove удаляет запись
 зависимостей элементов справочника НСИ от объектов репозитория по её индексу.


## Комментарии


Метод возвращает значение True,
 если удаление прошло успешно.


Для удаления всех записей зависимостей элементов справочника НСИ от
 объектов репозитория используйте метод [IMbElementDependents.Clear](IMbElementDependents.Clear.htm).


## Пример


Для выполнения примера предполагается наличие справочников НСИ с идентификаторами
 «DICT» и «DICT1».


Добавьте ссылки на системные сборки Metabase, Rds.


			Sub UserProc;

Var

    MB: IMetabase;

    Obj, Dictionary: IMetabaseObjectDescriptor;

    RdsDictIns: IRdsDictionaryInstance;

    Elements: IRdsDictionaryElements;

    Depends: IMbElementDependents;

    Template, Value: IMbElementDependentTemplate;

    ElemKeys: Array[2] Of Integer;

    ObjKey, DictKey, ElemKey: Integer;

    ElemDependDB: IMbElementDependentsDatabase;

Begin

    MB := MetabaseClass.Active;

    Obj := MB.ItemById("DICT1");

    Dictionary := MB.ItemById("DICT");

    RdsDictIns := Dictionary.Open(Null) As IRdsDictionaryInstance;

    Elements := RdsDictIns.Elements;

    // Настройки объекта:

    Obj := Obj.EditDescriptor;

    Obj.ElementDependenciesTrackingType := MbElementDependenciesTrackingType.Dependecies;

    Obj.ElementDependents;

    Obj.SaveDescriptor;

    /// Настройки:

    DictKey := Dictionary.Key;

    ObjKey := Obj.Key;

    // Шаблон:

    Template := New MbElementDependentTemplateClass.CreateByDictionary(DictKey);

    Template.DictionaryKey := Dictionary.Key;

    ElemKeys[0] := Elements.Element(1);

    ElemKeys[1] := Elements.Element(2);

    //Указываем ключи элементов

    Template.ElementKeys := ElemKeys;

    // Коллекция зависимостей:

    ElemDependDB := Mb.ElementDependentsDatabase;

    Depends := ElemDependDB.Select_(Template);

    Value := New MbElementDependentTemplateClass.Create(ObjKey, DictKey, ElemKey);

    Depends.Add(Value);

    Depends.Remove(0);

    ElemDependDB.Update(Depends);

End Sub UserProc;


В результате выполнения примера будет удалена первая запись зависимостей
 элементов справочника НСИ от объектов репозитория.


См. также:


[IMbElementDependents](IMbElementDependents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
