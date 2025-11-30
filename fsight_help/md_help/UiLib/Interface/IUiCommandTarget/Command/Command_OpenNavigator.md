# OpenNavigator: Плагин Std

OpenNavigator: Плагин Std
-


# Команда OpenNavigator


## Назначение


Открытие репозитория в навигаторе объектов.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать массив типа Variant, элементы которого содержат
 следующие значения:


		 Параметр
		 Описание


		 Элемент 1:

[IMetabase](KeSom.chm::/Interface/IMetabase/IMetabase.htm)
		 Репозиторий, который необходимо открыть в навигаторе объектов.


		 Элемент 2:

[UiNavOpenMode](ForeSys.chm::/Enums/UiNavOpenMode.htm)
		 Необязательный параметр, который определяет открывать [личную
		 папку пользователя](Admin.chm::/03_Admin/Users/Admin_UserFolder.htm) или заданную папку.

Если элемент не задан, то в навигаторе объектов
		 открывается корневая папка репозитория.


		 Элемент 3:

[IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm)
		 Необязательный параметр, содержащий описание папки репозитория,
		 которая будет открыта на отдельной вкладке навигатора и будет
		 являться корневой.


## Особенности применения


Используется для открытия в навигаторе объектов репозитория, к которому
 уже осуществлено подключение.


## Пример


Для выполнения примеров в репозитории предполагается наличие:


	- формы и расположенной на ней кнопки с наименованием Button1;


	- папки с идентификатором IDFOLDER.


Для выполнения примеров добавьте ссылки на системные сборки: Metabase,
 Ui.


Процедура является обработчиком событий OnClick
 для кнопки Button1.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    Target: IUiCommandTarget;

	    Context: IUiCommandExecutionContext;

	    Data: Array Of Variant;

	    Root: IMetabaseObjectDescriptor;

	Begin

	    MB := MetabaseClass.Active;

	    Target := WinApplication.Instance.GetPluginTarget("Std");

	    Context := Target.CreateExecutionContext;

	    Root := MB.ItemById("IDFOLDER");

	    Data := New Variant[3];

	    Data[0] := MB;

	    Data[1] := UiNavOpenMode.SetFolder;

	    Data[2] := Root;

	    Context.Data := Data;

	    Target.Execute("OpenNavigator", Context);

	End Sub Button1OnClick;


В результате выполнения примера на отдельной вкладке навигатора будет
 открыта папка с заданным идентификатором IDFOLDER. Уровень папок репозитория
 будет ограничен заданной папкой, которая будет являться корневой.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    MAN: IMetabaseManager;

	    Def: IMetabaseDefinition;

	    Cred: ICredentials;

	    Target: IUiCommandTarget;

	    Context: IUiCommandExecutionContext;

	Begin

	    MB := MetabaseClass.Active;

	    MAN := MB.Definition.Manager;

	    Cred := MAN.Packs.Item(0).Package.CreateCredentials(AuthenticationMode.Password);

	    Def := MAN.Definitions.FindById("TEST");

	    (Cred As IPasswordCredentials).UserName := "Test";

	    (Cred As IPasswordCredentials).Password := "Test";

	    MB := Def.Open(Cred);

	    Target := WinApplication.Instance.GetPluginTarget("Std");

	    Context := Target.CreateExecutionContext;

	    Context.Data := MB;

	    Target.Execute("OpenNavigator", Context);

	End Sub Button1OnClick;


В результате выполнения примера будет осуществлено подключение к репозиторию
 с идентификатором TEST. При подключении к нему будут использоваться имя
 пользователя и пароль «Test». Уровень папок репозитория не будет ограничен.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
