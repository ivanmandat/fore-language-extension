# CopyModelSpace

CopyModelSpace
-


# Команда CopyModelSpace


## Назначение


Копирование контейнера моделирования.


## Параметры использования


Параметры команды передаются в свойстве [IUiCommandExecutionContext.Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать следующее значение:


		 Тип значения
		 Описание


		 [IMetabaseObjectCopyInfo](kesom.chm::/interface/imetabaseobjectcopyinfo/imetabaseobjectcopyinfo.htm)
		 Объект с параметрами копирования объекта репозитория «Контейнер
		 моделирования».


## Особенности применения


Команда применяется только для контейнера моделирования


## Пример


Для выполнения примера предполагается наличие формы, содержащей кнопку
 с идентификатором Button1.


В репозитории предполагается наличие контейнера моделирования с идентификатором
 MS_PLUGIN.


Добавьте ссылки на системные сборки: Fore, Metabase, Ms, UI.


Пример является обработчиком события OnClick для кнопки Button1.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Mb: IMetabase;

    CInfo: IMetabaseObjectCopyInfo;

    Target: IUiCommandTarget;

    Context: IUiCommandExecutionContext;

Begin

    // Получаем текущий репозиторий

    Mb := MetabaseClass.Active;

    // Создаем объект для копирования и задаём параметры

    CInfo := MB.CreateCopyInfo;

    CInfo.Id := MB.GenerateId("MS_PLUGIN_COPY");

    CInfo.Name := "Копия контейнера";

    CInfo.WithData := True;

    CInfo.Source := MB.ItemById("MS_PLUGIN");

    CInfo.Destination := MB.Root;

    // Получаем плагин Ms

    Target := WinApplication.Instance.GetPluginTarget("Ms");

    // Создаём контекст для выполнения команды

    Context := Target.CreateExecutionContext;

    // Передаём параметр команды

    Context.Data := CInfo;

    // Выполняем команду

    Target.Execute("CopyModelSpace", Context);

End Sub Button1OnClick;


В результате выполнения примера при нажатии на кнопку Button1 будет
 выполнено копирование контейнера моделирования вместе с данными.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
