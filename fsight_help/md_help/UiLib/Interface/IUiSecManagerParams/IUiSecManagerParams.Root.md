# IUiSecManagerParams.Root

IUiSecManagerParams.Root
-


# IUiSecManagerParams.Root


## Синтаксис


Root: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Описание


Свойство Root определяет параметры
 корневой папки навигатора.


## Пример


Для выполнения примера предполагается наличие формы и расположенной
 на ней кнопки «Button1». В репозитории предполагается наличие папки с
 идентификатором F_ROOT.


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

    SecParams.Root := SecParams.Metabase.ItemById("F_ROOT"); //Указываем корневую папку

    SecParams.Active := SecManagerMode.Navigator; // Активируем закладку «Навигатор»

    Context.Data := SecParams;

    Target.Execute("OpenNavigator", Context);

End Sub Button1OnClick


После выполнения примера будет открыт менеджер
 безопасности на вкладке «Навигатор». В качестве корневой папки будет задана
 указанная папка.


См. также:


[IUiSecManagerParams](IUiSecManagerParams.htm)
 | [OpenNavigator:
 Плагин "Adm"](../IUiCommandTarget/Command/Command_OpenNavigator_Adm.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
