# IEaxAnalyzeCore.Statistics

IEaxAnalyzeCore.Statistics
-


# IEaxAnalyzeCore.Statistics


## Синтаксис


Statistics: [IEaxStatistics](../IEaxStatistics/IEaxStatistics.htm);


## Описание


Свойство Statistics возвращает
 рассчитанные статистические характеристики.


## Комментарии


Статистические характеристики рассчитываются только для временных рядов.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 LanerBox и компонент UiErAnalyzer с идентификатором «UiErAnalyzer1», являющийся
 источником данных для LanerBox. В «UiErAnalyzer1» должна быть загружена
 рабочая книга базы данных временных рядов.


Добавьте ссылку на системную сборку Transform.


	Sub UserProc;

	Var

	    EaxAn: IEaxAnalyzer;

	    Statistics: IEaxStatistics;

	    StstTree: ITsStatisticsTree;

	    i: Integer;

	Begin

	    EaxAn := UiErAnalyzer1.ErAnalyzer;

	    Statistics := EaxAn.Statistics;

	    StstTree := Statistics.Statistics;

	    For i := 0 To StstTree.Count - 1 Do

	        Debug.Write(StstTree.Name(i) + ": ");

	        Debug.WriteLine(StstTree.Value(i));

	    End For;

	End Sub UserProc;


После выполнения примера в консоль будут выведены статистики для ряда,
 выделенного в рабочей книге.


См. также:


[IEaxAnalyzeCore](IEaxAnalyzeCore.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
