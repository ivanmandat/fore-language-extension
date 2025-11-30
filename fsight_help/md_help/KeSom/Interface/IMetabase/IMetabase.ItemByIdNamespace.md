# IMetabase.ItemByIdNamespace

IMetabase.ItemByIdNamespace
-


# IMetabase.ItemByIdNamespace


## Синтаксис


		ItemByIdNamespace(Id: String; Namespace_:
		 Integer): [IMetabaseObjectDescriptor](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Параметры


Id. Идентификатор объекта,
 описание которого необходимо получить;


Namespace_. Ключ объекта-контейнера.
 В качестве объекта-контейнера могут указываться следующие объекты репозитория:
 репозиторий НСИ, контейнер моделирования, веб-приложение. Также могут
 указываться различные объекты, внутренние объекты которых не отображаются
 в навигаторе объектов (например, база данных временных рядов, контейнер
 пользовательских классов, справочники и другие).


## Описание


Свойство ItemByIdNamespace возвращает
 описание объекта, содержащегося в каком-либо объекте-контейнере.


## Комментарии


Данное свойство используется для доступа к внутренним объектам (например,
 схема отметки справочников), а также к дочерним объектам, хранящимся в
 объектах-контейнерах.


Свойство возвращает значение Null,
 если объект с указанным идентификатором не существует.


## Пример


 Для выполнения примера предполагается наличие формы и расположенной
 на ней кнопки с наименованием «Button1». В репозитории имеется репозиторий
 НСИ с идентификатором «RDS», в котором сохранён справочник НСИ с идентификатором
 «Dict_1».


Добавьте ссылки на системные сборки: Metabase, Rds, Ui.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    RDS: IRdsDictionary;

		    Target: IUiCommandTarget;

		    Context: IUiCommandExecutionContext;

		Begin

		    MB := MetabaseClass.Active;

		    RDS := MB.ItemByIdNamespace("Dict_1", MB.GetObjectKeyById("RDS")).Bind As IRdsDictionary;

		    If RDS <> Null Then

		        Target := WinApplication.Instance.GetPluginTarget("Rds");

		        Context := Target.CreateExecutionContext;

		        Context.Data := RDS;

		        Target.Execute("EditDictionary", Context);

		    End If;

		End Sub UserProc;


При нажатии на кнопку указанный справочник НСИ будет открыт на редактирование.


См. также:


[IMetabase](IMetabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
