# MbElementDependencyTemplateClass.CreateByElement

MbElementDependencyTemplateClass.CreateByElement
-


# MbElementDependencyTemplateClass.CreateByElement


## Синтаксис


CreateByElement(DictionaryKey: Integer; ElementKey:
 Integer);


## Параметры


DictionaryKey. Ключ справочника
 НСИ, содержащего элемент ElementKey.


ElementKey. Ключ элемента справочника
 НСИ, от которого зависят объекты.


## Описание


Конструктор CreateByElement
 создает новый шаблон зависимостей в соответствии с указанными параметрами
 справочника НСИ и элемента справочника.


## Комментарии


Для получения ключа спправочника используйте свойство [IMetabaseObjectDescriptor.Key](../../Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Key.htm),
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

Begin

    MB := MetabaseClass.Active;

    Obj := MB.ItemById("Obj_1");

    Dictionary := MB.ItemByIdNamespace("Country", MB.ItemById("RDS").Key);

    Elements := (Dictionary.Open(Null) As IRdsDictionaryInstance).Elements;

    Template := New MbElementDependencyTemplateClass.CreateByElement(

        Dictionary.Key, Elements.Element(1));

    //Коллекция зависимостей объекта

    Depends := Obj.ElementDependencies;

    Depends.Add(Template);

    Mb.ElementDependenciesDatabase.Update(Depends);

End Sub UserProc;


При выполнении примера будет получена коллекция зависимостей объекта
 от элементов справочника НСИ. В список зависимостей будут добавлена новая
 зависимость от указанного элемента справочника. Список зависимостей будет
 сохранен в базу репозитория.


См. также:


[MbElementDependencyTemplateClass](MbElementDependencyTemplateClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
