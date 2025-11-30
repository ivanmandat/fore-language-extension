# IMetabaseCustomObjectSerializer.ElementDependencies

IMetabaseCustomObjectSerializer.ElementDependencies
-


# IMetabaseCustomObjectSerializer.ElementDependencies


## Синтаксис


ElementDependencies: [IMbElementDependencies](../IMbElementDependencies/IMbElementDependencies.htm);


## Описание


Свойство ElementDependencies
 определяет коллекцию зависимостей объекта пользовательского класса от
 элементов справочников НСИ.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 пользовательского класса с идентификатором OBJ_CUSTOM и справочника НСИ
 с идентификатором Country.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Object: IMetabaseObjectDescriptor;

	    CustomObject: IMetabaseCustomObject;

	    Writer: IMetabaseCustomObjectWriter;

	    Depends: IMbElementDependencies;

	    Dictionary: IMetabaseObjectDescriptor;

	    Elements: IRdsDictionaryElements;

	    Template: IMbElementDependencyTemplate;

	Begin

	    Mb := MetabaseClass.Active;

	    Object := Mb.ItemById("OBJ_CUSTOM");

	    Object := Object.EditDescriptor;

	    Object.TrackElementDependencies := True;

	    Object.SaveDescriptor;

	    CustomObject := Object.Edit As IMetabaseCustomObject;

	    Writer := CustomObject.CreateWriter;

	    Dictionary := MB.ItemById("Country");

	    Elements := (Dictionary.Open(Null) As IRdsDictionaryInstance).Elements;

	    Depends := Writer.NewElementDependencies;

	    Template := New MbElementDependencyTemplateClass.CreateByElement(

	        Dictionary.Key, Elements.Element(1));

	    Depends.Add(Template);

	    Writer.ElementDependencies := Depends;

	    Writer.Save;

	    Mb.ElementDependenciesDatabase.Update(Depends);

	End Sub UserProc;


После выполнения примера для указанного объекта будет включена функция
 отслеживания зависимостей от элементов справочника. Для объекта будет
 создана новая зависимость от первого элемента справочника. Список зависимостей
 будет сохранён в базу репозитория.


См. также:


[IMetabaseCustomObjectSerializer](IMetabaseCustomObjectSerializer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
