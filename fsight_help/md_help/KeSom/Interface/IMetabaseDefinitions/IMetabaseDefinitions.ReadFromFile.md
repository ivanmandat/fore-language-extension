# IMetabaseDefinitions.ReadFromFile

IMetabaseDefinitions.ReadFromFile
-


# IMetabaseDefinitions.ReadFromFile


## Синтаксис


ReadFromFile(FileName: String);


## Параметры


FileName. Путь к файлу, в котором содержатся описания
 репозиториев.


## Описание


Метод ReadFromFile осуществляет
 чтение описания репозиториев из файла.


## Комментарии


Структура файла описана в разделе [настройки репозиториев и автообновления
 из файла](Setup.chm::/Update/Tuner.htm).


## Пример


Для выполнения примера предполагается наличие файла «c:\Def.xml», содержащего
 описания репозиториев. Описания, содержащиеся в файле, отсутствуют в менеджере
 репозиториев.


	Sub UserProc;

	Var

	    Man: IMetabaseManager;

	    Defs: IMetabaseDefinitions;

	    Def: IMetabaseDefinition;

	Begin

	    Man := MetabaseManagerFactory.Active;

	    Defs := Man.Definitions;

	    Defs.ReadFromFile("c:\Def.xml");

	    For Each Def In Defs Do

	        Def.Save;

	    End For;

	End Sub UserProc;


После выполнения примера из указанного файла будут загружены описания
 репозиториев. Данные описания будут сохранены и в дальнейшем могут быть
 использованы при работе с платформой.


См. также:


[IMetabaseDefinitions](IMetabaseDefinitions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
