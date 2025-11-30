# MbElementDependencyTemplateClass.CreateByObject

MbElementDependencyTemplateClass.CreateByObject
-


# MbElementDependencyTemplateClass.CreateByObject


## Синтаксис


CreateByObject(ObjectKey: Integer);


## Параметры


ObjectKey. Ключ объекта, для
 которого создается шаблон зависимостей.


## Описание


Конструктор CreateByObject создает
 новый шаблон зависимостей в соответствии с указанными параметрами объекта
 репозитория.


## Комментарии


Для получения ключа объекта используйте свойство [IMetabaseObjectDescriptor.Key](../../Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Key.htm),
 либо метод [IMetabase.GetObjectKeyById](../../Interface/IMetabase/IMetabase.GetObjectKeyById.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором «Obj_1» и справочника НСИ с идентификатором «Country».
 Для объекта включено отслеживание зависимостей от элементов справочника
 НСИ. Справочник хранится в репозитории НСИ с идентификатором «RDS».


			Sub UserProc;

Var

    MB: IMetabase;

    DepDB: IMbElementDependenciesDatabase;

    Obj, Dictionary: IMetabaseObjectDescriptor;

    Elements: IRdsDictionaryElements;

    Depends: IMbElementDependencies;

    Template: IMbElementDependencyTemplate;

    ElemKeys: Array Of Integer;

Begin

    MB := MetabaseClass.Active;

    DepDB := MB.ElementDependenciesDatabase;

    Depends := DepDB.New_;

    Obj := MB.ItemById("Obj_1");

    //Создание шаблона

    Template := New MbElementDependencyTemplateClass.CreateByObject(Obj.Key);

    Dictionary := MB.ItemByIdNamespace("Country", MB.ItemById("RDS").Key);

    Elements := (Dictionary.Open(Null) As IRdsDictionaryInstance).Elements;

    //Указываем справочник

    Template.DictionaryKey := Dictionary.Key;

    ElemKeys := New Integer[2];

    ElemKeys[0] := Elements.Element(1);

    ElemKeys[1] := Elements.Element(2);

    //Указываем ключи элементов

    Template.ElementKeys := ElemKeys;

    //Добавляем зависимости

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
