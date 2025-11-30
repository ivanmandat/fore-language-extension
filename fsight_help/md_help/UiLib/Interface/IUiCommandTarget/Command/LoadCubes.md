# LoadCubes

LoadCubes
-


# Команда LoadCubes


## Назначение


Вызов диалога импорта данных в куб.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать следующее значение:


		 Тип значения
		 Описание


		 [IMetabaseObjectCreateInfo](KeSom.chm::/Interface/IMetabaseObjectCreateInfo/IMetabaseObjectCreateInfo.htm)
		 Описание объекта репозитория, который будет соответствовать
		 создаваемому кубу.


## Особенности применения


При выполнении команды будет выведен диалог выбора файла с данными.
 Для выбора доступны файлы следующих форматов: XLS, XLSX, TXT, CSV. После
 выбора файла и выполнения всех этапов настройки импорта данных в репозитории
 будут созданы все необходимые таблицы и стандартный куб.


Если в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm)
 не указано описание создаваемого куба, то на последней стадии диалога
 будет выдан диалог выбора объекта репозитория, в который будет сохранен
 куб.


Результатом выполнения метода [Execute](../IUiCommandTarget.Execute.htm)
 будет созданный стандартный куб, открытый на редактирование.


## Пример


Для выполнения примера предполагается наличие формы и расположенной
 на ней кнопки с наименованием "Button1". В репозитории имеется
 папка с идентификатором «F_Cubes», в которой хранятся кубы.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    CrInfo: IMetabaseObjectCreateInfo;

	    CommandTarget: IUiCommandTarget;

	    Context: IUiCommandExecutionContext;

	Begin

	    MB := MetabaseClass.Active;

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.Permanent := True;

	    CrInfo.Parent := MB.ItemById("F_Cubes");

	    CrInfo.Id := "New_Cube";

	    CrInfo.Name := "Стандартный
	 куб";

	    CommandTarget := WinApplication.Instance.GetPluginTarget("Cubes");

	    Context := CommandTarget.CreateExecutionContext;

	    Context.Data := CrInfo;

	    CommandTarget.Execute("LoadCubes", Context);

	End Sub Button1OnClick;


При нажатии на кнопку будет выведен диалог импорта данных в куб. После
 выбора файла с данными и настройки параметров импорта куб будет сохранен
 в указанной папке с указанными идентификатором и наименованием.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
