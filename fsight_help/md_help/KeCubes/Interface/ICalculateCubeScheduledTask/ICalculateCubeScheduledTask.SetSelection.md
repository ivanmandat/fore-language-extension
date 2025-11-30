# ICalculateCubeScheduledTask.SetSelection

ICalculateCubeScheduledTask.SetSelection
-


# ICalculateCubeScheduledTask.SetSelection


## Синтаксис


SetSelection(Value: [IDimSelectionSet](kedims.chm::/interface/idimselectionset/idimselectionset.htm));


## Параметры


Value. Отметка куба-источника,
 в соответствии с которой будет осуществляться загрузка данных в куб-приёмник.


## Описание


Метод SetSelection осуществляет
 установку отметки, в соответствии с которой будет выполняться загрузка
 в куб при выполнении задачи.


## Комментарии


Метод используется при использовании задачи для запуска загрузчика в
 куб.


## Пример


Для выполнения примера в репозитории предполагается наличие загрузчика
 в куб и контейнера запланированных задач с идентификаторами Cube_Load
 и CUBE_TASK соответственно.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj, Parent: IMetabaseObject;

    Loader: ICubeLoader;

    CrInfo: IMetabaseObjectCreateInfo;

    LoaderTask: ICalculateCubeScheduledTask;

    CubeInst: ICubeInstance;

    Period: IScheduledTaskPeriodDaily;

    Prop: IScheduledTaskProperties;

    DimSS: IDimSelectionSet;

    DimS: IDimSelection;

    d: DateTime;

Begin

    MB := MetabaseClass.Active;

    // Контейнер запланированных задач

    Parent := MB.ItemById("CUBE_TASK").Bind;

    // Загрузчик в куб

    Loader := Mb.ItemById("Cube_Load").Bind As ICubeLoader;

    CrInfo := MB.CreateCreateInfo;

    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_TASK_CALCULATECUBE;

    CrInfo.Id := "LoaderTask";

    CrInfo.Name := "Задача запуска загрузчика в куб";

    CrInfo.Parent := Parent;

    CrInfo.Permanent := False;

    MObj := MB.CreateObject(CrInfo).Edit;

    // задача запуска загрузчика в куб

    LoaderTask := MObj As ICalculateCubeScheduledTask;

    // Получение отметки, по которой будет осуществляться загрузка данных

    CubeInst := (Loader.Destination.Cube As IMetabaseObject).Open(Null) As ICubeInstance;

    DimSS := CubeInst.Destinations.DefaultDestination.CreateDimSelectionSet;

    // Все элементы в отметке

    For Each DimS In DimSS Do

        DimS.SelectAll;

    End For;

    LoaderTask.SourceCube := (Loader As ICubeModel);

    // Настройка свойств задачи

    Prop := LoaderTask.Properties;

    Period := Prop.CreatePeriod(ScheduledTaskPeriodType.Daily) As IScheduledTaskPeriodDaily;

    d := DateTime.Now;

    d := d.Compose(d.Year, d.Month, d.Day, 18, 00, 00, 00);

    Period.StartDateTime := d;

    Period.EveryDays := 3;

    Prop.Period := Period;

    LoaderTask.SetSelection(DimSS);

    MObj.Save;

End Sub UserProc;


После выполнения примера в контейнер запланированных задач будет добавлена
 задача запуска загрузчика в куб. Задача будет запускаться ежедневно, начиная
 с текущего дня, в "18:00" с интервалом в два дня.


См. также:


[ICalculateCubeScheduledTask](ICalculateCubeScheduledTask.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
