# ApplyUpdate

ApplyUpdate
-


# Команда ApplyUpdate


## Назначение


Запуск мастера установки обновления.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать следующее значение:


		 Тип значения
		 Описание


		 [IMetabase](KeSom.chm::/Interface/IMetabase/IMetabase.htm)
		 Репозиторий, в рамках которого будет запущен мастер установки
		 обновления.


## Особенности применения


При выполнении команды будет выдан диалог выбора файла. После выбора
 файла обновления и нажатия кнопки «ОК» будет запущен мастер установки
 выбранного обновления.


## Пример


Для выполнения примера предполагается наличие формы и расположенной
 на ней кнопки с наименованием "Button1".


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Target: IUiCommandTarget;

	    Context: IUiCommandExecutionContext;

	Begin

	    Target := WinApplication.Instance.GetPluginTarget("MetabaseUpdate");

	    Context := Target.CreateExecutionContext;

	    Context.Data := MetabaseClass.Active;

	    Target.Execute("ApplyUpdate", Context);

	End Sub Button1OnClick;


При нажатии на кнопку будет выведен диалог открытия файлов обновления
 (*.pef). После выбора файла и нажатия кнопки «ОК» будет запущен мастер
 установки обновления в рамках текущего репозитория.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
