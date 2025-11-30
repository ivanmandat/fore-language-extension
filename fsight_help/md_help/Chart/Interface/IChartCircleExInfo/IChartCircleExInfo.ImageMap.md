# IChartCircleExInfo.ImageMap

IChartCircleExInfo.ImageMap
-


# IChartCircleExInfo.ImageMap


## Синтаксис


ImageMap(Width: Integer; Height: Integer; Params:
 String): String;


## Параметры


Width. Ширина
 области, в которой может быть отображена всплывающая подсказка. Значение
 задается в пикселях;


Height. Высота области, в которой
 может быть отображена всплывающая подсказка. Значение задается в пикселях;


Params. С помощью данного параметра
 можно определить текст всплывающей подсказки, которая будет отображена
 для ряда в формате HTML.


## Описание


Свойство ImageMap возвращает
 гипертекстовую строку для формирования HTML-файла.


## Комментарии


Строка будет содержать дополнительные параметры ряда: текст всплывающей
 подсказки и область, в которой может быть отображена всплывающая подсказка.


## Пример


Для выполнения примера создайте в репозитории регламентный отчет с идентификатором
 «Report». На листе отчета разместите диаграмму со вторичной круговой диаграммой.
 Подключите к модулю системные сборки: Metabase, Report, Tab, Chart, Ui,
 Io.


	Sub UserProc;

	Const

	    PathName = "D:\";

	    FileName = "test";

	Var

	    TObj: ITabObjects;

	    Serie: IChartSerie;

	    i, j: integer;

	    Writer: ITextWriter;

	    ImageMap: String;

	    SeInfo: IWinShellExecuteInfo;

	    Report: IPrxReport;

	    C: IChart;

	Begin

	    Report := MetabaseClass.Active.ItemById("Report").Bind As IPrxReport;

	    Writer := File.OpenTextWriter(PathName + FileName + ".html", True);

	    Writer.Encoding := CodePage.UTF8;

	    Writer.WriteLnString("<html>");

	    Writer.WriteLnString("<body>");

	    TObj := (Report.ActiveSheet As IPrxTable).TabSheet.Objects;

	    For j := 0 To TObj.Count - 1 Do

	        If TObj.Item(j).ClassId <> "PrxChart" Then

	            Continue;

	        End If;

	        C := TObj.Item(j) As IChart;

	        C.SaveImageToFile(PathName + FileName + j.ToString + ".png", 800, 600, 96);

	        ImageMap := "";

	        For i := 0 To C.Series.Count - 1 Do

	            Serie := C.Series.Item(i);

	            ImageMap := ImageMap + Serie.ImageMap(800, 600, "title=""" + "Имя ряда: " + Serie.Name + """");

	            If C.Type = ChartType.SecondaryCircles Then

	                ImageMap := ImageMap + C.CircleInfoEx.ImageMap(800, 600, "title=""" + C.CircleInfoEx.GroupName + """");

	            End If;

	        End For;

	        If ImageMap <> "" Then

	            Writer.WriteLnString("<map name=""test" + j.ToString + """>");

	            Writer.WriteLnString(ImageMap);

	            Writer.WriteLnString("</map>");

	        End If;

	        Writer.WriteLnString("<img border=""1"" src=""" + FileName + j.ToString + ".png"" width=800 height=600 usemap=""#test" + j.ToString + """>");

	    End For;

	    Writer.WriteLnString("</body>");

	    Writer.WriteLnString("</html>");

	    Writer.Flush;

	    Writer := Null;

	    SeInfo := New WinShellExecuteInfo.Create;

	    SeInfo.Directory := PathName;

	    SeInfo.File := PathName + FileName + ".html";

	    SeInfo.WaitToTerminate := False;

	    WinApplication.ShellExecute(SeInfo);

	End Sub UserProc;


После выполнения примера будет открыт созданный html-файл. При наведении
 курсора мыши на ряд диаграммы отображается всплывающая подсказка.


См. также:


[IChartCircleExInfo](IChartCircleExInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
