# ILanerSeriesSet.SaveToStream

ILanerSeriesSet.SaveToStream
-


# ILanerSeriesSet.SaveToStream


## Синтаксис


SaveToStream(Stream: [IIOStream](ModIo.chm::/Interface/IIOStream/IIOStream.htm));


## Параметры


Stream. Поток данных.


## Описание


Метод SaveToStream сохраняет
 набор рядов в поток.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 TabSheetBox, UiErAnalyzer с наименованиями Button1, TabSheetBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для TabSheetBox1.
 В UiErAnalyzer1 должна быть загружена рабочая книга базы данных временных
 рядов.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Express, ExtCtrls, Forms, Laner,
 Tab.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    ErAn: IEaxAnalyzer;

	    Laner: ILaner;

	    LanSers: ILanerSeries;

	    Serie: ILanerSerie;

	    SerSet: ILanerSeriesSet;

	    i: Integer;

	    pStream: IIOStream;

	Begin

	    ErAn := UiErAnalyzer1.ErAnalyzer;

	    Laner := ErAn.Laner;

	    LanSers := Laner.Series;

	    SerSet := LanSers.CreateSet;

	    For i := 0 To LanSers.Count - 1 Do

	        Serie := LanSers.Item(i);

	        SerSet.Add(Serie);

	    End For;

	    pStream := New MemoryStream.Create;

	    SerSet.SaveToStream(pStream);

	End Sub Button1OnClick;


После выполнения примера будет создан и сохранен в поток набор рядов.


См. также:


[ILanerSeriesSet](ILanerSeriesSet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
