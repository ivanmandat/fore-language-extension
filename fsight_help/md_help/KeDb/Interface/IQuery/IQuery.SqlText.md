# IQuery.SqlText

IQuery.SqlText
-


# IQuery.SqlText


## Синтаксис


SqlText(Driver: String): String;


## Параметры


Driver. Идентификатор
 драйвера СУБД.


## Описание


Свойство SqlText определяет
 текст SQL-запроса к базе данных у объекта Запрос для определенного драйвера
 СУБД.


## Комментарии


Список идентификаторов, которые могут использоваться в качестве значения
 параметра Driver, представлен
 в разделе «[Сводный
 список идентификаторов](Setup.chm::/06_AK_Client_Config/Configuring_repository_list_in_the_system_registry.htm#id)».


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    CrInf: IMetabaseObjectCreateInfo;

    MObj: IMetabaseObject;

    Query: IQuery;

Begin

    MB := MetabaseClass.Active;

    CrInf := Mb.CreateCreateInfo;

    CrInf.ClassId := MetabaseObjectClass.KE_CLASS_QUERY;

    CrInf.Id := "New_Query";

    CrInf.Name := "New_Query";

    CrInf.Parent := Mb.Root;

    MObj := Mb.CreateObject(CrInf).Edit;

    Query := MObj As IQuery;

    Query.Database := Mb.ItemById("BD").Bind As IDatabase;

    Query.SqlText("ORCL8") := "SELECT * FROM Table_1 WHERE ROWNUM <= 10";

    Query.SqlText("MSSQL") := "SELECT TOP 10 * FROM Table_1";

    MObj.Save;

End Sub UserProc;


После выполнения примера в корневой папке репозитория будет создан новый
 объект Запрос. В настройках будут указаны SQL-запросы в форматах СУБД
 Oracle и MSSQL.


См. также:


[IQuery](IQuery.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
