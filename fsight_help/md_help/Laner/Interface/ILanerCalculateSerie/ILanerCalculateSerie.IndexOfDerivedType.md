# ILanerCalculateSerie.IndexOfDerivedType

ILanerCalculateSerie.IndexOfDerivedType
-


# ILanerCalculateSerie.IndexOfDerivedType


## Синтаксис


IndexOfDerivedType(Type: [LnDerivedSerieType](../../Enums/LnDerivedSerieType.htm)):
 Integer;


## Параметры


Type. Тип дочернего ряда.


## Описание


Метод IndexOfDerivedType возвращает
 индекс дочернего ряда указанного типа.


## Комментарии


Если у вычисляемого ряда нет дочернего ряда указанного типа, то метод
 возвращает значение «-1».


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 TabSheetBox, UiErAnalyzer с наименованиями Button1, TabSheetBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для TabSheetBox1.
 В UiErAnalyzer1 должна быть загружена рабочая область базы данных временных
 рядов, содержащая вычисляемый ряд.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Express, ExtCtrls, Forms, Laner,
 Tab.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    ErAn: IEaxAnalyzer;

	    Laner: ILaner;

	    Serie: ILanerSerie;

	    CalculateSerie: ILanerCalculateSerie;

	    i, ind: Integer;

	Begin

	    ErAn := UiErAnalyzer1.ErAnalyzer;

	    Laner := ErAn.Laner;

	    For i := 0 To Laner.Series.Count - 1 Do

	        Serie := Laner.Series.Item(i);

	        If Serie.Kind = LnSerieKind.Calculate Then

	            CalculateSerie := Serie As ILanerCalculateSerie;

	            ind := -1;

	            ind := CalculateSerie.IndexOfDerivedType(LnDerivedSerieType.DUpperConfidenceLevel);

	            If ind <> -1 Then

	                Debug.WriteLine("Индекс ряда остатков: " + ind.ToString);

	            End If;

	        End If;

	    End For;

	End Sub Button1OnClick;


После выполнения примера в окно консоли будет выведен индекс дочернего
 ряда остатков.


См. также:


[ILanerCalculateSerie](ILanerCalculateSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
