# IMetabaseUpdateDeleteObjectNode.ObjectKey

IMetabaseUpdateDeleteObjectNode.ObjectKey
-


# IMetabaseUpdateDeleteObjectNode.ObjectKey


## Синтаксис


ObjectKey: Integer;


## Описание


Свойство ObjectKey определяет
 ключ удаляемого при обновлении объекта.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с ключом «100».


			Sub UserProc;

Var

    MB: IMetabase;

    Update: IMetabaseUpdate;

    DelObject: IMetabaseUpdateDeleteObjectNode;

Begin

    MB := MetabaseClass.Active;

    Update := MB.CreateUpdate;

    DelObject := Update.RootFolder.Add(MetabaseUpdateNodeType.DeleteObject) As IMetabaseUpdateDeleteObjectNode;

    DelObject.Label := "Удаление объекта с ключом 100";

    DelObject.ObjectKey := 100;

    Update.SaveToFileNF("c:\DelObject.pefx");

End Sub UserProc;


После выполнения примера будет создано новое обновление. В обновление
 будет включен объект, осуществляющий удаление объекта репозитория с ключом
 100.


См. также:


[IMetabaseUpdateDeleteObjectNode](IMetabaseUpdateDeleteObjectNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
