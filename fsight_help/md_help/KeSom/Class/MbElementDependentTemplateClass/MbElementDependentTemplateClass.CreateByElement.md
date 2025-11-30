# MbElementDependentTemplateClass.CreateByElement

MbElementDependentTemplateClass.CreateByElement
-


# MbElementDependentTemplateClass.CreateByElement


## Синтаксис


		CreateByElement(DictionaryKey: Integer;
		 ElementKey: Integer);


## Параметры


DictionaryKey. Ключ справочника
 НСИ;


ElementKey. Ключ элемента справочника
 НСИ.


## Описание


Конструктор CreateByElement
 создает новый шаблон зависимостей в соответствии с указанными параметрами
 справочника НСИ и элемента справочника.


## Комментарии


Для получения ключей объекта и справочника используйте свойство [IMetabaseObjectDescriptor.Key](../../Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Key.htm),
 либо метод [IMetabase.GetObjectKeyById](../../Interface/IMetabase/IMetabase.GetObjectKeyById.htm).
 Для получения ключа элемента используйте свойство [IRdsDictionaryElement.Key](KeRds.chm::/Interface/IRdsDictionaryElement/IRdsDictionaryElement.Key.htm),
 либо [IRdsDictionaryElements.Element](KeRds.chm::/Interface/IRdsDictionaryElements/IRdsDictionaryElements.Element.htm).


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

		    Template := New MbElementDependentTemplateClass.CreateByElement(Dictionary.Key, Elements.Element(1));

		    Template.ObjectKey := Obj.Key;

		    // Коллекция зависимостей элементов

		    Depends := Dictionary.ElementDependents;

		    Depends.Add(Template);

		    Depends.Database.Update(Depends);

		    Debug.WriteLine("Количество записей зависимости элементов справочника НСИ от объектов: " + Depends.Count.ToString);

		End Sub UserProc;


После выполнения примера для указанного справочника будет включена функция
 отслеживания зависимостей элементов справочника от объектов репозитория.
 Для первого элемента будет создана новая зависимость от указанного объекта.
 Список зависимостей будет сохранен в базу репозитория.


См. также:


[MbElementDependentTemplateClass](MbElementDependentTemplateClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
