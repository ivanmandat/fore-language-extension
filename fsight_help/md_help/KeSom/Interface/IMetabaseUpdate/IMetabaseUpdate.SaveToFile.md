# IMetabaseUpdate.SaveToFile

IMetabaseUpdate.SaveToFile
-


# IMetabaseUpdate.SaveToFile


## Синтаксис


		SaveToFile(FileName:
		 String);


## Параметры


FileName.
 Полный путь и имя файла, в который будет сохранено обновление.


## Описание


Метод SaveToFile сохраняет обновление
 в файл с расширением *.pef.


## Комментарии


Формат *.pef является устаревшим, для сохранения в новый формат *.pefx
 используйте метод [IMetabaseUpdate.SaveToFileNF](IMetabaseUpdate.SaveToFileNF.htm).
 Формат *.pefx позволяет сохранять в обновление большее количество объектов.


## Пример


Для выполнения примера предполагается наличие файла обновления C:\Update.pef.


Добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Update: IMetabaseUpdate;

		    SpecialObjNode: IMetabaseUpdateSpecialObjectsNode;

		Begin

		    MB := MetabaseClass.Active;

		    Update := Mb.CreateUpdate;

		    Update.LoadFromFile("C:\Update.pef");

		    SpecialObjNode := Update.SpecialObjectsNode;

		    SpecialObjNode.ApplyObject(MetabaseSpecialObject.SharedParams)
		 := True;

		    Update.SaveToFile("C:\Update.pef");

		End Sub UserProc;


В результате выполнения примера в обновление, загружённое из файла C:\Update.pef,
 будет добавлен специальный объект: глобальные переменные. Затем обновление
 будет сохранено.


См. также:


[IMetabaseUpdate](IMetabaseUpdate.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
