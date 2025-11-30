# OpenCube

OpenCube
-


# Команда OpenCube


## Назначение


Создание экспресс-отчета на базе куба и открытие его на просмотр.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать следующее значение:


		 Тип значения
		 Описание


		 [ICubeInstance](KeCubes.chm::/Interface/ICubeInstance/ICubeInstance.htm)
		 Открытый куб, на базе которого будет создан экспресс-отчет.


## Особенности применения


Команда может применяться только для открытого куба.


## Пример


Для выполнения примера предполагается наличие формы и расположенной
 на ней кнопки с наименованием "Button1". В репозитории имеется
 куб с идентификатором "CUBE_1".


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    Target: IUiCommandTarget;

	    Context: IUiCommandExecutionContext;

	Begin

	    MB := MetabaseClass.Active;

	    Target := WinApplication.Instance.GetPluginTarget("Express");

	    Context := Target.CreateExecutionContext;

	    Context.Data := MB.ItemById("CUBE_1").Open(Null) As ICubeInstance;

	    Target.Execute("OpenCube", Context);

	End Sub Button1OnClick;


При нажатии на кнопку будет создан новый экспресс-отчет на базе куба
 "Cube_1". Данный отчет будет открыт в режиме просмотра.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
