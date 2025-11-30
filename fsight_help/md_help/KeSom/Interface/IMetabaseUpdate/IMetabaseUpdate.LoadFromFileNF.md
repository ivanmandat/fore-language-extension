# IMetabaseUpdate.LoadFromFileNF

IMetabaseUpdate.LoadFromFileNF
-


# IMetabaseUpdate.LoadFromFileNF


## Синтаксис


		LoadFromFileNF(FileName:
		 String; [Mode: [UpdateLoadMode](../../Enums/UpdateLoadMode.htm)
		 = 0]);


## Параметры


FileName. Полное имя файла
 обновления;


Mode. Метод загрузки объектов
 в обновление. Необязательный параметр.


## Описание


Метод LoadFromFileNF загружает
 обновление из файла с расширением *.pefx.


## Комментарии


Формат *.pefx позволяет сохранять в обновление большее количество объектов
 по сравнению с форматом *.pef. Для загрузки обновления из старого формата
 *.pef используйте метод [IMetabaseUpdate.LoadFromFile](IMetabaseUpdate.LoadFromFile.htm).


## Пример


Для выполнения примера предполагается наличие файла обновления C:\Update.pefx.


Добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Update: IMetabaseUpdate;

		    SpecialObjNode: IMetabaseUpdateSpecialObjectsNode;

		Begin

		    MB := MetabaseClass.Active;

		    Update := Mb.CreateUpdate;

		    Update.LoadFromFileNF("C:\Update.pefx");

		    SpecialObjNode := Update.SpecialObjectsNode;

		    SpecialObjNode.ApplyObject(MetabaseSpecialObject.SharedParams) := True;

		    Update.SaveToFileNF("C:\Update2.pefx");

		End Sub UserProc;


В результате выполнения примера в обновление, загружённое из файла C:\Update.pefx,
 будет добавлен специальный объект: глобальные переменные. Затем обновление
 будет сохранено в другой файл.


См. также:


[IMetabaseUpdate](IMetabaseUpdate.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
