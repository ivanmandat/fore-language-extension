# IMetabaseUpdateDeleteObjectNode.ObjectId

IMetabaseUpdateDeleteObjectNode.ObjectId
-


# IMetabaseUpdateDeleteObjectNode.ObjectId


## Синтаксис


ObjectId: String;


## Описание


Свойство ObjectId определяет
 идентификатор удаляемого при обновлении объекта.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором «TempTable».


			Sub UserProc;

Var

    MB: IMetabase;

    Update: IMetabaseUpdate;

    DelObject: IMetabaseUpdateDeleteObjectNode;

Begin

    MB := MetabaseClass.Active;

    Update := MB.CreateUpdate;

    DelObject := Update.RootFolder.Add(MetabaseUpdateNodeType.DeleteObject) As IMetabaseUpdateDeleteObjectNode;

    DelObject.Label := "Удаление объекта TempTable";

    DelObject.ObjectId := "TempTable";

    Update.SaveToFileNF("c:\DelObject.pefx");

End Sub UserProc;


При выполнении примера будет создано новое обновление. В обновление
 будет включен объект, осуществляющий удаление объекта репозитория с указанным
 идентификатором.


См. также:


[IMetabaseUpdateDeleteObjectNode](IMetabaseUpdateDeleteObjectNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
