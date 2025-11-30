# IMbElementDependentsDatabase.Delete

IMbElementDependentsDatabase.Delete
-


# IMbElementDependentsDatabase.Delete


## Синтаксис


Delete(Where: [IMbElementDependentTemplate](../IMbElementDependentTemplate/IMbElementDependentTemplate.htm));


## Параметры


Where. Шаблон, в соответствии
 с которым будет осуществлено удаление.


## Описание


Метод Delete удаляет зависимости,
 соответствующие указанному шаблону.


## Комментарии


Для проверки наличия зависимостей элементов справочников НСИ от объектов
 репозитория используйте метод [IMbElementDependentsDatabase.Exists](IMbElementDependentsDatabase.Exists.htm).


## Пример


Для выполнения примера предполагается наличие справочников НСИ с идентификаторами
 «DICT» и «DICT1».


Добавьте ссылки на системные сборки Metabase, Rds, Ui.


			Sub UserProc;

Var

    MB: IMetabase;

    Obj, Dictionary: IMetabaseObjectDescriptor;

    RdsDictIns: IRdsDictionaryInstance;

    Elements: IRdsDictionaryElements;

    Template: IMbElementDependentTemplate;

    ObjKeys: Array[2] Of Integer;

    DictKey: Integer;

    ElemDependDB: IMbElementDependentsDatabase;

    b: Boolean;

Begin

    MB := MetabaseClass.Active;

    Obj := MB.ItemById("DICT1");

    Dictionary := MB.ItemById("DICT");

    RdsDictIns := Dictionary.Open(Null) As IRdsDictionaryInstance;

    Elements := RdsDictIns.Elements;

    // Настройки объекта:

    Obj := Obj.EditDescriptor;

    Obj.ElementDependenciesTrackingType := MbElementDependenciesTrackingType.Dependecies;

    Obj.SaveDescriptor;

    // Шаблон:

    DictKey := Dictionary.Key;

    Template := New MbElementDependentTemplateClass.CreateByDictionary(DictKey);

    Template.ObjectKey := Dictionary.Key;

    ObjKeys[0] := Elements.Element(1);

    ObjKeys[1] := Elements.Element(2);

    // Указываем ключи элементов

    Template.ObjectKeys := ObjKeys;

    // Работа с зависимостями:

    ElemDependDB := Mb.ElementDependentsDatabase;

    If ElemDependDB.Exists(Template) Then

        WinApplication.YesNoCancelBox("Зависимости существуют. Удалить зависимости от элемента?", b);

        If b Then

            ElemDependDB.Delete(Template);

        End If;

    End If;

    Debug.WriteLine("Количество ключей объектов репозитория: "

        + Template.ObjectKeysCount.ToString);

End Sub UserProc;


В результате выполнения примера в окно консоли будет выведена информация
 о количестве ключей объектов репозитория. А также если существуют зависимости,
 соответствующие заданному шаблону, будет предложено их удалить. При нажатии
 кнопки «ОК» зависимости будут удалены.


См. также:


[IMbElementDependentsDatabase](IMbElementDependentsDatabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
