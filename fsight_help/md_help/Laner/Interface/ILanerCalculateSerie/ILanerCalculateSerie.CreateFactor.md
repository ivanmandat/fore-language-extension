# ILanerCalculateSerie.CreateFactor

ILanerCalculateSerie.CreateFactor
-


# ILanerCalculateSerie.CreateFactor


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


Для выполнения примера предполагается наличие на форме компонентов Button,
 TabSheetBox, UiErAnalyzer с наименованиями Button1, TabSheetBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для TabSheetBox1.
 В UiErAnalyzer1 должна быть загружена рабочая область базы данных временных
 рядов. В рабочей области предполагается наличие вычисляемого ряда.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Cubes, Express, ExtCtrls, Forms,
 Laner, Tab.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    ErAn: IEaxAnalyzer;

	    Laner: ILaner;

	    Serie: ILanerSerie;

	    CalculateSerie: ILanerCalculateSerie;

	    Factor: IRubricatorFactor;

	    i: integer;

	    FData: IRubricatorFactData;

	Begin

	    ErAn := UiErAnalyzer1.ErAnalyzer;

	    Laner := ErAn.Laner;

	    For i := 0 To Laner.Series.Count - 1 Do

	        Serie := Laner.Series.Item(i);

	        If Serie.Kind = LnSerieKind.Calculate Then

	            CalculateSerie := Serie As ILanerCalculateSerie;

	            Factor := CalculateSerie.CreateFactor;

	            FData := Factor.FactData;

	            Debug.WriteLine(FData.FactorKey);

	        End If;

	    End For;

	End Sub Button1OnClick;


После выполнения примера в окно консоли будут выведены ключи показателей,
 соответствующих вычислимым рядам.


См. также:


[ILanerCalculateSerie](ILanerCalculateSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
