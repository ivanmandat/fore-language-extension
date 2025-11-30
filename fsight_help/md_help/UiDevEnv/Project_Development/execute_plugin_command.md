# Выполнение команд над объектами репозитория: Разработка прикладного приложения

Выполнение команд над объектами репозитория: Разработка прикладного приложения
-


# Выполнение команд над объектами репозитория


При работе с объектами в репозитории доступно выполнение различных действий
 как через контекстное меню, так и в визуальном интерфейсе самих объектов.
 Действия могут быть общими для всех объектов, например, открытие на просмотр
 или редактирование. Также каждый объект может обладать собственным специфическим
 набором доступных возможностей. Для того, чтобы повторно не реализовывать
 различные визуальные диалоги или визуальный интерфейс самих объектов,
 в сборке [Ui](UiLib.chm::/UiLib_Title.htm) реализованы
 специальные средства для выполнения различных команд над объектами репозитория.
 Список доступных команд, а также наборы необходимых для выполнения параметров,
 представлены в описании метода [IUiCommandTarget.Execute](UiLib.chm::/Interface/IUiCommandTarget/IUiCommandTarget.Execute.htm).
 Для выполнения команды в коде необходимо выполнить следующие этапы:


	- С помощью метода [IWinApplication.GetObjectTarget](UiLib.chm::/Interface/IWinApplication/IWinApplication.GetObjectTarget.htm)
	 или [IWinApplication.GetPluginTarget](UiLib.chm::/Interface/IWinApplication/IWinApplication.GetPluginTarget.htm)
	 получите объект, который будет использоваться для выполнения команд.
	 Метод [IWinApplication.GetObjectTarget](UiLib.chm::/Interface/IWinApplication/IWinApplication.GetObjectTarget.htm)
	 используется при выполнении общих команд для заданного объекта, метод
	 [IWinApplication.GetPluginTarget](UiLib.chm::/Interface/IWinApplication/IWinApplication.GetPluginTarget.htm)
	 - при выполнении команд плагина, который ориентирован на работу с
	 определённым блоком/инструментом «Форсайт. Аналитическая платформа».


	- С помощью метода [IUiCommandTarget.CreateExecutionContext](UiLib.chm::/Interface/IUiCommandTarget/IUiCommandTarget.CreateExecutionContext.htm)
	 создайте контекст, который используется для задания параметров выполнения
	 команд.


	- Вызовите метод [IUiCommandTarget.Execute](UiLib.chm::/Interface/IUiCommandTarget/IUiCommandTarget.Execute.htm)
	 для выполнения команды.


Результатом выполнения команд являются различные стандартные визуальные
 диалоги, которые используются в при работе с инструментами в «Форсайт. Аналитическая платформа».


Рассмотрим примеры выполнения некоторых команд:


			// Открытие объекта репозитория

Sub OpenObject;

Var

    Mb: IMetabase;

    ObjDes: IMetabaseObjectDescriptor;

    Target: IUiCommandTarget;

Begin

    MB := MetabaseClass.Active;

    ObjDes := MB.ItemById("Report");

    // Выполнение команды для заданного объекта репозитория

    Target := WinApplication.Instance.GetObjectTarget(ObjDes);

    Target.Execute("Object.Open", Null);

End Sub OpenObject;

// Настройка свойств пользователя

Sub UserProperty;

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

    // Выполнение команд плагина администрирования

    Target := WinApplication.Instance.GetPluginTarget("Adm");

    // Контекст для настройки параметров выполнения команды

    Context := Target.CreateExecutionContext;

    Data := New Variant[2];

    // Менеджер безопасности

    Data[0] := MbSec;

    // Пользователь

    Data[1] := User;

    Context.Data := Data;

    Target.Execute("ShowUserProp", Context);

End Sub UserProperty;

// Настройка параметров условных форматов для заданного диапазона ячеек

Sub FormatConditions;

Var

    Mb: IMetabase;

    Report: IPrxReport;

    Sheet: ITabSheet;

    Target: IUiCommandTarget;

    Context: IUiCommandExecutionContext;

    Data: Array;

    Result: Variant;

Begin

    Mb := MetabaseClass.Active;

    // Открытие отчёта на редактирование

    Report := Mb.ItemById("Report").Edit As IPrxReport;

    // Получение таблицы активного листа

    Sheet := (Report.ActiveSheet As IPrxTable).TabSheet;

    Target := WinApplication.Instance.GetPluginTarget("Report");

    Context := Target.CreateExecutionContext;

    Data := New Variant[2];

    Data[0] := Sheet;

    // Диапазон, для которого необходимо настроить условное форматирование

    Data[1] := Sheet.ParseRange("A0:B10");

    Context.Data := Data;

    Result := Target.Execute("FormatConditionsSetup", Context);

    // Если в диалоге нажали ОК, то сохраняем отчёт с изменениями

    If Result Then

        (Report As IMetabaseObject).Save;

    End If;

End Sub FormatConditions;


См. также:


[Разработка
 прикладного приложения](../01_Development_Environment/01_Purpose_of_the_constructor/Purpose_of_the_constructor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
