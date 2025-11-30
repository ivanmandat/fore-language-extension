# Object.Edit

Object.Edit
-


# Команда Object.Edit


## Назначение


Редактирование свойств объекта.


## Особенности применения


Команда может применяться только для объектов, поддерживающих редактирование.
 Для форм и модулей данная команда не может выполняться в режиме отладки
 в среде разработки.


В зависимости от типа объекта, редактирование будет осуществляться соответствующим
 инструментом платформы.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием "Button1" и объекта репозитория с
 идентификатором "Table_1", поддерживающего режим редактирования.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Mb: IMetabase;

	    ObjDes: IMetabaseObjectDescriptor;

	    Target: IUiCommandTarget;

	Begin

	    MB := MetabaseClass.Active;

	    ObjDes := MB.ItemById("Table_1");

	    Target := WinApplication.Instance.GetObjectTarget(ObjDes);

	    Target.Execute("Object.Edit", Null);

	End Sub Button1OnClick;


При нажатии на кнопку объект с идентификатором "Table_1" будет
 открыт на редактирование.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
