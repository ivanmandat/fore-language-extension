# IUiCommandExecutionContext.Modal

IUiCommandExecutionContext.Modal
-


# IUiCommandExecutionContext.Modal


## Синтаксис


Modal: Boolean;


## Описание


Свойство Modal определяет признак открытия окна диалога модально, относительно окна, установленного в свойстве [ParentWindow](IUiCommandExecutionContext.ParentWindow.htm).


## Комментарии


По умолчанию свойству установлено значение False, при этом диалог открывается не модально.


Если свойству установить значение True, то окно диалога будет открыто модально относительно окна, установленного в свойстве [ParentWindow](IUiCommandExecutionContext.ParentWindow.htm). Если данному свойству установлено значение True, но свойство [ParentWindow](IUiCommandExecutionContext.ParentWindow.htm) не установлено, то диалог будет открыт не модально. Данное свойство актуально при использовании следующих команд:


-
[CalcCubes.EditFormulas](../IUiCommandTarget/Command/CalcCube.EditFormulas.htm)


-
[CalcCubes.Execute](../IUiCommandTarget/Command/CalcCube.Execute.htm)


-
[LinkTables](../IUiCommandTarget/Command/DB_LinkTables.htm)


-
[FactRubricator.ShowImportDialog](../IUiCommandTarget/Command/FactRubricator_ShowImportDialog.htm)


-
[FactRubricator.ShowExportDialog](../IUiCommandTarget/Command/FactRubricator_ShowExportDialog.htm)


Примечание. Ряд диалогов всегда открывается модально относительно окна, указанного в свойстве [ParentWindow](IUiCommandExecutionContext.ParentWindow.htm), либо относительно навигатора объектов, если свойство [ParentWindow](IUiCommandExecutionContext.ParentWindow.htm) не установлено.


## Пример


Для выполнения примера предполагается наличие формы и расположенной на ней кнопки с наименованием "Button1".


    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

    Var

        CommandTarget: IUiCommandTarget;

        Context: IUiCommandExecutionContext;

    Begin

        CommandTarget := WinApplication.Instance.GetPluginTarget("Db");

        Context := CommandTarget.CreateExecutionContext;

        Context.Data := MetabaseClass.Active.Root;

        Context.ParentWindow := Self As IWin32Window;

        Context.Modal := True;

        CommandTarget.Execute("LinkTables", Context);

    End Sub Button1OnClick;


При нажатии на кнопку будет открыт мастер создания прикрепленной таблицы. Данный диалог будет открыт модально относительно текущей формы. Если в диалоге указать все параметры и нажать кнопку «Готово», то прикрепленная таблица будет создана в корневой папке текущего репозитория.


См. также:


[IUiCommandExecutionContext](IUiCommandExecutionContext.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
