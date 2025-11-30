# ITsModelParam.Visible

ITsModelParam.Visible
-


# ITsModelParam.Visible


## Синтаксис


Visible: Boolean;


## Описание


Свойство Visible определяет,
 будет ли параметр отображаться на панели параметров.


## Комментарии


Свойство используется при работе с параметром алгоритма расчёта.


Допустимые значения:


	- True. Параметр отображается
	 на панели параметров;


	- False. Параметр не отображается
	 на панели параметров. При расчёте используется последнее введённое
	 значение или значение, заданное по умолчанию в свойстве [ITsModelParam.DefaultValue](ITsModelParam.DefaultValue.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории алгоритма
 расчёта с идентификатором ALGORITHM. В алгоритме расчёта добавлены какие-либо
 параметры.


Добавьте ссылки на системные сборки: Algo, Metabase, Ms, Transform.
 Также добавьте [ссылку
 на сборку](KeAlgo.chm::/Intro/KeAlgo_Programming.htm),
 необходимую для работы с алгоритмом расчёта.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObjectDescriptor;

    Algo: ICalcObject;

    CalcAlgo: ICalcAlgorithm;

    MetaModel: IMsMetaModel;

    Params: IMsModelParams;

Begin

    MB := MetabaseClass.Active;

    // Получим алгоритм расчёта

    MObj := MB.ItemById("ALGORITHM");

    Algo := CalcObjectFactory.CreateCalcObject(MObj, True);

    CalcAlgo := Algo As ICalcAlgorithm;

    // Получим параметры алгоритма расчёта

    MetaModel := CalcAlgo.MsProblem.MetaModel;

    Params := MetaModel.Params;

    Debug.WriteLine("Количество параметров: " + Params.Count.ToString);

    If Params.Count > 0 Then

        (Params.Item(0) As ITsModelParam).Visible := False;

        // Сохранение изменений

        CalcAlgo.SaveObject;

    End If;

End Sub UserProc;


В результате выполнения примера первый добавленный в алгоритм расчёта
 параметр будет скрыт с панели параметров.


См. также:


[ITsModelParam](ITsModelParam.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
