# IMetabaseUpdateObjectApplyState.State

IMetabaseUpdateObjectApplyState.State
-


# IMetabaseUpdateObjectApplyState.State


## Синтаксис


State: [MetabaseUpdateObjectApplyState](../../Enums/MetabaseUpdateObjectApplyState.htm);


## Описание


Свойство State определяет состояние
 готовности объекта к обновлению.


## Пример


Для выполнения примера предполагается наличие в корневом каталоге диска
 С файла обновления Update.pefx.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MU: IMetabaseUpdate;

	    Root: IMetabaseUpdateFolderNode;

	    Node: IMetabaseUpdateNode;

	    i, c: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    MU := MB.CreateUpdate;

	    MU.LoadFromFileNF("c:\Update.pefx");

	    MU.Prepare;

	    Root := MU.RootFolder;

	    c := Root.Count;

	    For i := 0 To c - 1 Do

	        Node := Root.Item(i);

	        If Node.NodeType = MetabaseUpdateNodeType.Object Then

	            ObjectNode := Node As IMetabaseUpdateObjectNode;

	            State := ObjectNode.ApplyState;

	            Select Case State.State

	                Case MetabaseUpdateObjectApplyState.CreateNew:

	                    Debug.WriteLine("Объект обновления: " + ObjectNode.ObjectId + "; Состояние: Создание нового");

	                Case MetabaseUpdateObjectApplyState.EditExisting:

	                    Debug.WriteLine("Объект обновления: " + ObjectNode.ObjectId + "; Состояние: Обновление существующего.");

	                Case MetabaseUpdateObjectApplyState.Conflict Or MetabaseUpdateObjectApplyState.ConflictKey:

	                    Debug.WriteLine("Объект обновления: " + ObjectNode.ObjectId + "; Состояние: Конфликт. Существует объект с таким же ключом.");

	                Case MetabaseUpdateObjectApplyState.Conflict Or MetabaseUpdateObjectApplyState.ConflictId:

	                    Debug.WriteLine("Объект обновления: " + ObjectNode.ObjectId + "; Состояние: Конфликт. Существует объект с таким же идентификатором.");

	                Case MetabaseUpdateObjectApplyState.Conflict Or MetabaseUpdateObjectApplyState.ConflictClassId:

	                    Debug.WriteLine("Объект обновления: " + ObjectNode.ObjectId + "; Состояние: Конфликт. Существующий объект имеет другой класс.");

	                Case MetabaseUpdateObjectApplyState.Conflict Or MetabaseUpdateObjectApplyState.ConflictObjectNotFound:

	                    Debug.WriteLine("Объект обновления: " + ObjectNode.ObjectId + "; Состояние: Конфликт. Не найден объект репозитория, для которого установлен тип обновления Только обновление.");

	                Case MetabaseUpdateObjectApplyState.Conflict Or MetabaseUpdateObjectApplyState.ConflictMissingMetadata:

	                    Debug.WriteLine("Объект обновления: " + ObjectNode.ObjectId + "; Состояние: Конфликт. В обновлении отсутствуют метаданные для создания объекта.");

	            End Select;

	        End If;

	    End For;

	End Sub UserProc;


После выполнения примера будет осуществлена загрузка и проверка файла
 обновления. Для объектов, содержащихся в корневой папке обновления и соответствующих
 объекта репозитория, в консоль среды разработки будет выведено состояние
 готовности к обновлению.


См. также:


[IMetabaseUpdateObjectApplyState](IMetabaseUpdateObjectApplyState.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
