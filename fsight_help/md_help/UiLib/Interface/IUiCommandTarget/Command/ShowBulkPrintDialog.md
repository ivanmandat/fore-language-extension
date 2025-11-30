# ShowBulkPrintDialog: Плагин Express

ShowBulkPrintDialog: Плагин Express
-


# Команда ShowBulkPrintDialog


## Назначение


Вызов стандартного диалога пакетной печати экспресс-отчета.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать массив типа Variant, элементы которого содержат
 следующие значения:


		 Тип значения
		 Описание


		 Элемент 1: [IEaxAnalyzer](KeExpress.chm::/Interface/IEaxAnalyzer/IEaxAnalyzer.htm)
		 Экспресс-отчет.


		 Элемент 2: Boolean
		 Флаг, включающий системную печать. Если False,
		 то при закрытии мастера печатать нужно будет в прикладном коде.


		 Элемент 3: Boolean
		 Флаг, включающий предупреждения о том, что в отчете не выполнены
		 условия для печати. Если передать в параметре значение True,
		 то при попытке печати отчета с невыполенными условиями будет выдано
		 предупреждение, процесс печати будет остановлен и метод [Execute](../IUiCommandTarget.Execute.htm)
		 вернет результат печати - False.
		 Если передать в параметре False,
		 то при попытке печати отчета с невыполенными условиями
		 процесс печати будет остановлен без предупреждений и метод [Execute](../IUiCommandTarget.Execute.htm)
		 вернет результат печати - False.


## Особенности применения


Метод [Execute](../IUiCommandTarget.Execute.htm), при корректном
 экспресс-отчете, вернет результат печати:


	-


		- True.
		 Успешно. В случае, если печать прошла успешно;


		- False.
		 Неуспешно. В случае, если пользователь отменил печать либо отчет
		 не удовлетворяет условиям печати.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1». В репозитории имеется экспресс-отчет
 с идентификатором «EXPRESS_REPORT».


Добавьте ссылки на системные сборки «Express», «Metabase» и «Ui».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var Target: IUiCommandTarget;

	    Context: IUiCommandExecutionContext;

	    Data: Array;

	    Result: Array;

	    m_Analyzer : IEaxAnalyzer;

	Begin

	    m_Analyzer := MetabaseClass.Active.ItemById("EXPRESS_REPORT").Bind As IEaxAnalyzer;

	    Target := WinApplication.Instance.GetPluginTarget("Express");

	    Context := Target.CreateExecutionContext;

	    Data := New Variant[3];

	    Data[0] := m_Analyzer;

	    Data[1] := True;

	    Data[2] := True;

	    Context.Data := Data;

	    Result := Target.Execute("ShowBulkPrintDialog", Context) As Array;

	    debug.WriteLine("Результат печати: " + (Result[0] As Boolean).ToString);

	End Sub Button1OnClick;


После выполнения примера экспресс-отчет будет распечатан по заданным
 параметрам, в окне консоли отобразится результат печати.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
