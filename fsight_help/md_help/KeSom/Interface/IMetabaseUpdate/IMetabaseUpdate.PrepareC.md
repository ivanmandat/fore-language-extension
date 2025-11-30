# IMetabaseUpdate.PrepareC

IMetabaseUpdate.PrepareC
-


# IMetabaseUpdate.PrepareC


## Синтаксис


		PrepareC(Context:
		 [IMetabaseUpdateContext](../IMetabaseUpdateContext/IMetabaseUpdateContext.htm));


## Параметры


Context. Дополнительные настройки
 объекта обновления.


## Описание


Метод PrepareC проверяет корректность
 обновления с учётом дополнительных настроек.


## Комментарии


При выполнении метода осуществляется проверка соответствия параметров
 объектов в обновлении и соответствующих объектов в репозитории. Для объектов
 в обновлении будет выставлено свойство [IMetabaseUpdateObjectNode.ApplyState](../IMetabaseUpdateObjectNode/IMetabaseUpdateObjectNode.ApplyState.htm).


Примечание.
 Свойство [IMetabaseUpdateObjectNode.ApplyState](../IMetabaseUpdateObjectNode/IMetabaseUpdateObjectNode.ApplyState.htm)
 выставляется только для тех объектов обновления, которые соответствуют
 объектам репозитория. Метод PrepareC
 автоматически вызывается после вызова метода [IMetabaseUpdate.ApplyEx](IMetabaseUpdate.ApplyEx.htm),
 перед непосредственным обновлением объектов. Для проверки готовности объектов
 к обновлению можно использовать пользовательское событие [IMetabaseUpdateUserEvents.OnBeforeApplyUpdate](../IMetabaseUpdateUserEvents/IMetabaseUpdateUserEvents.OnBeforeApplyUpdate.htm).


Если параметру Context передать
 значение Null, то проверка произойдет
 без учета дополнительных настроек.


## Пример


Для выполнения примера предполагается наличие файла обновления C:\Update.pefx
 и наличие в репозитории объекта с идентификатором BD2.


Добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    MU: IMetabaseUpdate;

		    Root: IMetabaseUpdateFolderNode;

		    Node: IMetabaseUpdateNode;

		    ObjectNode: IMetabaseUpdateObjectNode;

		    i: Integer;

		    State: IMetabaseUpdateObjectApplyState;

		    UpdateCxt: IMetabaseUpdateContext;

		    NewObject: IMetabaseObject;

		Begin

		    MB := MetabaseClass.Active;

		    MU := MB.CreateUpdate;

		    MU.LoadFromFileNF("C:\Update.pefx");

		    UpdateCxt := MU.CreateUpdateContext;

		    NewObject := MB.ItemById("BD2").Bind As IMetabaseObject;

		    UpdateCxt.RegisterIdChange(NewObject.ClassId, "BD1", "BD2", NewObject);

		    MU.PrepareC(UpdateCxt);

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

		                          + "; Состояние: Конфликт.Существующий объект имеет другой класс.");

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


В результате выполнения примера будет осуществлена загрузка и проверка
 файла обновления C:\Update.pefx с учётом возможного переопределения ссылки
 обновляемого объекта на объект репозитория-приёмника с идентификатором
 BD2. Для объектов, содержащихся в корневой папке обновления, и соответствующих
 объектов репозитория в консоль среды разработки будет выведено состояние
 готовности к обновлению.


См. также:


[IMetabaseUpdate](IMetabaseUpdate.htm)
 | [IMetabaseUpdate.Prepare](IMetabaseUpdate.Prepare.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
