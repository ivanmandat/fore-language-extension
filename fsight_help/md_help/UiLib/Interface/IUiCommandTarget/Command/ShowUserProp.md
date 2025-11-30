# ShowUserProp

ShowUserProp
-


# Команда ShowUserProp


## Назначение


Вызов стандартного диалога настройки свойств пользователя.


## Параметры использования команды


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать массив типа Variant, элементы которого содержат
 следующие значения:


		 Тип значения
		 Описание


		 Элемент 1: [IMetabaseSecurity](KeSom.chm::/Interface/IMetabaseSecurity/IMetabaseSecurity.htm)
		 Менеджер безопасности репозитория, посредством которого будет
		 осуществляться получение прав пользователя.


		 Элемент 2: [IMetabaseUser](KeSom.chm::/Interface/IMetabaseUser/IMetabaseUser.htm),


[ISecuritySubject](KeSom.chm::/Interface/ISecuritySubject/ISecuritySubject.htm)
		 Пользователь, для которого необходимо вывести диалог настройки.


## Пример


Для выполнения примера убедитесь, что в менеджере безопасности содержится
 пользователь USER.


Добавьте ссылки на системные сборки: Metabase, Ui.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    MbSec: IMetabaseSecurity;

	    User: ISecuritySubject;

	    Target: IUiCommandTarget;

	    Context: IUiCommandExecutionContext;

	    Data: Array;

	Begin

	    MB := MetabaseClass.Active;

	    MbSec := MB.Security;

	    User := MbSec.ResolveName("USER");

	    Target := WinApplication.Instance.GetPluginTarget("Adm");

	    Context := Target.CreateExecutionContext;

	    Data := New Variant[2];

	    Data[0] := MbSec;

	    Data[1] := User;

	    Context.Data := Data;

	    Target.Execute("ShowUserProp", Context);

	End Sub UserProc;


После выполнения примера будет отображен диалог настройки свойств пользователя
 USER.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
