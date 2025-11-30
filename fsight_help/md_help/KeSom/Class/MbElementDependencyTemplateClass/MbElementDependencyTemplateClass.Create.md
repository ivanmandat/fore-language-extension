# MbElementDependencyTemplateClass.Create

MbElementDependencyTemplateClass.Create
-


# MbElementDependencyTemplateClass.Create


## Синтаксис


Create(ObjectKey: Integer; DictionaryKey: Integer;
 ElementKey: Integer);


## Параметры


ObjectKey. Ключ объекта, для
 которого создается шаблон зависимостей.


DictionaryKey. Ключ справочника
 НСИ, содержащего элемент ElementKey.


ElementKey. Ключ элемента справочника
 НСИ, от которого зависит объект ObjectKey.


## Описание


Конструктор Create создает новый
 шаблон зависимостей в соответствии с указанными параметрами объекта, справочника
 НСИ и элемента справочника.


## Комментарии


Для получения ключей объекта и справочника используйте свойство [IMetabaseObjectDescriptor.Key](../../Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Key.htm),
 либо метод [IMetabase.GetObjectKeyById](../../Interface/IMetabase/IMetabase.GetObjectKeyById.htm).
 Для получения ключа элемента используйте свойство [IRdsDictionaryElement.Key](KeRds.chm::/Interface/IRdsDictionaryElement/IRdsDictionaryElement.Key.htm),
 либо [IRdsDictionaryElements.Element](KeRds.chm::/Interface/IRdsDictionaryElements/IRdsDictionaryElements.Element.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором «Obj_1» и справочника НСИ с идентификатором «Country».
 Объект поддерживает отслеживание зависимостей от элементов справочников.
 Справочник хранится в репозитории НСИ с идентификатором «RDS».


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

    //Меняем настройки для использования отслеживание зависимостей для объекта

    Obj := Obj.EditDescriptor;

    Obj.ElementDependenciesTrackingType := MbElementDependenciesTrackingType.Dependecies;

    Obj.SaveDescriptor;

    //Меняем настройки для использования отслеживание ссылок на элементы у справочника

    Dictionary := Dictionary.EditDescriptor;

    Dictionary.ElementDependenciesTrackingType := MbElementDependenciesTrackingType.Dependents;

    Dictionary.SaveDescriptor;

    //Новый шаблон для добавления зависимости

    //Шаблон создается для первого элемента справочника НСИ

    Template := New MbElementDependencyTemplateClass.Create(

        Obj.Key, Dictionary.Key, Elements.Element(1));

    //Коллекция зависимостей объекта

    Depends := Obj.ElementDependencies;

    Depends.Add(Template);

    Mb.ElementDependenciesDatabase.Update(Depends);

End Sub UserProc;


После выполнения примера для указанного объекта и справочника НСИ будет
 включена функция отслеживания зависимостей от элементов справочника. Для
 объекта будет создана новая зависимость от первого элемента справочника.
 Список зависимостей будет сохранен в базу репозитория.


См. также:


[MbElementDependencyTemplateClass](MbElementDependencyTemplateClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
