# ILanerDerivedSerie.DerivedType

ILanerDerivedSerie.DerivedType
-


# ILanerDerivedSerie.DerivedType


## Синтаксис


DerivedType: [LnDerivedSerieType](../../Enums/LnDerivedSerieType.htm);


## Описание


Свойство DerivedType возвращает
 тип дочернего ряда.


## Комментарии


Свойство доступно только для чтения.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 LanerBox, UiErAnalyzer с наименованиями Button1, LanerBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для LanerBox1.
 В UiErAnalyzer1 должна быть загружена рабочая область базы данных временных
 рядов, содержащая дочерние ряды.


Перед выполнением примера необходимо задать значение всех обязательных
 атрибутов дочерних рядов. Затем выделить в таблице данных дочерний ряд,
 являющийся модельным.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Express, ExtCtrls, Forms, Laner,
 Tab.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Serie: ILanerSerie;

	    DerSerie: ILanerDerivedSerie;

	    i: Integer;

	Begin

	    For i := 0 To LanerBox1.SelectedSeriesCount - 1 Do

	        Serie := LanerBox1.SelectedSeries(i);

	        If Serie Is ILanerDerivedSerie Then

	            DerSerie := Serie As ILanerDerivedSerie;

	            If DerSerie.DerivedType = LnDerivedSerieType.Modelling Then

	                DerSerie.CreateFactor;

	            End If;

	        End If;

	    End For;

	End Sub Button1OnClick;


После выполнения примера будет создан показатель, содержащий данные
 модельного ряда.


См. также:


[ILanerDerivedSerie](ILanerDerivedSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
