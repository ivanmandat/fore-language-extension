# IMetabaseObjectDescriptor.Dependencies

IMetabaseObjectDescriptor.Dependencies
-


# IMetabaseObjectDescriptor.Dependencies


## Синтаксис


Dependencies(FromSource: Boolean): [IMetabaseObjectDescriptors](../IMetabaseObjectDescriptors/IMetabaseObjectDescriptors.htm);


## Параметры


FromSource. Параметр, определяющий
 для кого будет вычисляться свойство.


## Описание


Свойство Dependencies возвращает
 коллекцию описаний объектов, от которых зависит данный объект.


## Комментарии


Свойство возвращает пустую коллекцию, если объект не зависит ни от одного
 объекта репозитория.


Параметр FromSource актуален
 для ярлыков. Если в качестве значения передавать True,
 то свойство вернет описания объектов, от которых зависит объект, на который
 ссылается ярлык. Если в качестве значения передавать False,
 то свойство вернет описание объекта, от которых зависит сам ярлык.


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

	    MDescr := MDesc.Dependencies(True);

	    If MDescr.Count <> 0 Then

	        Debug.WriteLine("Объекты, от которых зависит ""TSDB"":");

	        For Each MDesc In MDescr Do

	            Debug.WriteLine("Наименование :" + MDesc.Name + "; Идентификатор: " + MDesc.Id);

	        End For;

	    End If;

	End Sub UserProc;


После выполнения примера в консоль среды разработки будут выведены наименования
 и идентификаторы объектов, от которых зависит указанный объект.


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)
 | [IMetabaseObjectDescriptor.FetchDependencies](IMetabaseObjectDescriptor.FetchDependencies.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
