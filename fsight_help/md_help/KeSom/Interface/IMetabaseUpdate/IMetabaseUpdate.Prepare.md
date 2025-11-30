# IMetabaseUpdate.Prepare

IMetabaseUpdate.Prepare
-


# IMetabaseUpdate.Prepare


## Синтаксис


		Prepare;


## Описание


Метод Prepare проверяет корректность
 обновления.


## Комментарии


При выполнении метода осуществляется проверка соответствия параметров
 объектов в обновлении и соответствующих объектов в репозитории. Для объектов
 в обновлении будет выставлено свойство [IMetabaseUpdateObjectNode.ApplyState](../IMetabaseUpdateObjectNode/IMetabaseUpdateObjectNode.ApplyState.htm).


Примечание.
 Свойство [IMetabaseUpdateObjectNode.ApplyState](../IMetabaseUpdateObjectNode/IMetabaseUpdateObjectNode.ApplyState.htm)
 выставляется только для тех объектов обновления, которые соответствуют
 объектам репозитория. Метод Prepare
 автоматически вызывается после вызова метода [IMetabaseUpdate.Apply](IMetabaseUpdate.Apply.htm),
 перед непосредственным обновлением объектов. Для проверки готовности объектов
 к обновлению можно использовать пользовательское событие [IMetabaseUpdateUserEvents.OnBeforeApplyUpdate](../IMetabaseUpdateUserEvents/IMetabaseUpdateUserEvents.OnBeforeApplyUpdate.htm).


## Пример


Для выполнения примера предполагается наличие файла обновления C:\Update.pef.


Добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    MU: IMetabaseUpdate;

		    Root: IMetabaseUpdateFolderNode;

		    Node: IMetabaseUpdateNode;

		    i: Integer;

		    ObjectNode: IMetabaseUpdateObjectNode;

		    State: IMetabaseUpdateObjectApplyState;

		Begin

		    MB := MetabaseClass.Active;

		    MU := MB.CreateUpdate;

		    MU.LoadFromFile("C:\Update.pef");

		    MU.Prepare;

		    Root := MU.RootFolder;

		    For i := 0 To Root.Count - 1 Do

		        Node := Root.Item(i);

		        If Node.NodeType = MetabaseUpdateNodeType.Object Then

		            ObjectNode := Node As IMetabaseUpdateObjectNode;

		            State := ObjectNode.ApplyState;

		            Select Case State.State

		                Case MetabaseUpdateObjectApplyState.CreateNew:

		                    Debug.WriteLine("Объект обновления: " + ObjectNode.ObjectId

		                          + "; Состояние: Создание нового");

		                Case MetabaseUpdateObjectApplyState.EditExisting:

		                    Debug.WriteLine("Объект обновления: " + ObjectNode.ObjectId

		                          + "; Состояние: Обновление существующего.");

		                Case MetabaseUpdateObjectApplyState.Conflict Or MetabaseUpdateObjectApplyState.ConflictKey:

		                    Debug.WriteLine("Объект обновления: " + ObjectNode.ObjectId

		                          + "; Состояние: Конфликт. Существует объект с таким же ключом.");

		                Case MetabaseUpdateObjectApplyState.Conflict Or MetabaseUpdateObjectApplyState.ConflictId:

		                    Debug.WriteLine("Объект обновления: " + ObjectNode.ObjectId

		                          + "; Состояние: Конфликт. Существует объект с таким же идентификатором.");

		                Case MetabaseUpdateObjectApplyState.Conflict Or MetabaseUpdateObjectApplyState.ConflictClassId:

		                    Debug.WriteLine("Объект обновления: " + ObjectNode.ObjectId

		                          + "; Состояние: Конфликт. Существующий объект имеет другой класс.");

		                Case MetabaseUpdateObjectApplyState.Conflict Or MetabaseUpdateObjectApplyState.ConflictObjectNotFound:

		                    Debug.WriteLine("Объект обновления: " + ObjectNode.ObjectId

		                          + "; Состояние: Конфликт. Не найден объект репозитория, для которого установлен тип обновления Только обновление.");

		                Case MetabaseUpdateObjectApplyState.Conflict Or MetabaseUpdateObjectApplyState.ConflictMissingMetadata:

		                    Debug.WriteLine("Объект обновления: " + ObjectNode.ObjectId

		                          + "; Состояние: Конфликт. В обновлении отсутствуют метаданные для создания объекта.");

		            End Select;

		        End If;

		    End For;

		End Sub UserProc;


В результате выполнения примера будут осуществлены загрузка и проверка
 файла обновления C:\Update.pef. Для объектов, содержащихся в корневой
 папке обновления, и соответствующих объектов репозитория в консоль среды
 разработки будет выведено состояние готовности к обновлению.


См. также:


[IMetabaseUpdate](IMetabaseUpdate.htm)
 | [IMetabaseUpdate.PrepareC](IMetabaseUpdate.PrepareC.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
