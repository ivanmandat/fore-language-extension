# IMetabaseObjectDescriptor.Dependents

IMetabaseObjectDescriptor.Dependents
-


# IMetabaseObjectDescriptor.Dependents


## Синтаксис


Dependents: [IMetabaseObjectDescriptors](../IMetabaseObjectDescriptors/IMetabaseObjectDescriptors.htm);


## Описание


Свойство Dependents возвращает
 коллекцию описаний объектов репозитория, зависящих от данного объекта.


## Комментарии


Свойство возвращает пустую коллекцию, если от данного объекта не зависит
 ни один объект репозитория.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором TSDB.


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MDesc: IMetabaseObjectDescriptor;

	    MDescr: IMetabaseObjectDescriptors;

	Begin

	    MB := MetabaseClass.Active;

	    MDesc := Mb.ItemById("TSDB");

	    MDescr := MDesc.Dependents;

	    If MDescr.Count <> 0 Then

	        Debug.WriteLine("От ""TSDB"" зависят следующие объекты:");

	        For Each MDesc In MDescr Do

	            Debug.WriteLine("Наименование :" + MDesc.Name + "; Идентификатор: " + MDesc.Id);

	        End For;

	    End If;

	End Sub UserProc;


После выполнения примера, если от указанного объекта зависят какие-либо
 объекты, то их наименования и идентификаторы будут выведены в консоль
 среды разработки.


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)
 | [IMetabaseObjectDescriptor.FetchDependents](IMetabaseObjectDescriptor.FetchDependents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
