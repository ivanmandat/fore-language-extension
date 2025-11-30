# ITableField.Mandatory

ITableField.Mandatory
-


# ITableField.Mandatory


## Синтаксис


Mandatory: Boolean;


## Описание


Свойство Mandatory определяет,
 допускаются ли пустые значения в поле.


## Комментарии


Если свойству установлено значения True,
 то пустые значения в поле не допускаются. При значении False
 - пустые значения допускаются.


## Пример


Для выполнения примера предполагается наличие в репозитории таблицы
 с идентификатором «DataTable». В таблице имеется поле с идентификатором
 «ID».


			Sub UserProc;

Var

    MB: IMetabase;

    Table: ITable;

    Field: ITableField;

Begin

    MB := MetabaseClass.Active;

    Table := MB.ItemById("DataTable").Edit As ITable;

    Field := Table.Fields.FindById("ID");

    Field.Mandatory := True;

    (Table As IMetabaseObject).Save;

End Sub UserProc;


При выполнении примера для поля «ID» будет установлен запрет на возможность
 указывать пустые значения.


См.также:


[ITableField](ITableField.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
