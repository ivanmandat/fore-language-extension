# ShowReporter: Плагин Express

ShowReporter: Плагин Express
-


# Команда ShowReporter


## Назначение


Открытие экспресс-отчёта.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать следующее значение:


		 Тип значения
		 Описание


		 [IEaxAnalyzer](KeExpress.chm::/Interface/IEaxAnalyzer/IEaxAnalyzer.htm)
		 Экспресс-отчёт, который необходимо открыть.


## Особенности применения


Команда может применяться только для экспресс-отчётов. Отчёт можно открыть
 как на просмотр, так и на редактирование. Для просмотра укажите в свойстве
 [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm)
 экспресс-отчёт, полученный с помощью метода [Open](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Open.htm)
 ([OpenWithParam](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.OpenWithParam.htm)),
 а для редактирования укажите экспресс-отчёт, полученный с помощью метода
 [Edit](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Edit.htm)
 или [Bind](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Bind.htm).
 При необходимости в открываемом отчёте могут быть изменены различные параметры
 отображения, установлена необходимая отметка по измерениям.


Примечание.
 При получении экспресс-отчёта через метод [Bind](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Bind.htm)
 после редактирования будет возможность сохранения только в новый экспресс-отчёт.


## Пример 1


Для выполнения примера предполагается наличие формы и расположенной
 на ней кнопки с наименованием «Button1». В репозитории имеется экспресс-отчёта
 с идентификатором «EXPRESS_REPORT».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    Target: IUiCommandTarget;

	    Context: IUiCommandExecutionContext;

	Begin

	    MB := MetabaseClass.Active;

	    Target := WinApplication.Instance.GetPluginTarget("Express");

	    Context := Target.CreateExecutionContext;

	    Context.Data := MB.ItemById("EXPRESS_REPORT").Edit As IEaxAnalyzer;

	    Target.Execute("ShowReporter", Context);

	End Sub Button1OnClick;


При нажатии на кнопку указанный экспресс-отчёт будет открыт.


## Пример 2


Для выполнения примера предполагается наличие формы и расположенной
 на ней кнопки с наименованием «Button1». В репозитории имеется экспресс-отчёта
 с идентификатором «EXPRESS_REPORT».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    OLAP: IEaxAnalyzer;

	    Pivot: IPivot;

	    DimSS: IDimSelectionSet;

	    Target: IUiCommandTarget;

	    Context: IUiCommandExecutionContext;

	Begin

	    MB := MetabaseClass.Active;

	    Target := WinApplication.Instance.GetPluginTarget("Express");

	    OLAP := MB.ItemById("EXPRESS_REPORT").Edit As IEaxAnalyzer;

	    Pivot := OLAP.Pivot;

	    DimSS := Pivot.Selection;

	    Pivot.BeginSelectionUpdate;

	    //...

	    //DimSS...

	    //Изменение отметки

	    //...

	    Pivot.EndSelectionUpdate;

	    //Открытие экспресс-отчёта

	    Context := Target.CreateExecutionContext;

	    Context.Data := OLAP;

	    Target.Execute("ShowReporter", Context);

	End Sub Button1OnClick;


При нажатии на кнопку экспресс-отчёт будет открыт с заданной отметкой.


## Пример 3


Для выполнения примера предполагается наличие формы и расположенной
 на ней кнопки с наименованием «Button1». В репозитории имеется куб с идентификатором
 «STD_CUBE».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    CrInfo: IMetabaseObjectCreateInfo;

	    ExpressDesc: IMetabaseObjectDescriptor;

	    Express: IEaxAnalyzer;

	    Target: IUiCommandTarget;

	    Context: IUiCommandExecutionContext;

	Begin

	    MB := MetabaseClass.Active;

	    //Создание временного экспресс-отчёта

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassId := MetabaseObjectClass.KE_CLASS_EXPRESSREPORT;

	    CrInfo.IsTemporary := True;

	    CrInfo.KeepEdit := False;

	    ExpressDesc := MB.CreateObject(CrInfo);

	    Express := ExpressDesc.Open(Null) As IEaxAnaLyzer;

	    //Указание источника, который будет открыт в экспресс-отчёте

	    Express.OpenCube(MB.ItemById("STD_CUBE").Open(Null) As ICubeInstance);

	    //Открытие полученного экспресс-отчёта на просмотр

	    Target := WinApplication.Instance.GetPluginTarget("Express");

	    Context := Target.CreateExecutionContext;

	    Context.Data := Express;

	    Target.Execute("ShowReporter", Context);

	End Sub Button1OnClick;


При нажатии на кнопку будет создан временный экспресс-отчёт. После задания
 источника, экспресс-отчёт будет открыт на просмотр.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
