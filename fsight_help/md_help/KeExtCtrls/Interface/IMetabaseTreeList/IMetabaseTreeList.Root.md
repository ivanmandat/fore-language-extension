# IMetabaseTreeList.Root

IMetabaseTreeList.Root
-


# IMetabaseTreeList.Root


## Синтаксис


Root: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Описание


Свойство Root определяет корневой
 каталог, содержимое которого будет отображаться в компоненте.


## Комментарии


По умолчанию свойству установлено значение Null, при этом в компоненте
 ничего не отображается.


При изменении данного свойства, значение свойства [IMetabaseTreeList.Metabase](IMetabaseTreeList.Metabase.htm)
 устанавливается автоматически.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки «Button1» и компонента MetabaseTreeCombo с наименованием «MetabaseTreeCombo1».
 В настройках подключений платформы имеется описание репозитория «Test».
 При подключении к нему будут использоваться имя пользователя и пароль
 «Test».


	Sub Button1OnClick(Sender:Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    MAN: IMetabaseManager;

	    Def: IMetabaseDefinition;

	    Cre: ICredentials;

	Begin

	    MB := MetabaseClass.Active;

	    MAN := MB.Definition.Manager;

	    Cre := MAN.Packs.Item(0).Package.CreateCredentials(AuthenticationMode.Password);

	    Def := MAN.Definitions.FindById("Test");

	    (Cre As IPasswordCredentials).UserName := "Test";

	    (Cre As IPasswordCredentials).Password := "Test";

	    MB := Def.Open(Cre);

	    MetabaseTreeList1.Root := MB.Root;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку в качестве корневого
 каталога для компонента «MetabaseTreeList1» будет установлена корневая
 папка репозитория «Test».


См. также:


[IMetabaseTreeList](IMetabaseTreeList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
