# ILanerDerivedSerie.CreateFactor

ILanerDerivedSerie.CreateFactor
-


# ILanerDerivedSerie.CreateFactor


## Синтаксис


CreateFactor([SaveOptions: [LnSaveOptions](../../Enums/LnSaveOptions.htm)=
 255]): [IRubricatorFactor](KeCubes.chm::/Interface/IRubricatorFactor/IRubricatorFactor.htm);


## Параметры


SaveOptions. Необязательный
 параметр, определяющий изменения, которые требуется сохранять.


## Описание


Метод CreateFactor создает показатель
 на основе вычисляемого ряда.


## Пример


Для выполнения примера разместите на форме компонент Button, LanerBox
 и UiErAnalyzer с наименованиями Button1, LanerBox1 и UiErAnalyzer1 соответственно.
 В качестве источника данных для LanerBox1 укажите UiErAnalyzer1. Источником
 данных для UiErAnalyzer1 является рабочая книга. Также для UiErAnalyzer1
 установите свойству Active значение
 True. В рабочей книге должна быть
 загружена рабочая область базы данных временных рядов, содержащая дочерние
 ряды. Перед выполнением примера задайте значения всех обязательных атрибутов
 дочерних рядов.


Добавьте ссылки на системные сборки: Cubes, Express, ExtCtrls, Forms,
 Laner, Rds.


Пример является обработчиком события OnClick для компонента Button1.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    ErAn: IEaxAnalyzer;

	    Laner: ILaner;

	    LanerSers: ILanerSeries;

	    Serie: ILanerSerie;

	    j: Integer;

	    DerivedSerie: ILanerDerivedSerie;

	    Factor: IRubricatorFactor;

	Begin

	    ErAn := UiErAnalyzer1.ErAnalyzer;

	    Laner := ErAn.Laner;

	    Laner.BeginUpdate;

	    LanerSers := Laner.Series;

	    For j := 0 To Laner.SeriesList.Count - 1 Do

	        Serie := Laner.SeriesList.Item(j);

	        If Serie.Kind = LnSerieKind.Derived Then

	            DerivedSerie := Serie As ILanerDerivedSerie;

	            Factor := DerivedSerie.CreateFactor(LnSaveOptions.Name);

	            LanerSers.AddCalculateSerieAsSource(Factor);

	        End If;

	    End For;

	    Laner.EndUpdate;

	End Sub Button1OnClick;


После выполнения примера в рабочей книге на основе дочерних рядов вычисляемого
 ряда будут созданы показатели. Ряды, основанные на данных показателях,
 будут добавлены в таблицу данных.


См. также:


[ILanerDerivedSerie](ILanerDerivedSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
