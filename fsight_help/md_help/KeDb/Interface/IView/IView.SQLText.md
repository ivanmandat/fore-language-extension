# IView.SQLText

IView.SQLText
-


# IView.SQLText


## Синтаксис


SQLText(Driver: String): String;


## Параметры


Driver. Идентификатор
 драйвера СУБД.


## Описание


Свойство SQLText определяет
 SQL-запрос представления для определенного драйвера базы данных.


## Комментарии


Список идентификаторов, которые могут использоваться в качестве значения
 параметра Driver, представлен
 в разделе «[Сводный
 список идентификаторов](Setup.chm::/06_AK_Client_Config/Configuring_repository_list_in_the_system_registry.htm#id)».


## Пример


			Sub Main;

Var

    MB: IMetabase;

    Predstav: IView;

    SQL: String;

Begin

    MB := MetabaseClass.Active;

    Predstav := MB.ItemById("View_1").Bind As IView;

    SQL := Predstav.SqlText("ORCL");

End Sub Main;


После выполнения примера в переменной «SQL»
 будет содержаться SQL-запрос для драйвера Oracle. Представление имеет
 идентификатор «View_1».


См.также:


[IView](IView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
