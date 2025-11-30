# Query.QueryBuilder

Query.QueryBuilder
-


# Команда Query.QueryBuilder


## Назначение


Вызов конструктора запроса.


## Особенности применения


Команда может применяться только для объекта репозитория - Запрос.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием "Button1" и запроса с идентификатором
 "Query_1".


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Mb: IMetabase;

	    ObjDes: IMetabaseObjectDescriptor;

	    Target: IUiCommandTarget;

	Begin

	    MB := MetabaseClass.Active;

	    ObjDes := MB.ItemById("Query_1");

	    Target := WinApplication.Instance.GetObjectTarget(ObjDes);

	    Target.Execute("Query.QueryBuilder", Null);

	End Sub Button1OnClick;


При нажатии на кнопку будет открыт конструктор для запроса с идентификатором
 "Query_1".


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
