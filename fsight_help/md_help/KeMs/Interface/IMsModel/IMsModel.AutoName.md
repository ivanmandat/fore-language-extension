# IMsModel.AutoName

IMsModel.AutoName
-


# IMsModel.AutoName


## Синтаксис


AutoName: Boolean;


## Описание


Свойство AutoName определяет,
 генерировать ли наименование модели автоматически.


## Комментарии


Допустимые значения:


	- True. Наименование модели
	 генерируется автоматически с учетом настроек, заданных в [IMsModel.CreateStringGenerator](IMsModel.CreateStringGenerator.htm);


	- False. Значение по умолчанию.
	 Наименование модели формируется пользователем.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором «MODEL_SPACE». В контейнере должна присутствовать
 модель с идентификатором «MODEL_LIN».


Добавьте ссылки на системные сборки: Metabase, Ms.


			Sub UserProc;

Var

    mb: IMetabase;

    DescrCM: IMetabaseObjectDescriptor;

    pModel: IMsModel;

    pGen: IMsModelStringGenerator;

Begin

    mb := MetabaseClass.Active;

    DescrCM := mb.ItemById("MODEL_SPACE");

    pModel := mb.ItemByIdNamespace("MODEL_LIN", DescrCM.Key).Edit As IMsModel;

    Debug.WriteLine("Наименование модели до генерации: '" + (pModel As IMetabaseObject).Name + "'");

    pModel.AutoName := True;

    pModel.UseModelPeriod := True;

    pGen := pModel.CreateStringGenerator;

    pGen.ShowEstimatedCoeffs := False;

    pGen.ShowFullVariableNames := True;

    pGen.HideModelPeriods := False;

    Debug.WriteLine("Наименование модели с полными наименованиями " +

        "переменных и периодом расчёта: '" + pGen.Execute + "'");

    pGen.ShowFullVariableNames := False;

    pGen.HideModelPeriods := True;

    Debug.WriteLine("Наименование модели с наименованиями элементов " +

        "выражения и
 без периода расчёта: '" + pGen.Execute + "'");

    (pModel As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера наименование модели будет генерироваться автоматически.
 В окно консоли будет выведено наименование модели до и после автоматической
 генерации по различным параметрам. Например:


Наименование модели до генерации: 'MODEL_LIN'

Наименование модели с полными наименованиями переменных и периодом расчёта: 'Уровень цен[t] = A0 + A1*Цены на газ[t] + A2*Сезонные колебания[t] + [AR(1)=A3], (Начало данных)-(От окончания идентификации+10)'

Наименование модели с наименованиями элементов выражения и
 без периода расчёта: 'Y = A0 + A1*X1 + A2*X2 + [AR(1)=A3]'


См. также:


[IMsModel](IMsModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
