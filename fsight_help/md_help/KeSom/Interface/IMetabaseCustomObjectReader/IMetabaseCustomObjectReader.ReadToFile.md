# IMetabaseCustomObjectReader.ReadToFile

IMetabaseCustomObjectReader.ReadToFile
-


# IMetabaseCustomObjectReader.ReadToFile


## Синтаксис


ReadToFile(FileName: String);


## Параметры


FileName. Полное имя файла,
 в который будут считаны данные из объекта.


## Описание


Метод ReadToFile считывает данные
 из объекта пользовательского класса и загружает их в указанный файл.


## Комментарии


Перед выполнением метода ReadToFile
 необходимо вызвать метод [Load](IMetabaseCustomObjectReader.Load.htm)
 для чтения данных из базы репозитория в текущий объект в памяти ПК.


## Пример


Использование свойства приведено в примере для [IMetabaseCustomObject.CreateReader](../IMetabaseCustomObject/IMetabaseCustomObject.CreateReader.htm).


См. также:


[IMetabaseCustomObjectReader](IMetabaseCustomObjectReader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
