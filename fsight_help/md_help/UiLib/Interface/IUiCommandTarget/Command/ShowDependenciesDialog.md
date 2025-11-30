# ShowDependenciesDialog

ShowDependenciesDialog
-


# Команда ShowDependenciesDialog


## Назначение


Вызов стандартного диалога настройки зависимостей.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать массив типа Variant, элементы которого содержат
 следующие значения:


		 Тип значения
		 Описание


		 Элемент 1:
		 MainMessage
		 Строка основного сообщения.


		 Элемент 2:
		 DetailedMessage
		 Строка подробного сообщения.


## Особенности применения


Команда может применяться только для регламентных отчетов.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 Button с идентификатором «Button1». Пример является обработчиком события
 OnClick для компонента «Button1».


Добавьте ссылки на системные сборки «Metabase», «Report», «Ui».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    mb: IMetabase;

    Report: IPrxReport;

    Target: IUiCommandTarget;

    Context: IUiCommandExecutionContext;

    Data: Array;

Begin

    mb := MetabaseClass.Active;

    Report := mb.ItemById("REGL_REPORT").Open(Null) As IPrxReport;

    Target := WinApplication.Instance.GetPluginTarget("Report");

    Context := Target.CreateExecutionContext;

    Data := New Variant[2];

    Data[0] := "Этот файл сейчас используется.";

    Data[1] := "Укажите другое имя файла.";

    Context.Data := Data;

    Target.Execute("ShowDependenciesDialog", Context);

End Sub Button1OnClick;


После выполнения примера будет вызван диалог настройки зависимостей.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
