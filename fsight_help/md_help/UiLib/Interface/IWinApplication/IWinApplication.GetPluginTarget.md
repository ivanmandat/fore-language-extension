# IWinApplication.GetPluginTarget

IWinApplication.GetPluginTarget
-


# IWinApplication.GetPluginTarget


## Синтаксис


GetPluginTarget(PluginName: String): [IUiCommandTarget](../IUiCommandTarget/IUiCommandTarget.htm);


## Параметры


PluginName. Наименование используемого
 плагина.


## Описание


Метод GetPluginTarget создает
 объект, осуществляющий выполнение команды заданного плагина.


## Комментарии


Доступны следующие плагины:


	- [Adm](../IUiCommandTarget/IUiCommandTarget.Execute.htm#adm). Команды администрирования;


	- [Cubes](../IUiCommandTarget/IUiCommandTarget.Execute.htm#cubes). Команды
	 многомерных источников данных;


	- [Db](../IUiCommandTarget/IUiCommandTarget.Execute.htm#db). Команды таблиц;


	- [DevEnv](../IUiCommandTarget/IUiCommandTarget.Execute.htm#devenv). Команды
	 объектов среды разработки;


	- [Dim](../IUiCommandTarget/IUiCommandTarget.Execute.htm#dim). Команды справочников;


	- [Etl](../IUiCommandTarget/IUiCommandTarget.Execute.htm#etl). Команды задачи
	 ETL;


	- [Express](../IUiCommandTarget/IUiCommandTarget.Execute.htm#express). Команды
	 инструмента «Аналитические запросы
	 (OLAP)»;


	- [FactRubricator](../IUiCommandTarget/IUiCommandTarget.Execute.htm#factrubricator).
	 Команды инструмента «Анализ временных
	 рядов»;


	- [Fld](../IUiCommandTarget/IUiCommandTarget.Execute.htm#fld). Команды объектов
	 репозитория;


	- [MetabaseUpdate](../IUiCommandTarget/IUiCommandTarget.Execute.htm#metabaseupdate).
	 Команды инструмента «Менеджер обновлений»;


	- [Ms](../IUiCommandTarget/IUiCommandTarget.Execute.htm#ms).
	 Команды инструмента «Моделирование
	 и прогнозирование»;


	- [Rds](../IUiCommandTarget/IUiCommandTarget.Execute.htm#rds). Команды справочников
	 НСИ;


	- [Report](../IUiCommandTarget/IUiCommandTarget.Execute.htm#report). Команды
	 инструмента «Отчёты»;


	- [Std](../IUiCommandTarget/IUiCommandTarget.Execute.htm#std). Команды навигатора
	 объектов;


	- [Wsp](../IUiCommandTarget/IUiCommandTarget.Execute.htm#wsp). Команды инструмента
	 «Рабочее пространство».


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

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := Mb.RequestLicense(UiLicenseFeatureType.Adm);

    MbSec := MB.Security;

    User := MbSec.ResolveName("USER");

    Target := WinApplication.Instance.GetPluginTarget("Adm");

    Context := Target.CreateExecutionContext;

    Context.Data := User;

    Target.Execute("ShowHoursPolicy", Context);

    // Сохраним изменения

    MbSec.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера будет отображен диалог разграничения доступа
 в систему по времени для пользователя USER.


См. также:


[IWinApplication](IWinApplication.htm) | [IUiCommandTarget](../IUiCommandTarget/IUiCommandTarget.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
