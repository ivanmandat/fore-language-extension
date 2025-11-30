# IMetabaseUpdate.LoadFromFile

IMetabaseUpdate.LoadFromFile
-


# IMetabaseUpdate.LoadFromFile


## Синтаксис


LoadFromFile(FileName: String; [Mode: [UpdateLoadMode](../../Enums/UpdateLoadMode.htm)
 = 0]);


## Параметры


FileName. Полное имя файла
 обновления;


Mode. Метод загрузки объектов
 в обновление.


## Описание


Метод LoadFromFile загружает
 обновление из файла с расширением *.pef.


## Комментарии


Параметр Mode является необязательным
 для Fore и принимает значение по умолчанию [UpdateLoadmode.Replace](../../Enums/UpdateLoadMode.htm).


Формат *.pef является устаревшим, для работы с новым форматом *.pefx
 используйте метод [IMetabaseUpdate.LoadFromFileNF](IMetabaseUpdate.LoadFromFileNF.htm).


## Пример


Использование метода приведено в примере для метода [IMetabaseUpdate.SaveToFile](IMetabaseUpdate.SaveToFile.htm).


См. также:


[IMetabaseUpdate](IMetabaseUpdate.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
