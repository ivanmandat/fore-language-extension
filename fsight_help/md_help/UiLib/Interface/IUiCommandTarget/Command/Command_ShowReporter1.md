# ShowReporter: Плагин Report

ShowReporter: Плагин Report
-


# Команда ShowReporter


## Назначение


Открытие регламентного отчёта или создание нового отчёта, не связанного
 с репозиторием.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать одно из следующих
 значений:


		 Тип значения
		 Описание


		 [IPrxReport](KeReport.chm::/Interface/IPrxReport/IPrxReport.htm)
		 Регламентный отчёт репозитория, который необходимо открыть.


		 String
		 Путь и наименование файла, в который экспортирован регламентный
		 отчёт (файл с расширением *.ppreport).


## Особенности применения


Команда может применяться только для регламентных отчётов. Отчёт можно
 открыть как на просмотр, так и на редактирование. Для просмотра укажите
 в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm)
 отчёт, полученный с помощью метода [Open](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Open.htm)
 ([OpenWithParam](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.OpenWithParam.htm))
 или [Bind](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Bind.htm),
 а для редактирования укажите отчёт, полученный с помощью метода [Edit](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Edit.htm).


Для открытия отчёта из файла укажите в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm)
 полный путь к файлу. Отчёт будет открыт с возможностью редактирования.


Если свойство [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm)
 не задано или в методе [Execute](../IUiCommandTarget.Execute.htm)
 не указаны дополнительные параметры выполнения, то будет создан новый
 регламентный отчёт, не связанный с репозиторием.


## Пример 1


Для выполнения примера предполагается наличие формы и расположенной
 на ней кнопки с наименованием "Button1". В репозитории имеется
 регламентный отчёт с идентификатором "Report_1".


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    Target: IUiCommandTarget;

	    Context: IUiCommandExecutionContext;

	Begin

	    MB := MetabaseClass.Active;

	    Target := WinApplication.Instance.GetPluginTarget("Report");

	    Context := Target.CreateExecutionContext;

	    Context.Data := MB.ItemById("Report_1").Edit As IPrxReport;

	    Target.Execute("ShowReporter", Context);

	End Sub Button1OnClick;


При нажатии на кнопку указанный регламентный отчёт будет открыт на редактирование.


## Пример 2


Для выполнения примера предполагается наличие формы и расположенной
 на ней кнопки с наименованием "Button1".


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    Target: IUiCommandTarget;

	Begin

	    MB := MetabaseClass.Active;

	    Target := WinApplication.Instance.GetPluginTarget("Report");

	    Target.Execute("ShowReporter", Null);

	End Sub Button1OnClick;


При нажатии на кнопку будет создан новый регламентный отчёт, не связанный
 с репозиторием. Отчёт будет открыт на редактирование.


## Пример 3


Для выполнения примера предполагается наличие формы и расположенной
 на ней кнопки с наименованием "Button1". В корневом каталоге
 диска «C» имеется экспортированный регламентный отчёт «Отчёт по показателям
 за январь.ppreport».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    Target: IUiCommandTarget;

	    Context: IUiCommandExecutionContext;

	Begin

	    MB := MetabaseClass.Active;

	    Target := WinApplication.Instance.GetPluginTarget("Report");

	    Context := Target.CreateExecutionContext;

	    Context.Data := "c:\Отчёт
	 по показателям за январь.ppreport";

	    Target.Execute("ShowReporter", Context);

	End Sub Button1OnClick;


При нажатии на кнопку указанный регламентный отчёт будет открыт на редактирование.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
