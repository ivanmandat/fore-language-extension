# IMetabaseObjectParamControl.Expression

IMetabaseObjectParamControl.Expression
-


# IMetabaseObjectParamControl.Expression


## Синтаксис


Expression: [IExpression](ForeSys.chm::/Interface/IExpression/IExpression.htm);


## Описание


Свойство Expression возвращает
 выражение, определяющее привязку текущего параметра вложенного объекта
 к параметрам текущего объекта.


## Пример


Для выполнения примера предполагается наличие в репозитории куба с идентификатором
 «STD_CUBE». Данный куб имеет в своей структуре измерение, которое построено
 на параметрическом справочнике «COUNTRY». Количество параметров, созданных
 в структуре куба, соответствует количеству параметров у справочника.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Params: IMetabaseObjectParams;

    ControlInfo: IMetabaseObjectControlInfo;

    Control: IMetabaseObjectControl;

    Param: IMetabaseObjectParamControl;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    MObj := Mb.ItemById("STD_CUBE").Edit;

    //Параметры самого куба

    Params := MObj.Params;

    ControlInfo := Params.ControlInfo;

    Control := ControlInfo.FindByKey(MB.GetObjectKeyById("COUNTRY"));

    //Привязка параметров вложенного объекта

    For i := 0 To Control.Count - 1 Do

        Param := Control.Item(i);

        Param.Expression.AsString := ':' + Params.Item(i).Id;

    End For;

    MObj.Save;

End Sub UserProc;


При выполнении примера будет осуществлена настройка управления параметрами
 для указанного справочника. При открытии куба, после ввода значений параметров,
 данные значения будут также переданы для открытия справочника.


См. также:


[IMetabaseObjectParamControl](IMetabaseObjectParamControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
