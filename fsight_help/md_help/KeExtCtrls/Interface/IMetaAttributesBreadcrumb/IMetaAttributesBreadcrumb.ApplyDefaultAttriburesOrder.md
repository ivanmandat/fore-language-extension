# IMetaAttributesBreadcrumb.ApplyDefaultAttriburesOrder

IMetaAttributesBreadcrumb.ApplyDefaultAttriburesOrder
-


# IMetaAttributesBreadcrumb.ApplyDefaultAttriburesOrder


## Синтаксис


ApplyDefaultAttriburesOrder;


## Описание


Метод ApplyDefaultAttriburesOrder
 применяет иерархию атрибутов, заданную по умолчанию.


## Комментарии


В иерархии по умолчанию участвуют только атрибуты временных рядов.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 MetaAttributesBreadcrumb с идентификатором «MetaAttributesBreadcrumb1».
 В репозитории предполагается наличие базы данных временных рядов с идентификатором
 TSDB_HIE_BY_DEF.


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	Begin

	    mb := MetabaseClass.Active;

	    MetaAttributesBreadcrumb1.Rubricator := mb.ItemById("TSDB_HIE_BY_DEF").Open(Null) As IRubricatorInstance;

	    MetaAttributesBreadcrumb1.ApplyDefaultAttributesOrder;

	End Sub UserProc;


В результате выполнения примера в компонент «MetaAttributesBreadcrumb1»
 будет загружена иерархия атрибутов, заданная по умолчанию.


См. также:


[IMetaAttributesBreadcrumb](IMetaAttributesBreadcrumb.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
