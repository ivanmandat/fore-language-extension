# IMetabaseDefinition.CompileAssemblyOnly

IMetabaseDefinition.CompileAssemblyOnly
-


# IMetabaseDefinition.CompileAssemblyOnly


## Синтаксис


CompileAssemblyOnly: Boolean;


## Описание


Свойство CompileAssemblyOnly
 определяет признак возможности компиляции форм/модулей вне сборок.


## Комментарии


Если свойству установлено значение True,
 то компиляция форм/модулей вне сборок будет запрещена.


В соответствии со значением данного свойства, выставляется флаг "Запретить
 компиляцию модулей и форм вне сборок" на странице [Настройки
 репозитория](UiNav.chm::/02_Navigator/UiNav_Repo_Adjustment.htm).


## Пример


Для выполнения примера предполагается наличие зарегистрированного в
 менеджере репозиториев описания с идентификатором "Test".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MAN: IMetabaseManager;

	    Def: IMetabaseDefinition;

	Begin

	    MB := MetabaseClass.Active;

	    MAN := MB.Definition.Manager;

	    Def := MAN.Definitions.FindById("Test");

	    Def.CompileAssemblyOnly := True;

	    Def.Save;

	End Sub UserProc;


После выполнения примера будут изменены настройки указанного подключения
 к репозиторию. После подключения к данному репозиторию, при работе в нем
 будет запрещена компиляция форм/модулей вне сборок.


См. также:


[IMetabaseDefinition](IMetabaseDefinition.htm)
 | [IMetabase.CompileAssemblyOnly](../IMetabase/IMetabase.CompileAssemblyOnly.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
