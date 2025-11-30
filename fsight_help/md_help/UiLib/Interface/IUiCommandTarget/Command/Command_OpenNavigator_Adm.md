# OpenNavigator: Плагин Adm

OpenNavigator: Плагин Adm
-


# Команда OpenNavigator


## Назначение


Открытие менеджера безопасности для указанного репозитория.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать массив типа Variant, элементы которого содержат
 следующие значения:


		 Параметр
		 Описание


		 Элемент 1:
		 [IUiSecManagerParams](../../IUiSecManagerParams/IUiSecManagerParams.htm)
		 Параметр, определяющий настройки отображения и возможности
		 редактирования разделов. Содержит настройки репозитория, для которого
		 необходимо открыть менеджер безопасности.


## Особенности применения


Используется для открытия окна менеджера безопасности для какого-либо
 репозитория. Если в параметрах не указан репозиторий (значение свойства
 [IUiSecManagerParams.Metabase](../../IUiSecManagerParams/IUiSecManagerParams.Metabase.htm)
 равно Null), то результатом работы
 команды будет открытие менеджера безопасности без подключения к какому-либо
 репозиторию.


С помощью параметров можно скрывать разделы, открывать разделы в режиме
 чтения, запрещать сохранение политики, отключать элементы управления.


Настройки видимости и режима чтения производятся через свойства параметров
 отображения вкладок: [IUISecManagerTabParams.ReadOnly](../../IUISecManagerTabParams/IUISecManagerTabParams.ReadOnly.htm)
 и [IUISecManagerTabParams.Visible](../../IUISecManagerTabParams/IUISecManagerTabParams.Visible.htm).


## Пример


Для выполнения примера предполагается наличие формы и расположенной
 на ней кнопки «Button1».


Подключите системные сборки: Metabase, Ui.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Target: IUiCommandTarget;

	    Context: IUiCommandExecutionContext;

	    SecParams: IUiSecManagerParams;

	Begin

	    Target := WinApplication.Instance.GetPluginTarget("Adm");

	    Context := Target.CreateExecutionContext;

	    SecParams := new UiSecManagerParams.Create;

	    SecParams.Metabase := MetabaseClass.Active; // 1. Задаем репозиторий

	    //Параметры вкладок

	    SecParams.EnablePolicySave(False); // 2. Запрещаем сохранение политики

	    SecParams.Privilege.Visible := False; // 3. Прячем вкладки "Привилегии", "Мандатный доступ", "Классы объектов" и "Мониторинг нарушений защиты"

	    SecParams.Mandatory.Visible := False;

	    SecParams.Classes.Visible := False;

	    SecParams.SecurityWatch.Visible := False;

	    SecParams.Service.ReadOnly:= True; // 4. Для
	 вкладки "Сервис" включаем режим «Только чтение»

	    SecParams.RepositoryMenuEnabled := False; // 5. Запрещаем команды в меню "Репозиторий" (кроме команд "Отключить" и "Выход")

	    SecParams.ServiceMenuEnabled := False; // 6. Запрещаем команды в меню "Сервис"

	    SecParams.Users.ObjectRightsEnabled := False; // 7. Для вкладки "Пользователи" запрещаем вызов диалога со свойствами объекта

	    //Вызов менеджера
	 безопасности

	    Context.Data := SecParams;

	    Target.Execute("OpenNavigator", Context);

	End Sub Button1OnClick;


При нажатии на кнопку будет открыто окно менеджера безопасности с определенными
 настройками: часть разделов будет недоступна, изменение политики будет
 запрещено.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
