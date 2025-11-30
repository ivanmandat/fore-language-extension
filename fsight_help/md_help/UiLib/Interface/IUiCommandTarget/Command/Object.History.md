# Object.History

Object.History
-


# Команда Object.History


## Назначение


Вызов стандартного окна истории изменений объекта.


## Особенности применения


При выполнении команды для объектов будет выведено [окно изменения объекта](UiNav.chm::/02_Navigator/UiNav_ObjVer.htm). Если объект добавлен в систему управления
 версиями, то будет выведено окно, содержащее [историю
 публикаций](UiDevEnv.chm::/01_Development_Environment/06_Version_Control_System/VCS_History_object.htm) объекта.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием "Button1" и модуля с идентификатором
 "UserFunction".


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Mb: IMetabase;

	    ObjDes: IMetabaseObjectDescriptor;

	    Target: IUiCommandTarget;

	Begin

	    MB := MetabaseClass.Active;

	    ObjDes := MB.ItemById("UserFunction");

	    Target := WinApplication.Instance.GetObjectTarget(ObjDes);

	    Target.Execute("Object.History", Null);

	End Sub Button1OnClick;


При нажатии на кнопку будет выведено стандартное окно изменений модуля.
 Если модуль добавлен в систему управления версиями, то будет выведено
 окно, содержащее историю публикаций модуля.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
