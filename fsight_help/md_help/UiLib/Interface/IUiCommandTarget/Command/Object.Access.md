# Object.Access

Object.Access
-


# Команда Object.Access


## Назначение


Настройка прав доступа к объекту.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием "Button1" и объекта репозитория с
 идентификатором "Table_1".


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Mb: IMetabase;

	    ObjDes: IMetabaseObjectDescriptor;

	    Target: IUiCommandTarget;

	Begin

	    MB := MetabaseClass.Active;

	    ObjDes := MB.ItemById("Table_1");

	    Target := WinApplication.Instance.GetObjectTarget(ObjDes);

	    Target.Execute("Object.Access", Null);

	End Sub Button1OnClick;


При нажатии на кнопку будет выведен стандартный диалог настройки прав
 доступа к объекту с идентификатором "Table_1".


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
