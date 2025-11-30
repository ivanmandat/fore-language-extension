# IMbElementDependent.Dictionary

IMbElementDependent.Dictionary
-


# IMbElementDependent.Dictionary


## Синтаксис


Dictionary: [IMetabaseObjectDescriptor](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Описание


Свойство Dictionary возвращает
 справочник НСИ, элементы которого зависят от объекта репозитория.


## Комментарии


Для определения объекта репозитория, от которого зависит элемент справочника
 НСИ, используйте свойство [IMbElementDependent.Object](IMbElementDependent.Object.htm).


## Пример


Для выполнения примера предполагается наличие справочников НСИ с идентификаторами
 «DICT» и «DICT1».


Добавьте ссылки на системные сборки Metabase, Rds.


			Sub UserProc;

Var

    MB: IMetabase;

    Obj, Dictionary, Dict: IMetabaseObjectDescriptor;

    RdsDictIns: IRdsDictionaryInstance;

    Elements: IRdsDictionaryElements;

    Depends: IMbElementDependents;

    Depend: IMbElementDependent;

    Template, Value: IMbElementDependentTemplate;

    ElemKeys: Array[2] Of Integer;

    ObjKey, DictKey, ElemKey: Integer;

    ElemDependDB: IMbElementDependentsDatabase;

    i: Integer;

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

    Depends.Modified := True;

    ElemDependDB.Update(Depends);

    // Вывод информации:

    Debug.WriteLine("Параметры текущего репозитория: " + ElemDependDB.Metabase.Name);

    If ElemDependDB.Active = True Then

            Debug.WriteLine("Для объектов репозитория доступно сохранение зависимостей");

        Else

            Debug.WriteLine("Для объектов репозитория не доступно сохранение зависимостей");

    End If;

    Debug.WriteLine("Настроены зависимости для объектов:");

    For i := 0 To Depends.Count - 1 Do

        Depend := Depends.Item(i);

        Dict := Depend.Dictionary;

        Debug.WriteLine("    " + Dict.Name + ", идентификатор: " + Dict.Id);

        Obj := Depend.Object;

        Debug.WriteLine("    " + Obj.Name + ", идентификатор: " + Obj.Id);

    End For;

    Debug.WriteLine("Количество ключей элементов справочника НСИ: "

        + Template.ElementKeysCount.ToString);

End Sub UserProc;


В результате выполнения примера в окно консоли будет выведена информация:


	- параметры текущего репозитория;


	- доступно ли сохранение зависимостей;


	- список объектов с настроенными зависимостями.


См. также:


[IMbElementDependent](IMbElementDependent.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
