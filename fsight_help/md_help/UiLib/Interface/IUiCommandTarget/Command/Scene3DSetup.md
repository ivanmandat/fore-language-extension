# Scene3DSetup

Scene3DSetup
-


# Команда Scene3DSetup


## Назначение


Вызов стандартного диалога настройки параметров 3D-сцены.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать следующее значение:


		 Тип значения
		 Описание


		 [IPrxScene3D](KeReport.chm::/Interface/IPrxScene3D/IPrxScene3D.htm)
		 3D-сцена, параметры которой необходимо настроить.


## Особенности применения


Команда может применяться только для регламентных отчетов.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием "Button1", компонента ReportBox
 и компонента UiReport с наименованием
 «UiReport1», являющегося источником данных для ReportBox.
 На активном листе регламентного отчета, подключенного в компоненте «UiReport1»,
 вставлен один объект - 3D-сцена.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Sheet: ITabSheet;

	    Scene3D: IPrxScene3D;

	    Target: IUiCommandTarget;

	    Context: IUiCommandExecutionContext;

	Begin

	    Sheet := (UiReport1.Instance As IPrxReport).ActiveSheet As ITabSheet;

	    Scene3D := Sheet.Objects.Item(0).Extension As IPrxScene3D;

	    Target := WinApplication.Instance.GetPluginTarget("Report");

	    Context := Target.CreateExecutionContext;

	    Context.Data := Scene3D;

	    Target.Execute("Scene3DSetup", Context);

	End Sub Button1OnClick;


При нажатии на кнопку будет выведен стандартный диалог настройки параметров
 3D-сцены.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
