# CopyRubricator

CopyRubricator
-


# Команда CopyRubricator


## Назначение


Копирование базы данных временных рядов.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать следующее значение:


		 Тип значения
		 Описание


		 [IMetabaseObjectCopyInfo](KeSom.chm::/Interface/IMetabaseObjectCopyInfo/IMetabaseObjectCopyInfo.htm)
		 Объект с параметрами копирования объекта репозитория «База
		 данных временных рядов».


## Особенности применения


Команда может применяться только баз данных временных рядов.


## Пример


Для выполнения примера в репозитории должна присутствовать база данных
 временных рядов с идентификатором «FC». Создайте форму и разместите на
 ней кнопку с идентификатором «Button1». Подключите системные сборки «Metabase»,
 «Cubes», «Ui».


Пример является обработчиком события OnClick
 для «Button1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    MB: IMetabase;

    Target: IUiCommandTarget;

    Context: IUiCommandExecutionContext;

    CInfo: IMetabaseObjectCopyInfo;

Begin

    MB := MetabaseClass.Active;

    CInfo := MB.CreateCopyInfo;

    CInfo.Id := MB.GenerateId("FC_COPY");

    CInfo.Name := "Копия базы данных временных рядов";

    CInfo.WithData := True;

    CInfo.Source := MB.ItemById("FC");

    CInfo.Destination := MB.Root;

    Target := WinApplication.Instance.GetPluginTarget("Cubes");

    Context := Target.CreateExecutionContext;

    Context.Data := CInfo;

    Target.Execute("CopyRubricator", Context);

End Sub Button1OnClick;


При нажатии на кнопку будет выполнено копирование базы данных временных
 рядов вместе с данными.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
