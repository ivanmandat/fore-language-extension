# IMetabaseUpdateObjectApplyState.UpdateObject

IMetabaseUpdateObjectApplyState.UpdateObject
-


# IMetabaseUpdateObjectApplyState.UpdateObject


## Синтаксис


UpdateObject: [IMetabaseObject](../IMetabaseObject/IMetabaseObject.htm);


## Описание


Свойство UpdateObject определяет
 объект репозитория, к которому будет применено обновление.


## Комментарии


Данное свойство выставляется автоматически при выполнении метода [Prepare](../IMetabaseUpdate/IMetabaseUpdate.Prepare.htm),
 если обновляемый объект найден в репозитории. Изменить значение данного
 свойства можно только в пользовательском событии [OnBeforeApplyUpdate](../IMetabaseUpdateUserEvents/IMetabaseUpdateUserEvents.OnBeforeApplyUpdate.htm),
 используемом в модуле обновления. Если использование модуля обновления
 не предусмотрено, то для замены объекта репозитория, к которому будет
 применено обновление используйте свойство [ForceUpdateObject](IMetabaseUpdateObjectApplyState.ForceUpdateObject.htm).


Примечание.
 В качестве обновляемого объекта должен быть указан объект того же класса,
 какой имеет объект в обновлении.


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

	        State: IMetabaseUpdateObjectApplyState;

	        CrInfo: IMetabaseObjectCreateInfo;

	        MObj: IMetabaseObject;

	        i: Integer;

	    Begin

	        MB := MetabaseClass.Active;

	        Root := Update.RootFolder;

	        For i := 0 To Root.Count - 1 Do

	            Node := Root.Item(i);

	            If Node.NodeType = MetabaseUpdateNodeType.Object Then

	                ObjectNode := Node As IMetabaseUpdateObjectNode;

	                State := ObjectNode.ApplyState;

	                Select Case State.State

	                Case MetabaseUpdateObjectApplyState.Conflict, MetabaseUpdateObjectApplyState.ConflictObjectNotFound:

	                    CrInfo := MB.CreateCreateInfo;

	                    CrInfo.ClassID := ObjectNode.Object.ClassId;

	                    CrInfo.Id := MB.GenerateId(ObjectNode.Object.Id);

	                    CrInfo.Name := ObjectNode.Object.Name;

	                    CrInfo.Parent := MB.Root;

	                    CrInfo.SkipIdFormatCheck := True;

	                    MObj := MB.CreateObject(CrInfo).Edit;

	                    MObj.Save;

	                    State.UpdateObject := MObj;

	                    State.State := MetabaseUpdateObjectApplyState.EditExisting;

	                End Select;

	            End If;

	        End For;

	    End Sub OnBeforeApplyUpdate;


	    Public Sub OnEndUpdate(Update: IMetabaseUpdate);

	    Begin

	        Debug.WriteLine("Обновление объектов окончено");

	    End Sub OnEndUpdate;

	End Class CUpdateEvents;


Данный пример является шаблоном для модуля обновления. При применении
 обновления, содержащего данный модуль, будет осуществляться проверка готовности
 объектов, соответствующих объектам репозитория. В частности будет разрешаться
 конфликт, если в репозитории отсутствует объект, для которого в обновлении
 установлен тип - Только обновление.


Для решения конфликта в репозитории будет создан новый пустой объект
 того же класса. Данный объект будет установлен в качестве обновляемого
 объекта. Состояние готовности объекта обновления будет изменено на Обновление
 существующего объекта (MetabaseUpdateObjectApplyState.EditExisting).


Примечание.
 Необходимо помнить, что не все конфликты доступно разрешить. В указанном
 примере будет игнорироваться условие обновления объекта по ключу. Если
 объект в репозитории отсутствует, то он все равно будет создан. Ключи
 объекта в репозитории и в обновлении будут различаться.


См. также:


[IMetabaseUpdateObjectApplyState](IMetabaseUpdateObjectApplyState.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
