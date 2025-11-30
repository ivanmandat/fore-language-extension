# IMetabaseObjectDescriptor.TrackElementDependencies

IMetabaseObjectDescriptor.TrackElementDependencies
-


# IMetabaseObjectDescriptor.TrackElementDependencies


## Синтаксис


		TrackElementDependencies: Boolean;


## Описание


Свойство TrackElementDependencies
 определяет признак отслеживания зависимостей объекта от элементов справочника
 НСИ.


## Комментарии


Если свойству установлен значение True,
 то для объекта будет вестись отслеживание зависимости от элементов справочников
 НСИ. Информацию о зависимостях можно будет получить в свойстве [IMetabaseObjectDescriptor.ElementDependencies](IMetabaseObjectDescriptor.ElementDependencies.htm).


Изменение данного свойства приведет к автоматическому изменению свойства
 [IMetabaseObjectDescriptor.ElementDependenciesTrackingType](IMetabaseObjectDescriptor.ElementDependenciesTrackingType.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором «Obj_1» и справочника НСИ с идентификатором «Country».
 Объект поддерживает отслеживание зависимостей от элементов справочников.


Добавьте ссылки на системные сборки: Metabase, Rds.


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

		    Dictionary := MB.ItemById("Country");

		    Elements := (Dictionary.Open(Null) As IRdsDictionaryInstance).Elements;

		    //Меняем настройки для использования отслеживание зависимостей

		    Obj := Obj.EditDescriptor;

		    Obj.TrackElementDependencies := True;

		    Obj.SaveDescriptor;

		    //Меняем настройки для использования отслеживание ссылок на элементы у справочника

		    Dictionary := Dictionary.EditDescriptor;

		    Dictionary.TrackElementDependents := True;

		    Dictionary.SaveDescriptor;

		    //Новый шаблон для добавления зависимости

		    //Шаблон создается для первого элемента справочника НСИ

		    Template := New MbElementDependencyTemplateClass.Create(Obj.Key, Dictionary.Key, Elements.Element(1));

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


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
