# IPythonSerializer.CreateLoaderFromFile

IPythonSerializer.CreateLoaderFromFile
-


# IPythonSerializer.CreateLoaderFromFile


## Синтаксис


		CreateLoaderFromFile(FileName: String; Metabase:
		 [IMetabase](KeSom.chm::/Interface/IMetabase/IMetabase.htm)):
		 [IPythonSerializerLoader](../IPythonSerializerLoader/IPythonSerializerLoader.htm);


## Параметры


FileName. Файл, из которого
 будет осуществляться загрузка.


Metabase. Репозиторий, в котором
 будет сохранён загруженный объект.


## Описание


Метод CreateLoaderFromFile создает
 объект, предназначенный для загрузки Python-модулей.


## Примеры


Для выполнения примера предполагается наличие файла с кодом на языке
 Python «d:\Work\Python\test.py». В репозитории должна быть создана папка
 с идентификатором «F_PYTHON».


Добавьте ссылки на системные сборки: Metabase, Python.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Ps: IPythonSerializer;

		    Loader: IPythonSerializerLoader;

		    CrInfo: IMetabaseObjectCreateInfo;

		Begin

		    MB := MetabaseClass.Active;

		    Ps := New PythonSerializer.Create;

		    Loader := Ps.CreateLoaderFromFile("d:\Work\Python\test.py", MB);

		    CrInfo := Loader.CreateInfo;

		    If MB.ItemById(CrInfo.Id) <> Null Then

		        CrInfo.Id := MB.GenerateId(CrInfo.Id);

		        CrInfo.Name := CrInfo.Name + "_Copy";

		    End If;

		    CrInfo.Parent := MB.ItemById("F_PYTHON");

		    Loader.LoadModule;

		End Sub UserProc;


При выполнении примера из файла в репозиторий будет загружен Python-модуль.
 Модуль будет сохранён в указанной папке.


См. также:


[IPythonSerializer](IPythonSerializer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
