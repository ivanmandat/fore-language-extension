# DebugObject

DebugObject
-


# Команда DebugObject


## Назначение


Запуск указанного объекта среды разработки на отладку.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать следующее значение:


		 Тип значения
		 Описание


		 [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm)
		 Описание объекта, который необходимо запустить на отладку.


## Особенности применения


Команда поддерживается только для форм, модулей и сборок. Вызов команды
 приводит к запуску отдельного процесса, в котором осуществляется выполнение
 указанного объекта.


Данная команда не открывает указанный объект в среде разработки. Если
 требуется отладка в среде разработки, то предварительно необходимо открыть
 объект на редактирование с помощью команды [Object.Edit](Object.Edit.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенных на
 ней двух кнопок с наименованиями «Button1» и «Button2» и компонента EditBox
 с наименованием «EditBox1». Компонент «EditBox1» используется для указания
 идентификатора объекта, который необходимо запустить на отладку. Кнопка
 «Button1» открывает объект на редактирование в среде разработки. Кнопка
 «Button2» запускает объекта на отладку. Ниже приведен полный код формы.


			Class TestForm: Form

    Button1: Button;

    Button2: Button;

    EditBox1: EditBox;


    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

    Begin

        EditInDevEnv(EditBox1.Text);

    End Sub Button1OnClick;


    Sub Button2OnClick(Sender: Object; Args: IMouseEventArgs);

    Begin

        DebugInDevEnv(EditBox1.Text);

    End Sub Button2OnClick;


    Sub EditInDevEnv(Id: String);

    Var

        Mb: IMetabase;

        ObjDes: IMetabaseObjectDescriptor;

        Target: IUiCommandTarget;

    Begin

        MB := MetabaseClass.Active;

        ObjDes := MB.ItemById(Id);

        Target := WinApplication.Instance.GetObjectTarget(ObjDes);

        Target.Execute("Object.Edit", Null);

    End Sub EditInDevEnv;


    Sub DebugInDevEnv(Id: String);

    Var

        Mb: IMetabase;

        ObjDes: IMetabaseObjectDescriptor;

        Target: IUiCommandTarget;

        Context: IUiCommandExecutionContext;

    Begin

        MB := MetabaseClass.Active;

        ObjDes := MB.ItemById(Id);

        Target := WinApplication.Instance.GetPluginTarget("DevEnv");

        Context := Target.CreateExecutionContext;

        Context.Data := ObjDes;

        Target.Execute("DebugObject", Context);

    End Sub DebugInDevEnv;


End Class TestForm;


После запуска формы необходимо в «EditBox1» указать идентификатор объекта,
 который необходимо запустить на отладку. При нажатии на кнопку «Button1»
 указанный объект будет открыт в среде разработки. При необходимости можно
 расставить точки останова. После нажатия на кнопку «Button2» объект будет
 запущен на отладку. При достижении точки останова процесс выполнения будет
 приостановлен. Соответствующая строка будет подсвечена в окне макроса.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
