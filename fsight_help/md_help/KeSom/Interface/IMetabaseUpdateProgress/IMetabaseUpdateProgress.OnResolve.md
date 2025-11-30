# IMetabaseUpdateProgress.OnResolve

IMetabaseUpdateProgress.OnResolve
-


# IMetabaseUpdateProgress.OnResolve


## Синтаксис


OnResolve(Node: [IMetabaseUpdateNode](../IMetabaseUpdateNode/IMetabaseUpdateNode.htm);
 Resolver: [IMetabaseUpdateResolver](../IMetabaseUpdateResolver/IMetabaseUpdateResolver.htm));


## Параметры


Node. Объект обновления.


Resolver. Коллекция зависимостей.


## Описание


Метод OnResolve реализует событие,
 возникающее при наличии зависимостей обновления от объектов репозитория-источника,
 которые отсутствуют в репозитории назначения.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором «CUBEMETAUPD», содержащего настройки копирования базы
 данных временных рядов. Также в репозитории должна присутствовать база
 данных временных рядов с идентификатором «FC».


	Sub UserProc;

	Var

	    MB: IMetabase;

	    RubUpdateEx: ICubeMetaUpdateEx;

	    Progress: MyUpdateProgress;

	Begin

	    MB := MetabaseClass.Active;

	    RubUpdateEx := MB.ItemById("CUBEMETAUPD").Bind As ICubeMetaUpdateEx;

	    Progress := New MyUpdateProgress.Create;

	    RubUpdateEx.Apply(Progress);

	End Sub UserProc;

	Class MyUpdateProgress: UpdateProgress

	    Public Sub OnResolve(Node: IMetabaseUpdateNode; Resolver: IMetabaseUpdateResolver);

	    Var

	        Unresolv: IMetabaseUpdateUnresolved;

	        i: Integer;

	        MB: IMetabase;

	    Begin

	        MB := MetabaseClass.Active;

	        Debug.WriteLine("OnResolve");

	        For i := 0 To Resolver.Count - 1 Do

	            Unresolv := Resolver.Item(i);

	            If Unresolv.ClassId = MetabaseObjectClass.KE_CLASS_RUBRICATOR Then

	                Debug.WriteLine("Id: " + Unresolv.Id);

	                Debug.WriteLine("Name: " + Unresolv.Name);

	                Debug.WriteLine("Key: " + Unresolv.Key.ToString);

	                Debug.WriteLine("Description: " + Unresolv.Description);

	                Debug.WriteLine("KeepResolve: " + Unresolv.KeepResolve.ToString);

	                Unresolv.ResolveObject := MB.ItemById("FC");

	                Debug.WriteLine("---");

	            End If;

	        End For;

	    End Sub OnResolve;

	End Class MyUpdateProgress;


После выполнения примера будет осуществлено копирование базы данных
 временных рядов по настройкам, содержащимся в объекте «CUBEMETAUPD». Для
 обработки событий, возникающих во время копирования, используется пользовательский
 класс «MyUpdateProgress». Если во время копирования была обнаружена зависимость
 от базы данных временных рядов репозитория-источника, который отсутствует
 в репозитории назначения, то данная зависимость будет устранена, в окно
 консоли будет выведена информация о ней.


См. также:


[IMetabaseUpdateProgress](IMetabaseUpdateProgress.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
