# Object.EditShortcut

Object.EditShortcut
-


# Команда Object.EditShortсut


## Назначение


Редактирование свойств ярлыка.


## Особенности применения


Команда может применяться только для ярлыков.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием "Button1" и ярлыка в репозитории
 с идентификатором "SHORTCUT_TO_TABLE1".


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	    Var

	    Mb: IMetabase;

	    ObjDes: IMetabaseObjectDescriptor;

	    Target: IUiCommandTarget;

	Begin

	    MB := MetabaseClass.Active;

	    ObjDes := MB.ItemById("SHORTCUT_TO_TABLE1");

	    Target := WinApplication.Instance.GetObjectTarget(ObjDes);

	    Target.Execute("Object.EditShortcut", Null);

	End Sub Button1OnClick;


При нажатии на кнопку ярлык с идентификатором "SHORTCUT_TO_TABLE1"
 будет открыт на редактирование.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
