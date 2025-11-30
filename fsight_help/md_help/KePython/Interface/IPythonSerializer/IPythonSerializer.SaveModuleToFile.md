# IPythonSerializer.SaveModuleToFile

IPythonSerializer.SaveModuleToFile
-


# IPythonSerializer.SaveModuleToFile


## Синтаксис


		SaveModuleToFile(Module: [IPythonModule](../IPythonModule/IPythonModule.htm);
		 FileName: String);


## Параметры


Module.
 Python-модуль, который необходимо сохранить.


FileName. Путь и наименование
 файла, в который сохраняется Python-модуль.


## Описание


Метод SaveModuleToFile сохраняет
 указанный Python-модуль в файл.


## Пример


Для выполнения примера предполагается наличие в репозитории Python-модуля
 с идентификатором «test_python».


Добавьте ссылки на системные сборки: Metabase, Python.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Ps: IPythonSerializer;

		    Module: IPythonModule;

		Begin

		    MB := MetabaseClass.Active;

		    Ps := New PythonSerializer.Create;

		    Module := MB.ItemById("test_python").Bind As IPythonModule;

		    Ps.SaveModuleToFile(Module, "D:\test.py");

		End Sub UserProc;


При выполнении примера указанный Python-модуль будет сохранён в файл.


См. также:


[IPythonSerializer](IPythonSerializer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
