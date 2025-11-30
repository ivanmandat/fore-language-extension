# IAutoCube.Database

IAutoCube.Database
-


# IAutoCube.Database


## Синтаксис


Database: [IDatabase](kedb.chm::/interface/idatabase/idatabase.htm);


## Описание


Свойство Database определяет
 базу данных, в которой хранятся данные куба.


## Пример


Для выполнения примера предполагается наличие в репозитории автоматического
 куба с идентификатором AUTO_CUBE.


			Sub UserProc;

Var

    MB: IMetabase;

    AutoCub: IAutoCube;

    DB: IDatabase;

Begin

    MB := MetabaseClass.Active;

    AutoCub := MB.ItemById("AUTO_CUBE").Bind As IAutoCube;

    DB := AutoCub.Database;

    Debug.WriteLine((DB As IMetabaseObjectDescriptor).Name);

End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведено наименование
 базы данных, в которой хранятся данные автоматического куба.


См. также:


[IAutoCube](IAutoCube.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
