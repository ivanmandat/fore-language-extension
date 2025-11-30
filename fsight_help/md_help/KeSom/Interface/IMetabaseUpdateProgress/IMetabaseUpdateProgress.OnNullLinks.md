# IMetabaseUpdateProgress.OnNullLinks

IMetabaseUpdateProgress.OnNullLinks
-


# IMetabaseUpdateProgress.OnNullLinks


## Синтаксис


OnNullLinks(Node: [IMetabaseUpdateNode](../IMetabaseUpdateNode/IMetabaseUpdateNode.htm);
 Links: [IMetabaseUpdateNullLinks](../IMetabaseUpdateNullLinks/IMetabaseUpdateNullLinks.htm));


## Параметры


Node. Объект обновления.


Links. Коллекция отсутствующих
 ссылок.


## Описание


Метод OnNullLinksResolve реализует
 событие, возникающее при наличии ссылок, которые отсутствуют в репозитории
 назначения.


## Пример


Для выполнения примера предполагается наличие файла обновления update.perfx,
 содержащего объект с ключом «1286399», который при обновлении будет содержать
 отсутствующие ссылки.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MUpdate: IMetabaseUpdate;

	    Progress: MyUpdateProgress;

	    UpdateCxt: IMetabaseUpdateContext;

	Begin

	    MB := MetabaseClass.Active;

	    MUpdate := MB.CreateUpdate;

	    MUpdate.LoadFromFileNF("C:\update.pefx");

	    Progress := New MyUpdateProgress.Create;

	    UpdateCxt := MUpdate.CreateUpdateContext;

	    UpdateCxt.RegisterNullRemapping(1286399);

	    MUpdate.ApplyEx(Progress, UpdateCxt);

	End Sub UserProc;


	Class MyUpdateProgress: UpdateProgress

	    Sub OnNullLinks(Node: IMetabaseUpdateNode; Links: IMetabaseUpdateNullLinks);

	    Var

	        Link: IMetabaseUpdateNullLink;

	        i: Integer;

	        MB: IMetabase;

	    Begin

	        MB := MetabaseClass.Active;

	        Debug.WriteLine("OnNullLInks");

	        For i := 0 To Links.Count - 1 Do

	            Link := Links.Item(i);

	                Debug.WriteLine("Id: " + Link.Id);

	                Debug.WriteLine("Name: " + Link.Name);

	                Debug.WriteLine("Key: " + Link.Key.ToString);

	                Debug.WriteLine("Description: " + Link.Description);

	                Debug.WriteLine("ClassId: " + Link.ClassId.ToString);

	                Debug.WriteLine("---");

	        End For;

	    End Sub OnNullLinks;

	End Class MyUpdateProgress;


После выполнения примера в консоль будет выведена информация об отсутствующих
 ссылках.


См. также:


[IMetabaseUpdateProgress](IMetabaseUpdateProgress.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
