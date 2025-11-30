# IMetabaseUpdateSqlNode.IsDatabaseValid

IMetabaseUpdateSqlNode.IsDatabaseValid
-


# IMetabaseUpdateSqlNode.IsDatabaseValid


## Синтаксис


IsDatabaseValid: Boolean;


## Описание


Свойство IsDatabaseValid возвращает
 признак того, присутствует ли в текущем репозитории БД, к которой выполняет
 запрос SQL-оператор.


## Комментарии


Допустимые значения:


	- True. БД присутствует
	 в текущем репозитории;


	- False. БД отсутствует
	 в текущем репозитории. Для корректного выполнения обновления необходимо
	 определить новую БД для SQL-оператора. Сделать это можно при помощи
	 свойства [IMetabaseUpdateSqlNode.Database](IMetabaseUpdateSqlNode.Database.htm)
	 или [IMetabaseUpdateObjectNode.Object](../IMetabaseUpdateObjectNode/IMetabaseUpdateObjectNode.Object.htm)
	 (объект IMetabaseUpdateObjectNode
	 возвращает свойство [IMetabaseUpdateSqlNode.DatabaseNode](IMetabaseUpdateSqlNode.DatabaseNode.htm)).


Примечание.
 Перед проверкой, присутствует ли в текущем репозитории база данных, к
 которой выполняет запрос SQL-оператор, необходимо проверить корректность
 обновления. Для этого используйте метод [IMetabaseUpdate.Prepare](../IMetabaseUpdate/IMetabaseUpdate.Prepare.htm).


## Пример


Для выполнения примера предполагается наличие в корневом каталоге диска
 C файла обновления Update.pef. В репозитории должна присутствовать база
 данных с идентификатором OBJ_DB.


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Update: IMetabaseUpdate;

	    UFN: IMetabaseUpdateFolderNode;

	    i: Integer;

	    UpdateObj: IMetabaseUpdateSqlNode;

	    DbNode: IMetabaseUpdateObjectNode;

	Begin

	    MB := MetabaseClass.Active;

	    Update := Mb.CreateUpdate;

	    Update.LoadFromFile("C:\Update.pef");

	    Update.Prepare;

	    UFN := Update.RootFolder;

	    For i := 0 To UFN.Count - 1 Do

	        If UFN.Item(i) Is IMetabaseUpdateSqlNode Then

	            UpdateObj := UFN.Item(i) As IMetabaseUpdateSqlNode;

	            If Not UpdateObj.IsDatabaseValid Then

	                DbNode := UpdateObj.DatabaseNode;

	                If DbNode <> Null Then

	                    DbNode.Object := MB.ItemById("OBJ_DB");

	                    Else UpdateObj.Database := MB.ItemById("OBJ_DB").Key;

	                End If;

	            End If;

	        End If;

	    End For;

	    Update.SaveToFileNF("C:\Update.pefx");

	End Sub UserProc;


После выполнения примера будет открыто обновление «C:\Update.pef». Для
 всех SQL-операторов в обновлении будет проверено наличие необходимой БД.
 Если БД отсутствует в текущем репозитории, то она будет заменена на БД
 «OBJ_DB». Изменения будут сохранены.


См. также:


[IMetabaseUpdateSqlNode](IMetabaseUpdateSqlNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
