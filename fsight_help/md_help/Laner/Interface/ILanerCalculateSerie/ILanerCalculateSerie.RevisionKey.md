# ILanerCalculateSerie.RevisionKey

ILanerCalculateSerie.RevisionKey
-


# ILanerCalculateSerie.RevisionKey


## Синтаксис


RevisionKey: Integer;


## Описание


Свойство RevisionKey возвращает
 ключ ревизии, в которой был создан вычисляемый ряд.


## Комментарии


Свойство доступно только для чтения.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 TabSheetBox, UiErAnalyzer с наименованиями Button1, TabSheetBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для TabSheetBox1.
 В UiErAnalyzer1 должна быть загружена рабочая область базы данных временных
 рядов. В базе должен присутствовать показатель с ключом «108310».


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Cubes, Express, ExtCtrls, Forms,
 Laner, Tab.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    ErAn: IEaxAnalyzer;

	    Laner: ILaner;

	    LanSers: ILanerSeries;

	    RubInst: IRubricatorInstance;

	    RubFact: IRubricatorFactor;

	    Rev: IRubricatorRevision;

	    CalcSer: ILanerCalculateSerie;

	Begin

	    ErAn := UiErAnalyzer1.ErAnalyzer;

	    Laner := ErAn.Laner;

	    Laner.BeginUpdate;

	    LanSers := Laner.Series;

	    RubInst := Laner.RubricatorInstance;

	    RubFact := RubInst.GetFactData(108310).Factor;

	    Rev := RubInst.OpenRevision("New Revision");

	    CalcSer := LanSers.AddCalculateSerieAsSource(RubFact, Rev.Key);

	    CalcSer.Name := "CalculateSerieAsSource (" + CalcSer.SourceStub.Name + ")";

	    CalcSer.SaveLikeSource := True;

	    Debug.WriteLine(CalcSer.RevisionKey);

	    Laner.EndUpdate;

	End Sub Button1OnClick;


После выполнения примера в рабочую книгу будет добавлен вычисляемый
 ряд, основанный на показателе с указанным ключом. В окно консоли будет
 выведен ключ ревизии, в которой создан ряд.


См. также:


[ILanerCalculateSerie](ILanerCalculateSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
