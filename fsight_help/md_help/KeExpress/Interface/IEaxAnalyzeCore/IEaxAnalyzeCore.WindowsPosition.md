# IEaxAnalyzeCore.WindowsPosition

IEaxAnalyzeCore.WindowsPosition
-


# IEaxAnalyzeCore.WindowsPosition


## Синтаксис


WindowsPosition: [EaxWindowsPosition](../../Enums/EaxWindowsPosition.htm);


## Описание


Свойство WindowsPosition определяет
 порядок расположения окон объектов экспресс-отчета в области отчета.


## Комментарии


По умолчанию свойству установлено значение [EaxWindowsPosition.Maximized](../../Enums/EaxWindowsPosition.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчета
 с идентификатором EXPRESS_REPORT.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Eax: IEaxAnalyzer;

	Begin

	    MB := MetabaseClass.Active;

	    Eax := MB.ItemById("EXPRESS_REPORT").Edit As IEaxAnalyzer;

	    Eax.Grid.Visible := True;

	    Eax.Chart.Visible := True;

	    Eax.WindowsPosition := EaxWindowsPosition.Horizontal;

	    (Eax As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера будет изменен формат отображения окон объектов
 в области экспресс-отчета. При открытии будут отображены таблица и диаграмма,
 их окна будут расположены горизонтально в ряд.


См. также:


[IEaxAnalyzeCore](IEaxAnalyzeCore.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
