# ILanerContext.FindSerieByStubKey

ILanerContext.FindSerieByStubKey
-


# ILanerContext.FindSerieByStubKey


## Синтаксис


FindSerieByStubKey(StubKey: Integer): [ILanerSerie](../ILanerSerie/ILanerSerie.htm);


## Параметры


StubKey. Ключ источника данных.


## Описание


Метод FindSerieByStubKey выполняет
 поиск ряда в контексте по ключу источника данных.


## Комментарии


Если ряд не найден, то метод возвращает значение Null.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 LanerBox, UiErAnalyzer с наименованиями Button1, LanerBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для LanerBox1.
 В UiErAnalyzer1 должна быть загружена рабочая область базы данных временных
 рядов.


Также предполагается наличие переменой «pContext», содержащей контекст.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Cubes, Express, ExtCtrls, Forms,
 Laner, Metabase, Tab.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    pContext: ILanerContext;

	    i: Integer;

	    Ser: ILanerCalculateSerie;

	    Stub: IVariableStub;

	    lSerie: ILanerSerie;

	Begin

	    For i := 0 To LanerBox1.SelectedSeriesCount - 1 Do

	        Ser := LanerBox1.SelectedSeries(i) As ILanerCalculateSerie;

	        Stub := Ser.Stub;

	        lSerie := pContext.FindSerieByStubKey(Stub.Key);

	        If lSerie <> Null Then

	            Debug.WriteLine(Stub.NameEx(True));

	        End If;

	    End For;

	End Sub Button1OnClick;


После выполнения примера в окно консоли будут выведены расширенные наименования
 рядов, выделенных в компоненте LanerBox1 и содержащихся в контексте.


См. также:


[ILanerContext](ILanerContext.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
