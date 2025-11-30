# MbElementDependencyTemplateClass.CreateByDictionary

MbElementDependencyTemplateClass.CreateByDictionary
-


# MbElementDependencyTemplateClass.CreateByDictionary


## Синтаксис


CreateByDictionary(DictionaryKey: Integer);


## Параметры


DictionaryKey. Ключ справочника
 НСИ.


## Описание


Конструктор CreateByDictionary
 создает новый шаблон зависимостей в соответствии с указанными параметрами
 справочника НСИ.


## Комментарии


Для получения ключа справочника используйте свойство [IMetabaseObjectDescriptor.Key](../../Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Key.htm),
 либо метод [IMetabase.GetObjectKeyById](../../Interface/IMetabase/IMetabase.GetObjectKeyById.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором «Obj_1» и справочника НСИ с идентификатором «Country».
 Для объекта включено отслеживание зависимостей от элементов справочника
 НСИ. Справочник хранится в репозитории НСИ с идентификатором «RDS».


			Sub UserProc;

Var

    MB: IMetabase;

    Obj, Dictionary: IMetabaseObjectDescriptor;

    Elements: IRdsDictionaryElements;

    Depends: IMbElementDependencies;

    Template: IMbElementDependencyTemplate;

    ElemKeys: Array Of Integer;

Begin

    MB := MetabaseClass.Active;

    Obj := MB.ItemById("Obj_1");

    Dictionary := MB.ItemByIdNamespace("Country", MB.ItemById("RDS").Key);

    Elements := (Dictionary.Open(Null) As IRdsDictionaryInstance).Elements;

    Template := New MbElementDependencyTemplateClass.CreateByDictionary(Dictionary.Key);

    ElemKeys := New Integer[2];

    ElemKeys[0] := Elements.Element(1);

    ElemKeys[1] := Elements.Element(2);

    Template.ElementKeys := ElemKeys;

    //Коллекция зависимостей объекта

    Depends := Obj.ElementDependencies;

    Depends.Add(Template);

    Mb.ElementDependenciesDatabase.Update(Depends);

End Sub UserProc;


При выполнении примера будет получена коллекция зависимостей объекта
 от элементов справочника НСИ. В список зависимостей будут добавлены две
 зависимости от двух элементов справочника. Список зависимостей будет сохранен
 в базу репозитория.


См. также:


[MbElementDependencyTemplateClass](MbElementDependencyTemplateClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
