# ILanerDerivedSerie.FactorIndex

ILanerDerivedSerie.FactorIndex
-


# ILanerDerivedSerie.FactorIndex


## Синтаксис


FactorIndex: Integer;


## Описание


Свойство FactorIndex возвращает
 индекс дочернего ряда, если он является показателем.


## Комментарии


Если дочерний ряд не является показателем, то FactorIndex
 вернет значение «-1».


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 LanerBox, UiErAnalyzer с наименованиями Button1, LanerBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для LanerBox1.
 В UiErAnalyzer1 должна быть загружена рабочая область базы данных временных
 рядов.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Express, ExtCtrls, Forms, Laner,
 Tab.


	Sub Button1OnClick(Sender: Object;  Args: IMouseEventArgs);

	Var

	    pSerie: ILanerDerivedSerie;

	Begin

	    If LanerBox1.SelectedSeriesCount > 0 Then

	        If LanerBox1.SelectedSeries(0) Is ILanerDerivedSerie Then

	            pSerie := LanerBox1.SelectedSeries(0) As ILanerDerivedSerie;

	            Debug.WriteLine("Индекс ряда: " + pSerie.FactorIndex.ToString);

	        Else

	            Debug.WriteLine("Ряд не является дочерним");

	        End If;

	    End If;

	End Sub Button1OnClick;


После выполнения примера в окно консоли будет выведен индекс выделенного
 ряда, если он является дочерним.


См. также:


[ILanerDerivedSerie](ILanerDerivedSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
