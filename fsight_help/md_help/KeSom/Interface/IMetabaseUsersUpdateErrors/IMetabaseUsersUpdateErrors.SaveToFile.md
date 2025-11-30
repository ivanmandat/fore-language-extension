# IMetabaseUsersUpdateErrors.SaveToFile

IMetabaseUsersUpdateErrors.SaveToFile
-


# IMetabaseUsersUpdateErrors.SaveToFile


## Синтаксис


SaveToFile(FileName: String; Unicode: Boolean;)


## Параметры


FileName. Путь и наименование текстового файла, в который сохраняются ошибки.


Unicode. Признак сохранения в формате юникод.


## Описание


Метод SaveToFile сохраняет подробную информацию о возникших при обновлении ошибках в файл.


## Комментарии


Если параметр Unicode имеет значение True, то файл будет сохранен с кодировкой UTF-16, иначе - Ansi.


## Пример


Пример использования приведен в описании свойства [IMetabaseUsersUpdate.Callback](../IMetabaseUsersUpdate/IMetabaseUsersUpdate.Callback.htm).


См. также:


[IMetabaseUsersUpdateErrors](IMetabaseUsersUpdateErrors.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
