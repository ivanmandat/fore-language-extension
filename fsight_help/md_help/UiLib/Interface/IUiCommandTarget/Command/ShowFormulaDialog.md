# ShowFormulaDialog

ShowFormulaDialog
-


# Команда ShowFormulaDialog


## Назначение


Вызов мастера функций регламентного отчета.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm). Для работы команды в данном свойстве необходимо указать массив типа Variant, элементы которого содержат следующие значения:


 Тип значения
 Описание


 Элемент 1: [IPrxReport](KeReport.chm::/Interface/IPrxReport/IPrxReport.htm)
 Регламентный отчет, для которого создается функция.


 Элемент 2: String
 Функция, на которой будет сфокусирован указатель в мастере функций. В качестве значения необходимо указать наименование функции, либо пустую строку, если функция не известна.


## Особенности применения


Команда может применяться только для регламентных отчетов. Результатом выполнения команды будет логическое значение True, если была нажата кнопка «ОК» и False, если была нажата кнопка «Отмена». Если функция была сформирована и в мастере была нажата кнопка «ОК», то получить созданную функцию можно повторно получив значение свойства [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm) и приведя его к массиву. Значение формулы будет находиться во втором элементе массива.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием "Button1", компонента ReportBox и компонента UiReport с наименованием «UiReport1», являющегося источником данных для ReportBox. Компонент «UiReport1» подключен к какому-либо регламентному отчету.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Target: IUiCommandTarget;

    Context: IUiCommandExecutionContext;

    Data: Array;

Begin

    Target := WinApplication.Instance.GetPluginTarget("Report");

    Context := Target.CreateExecutionContext;

    Data := New Variant[2];

    Data[0] := UiReport1.Instance;

    Data[1] := "Abs";

    Context.Data := Data;

    If (Target.Execute("ShowFormulaDialog", Context) As Boolean) Then

        Debug.WriteLine((Context.Data As Array)[1]);

    Else

        Debug.WriteLine("Создание функции отменено.");

    End If;

End Sub Button1OnClick;


При нажатии на кнопку будет открыт мастер функций. Указатель будет сфокусирован на функции «Abs». После формирования функции и нажатия кнопки «ОК» полный текст функции будет выведен в консоль среды разработки.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
