# ShowStyleDialog

ShowStyleDialog
-


# Команда ShowStyleDialog


## Назначение


Вызов стандартного диалога настройки формата объектов рабочего пространства.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать следующее значение:


		 Тип значения
		 Описание


		 [IWxView](Andy.chm::/Interface/IWxView/IWxView.htm)
		 Параметры отображения рабочего пространства, в рамках которых
		 осуществляется выделение объекта(ов) и вывода диалога настройки
		 формата.


## Особенности применения


Команда может применяться только для рабочего пространства.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента WorkspaceBox с наименованием
 «WorkspaceBox1» и компонента UiWorkspaceObject, который является источником
 данных для «WorkspaceBox1». К UiWorkspaceObject подключено какое-либо
 рабочее пространство, свойству Active установлено значение True. Добавьте
 ссылку на системную сборку Ui.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Target: IUiCommandTarget;

    Context: IUiCommandExecutionContext;

Begin

    Target := WinApplication.Instance.GetPluginTarget("Wsp");

    Context := Target.CreateExecutionContext;

    Context.Data := WorkspaceBox1.View;

    Target.Execute("ShowStyleDialog", Context);

End Sub Button1OnClick;


При выделении объекта(ов) рабочего пространства и при нажатии на кнопку
 будет выведен диалог настройки формата объектов.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
