# IMetabaseUpdateObjectNode.UpdateOrder

IMetabaseUpdateObjectNode.UpdateOrder
-


# IMetabaseUpdateObjectNode.UpdateOrder


## Синтаксис


UpdateOrder: [MetabaseObjectUpdateOrder](../../Enums/MetabaseObjectUpdateOrder.htm);


## Описание


Свойство UpdateOrder определяет
 порядок обновления данных объектов.


## Комментарии


Для определения способа обновления данных объекта используйте свойство
 [IMetabaseUpdateObjectNode.UpdatePart](IMetabaseUpdateObjectNode.UpdatePart.htm).


## Пример


Для выполнения примера предполагается наличие файла обновления «C:\Update.pefx».
 В репозитории должна присутствовать таблица с идентификатором «Table_1».


Добавьте ссылку на системную сборку «Metabase».


			Sub UserProc;

Var

    MB: IMetabase;

    Update: IMetabaseUpdate;

    UFN: IMetabaseUpdateFolderNode;

    UON: IMetabaseUpdateObjectNode;

Begin

    MB := MetabaseClass.Active;

    Update := Mb.CreateUpdate;

    Update.LoadFromFileNF("C:\temp\Update.pefx");

    Update.Prepare; //

    UFN := Update.RootFolder;

    UON := UFN.Add(MetabaseUpdateNodeType.DataObject) As IMetabaseUpdateObjectNode;

    UON.Object := MB.ItemById("Table_1");

    UON.UpdateOrder := MetabaseObjectUpdateOrder.Default_;

    UON.UpdatePart := MetabaseObjectUpdatePart.DataMetadataSD;

    Update.SaveToFileNF("C:\temp\Update.pefx");

End Sub UserProc;


В результате выполнения примера будет задан порядок обновления данных
 объектов - по умолчанию. После чего в обновление, загруженное из файла
 «C:\Update.pefx», будет добавлена таблица. Затем обновление будет сохранено.
 При выполнении обновления будут обновляться данные, метаданные и права
 доступа для данной таблицы.


См. также:


[IMetabaseUpdateObjectNode](IMetabaseUpdateObjectNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
