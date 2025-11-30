# IMsModel.Execute

IMsModel.Execute
-


# IMsModel.Execute


## Синтаксис


Execute(Calculation: [IMsModelCalculation](../IMsModelCalculation/IMsModelCalculation.htm);
 ScenarioKey: Integer; [Options: Integer = 0]);


## Параметры


Calculation. Параметры расчета
 модели;


ScenarioKey. Ключ сценария,
 по которому необходимо рассчитать модель;


Options. Дополнительные параметры
 расчета модели. Необязательный параметр, значение по умолчанию «0».


## Описание


Метод Execute осуществляет расчет
 модели.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 моделирования с идентификатором OBJ_TRANSFORM. В данном контейнере содержится
 модель с идентификатором OBJ_MODEL.


			Sub UserProc;

Var

    ActiveMetabase: IMetabase;

    ModelCont: IMetabaseObjectDescriptor;

    Descript: IMetabaseObjectDescriptor;

    Obj: IMetabaseObject;

    Model: IMsModel;

    Calcul: IMsModelCalculation;

    Per: IMsModelPeriod;

Begin

    ActiveMetabase := MetabaseClass.Active;

    ModelCont := ActiveMetabase.ItemById("OBJ_TRANSFORM");

    Descript := ActiveMetabase.ItemByIdNamespace("OBJ_MODEL", ModelCont.Key);

    Obj := Descript.Bind;

    Model := Obj As IMsModel;

    Calcul := Model.CreateCalculation;

    Per := Calcul.Period;

    Per.IdentificationStartDate := DateTime.ComposeDay(2000, 1, 1);

    Per.IdentificationEndDate := DateTime.ComposeDay(2004, 1, 1);

    Per.ForecastStartDate := DateTime.ComposeDay(2005, 1, 1);

    Per.ForecastEndDate := DateTime.ComposeDay(2007, 1, 1);

    Calcul.CurrentPoint := DateTime.ComposeDay(2005, 1, 1);

    Model.Execute(Calcul, -1);

End Sub UserProc;


После выполнения примера, модель OBJ_MODEL будет рассчитана.


См. также:


[IMsModel](IMsModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
