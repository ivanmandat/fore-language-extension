# INamedEntity.Id

INamedEntity.Id
-


# INamedEntity.Id


## Синтаксис


Id: String;


## Описание


Свойство Id определяет идентификатор
 объекта.


## Пример


Для выполнения примера в репозитории предполагается наличие объекта
 с идентификатором OBJ_TEST.


Добавьте ссылки на системные сборки: Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    MDesc: IMetabaseObjectDescriptor;

	Begin

	    Mb := MetabaseClass.Active;

	    // Изменение метаданных объекта

	    MDesc := Mb.ItemById("OBJ_TEST");

	    MDesc := MDesc.EditDescriptor;

	    MDesc.Id := Mb.GenerateId("OBJ_TEST");

	    MDesc.Name := MDesc.Name + "(Устарел)";

	    // Сохранение изменений

	    MDesc.SaveDescriptor;

	    Debug.WriteLine("Новый идентификатор: " + MDesc.Id);

	    Debug.WriteLine("Новое наименование: " + MDesc.Name);

	End Sub UserProc;


При выполнении примера будут изменены идентификатор и наименование указанного
 объекта.


См. также:


[INamedEntity](INamedEntity.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
