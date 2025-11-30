# ShowBulkExportDialog: Плагин Express

ShowBulkExportDialog: Плагин Express
-


# Команда ShowBulkExportDialog


## Назначение


Вызов стандартного диалога пакетного экспорта экспресс-отчета.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать массив типа Variant, элементы которого содержат
 следующие значения:


		 Тип значения
		 Описание


		 Элемент 1: [IEaxAnalyzer](KeExpress.chm::/Interface/IEaxAnalyzer/IEaxAnalyzer.htm)
		 Экспресс-отчет.


		 Элемент 2: [EaxEnabledExportFormats](KeExpress.chm::/Enums/EaxDrillType.htm)
		 Элемент для ограничения форматов экспорта в диалоге. Для задания
		 нескольких форматов используйте Or.


		 Элемент 3: Boolean
		 Флаг для скрытия кнопки настройки параметров экспортера. Если
		 передать в параметре значение False,
		 то кнопка «Параметры»
		 будет скрыта и по умолчанию диаграммы будут экспортироваться согласно
		 настройкам прошлого экспорта. Если передать в параметре значение
		 True, то кнопка «Параметры» будет отображена.


		 Элемент 4: Boolean
		 Флаг для скрытия выбора результата экспорта - создание одного
		 файла или нескольких. Если передать в параметре значение False, то переключатель
		 «Результат» будет скрыт
		 и по умолчанию будет создано несколько файлов. Если передать в
		 параметре значение True,
		 то переключатель «Результат»
		 будет отображен и доступен для выбора.


		 Элемент 5: Boolean
		 Флаг, включающих системный экспорт. Если передать в параметре
		 значение False,
		 то при закрытии мастера экспортировать нужно будет в прикладном
		 коде в соответствии с настройками, которые вернет метод [Execute](../IUiCommandTarget.Execute.htm).


		 Элемент 6: Boolean
		 Флаг, включающий предупреждения о том, что в отчете не выполнены
		 условия для экспорта. Если передать в параметре значение True, то при попытке экспорта
		 отчета с невыполенными условиями будет выдано предупреждение,
		 процесс экспорта будет остановлен и метод [Execute](../IUiCommandTarget.Execute.htm) вернет
		 результат экспорта - False.
		 Если передать в параметре False,
		 то при попытке экспорта отчета с невыполенными условиями
		 процесс экспорта будет остановлен без предупреждений и метод [Execute](../IUiCommandTarget.Execute.htm)
		 вернет результат экспорта - False.


## Особенности применения


Метод [Execute](../IUiCommandTarget.Execute.htm), при корректном
 экспресс-отчете, вернет массив типа Variant,
 содержащий следующие элементы:


	- результат экспорта:


	-


		- True.
		 Успешно. В случае, если экспорт прошел успешно;


		- False.
		 Неуспешно. В случае, если пользователь отменил экспорт либо отчет
		 не удовлетворяет условиям экспорта;


	- формат экспорта, указанный в диалоге;


	- путь до папки (только при экспорте в несколько файлов). При
	 экспорте в один файл или в несколько (1) возвращает пустое значение;


	- признак создания нескольких файлов при экспорте:


	-


		- True.
		 Да, отчет был экспортирован в несколько файлов;


		- False.
		 Нет, отчет был экспортирован в один файл.


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

    Data := New Variant[6];

    Data[0] := m_Analyzer;

    Data[1] := EaxEnabledExportFormats.All Or EaxEnabledExportFormats.PDF;

    Data[2] := True;

    Data[3] := True;

    Data[4] := True;

    Data[5] := True;

    Context.Data := Data;

    Result := Target.Execute("ShowBulkExportDialog", Context) As Array;

    debug.WriteLine("Результат экспорта: " + (Result[0] As Boolean).ToString);

    If Result.Length > 1 Then

        debug.WriteLine("Формат для экспорта: " + (Result[1] As EaxEnabledExportFormats).ToString);

        debug.WriteLine("Путь: " + (Result[2] As String));

        debug.WriteLine("Экспорт в несколько файлов: " + (Result[3] As Boolean).ToString);

    End If;

End Sub Button1OnClick;


После выполнения примера экспресс-отчет будет экспортирован по заданным
 параметрам, в окне консоли отобразятся результаты и формат экспорта, путь
 до папки.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
