# ILanerCalculateSerie.Save

ILanerCalculateSerie.Save
-


# ILanerCalculateSerie.Save


## Синтаксис


Save([SaveOptions: [LnSaveOptions](../../Enums/LnSaveOptions.htm)
 = 255]): [IRubricatorRevision](KeCubes.chm::/Interface/IRubricatorRevision/IRubricatorRevision.htm);


## Параметры


SaveOptions. Параметр, определяющий
 изменения, которые требуется сохранять.


## Описание


Метод Save осуществляет сохранение
 ряда и возвращает ревизию, в которую вошли сделанные изменения.


## Комментарии


По умолчанию сохраняются все изменения, произведенные в таблице данных.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 LanerBox, UiErAnalyzer с наименованиями Button1, LanerBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для LanerBox1.
 В UiErAnalyzer1 должна быть загружена рабочая область базы данных временных
 рядов.


Перед выполнением примера необходимо выделить в рабочей области добавленный
 ряд, который необходимо сохранить. Пример является обработчиком события
 OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Express, ExtCtrls, Forms, Laner,
 Tab, Ui.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Serie: ILanerSerie;

	    SerieCalc: ILanerCalculateSerie;

	Begin

	    Serie := LanerBox1.SelectedSeries(0);

	    If Not Serie.StrictlyDefined

	        Then

	        WinApplication.InformationBox("Определены не все обязательные атрибуты ряда '" + Serie.Name + "'");

	        Else

	        If Serie.SearchFactor = LnSerieFactorSearchResult.Found Then

	            WinApplication.InformationBox("Ряд с указанными атрибутами уже существует");

	            Else

	                SerieCalc := Serie As ILanerCalculateSerie;

	                SerieCalc.Save;

	        End If;

	    End If;

	End Sub Button1OnClick;


После выполнения примера добавленный ряд будет сохранен, если определены
 все его обязательные атрибуты и они не дублируют существующий ряд.


См. также:


[ILanerCalculateSerie](ILanerCalculateSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
