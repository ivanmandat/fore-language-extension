# IMetabaseUpdateObjectNode.ObjectId

IMetabaseUpdateObjectNode.ObjectId
-


# IMetabaseUpdateObjectNode.ObjectId


## Синтаксис


ObjectId: String;


## Описание


Свойство ObjectId определяет
 идентификатор обновляемого объекта.


## Комментарии


По умолчанию значение свойства соответствует идентификатору объекта,
 добавленного в обновление из репозитория. Значение данного свойства может
 быть изменено для изменения идентификатора обновляемого объекта, либо
 для обновления другого объекта, если используется тип обновления по идентификатору.


## Пример


	Public Class CUpdateEvents: UpdateEvents

	    Public Sub OnBeginUpdate(Update: IMetabaseUpdate);

	    Begin

	        Debug.WriteLine("Начало обновления объектов репозитория");

	    End Sub OnBeginUpdate;


	    Public Sub OnBeforeApplyUpdate(Update: IMetabaseUpdate);

	    Var

	        MB: IMetabase;

	        Root: IMetabaseUpdateFolderNode;

	        Node: IMetabaseUpdateNode;

	        ObjectNode: IMetabaseUpdateObjectNode;

	        i: Integer;

	    Begin

	        MB := MetabaseClass.Active;

	        If MB.Security.Policy.ObjectsIdFormat <> "" Then

	            Root := Update.RootFolder;

	            For i := 0 To Root.Count - 1 Do

	                Node := Root.Item(i);

	                If Node.NodeType = MetabaseUpdateNodeType.Object Then

	                    ObjectNode := Node As IMetabaseUpdateObjectNode;

	                    ObjectNode.ObjectId := MB.GenerateId(ObjectNode.ObjectId);

	                End If;

	            End For;

	        End If;

	    End Sub OnBeforeApplyUpdate;


	    Public Sub OnEndUpdate(Update: IMetabaseUpdate);

	    Begin

	        Debug.WriteLine("Обновление объектов окончено");

	    End Sub OnEndUpdate;

	End Class CUpdateEvents;


Данный пример является шаблоном для модуля обновления. Перед применением
 обновления будет осуществлена проверка на наличие установленного формата
 идентификаторов в репозитории. Если формат идентификаторов установлен,
 то для корневых объектов обновления, соответствующих объектам репозитория,
 будут сгенерированы новые идентификаторы в соответствии с данным форматом.


См. также:


[IMetabaseUpdateObjectNode](IMetabaseUpdateObjectNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
