# MbElementDependentTemplateClass.CreateByObject

MbElementDependentTemplateClass.CreateByObject
-


# MbElementDependentTemplateClass.CreateByObject


## Синтаксис


		CreateByObject(ObjectKey: Integer);


## Параметры


ObjectKey. Ключ объекта репозитория,
 от которого будут зависть элементы справочника НСИ.


## Описание


Конструктор CreateByObject создает
 новый шаблон зависимостей в соответствии с указанными параметрами объекта
 репозитория.


## Комментарии


Для создания нового шаблона зависимостей в соответствии с указанными
 параметрами объекта, справочника НСИ и элемента справочника используйте
 конструктор [MbElementDependentTemplateClass.Create](MbElementDependentTemplateClass.Create.htm).


## Пример


Для выполнения примера предполагается наличие справочников НСИ с идентификаторами
 «DICT» и «DICT1».


Добавьте ссылки на системные сборки Metabase, Rds.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Obj, Dictionary: IMetabaseObjectDescriptor;

		    Elements: IRdsDictionaryElements;

		    Depends: IMbElementDependents;

		    Template: IMbElementDependentTemplate;

		    ElemKeys: Array Of Integer;

		Begin

		    MB := MetabaseClass.Active;

		    Dictionary := MB.ItemById("Dict_1");

		    Obj := MB.ItemById("Obj_1");

		    Elements := (Dictionary.Open(Null) As IRdsDictionaryInstance).Elements;

		    // Настройки объекта:

		    Dictionary := Dictionary.EditDescriptor;

		    Dictionary.ElementDependenciesTrackingType := MbElementDependenciesTrackingType.Dependents;

		    Dictionary.SaveDescriptor;

		    // Новый шаблон для добавления зависимости

		    // Шаблон создается для первого элемента справочника НСИ

		    Template := New MbElementDependentTemplateClass.CreateByObject(Obj.Key);

		    ElemKeys := New Integer[2];

		    ElemKeys[0] := Elements.Element(1);

		    ElemKeys[0] := Elements.Element(2);

		    Template.DictionaryKey := Dictionary.Key;

		    Template.ElementKeys := ElemKeys;

		    // Коллекция зависимостей элементов

		    Depends := Dictionary.ElementDependents;

		    Depends.Clear;

		    Depends.Add(Template);

		    Depends.Database.Update(Depends);

		    Debug.WriteLine("Количество записей зависимости элементов справочника НСИ от объектов: " + Depends.Count.ToString);

		End Sub UserProc;


После выполнения примера для указанного справочника будет включена функция
 отслеживания зависимостей элементов справочника от объектов репозитория.
 Для двух элементов будут созданы новые зависимости от указанного объекта.
 Список зависимостей будет сохранен в базу репозитория.


См. также:


[MbElementDependentTemplateClass](MbElementDependentTemplateClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
