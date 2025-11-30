# IMetabaseObjectDescriptor.HasChildren

IMetabaseObjectDescriptor.HasChildren
-


# IMetabaseObjectDescriptor.HasChildren


## Синтаксис


		HasChildren: Boolean;


## Описание


Метод HasChildren возвращает
 признак наличия у текущих объектов дочерних объектов.


## Комментарии


Допустимые значения:


	- True. У объекта есть
	 непосредственные дочерние объекты (доступ к ним можно получить в свойстве
	 [IMetabaseObjectDescriptor.Children](IMetabaseObjectDescriptor.Children.htm))
	 и имеются объекты, для которых установлен [признак
	 отложенной загрузки описаний](IMetabaseObjectDescriptor.IsDeferred.htm) (доступ к ним можно получить, используя
	 методы [IMetabase.FetchItem](../IMetabase/IMetabase.FetchItem.htm),
	 [IMetabase.FetchItemById](../IMetabase/IMetabase.FetchItemById.htm),
	 [IMetabase.FetchItems](../IMetabase/IMetabase.FetchItems.htm)
	 и [IMetabase.FetchItemsById](../IMetabase/IMetabase.FetchItemsById.htm));


Примечание.
 Для получения точного значения элемента коллекции (с учетом прав доступа
 пользователя к данному элементу) рекомендуется после применения метода
 HasChildren выполнить выгрузку
 элементов коллекции ([Children.Count](IMetabaseObjectDescriptor.Children.htm)),
 а затем уже получать точное значение ([Children.Item(i)](IMetabaseObjectDescriptor.Children.htm)).


	- False.
	 У объекта нет дочерних объектов.


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

		    If MDesc.HasChildren = True Then

		        Debug.WriteLine("Дочерние объекты:");

		        Debug.Indent;

		        For i := 0 To MDescr.Count - 1 Do

		            MDesc := MDescr.Item(i);

		            Debug.WriteLine("Наименование: " + MDesc.Name + "; Идентификатор: " + MDesc.Id);

		        End For;

		        Debug.Unindent;

		        Else

		            Debug.WriteLine("Нет дочерних объектов.");

		    End If;

		End Sub UserProg;


После выполнения примера, если в указанном объекте имеются дочерние
 объекты, то их наименования и идентификаторы будут выведены в консоль
 среды разработки.


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
