# IMetabaseUpdate.SaveToFileNF

IMetabaseUpdate.SaveToFileNF
-


# IMetabaseUpdate.SaveToFileNF


## Синтаксис


		SaveToFileNF(FileName:
		 String);


## Параметры


FileName. Полный
 путь и имя файла, в который будет сохранено обновление.


## Описание


Метод SaveToFileNF сохраняет
 обновление в файл с расширением *.pefx.


## Комментарии


Формат *.pefx позволяет сохранять в обновление большее количество объектов
 по сравнению с форматом *.pef.


## Пример


Для выполнения примера в репозитории предполагается наличие объекта
 с идентификатором MYOBJ1.


Добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    MUpdate: IMetabaseUpdate;

		    RootFolder: IMetabaseUpdateFolderNode;

		    Node: IMetabaseUpdateObjectNode;

		Begin

		    Mb := MetabaseClass.Active;

		    MUpdate := Mb.CreateUpdate;

		    RootFolder := MUpdate.RootFolder;

		    Node := RootFolder.Add(MetabaseUpdateNodeType.Object) As IMetabaseUpdateObjectNode;

		    Node.UpdatePart := MetabaseObjectUpdatePart.DataMetadataSD;

		    Node.UpdateType := MetabaseObjectUpdateType.Simple;

		    Node.IncludeChildrenDependencies := TriState.OnOption;

		    Node.Object := Mb.ItemById("MyOBJ1").Bind;

		    MUpdate.SaveToFileNF("C:\Update.pefx");

		End Sub UserProc;


В результате выполнения примера будет создано обновление и сохранено
 в указанный файл.


См. также:


[IMetabaseUpdate](IMetabaseUpdate.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
