# IMetabaseObjectDescriptor.Children

IMetabaseObjectDescriptor.Children
-


# IMetabaseObjectDescriptor.Children


## Синтаксис


		Children: [IMetabaseObjectDescriptors](../IMetabaseObjectDescriptors/IMetabaseObjectDescriptors.htm);


## Описание


Свойство Children возвращает
 коллекцию описаний дочерних объектов.


## Комментарии


Свойство возвращает пустую коллекцию, если объект не имеет дочерних
 объектов. Данное свойство, в отличие от метода [IMetabaseObjectDescriptor.FetchChildren](IMetabaseObjectDescriptor.FetchChildren.htm),
 для ярлыка не возвращает коллекцию описаний исходного объекта.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором «TSDB».


Добавьте ссылку на системную сборку Metabase.


					Sub UserProg;

		Var

		    MB: IMetabase;

		    MDesc: IMetabaseObjectDescriptor;

		    MDescr: IMetabaseObjectDescriptors;

		    i: integer;

		Begin

		    MB := MetabaseClass.Active;

		    MDesc := Mb.ItemById("TSDB");

		    MDescr := MDesc.Children;

		    If MDescr.Count <> 0 Then

		    Debug.WriteLine("Дочерние объекты:");

		    For i:=0 To MDescr.Count-1 Do

		         MDesc:=MDescr.Item(i);

		         Debug.WriteLine("Наименование:" + MDesc.Name + "; Идентификатор:" + MDesc.Id);

		    End For;

		    End If;

		End Sub UserProg;


После выполнения примера, если в указанной базе данных временных рядов
 имеются дочерние объекты, то их наименования и идентификаторы будут выведены
 в консоль среды разработки.


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)
 | [IMetabaseObjectDescriptor.FetchChildren](IMetabaseObjectDescriptor.FetchChildren.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
