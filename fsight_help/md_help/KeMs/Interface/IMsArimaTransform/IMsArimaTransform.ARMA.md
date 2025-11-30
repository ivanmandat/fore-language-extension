# IMsArimaTransform.ARMA

IMsArimaTransform.ARMA
-


# IMsArimaTransform.ARMA


## Синтаксис


ARMA: [ISlARMA](StatLib.chm::/Interface/ISlARMA/ISlARMA.htm);


## Описание


Свойство ARMA
 возвращает параметры авторегрессии и скользящего среднего.


## Комментарии


По умолчанию порядки авторегрессии и скользящего среднего не заданы.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором CONT_MODEL. В данном контейнере создана
 модель ARIMA с идентификатором MODEL.


Добавьте ссылки на системные сборки: Metabase, Ms, Stat.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    ContKey: Integer;

	    ModelObj: IMetabaseObject;

	    Model: IMsModel;

	    Transform: IMsFormulaTransform;

	    Formula: IMsFormula;

	    Arima: IMsArimaTransform;

	    ARMA: ISlARMA;

	    Init: Array[1] Of Double;

	Begin

	    mb := MetabaseClass.Active;

	    ContKey := mb.ItemById("CONT_MODEL").Key;

	    ModelObj := mb.ItemByIdNamespace("MODEL", ContKey).Edit;

	    Model := ModelObj As IMsModel;

	    Transform := Model.Transform;

	    Formula := Transform.FormulaItem(0);

	    Arima := Formula.Method As IMsArimaTransform;

	    ARMA := Arima.ARMA;

	    // значения разности
	 и сезонной разности

	    ARMA.Diff := 1;

	    ARMA.DiffSeas := 1;

	    // порядки сезонной
	 авторегрессии и сезонного скользящего среднего

	    ARMA.ParseARSeas("1");

	    ARMA.ParseMASeas("1");

	    // начальные
	 приближения сезонной авторегрессии и сезонного скользящего среднего

	    Init[0] := 0.3;

	    ARMA.InitARSeas := Init;

	    Init[0] := 0.4;

	    ARMA.InitMASeas := Init;

	    // период сезонности

	    ARMA.PeriodSeas := 1;

	    // сохранение
	 модели

	    ModelObj.Save;

	End Sub UserProc;


В результате выполнения примера для модели ARIMA будут заданы:


	- значения разности и сезонной разности;


	- порядки сезонной авторегрессии и сезонного скользящего среднего;


	- начальные приближения сезонной авторегрессии и сезонного скользящего
	 среднего;


	- период сезонности.


Все изменения будут сохранены.


См. также:


[IMsArimaTransform](IMsArimaTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
