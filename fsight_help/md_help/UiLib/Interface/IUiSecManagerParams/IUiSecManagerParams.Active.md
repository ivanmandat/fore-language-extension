# IUiSecManagerParams.Active

IUiSecManagerParams.Active
-


# IUiSecManagerParams.Active


## Синтаксис


Acitve: [SecManagerMode](../../Enums/SecManagerMode.htm);


## Описание


Свойство Active определяет активную
 вкладку при открытии менеджера безопасности.


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

    SecParams := New UiSecManagerParams.Create;

    SecParams.Metabase := MetabaseClass.Active; // Задаем метабазу

    SecParams.Active := SecManagerMode.Classes; // Активируем вкладку «Классы»

    Context.Data := SecParams;

    Target.Execute("OpenNavigator", Context);

End Sub Button1OnClick;


При нажатии на кнопку будет открыт менеджер
 безопасности на вкладке «Классы объектов».


См. также:


[IUiSecManagerParams](IUiSecManagerParams.htm)
 | [OpenNavigator:
 Плагин "Adm"](../IUiCommandTarget/Command/Command_OpenNavigator_Adm.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
